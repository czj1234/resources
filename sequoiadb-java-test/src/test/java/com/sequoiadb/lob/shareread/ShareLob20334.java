package com.sequoiadb.lob.shareread;

import java.util.Arrays;

import org.bson.types.ObjectId;
import org.testng.Assert;
import org.testng.SkipException;
import org.testng.annotations.AfterClass;
import org.testng.annotations.BeforeClass;
import org.testng.annotations.DataProvider;
import org.testng.annotations.Test;

import com.sequoiadb.base.CollectionSpace;
import com.sequoiadb.base.DBCollection;
import com.sequoiadb.base.DBLob;
import com.sequoiadb.base.Sequoiadb;
import com.sequoiadb.exception.BaseException;
import com.sequoiadb.lob.utils.LobSubUtils;
import com.sequoiadb.lob.utils.RandomWriteLobUtil;
import com.sequoiadb.testcommon.CommLib;
import com.sequoiadb.testcommon.SdbTestBase;

/**
 * @Description seqDB-20334:READ和SHARED_READ|WRITE并发读写lob
 * @author luweikang
 * @Date 2019.8.26
 */

public class ShareLob20334 extends SdbTestBase {

    private Sequoiadb sdb = null;
    private Sequoiadb db1 = null;
    private Sequoiadb db2 = null;
    private CollectionSpace cs = null;
    private String clName = "cl20334";
    private String mainCLName = "mainCL20334";
    private String subCLName = "subCL20334";
    private int lobSize = 1024 * 100;
    private byte[] expData = new byte[ lobSize ];

    @DataProvider(name = "clNameProvider", parallel = false)
    public Object[][] generateCLName() {
        return new Object[][] {
                // the parameter is clname
                new Object[] { clName, RandomWriteLobUtil.tenKbuff },
                new Object[] { mainCLName, RandomWriteLobUtil.threeKbuff } };
    }

    @BeforeClass
    public void setUp() {
        sdb = new Sequoiadb( coordUrl, "", "" );
        cs = sdb.getCollectionSpace( SdbTestBase.csName );
        cs.createCollection( clName );
        if ( !CommLib.isStandAlone( sdb ) ) {
            LobSubUtils.createMainCLAndAttachCL( sdb, SdbTestBase.csName,
                    mainCLName, subCLName );
        }
    }

    @Test(dataProvider = "clNameProvider")
    public void testLob( String clName, byte[] writeLobBuff ) {
        int writeSize = writeLobBuff.length;
        if ( CommLib.isStandAlone( sdb ) && clName.equals( mainCLName ) ) {
            throw new SkipException( "is standalone skip testcase!" );
        }

        db1 = CommLib.getRandomSequoiadb();
        db2 = CommLib.getRandomSequoiadb();

        DBCollection dbcl = sdb.getCollectionSpace( SdbTestBase.csName )
                .getCollection( clName );
        byte[] lobBuff = RandomWriteLobUtil.getRandomBytes( lobSize );
        ObjectId id = RandomWriteLobUtil.createAndWriteLob( dbcl, lobBuff );

        DBCollection cl1 = db1.getCollectionSpace( SdbTestBase.csName )
                .getCollection( clName );
        DBCollection cl2 = db2.getCollectionSpace( SdbTestBase.csName )
                .getCollection( clName );

        byte[] readLob1 = new byte[ writeSize ];
        DBLob lob1 = cl1.openLob( id, DBLob.SDB_LOB_READ );
        lob1.lockAndSeek( writeSize, writeSize );
        lob1.read( readLob1 );
        byte[] expData1 = Arrays.copyOfRange( lobBuff, writeSize,
                writeSize * 2 );
        RandomWriteLobUtil.assertByteArrayEqual( readLob1, expData1,
                "lob data is wrong" );

        try {
            DBLob lob2 = cl2.openLob( id,
                    DBLob.SDB_LOB_SHAREREAD | DBLob.SDB_LOB_WRITE );
            lob2.close();
            Assert.fail(
                    "can't open other mode when the lob open with read mode." );
        } catch ( BaseException e ) {
            if ( e.getErrorCode() != -317 ) {
                throw e;
            }
        }
        lob1.close();

        lob1 = cl1.openLob( id, DBLob.SDB_LOB_SHAREREAD | DBLob.SDB_LOB_WRITE );
        lob1.lockAndSeek( writeSize, writeSize );
        lob1.read( readLob1 );
        RandomWriteLobUtil.assertByteArrayEqual( readLob1, expData1,
                "lob data is wrong" );
        try {
            DBLob lob2 = cl2.openLob( id, DBLob.SDB_LOB_READ );
            lob2.close();
            Assert.fail(
                    "can't open read mode when the lob open with other mode." );
        } catch ( BaseException e ) {
            if ( e.getErrorCode() != -317 ) {
                throw e;
            }
        }
        lob1.close();

        lob1 = cl1.openLob( id, DBLob.SDB_LOB_SHAREREAD | DBLob.SDB_LOB_WRITE );
        lob1.lockAndSeek( writeSize, writeSize );
        lob1.write( writeLobBuff );
        expData = RandomWriteLobUtil.appendBuff( lobBuff, writeLobBuff,
                writeSize );
        try {
            DBLob lob2 = cl2.openLob( id, DBLob.SDB_LOB_READ );
            lob2.close();
            Assert.fail(
                    "can't open read mode when the lob open with other mode." );
        } catch ( BaseException e ) {
            if ( e.getErrorCode() != -317 ) {
                throw e;
            }
        }
        lob1.close();

        RandomWriteLobUtil.checkShareLobResult( dbcl, id, lobSize, expData );
    }

    @AfterClass
    public void tearDown() {
        try {
            if ( cs.isCollectionExist( clName ) ) {
                cs.dropCollection( clName );
            }
            if ( cs.isCollectionExist( mainCLName ) ) {
                cs.dropCollection( mainCLName );
            }
            if ( cs.isCollectionExist( subCLName ) ) {
                cs.dropCollection( subCLName );
            }
        } finally {
            if ( sdb != null ) {
                sdb.close();
            }
            if ( db1 != null ) {
                db1.close();
            }
            if ( db2 != null ) {
                db2.close();
            }
        }
    }
}
