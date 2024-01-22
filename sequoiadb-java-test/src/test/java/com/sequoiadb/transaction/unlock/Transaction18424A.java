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
import com.sequoiadb.base.Sequoiadb;
import com.sequoiadb.testcommon.SdbTestBase;
import com.sequoiadb.transaction.TransUtils;

/**
 * @Description seqDB-18424:事务1加s锁后，事务2加s锁，事务3加x锁
 * @author yinzhen
 * @date 2019-6-12
 *
 */
@Test(groups = { "rc" })
public class Transaction18424A extends SdbTestBase {
    private Sequoiadb sdb;
    private Sequoiadb db1;
    private Sequoiadb db2;
    private Sequoiadb db3;
    private String clName = "cl18424a";
    private String idxName = "textIndex18424";

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

    @Test
    public void test() throws InterruptedException {
        DBCollection cl1 = db1.getCollectionSpace( csName )
                .getCollection( clName );
        DBCollection cl2 = db2.getCollectionSpace( csName )
                .getCollection( clName );
        DBCollection cl3 = db3.getCollectionSpace( csName )
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

        // 开启事务2，查询记录R1
        TransUtils.beginTransaction( db2 );
        cursor = cl2.query( "{a:1}", "", "", "{'':'" + idxName + "'}" );
        actList = TransUtils.getReadActList( cursor );
        Assert.assertTrue(
                actList.size() == 1 && record.equals( actList.get( 0 ) ),
                "actList: " + actList );

        // 开启事务3，删除记录R1
        TransUtils.beginTransaction( db3 );
        cl3.delete( "{a:1}", "{'':'" + idxName + "'}" );

        // 提交事务3，再次开启事务，执行查询检查结果
        db3.commit();
        TransUtils.beginTransaction( db3 );
        cursor = cl3.query();
        actList = TransUtils.getReadActList( cursor );
        Assert.assertTrue( actList.size() == 0, "actList: " + actList );

        // 提交所有事务
        db1.commit();
        db2.commit();
        db3.commit();
    }
}
