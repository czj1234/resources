package com.sequoiadb.transaction.ru;

import java.util.ArrayList;

import org.bson.BSONObject;
import org.testng.Assert;
import org.testng.annotations.AfterClass;
import org.testng.annotations.BeforeClass;
import org.testng.annotations.Test;

import com.sequoiadb.base.CollectionSpace;
import com.sequoiadb.base.DBCollection;
import com.sequoiadb.base.DBCursor;
import com.sequoiadb.base.Sequoiadb;
import com.sequoiadb.exception.BaseException;
import com.sequoiadb.testcommon.SdbTestBase;
import com.sequoiadb.testcommon.SdbThreadBase;
import com.sequoiadb.transaction.TransUtils;

/**
 * @FileName:seqDB-17212:插入与更新并发，事务回滚，过程中读 更新走索引扫描
 * @Author zhaoyu
 * @Date 2019-01-15
 * @Version 1.00
 */
@Test(groups = "ru")
public class Transaction17212 extends SdbTestBase {
    private Sequoiadb sdb = null;
    private String clName = "cl_17212";
    private Sequoiadb db1;
    private Sequoiadb db2;
    private Sequoiadb db3;
    private DBCollection cl = null;
    private DBCollection cl1 = null;
    private DBCollection cl2 = null;
    private DBCollection cl3 = null;
    private ArrayList< BSONObject > expList = new ArrayList< BSONObject >();
    private ArrayList< BSONObject > actList = new ArrayList< BSONObject >();
    private DBCursor cursor = null;
    private String hint = null;
    private int startId = 0;
    private int stopId = 1000;
    private int insertValue = 10000;
    private int updateValue = 20000;

    @BeforeClass
    public void setUp() {
        sdb = new Sequoiadb( SdbTestBase.coordUrl, "", "" );
        db1 = new Sequoiadb( SdbTestBase.coordUrl, "", "" );
        db2 = new Sequoiadb( SdbTestBase.coordUrl, "", "" );
        db3 = new Sequoiadb( SdbTestBase.coordUrl, "", "" );
        cl = sdb.getCollectionSpace( csName ).createCollection( clName );
        cl.createIndex( "a", "{a:1}", false, false );
    }

    @AfterClass
    public void tearDown() {
        db1.commit();
        db2.commit();
        db3.commit();

        // 关闭所有游标
        sdb.closeAllCursors();
        db1.closeAllCursors();
        db2.closeAllCursors();
        db3.closeAllCursors();

        // 先关闭事务连接，再删除集合
        CollectionSpace cs = sdb.getCollectionSpace( csName );
        if ( !db1.isClosed() ) {
            db1.close();
        }
        if ( !db2.isClosed() ) {
            db2.close();
        }
        if ( !db3.isClosed() ) {
            db3.close();
        }
        if ( cs.isCollectionExist( clName ) ) {
            cs.dropCollection( clName );
        }
        if ( !sdb.isClosed() ) {
            sdb.close();
        }
    }

    @Test
    public void test() throws InterruptedException {

        // 开启3个并发事务
        TransUtils.beginTransaction( db1 );
        TransUtils.beginTransaction( db2 );
        TransUtils.beginTransaction( db3 );
        cl1 = db1.getCollectionSpace( csName ).getCollection( clName );
        cl2 = db2.getCollectionSpace( csName ).getCollection( clName );
        cl3 = db3.getCollectionSpace( csName ).getCollection( clName );

        // 事务1插入记录R1
        ArrayList< BSONObject > insertR1s = TransUtils.insertDatas( cl1,
                startId, stopId, insertValue );

        // 事务2匹配记录R1更新为R2
        UpdateThread updateThread = new UpdateThread();
        updateThread.start();
        Assert.assertTrue( TransUtils.isTransWaitLock( sdb,
                updateThread.getTransactionID() ) );

        // 事务1索引读
        expList.addAll( insertR1s );
        hint = "{\"\":\"a\"}";
        cursor = cl1.query( null, null, "{_id:1}", hint );
        actList = TransUtils.getReadActList( cursor );
        Assert.assertEquals( actList, expList );
        actList.clear();

        // 事务1记录读
        hint = "{\"\":null}";
        cursor = cl1.query( null, null, "{_id:1}", hint );
        actList = TransUtils.getReadActList( cursor );
        Assert.assertEquals( actList, expList );
        actList.clear();

        // 事务3索引读
        hint = "{\"\":\"a\"}";
        cursor = cl3.query( null, null, "{_id:1}", hint );
        actList = TransUtils.getReadActList( cursor );
        Assert.assertEquals( actList, expList );
        actList.clear();

        // 事务3记录读
        hint = "{\"\":null}";
        cursor = cl3.query( null, null, "{_id:1}", hint );
        actList = TransUtils.getReadActList( cursor );
        Assert.assertEquals( actList, expList );
        actList.clear();

        // 非事务索引读
        hint = "{\"\":\"a\"}";
        cursor = cl.query( null, null, "{_id:1}", hint );
        actList = TransUtils.getReadActList( cursor );
        Assert.assertEquals( actList, expList );
        actList.clear();

        // 非事务记录读
        hint = "{\"\":null}";
        cursor = cl.query( null, null, "{_id:1}", hint );
        actList = TransUtils.getReadActList( cursor );
        Assert.assertEquals( actList, expList );
        actList.clear();

        // 回滚事务1
        db1.rollback();
        Assert.assertTrue( updateThread.isSuccess(),
                updateThread.getErrorMsg() );

        // 非事务索引读
        expList.clear();
        hint = "{\"\":\"a\"}";
        cursor = cl.query( null, null, "{_id:1}", hint );
        actList = TransUtils.getReadActList( cursor );
        Assert.assertTrue( actList.isEmpty() );
        actList.clear();

        // 非事务记录读
        hint = "{\"\":null}";
        cursor = cl.query( null, null, "{_id:1}", hint );
        actList = TransUtils.getReadActList( cursor );
        Assert.assertTrue( actList.isEmpty() );
        actList.clear();

        // 事务2索引读
        hint = "{\"\":\"a\"}";
        cursor = cl2.query( null, null, "{_id:1}", hint );
        actList = TransUtils.getReadActList( cursor );
        Assert.assertTrue( actList.isEmpty() );
        actList.clear();

        // 事务2记录读
        hint = "{\"\":null}";
        cursor = cl2.query( null, null, "{_id:1}", hint );
        actList = TransUtils.getReadActList( cursor );
        Assert.assertTrue( actList.isEmpty() );
        actList.clear();

        // 事务3索引读
        hint = "{\"\":\"a\"}";
        cursor = cl3.query( null, null, "{_id:1}", hint );
        actList = TransUtils.getReadActList( cursor );
        Assert.assertTrue( actList.isEmpty() );
        actList.clear();

        // 事务3记录读
        hint = "{\"\":null}";
        cursor = cl3.query( null, null, "{_id:1}", hint );
        actList = TransUtils.getReadActList( cursor );
        Assert.assertTrue( actList.isEmpty() );
        actList.clear();

        // 提交事务2
        db2.commit();

        // 非事务索引读
        hint = "{\"\":\"a\"}";
        cursor = cl.query( null, null, "{_id:1}", hint );
        actList = TransUtils.getReadActList( cursor );
        Assert.assertTrue( actList.isEmpty() );
        actList.clear();

        // 非事务记录读
        hint = "{\"\":null}";
        cursor = cl.query( null, null, "{_id:1}", hint );
        actList = TransUtils.getReadActList( cursor );
        Assert.assertTrue( actList.isEmpty() );
        actList.clear();

        // 事务3索引读
        hint = "{\"\":\"a\"}";
        cursor = cl3.query( null, null, "{_id:1}", hint );
        actList = TransUtils.getReadActList( cursor );
        Assert.assertTrue( actList.isEmpty() );
        actList.clear();

        // 事务3记录读
        hint = "{\"\":null}";
        cursor = cl3.query( null, null, "{_id:1}", hint );
        actList = TransUtils.getReadActList( cursor );
        Assert.assertTrue( actList.isEmpty() );
        actList.clear();

        // 提交事务3
        db3.commit();

    }

    private class UpdateThread extends SdbThreadBase {
        @Override
        public void exec() throws BaseException {
            // 判断事务阻塞需先获取事务id
            setTransactionID( cl2.getSequoiadb() );

            hint = "{\"\":\"a\"}";
            cl2.update( null, "{$set:{a:" + updateValue + "}}", hint );
        }
    }

}
