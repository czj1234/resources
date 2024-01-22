package com.sequoiadb.fulltext.parallel;

import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;
import java.util.List;
import java.util.Random;

import org.bson.BSONObject;
import org.bson.BasicBSONObject;
import org.bson.types.ObjectId;
import org.testng.Assert;
import org.testng.annotations.Test;

import com.sequoiadb.base.DBCollection;
import com.sequoiadb.base.DBCursor;
import com.sequoiadb.base.DBLob;
import com.sequoiadb.base.Sequoiadb;
import com.sequoiadb.exception.BaseException;
import com.sequoiadb.fulltext.utils.FullTextDBUtils;
import com.sequoiadb.fulltext.utils.FullTextUtils;
import com.sequoiadb.testcommon.FullTestBase;
import com.sequoiadb.testcommon.SdbTestBase;
import com.sequoiadb.threadexecutor.ResultStore;
import com.sequoiadb.threadexecutor.ThreadExecutor;
import com.sequoiadb.threadexecutor.annotation.ExecuteOrder;

/**
 * @FileName FullText15846.java 删除全文索引与lob操作并发
 * @Author luweikang
 * @Date 2019年5月10日
 */
public class Fulltext15846 extends FullTestBase {
    private String clName = "es_15846";
    private String indexName = "fulltextIndex15846";
    private String cappedName = null;
    private String esIndexName = null;
    private int insertNum = 100000;
    private long lobSize = 1024 * 1024 * 10;
    private List< ObjectId > lobTruncateList = new ArrayList< ObjectId >();
    private List< ObjectId > lobRemoveList = new ArrayList< ObjectId >();
    private List< ObjectId > lobReadList = new ArrayList< ObjectId >();
    private List< ObjectId > lobPutList = new ArrayList< ObjectId >();

    @Override
    protected void initTestProp() {
        caseProp.setProperty( IGNORESTANDALONE, "true" );
        caseProp.setProperty( CLNAME, clName );
    }

    @Override
    protected void caseInit() throws Exception {
        List< ObjectId > lobList = writeLob( cl, 100 );
        lobTruncateList.addAll( lobList.subList( 0, 50 ) );
        lobRemoveList.addAll( lobList.subList( 50, 70 ) );
        lobReadList.addAll( lobList.subList( 70, 100 ) );

        FullTextDBUtils.insertData( cl, insertNum );

        BSONObject indexObj = new BasicBSONObject();
        indexObj.put( "a", "text" );
        indexObj.put( "b", "text" );
        indexObj.put( "c", "text" );
        indexObj.put( "d", "text" );
        indexObj.put( "e", "text" );
        cl.createIndex( indexName, indexObj, false, false );

        Assert.assertTrue(
                FullTextUtils.isIndexCreated( cl, indexName, insertNum ) );
        cappedName = FullTextDBUtils.getCappedName( cl, indexName );
        esIndexName = FullTextDBUtils.getESIndexName( cl, indexName );
    }

    @Test
    public void test() throws Exception {

        DropIndexThread dropIndex = new DropIndexThread();
        ThreadExecutor thread = new ThreadExecutor(
                FullTextUtils.THREAD_TIMEOUT );
        thread.addWorker( dropIndex );
        thread.addWorker( new TruncateLobThread() );
        thread.addWorker( new PutLobThread() );
        thread.addWorker( new RemoveLobThread() );
        thread.addWorker( new GetLoBThread() );
        thread.run();
        if ( dropIndex.getRetCode() == 0 ) {
            Assert.assertTrue( FullTextUtils.isIndexDeleted( sdb, esIndexName,
                    cappedName ) );
            DBCursor cur = null;
            try {
                cur = cl.query( "{'': {'$Text': {'query': {'match_all': {}}}}}",
                        null, "{'recordId': 1}", "{'': '" + indexName + "'}" );
                if ( cur.hasNext() ) {
                    cur.getNext();
                }
                Assert.fail(
                        "use not exist fulltext search should be failed!" );
            } catch ( BaseException e ) {
                if ( e.getErrorCode() != -52 && e.getErrorCode() != -10 ) {
                    Assert.fail( e.getMessage() );
                }   
            } finally {
                if ( cur != null ) {
                    cur.close();
                }
            }
        } else {
            Assert.assertTrue(
                    FullTextUtils.isIndexCreated( cl, indexName, insertNum ) );
            int recordNum = 0;
            DBCursor cur = cl.query(
                    "{'': {'$Text': {'query': {'match_all': {}}}}}", null,
                    "{'recordId': 1}", "{'': '" + indexName + "'}" );
            while ( cur.hasNext() ) {
                cur.getNext();
                recordNum++;
            }
            cur.close();

            Assert.assertEquals( recordNum, insertNum,
                    "use fulltext index search record" );
        }

        checkLobResult();
    }

    @Override
    protected void caseFini() throws Exception {
        Assert.assertTrue(
                FullTextUtils.isIndexDeleted( sdb, esIndexName, cappedName ) );
    }

    private class DropIndexThread extends ResultStore {

        @ExecuteOrder(step = 1)
        private void createIndex() {
            try ( Sequoiadb db = new Sequoiadb( SdbTestBase.coordUrl, "",
                    "" )) {
                DBCollection cl = db.getCollectionSpace( csName )
                        .getCollection( clName );
                cl.dropIndex( indexName );
            } catch ( BaseException e ) {
                e.printStackTrace();
                Assert.assertEquals( e.getErrorCode(), -321, e.getMessage() );
                if ( e.getErrorCode() != -321 ) {
                    throw e;
                }
                saveResult( -1, e );
            }
        }
    }

    private class TruncateLobThread {

        @ExecuteOrder(step = 1)
        private void truncateLob() throws InterruptedException {
            try ( Sequoiadb db = new Sequoiadb( SdbTestBase.coordUrl, "",
                    "" )) {
                Thread.sleep( 1000 + new Random().nextInt( 100 ) );
                DBCollection cl = db.getCollectionSpace( csName )
                        .getCollection( clName );
                for ( ObjectId lobId : lobTruncateList ) {
                    cl.truncateLob( lobId, lobSize );
                }
            }
        }
    }

    private class PutLobThread {

        @ExecuteOrder(step = 1)
        private void putLob() throws InterruptedException {
            try ( Sequoiadb db = new Sequoiadb( SdbTestBase.coordUrl, "",
                    "" )) {
                Thread.sleep( 1000 + new Random().nextInt( 100 ) );
                DBCollection cl = db.getCollectionSpace( csName )
                        .getCollection( clName );
                lobPutList.addAll( writeLob( cl, 100 ) );
            }
        }
    }

    private class RemoveLobThread {

        @ExecuteOrder(step = 1)
        private void removeLob() throws InterruptedException {
            try ( Sequoiadb db = new Sequoiadb( SdbTestBase.coordUrl, "",
                    "" )) {
                Thread.sleep( 1000 + new Random().nextInt( 100 ) );
                DBCollection cl = db.getCollectionSpace( csName )
                        .getCollection( clName );
                for ( ObjectId lobId : lobRemoveList ) {
                    cl.removeLob( lobId );
                }
            }
        }
    }

    private class GetLoBThread {

        @ExecuteOrder(step = 1)
        private void getLob() throws InterruptedException {
            try ( Sequoiadb db = new Sequoiadb( SdbTestBase.coordUrl, "",
                    "" )) {
                Thread.sleep( 1000 + new Random().nextInt( 100 ) );
                DBCollection cl = db.getCollectionSpace( csName )
                        .getCollection( clName );
                for ( ObjectId lobId : lobReadList ) {
                    DBLob lob = cl.openLob( lobId );
                    byte[] data = new byte[ ( int ) lobSize ];
                    lob.read( data );
                }
            }
        }
    }

    private List< ObjectId > writeLob( DBCollection cl, int lobNum ) {

        List< ObjectId > lobIdList = new ArrayList< ObjectId >();
        byte[] data = new byte[ ( int ) lobSize ];
        new Random().nextBytes( data );

        for ( int i = 0; i < lobNum; i++ ) {
            DBLob lob = cl.createLob();
            lob.write( data );
            lob.close();
            lobIdList.add( lob.getID() );
        }

        return lobIdList;
    }

    private void checkLobResult() {
        List< ObjectId > expLobIdList = new ArrayList< ObjectId >();
        expLobIdList.addAll( lobTruncateList );
        expLobIdList.addAll( lobReadList );
        expLobIdList.addAll( lobPutList );

        List< ObjectId > actLobIdList = new ArrayList< ObjectId >();
        DBCursor lobCur = cl.listLobs();
        while ( lobCur.hasNext() ) {
            actLobIdList.add( ( ObjectId ) lobCur.getNext().get( "Oid" ) );
        }

        sortLobIdList( expLobIdList );
        sortLobIdList( actLobIdList );

        Assert.assertEquals( actLobIdList.toString(), expLobIdList.toString() );
    }

    private void sortLobIdList( List< ObjectId > lobIdList ) {

        Collections.sort( lobIdList, new Comparator< ObjectId >() {
            @Override
            public int compare( ObjectId obj1, ObjectId obj2 ) {
                String str1 = obj1.toString();
                String str2 = obj2.toString();
                if ( str1.compareToIgnoreCase( str2 ) < 0 ) {
                    return -1;
                }
                return 1;
            }
        } );
    }

}
