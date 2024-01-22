package com.sequoiadb.transaction.unlock;

import java.util.List;

import org.bson.BSONObject;
import org.bson.util.JSON;
import org.testng.Assert;
import org.testng.annotations.AfterClass;
import org.testng.annotations.BeforeClass;
import org.testng.annotations.Test;

import com.sequoiadb.base.CollectionSpace;
import com.sequoiadb.base.DBCollection;
import com.sequoiadb.base.DBCursor;
import com.sequoiadb.base.DBQuery;
import com.sequoiadb.base.Sequoiadb;
import com.sequoiadb.testcommon.SdbTestBase;
import com.sequoiadb.testcommon.SdbThreadBase;
import com.sequoiadb.transaction.TransUtils;

/**
 * @Description seqDB-18419:事务1加s锁后，事务2加x锁，事务3加u锁继续等锁
 * @author yinzhen
 * @date 2019-6-12
 *
 */
@Test(groups = { "rc" })
public class Transaction18419A extends SdbTestBase {
    private Sequoiadb sdb;
    private Sequoiadb db1;
    private Sequoiadb db2;
    private Sequoiadb db3;
    private String clName = "cl18419a";
    private String idxName = "textIndex18419";

    @BeforeClass
    public void setUp() {
        sdb = new Sequoiadb( SdbTestBase.coordUrl, "", "" );
        db1 = new Sequoiadb( SdbTestBase.coordUrl, "", "" );
        db2 = new Sequoiadb( SdbTestBase.coordUrl, "", "" );
        db3 = new Sequoiadb( SdbTestBase.coordUrl, "", "" );
        DBCollection cl = sdb.getCollectionSpace( csName )
                .createCollection( clName );
        cl.createIndex( idxName, "{a:1}", false, false );
        cl.insert( "{_id:1, a:1, b:1}" );
    }

    @AfterClass
    public void tearDown() {
        if ( db1 != null ) {
            db1.commit();
            db1.close();
        }
        if ( db2 != null ) {
            db2.commit();
            db2.close();
        }
        if ( db3 != null ) {
            db3.commit();
            db3.close();
        }
        if ( sdb != null ) {
            CollectionSpace cs = sdb.getCollectionSpace( csName );
            if ( cs.isCollectionExist( clName ) ) {
                cs.dropCollection( clName );
            }
            sdb.close();
        }
    }

    @SuppressWarnings("unchecked")
    @Test
    public void test() throws InterruptedException {
        DBCollection cl1 = db1.getCollectionSpace( csName )
                .getCollection( clName );
        DBCollection cl2 = db2.getCollectionSpace( csName )
                .getCollection( clName );

        // 开启事务1，查询记录R1
        TransUtils.beginTransaction( db1 );
        BSONObject record = ( BSONObject ) JSON.parse( "{_id:1, a:1, b:1}" );
        DBCursor cursor = cl1.query( "{a:1}", "", "",
                "{'':'" + idxName + "'}" );
        List< BSONObject > actList = TransUtils.getReadActList( cursor );
        Assert.assertTrue(
                actList.size() == 1 && record.equals( actList.get( 0 ) ),
                "actList: " + actList );

        // 开启事务2，删除记录R1
        TransUtils.beginTransaction( db2 );
        cl2.delete( "{a:1}", "{'':'" + idxName + "'}" );

        // 开启事务3，select for update R1
        TransUtils.beginTransaction( db3 );
        CL3Query th3 = new CL3Query();
        th3.start();
        Assert.assertTrue(
                TransUtils.isTransWaitLock( sdb, th3.getTransactionID() ) );

        // 提交事务2，事务3无记录返回
        db2.commit();
        Assert.assertTrue( th3.isSuccess(), th3.getErrorMsg() );
        actList = ( List< BSONObject > ) th3.getExecResult();
        Assert.assertTrue( actList.size() == 0, "actList: " + actList );
    }

    private class CL3Query extends SdbThreadBase {
        @Override
        public void exec() throws Exception {
            // 判断事务阻塞需先获取事务id
            setTransactionID( db3 );

            DBCollection cl3 = db3.getCollectionSpace( csName )
                    .getCollection( clName );
            DBCursor cursor = cl3.query( "{a:1}", "", "",
                    "{'':'" + idxName + "'}", DBQuery.FLG_QUERY_FOR_UPDATE );
            List< BSONObject > actList = TransUtils.getReadActList( cursor );
            setExecResult( actList );
        }
    }
}
