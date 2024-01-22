package com.sequoiadb.snapshot;

import java.util.ArrayList;

import org.bson.BSONObject;
import org.bson.BasicBSONObject;
import org.bson.types.ObjectId;
import org.testng.SkipException;
import org.testng.annotations.AfterClass;
import org.testng.annotations.BeforeClass;
import org.testng.annotations.Test;

import com.sequoiadb.base.*;
import com.sequoiadb.lob.utils.RandomWriteLobUtil;
import com.sequoiadb.testcommon.CommLib;
import com.sequoiadb.testcommon.SdbTestBase;

/**
 * @version 1.10
 * @Description seqDB-27860:SDB_LOB_SHAREREAD|WRITE模式读数据
 * @Author liuli
 * @Date 2022.09.28
 * @UpdateAuthor liuli
 * @UpdateDate 2022.09.28
 */
public class Snapshot27860 extends SdbTestBase {

    private Sequoiadb sdb = null;
    private CollectionSpace dbcs = null;
    private DBCollection dbcl = null;
    private String csName = "cs_27860";
    private String clName = "cl_27860";
    private ObjectId lobid;
    private int lobPageSize = 131072;
    private ArrayList< String > groupNames = new ArrayList<>();
    private int lobSize = 1024 * 3000;

    @BeforeClass
    public void setUp() {
        sdb = new Sequoiadb( SdbTestBase.coordUrl, "", "" );
        if ( CommLib.isStandAlone( sdb ) ) {
            throw new SkipException( "is standalone skip testcase" );
        }
        if ( sdb.isCollectionSpaceExist( csName ) ) {
            sdb.dropCollectionSpace( csName );
        }
        groupNames = CommLib.getDataGroupNames( sdb );
        dbcs = sdb.createCollectionSpace( csName,
                new BasicBSONObject( "LobPageSize", lobPageSize ) );
        dbcl = dbcs.createCollection( clName,
                new BasicBSONObject( "Group", groupNames.get( 0 ) )
                        .append( "ReplSize", -1 ) );
        byte[] lobBuff = RandomWriteLobUtil.getRandomBytes( lobSize );
        lobid = RandomWriteLobUtil.createAndWriteLob( dbcl, lobBuff );
    }

    @Test
    public void testLob() {
        Node masterNode = sdb.getReplicaGroup( groupNames.get( 0 ) )
                .getMaster();
        String masterNodeName = masterNode.getNodeName();

        // 获取数据库快照信息
        DBCursor cursor = sdb.getSnapshot( Sequoiadb.SDB_SNAP_DATABASE,
                new BasicBSONObject(), null, null );
        ArrayList< BSONObject > dataInfos = SnapshotUtil
                .getSnapshotLobStat( cursor );

        // 获取集合空间快照信息
        cursor = sdb.getSnapshot( Sequoiadb.SDB_SNAP_COLLECTIONSPACES,
                new BasicBSONObject( "Name", csName ), null, null );
        ArrayList< BSONObject > csInfos = SnapshotUtil
                .getSnapshotLobStat( cursor );

        // 获取集合快照
        cursor = sdb.getSnapshot( Sequoiadb.SDB_SNAP_COLLECTIONS,
                new BasicBSONObject( "Name", csName + "." + clName ), null,
                null );
        ArrayList< BSONObject > clInfos = SnapshotUtil
                .getSnapshotLobStatCL( cursor, false );

        // 已SDB_LOB_SHAREREAD|WRITE模式打开lob
        DBLob lob = dbcl.openLob( lobid,
                DBLob.SDB_LOB_SHAREREAD | DBLob.SDB_LOB_WRITE );

        // 校验数据库快照
        cursor = sdb.getSnapshot( Sequoiadb.SDB_SNAP_DATABASE,
                new BasicBSONObject(), null, null );
        SnapshotUtil.checkSnapshot( cursor, dataInfos, 0 );

        // 获取集合空间快照信息
        cursor = sdb.getSnapshot( Sequoiadb.SDB_SNAP_COLLECTIONSPACES,
                new BasicBSONObject( "Name", csName ), null, null );
        SnapshotUtil.checkSnapshot( cursor, csInfos, 0 );

        // 获取集合快照
        cursor = sdb.getSnapshot( Sequoiadb.SDB_SNAP_COLLECTIONS,
                new BasicBSONObject( "Name", csName + "." + clName ), null,
                null );
        SnapshotUtil.checkSnapshotCL( cursor, clInfos, false, 0 );

        // SDB_LOB_READ模式读lob
        int writeSize = 1024;
        byte[] readLob2 = new byte[ writeSize ];
        lob.lockAndSeek( 0, writeSize );
        lob.read( readLob2, 0, writeSize );

        // 校验数据库快照
        cursor = sdb.getSnapshot( Sequoiadb.SDB_SNAP_DATABASE,
                new BasicBSONObject(), null, null );
        SnapshotUtil.checkSnapshot( cursor, dataInfos, 0 );

        // 获取集合空间快照信息
        cursor = sdb.getSnapshot( Sequoiadb.SDB_SNAP_COLLECTIONSPACES,
                new BasicBSONObject( "Name", csName ), null, null );
        SnapshotUtil.checkSnapshot( cursor, csInfos, 0 );

        // 获取集合快照
        cursor = sdb.getSnapshot( Sequoiadb.SDB_SNAP_COLLECTIONS,
                new BasicBSONObject( "Name", csName + "." + clName ), null,
                null );
        SnapshotUtil.checkSnapshotCL( cursor, clInfos, false, 0 );

        lob.close();

        // 校验数据库快照
        // Number of load monitoring nodes
        int loadMonitorNodeNum = 2;
        int lobPages = ( lobSize + 1023 ) / lobPageSize + 1;
        dataInfos.get( 0 ).put( "TotalLobGet",
                ( double ) dataInfos.get( 0 ).get( "TotalLobGet" )
                        + 1 * loadMonitorNodeNum );
        dataInfos.get( 0 ).put( "TotalLobPut",
                ( double ) dataInfos.get( 0 ).get( "TotalLobPut" )
                        + 1 * loadMonitorNodeNum );
        dataInfos.get( 0 ).put( "TotalLobReadSize",
                ( double ) dataInfos.get( 0 ).get( "TotalLobReadSize" )
                        + lobPageSize * loadMonitorNodeNum );
        dataInfos.get( 0 ).put( "TotalLobRead",
                ( double ) dataInfos.get( 0 ).get( "TotalLobRead" ) + 2 );
        dataInfos.get( 0 ).put( "TotalLobAddressing",
                ( double ) dataInfos.get( 0 ).get( "TotalLobAddressing" ) + 2 );
        cursor = sdb.getSnapshot( Sequoiadb.SDB_SNAP_DATABASE,
                new BasicBSONObject(), null, null );
        SnapshotUtil.checkSnapshot( cursor, dataInfos, lobPages );

        // 获取集合空间快照信息
        csInfos.get( 0 ).put( "TotalLobGet",
                ( double ) csInfos.get( 0 ).get( "TotalLobGet" ) + 1 );
        csInfos.get( 0 ).put( "TotalLobPut",
                ( double ) csInfos.get( 0 ).get( "TotalLobPut" ) + 1 );
        csInfos.get( 0 ).put( "TotalLobReadSize",
                ( double ) csInfos.get( 0 ).get( "TotalLobReadSize" )
                        + lobPageSize );
        csInfos.get( 0 ).put( "TotalLobRead",
                ( double ) csInfos.get( 0 ).get( "TotalLobRead" ) + 2 );
        csInfos.get( 0 ).put( "TotalLobAddressing",
                ( double ) csInfos.get( 0 ).get( "TotalLobAddressing" ) + 2 );
        cursor = sdb.getSnapshot( Sequoiadb.SDB_SNAP_COLLECTIONSPACES,
                new BasicBSONObject( "Name", csName ), null, null );
        SnapshotUtil.checkSnapshot( cursor, csInfos, lobPages );

        // 获取集合快照
        for ( BSONObject clInfo : clInfos ) {
            if ( clInfo.get( "NodeName" ).equals( masterNodeName ) ) {
                clInfo.put( "TotalLobGet",
                        ( long ) clInfo.get( "TotalLobGet" ) + 1 );
                clInfo.put( "TotalLobPut",
                        ( long ) clInfo.get( "TotalLobPut" ) + 1 );
                clInfo.put( "TotalLobReadSize",
                        ( long ) clInfo.get( "TotalLobReadSize" )
                                + lobPageSize );
                clInfo.put( "TotalLobRead",
                        ( long ) clInfo.get( "TotalLobRead" ) + 2 );
                clInfo.put( "TotalLobAddressing",
                        ( long ) clInfo.get( "TotalLobAddressing" ) + 2 );
            }
        }
        cursor = sdb.getSnapshot( Sequoiadb.SDB_SNAP_COLLECTIONS,
                new BasicBSONObject( "Name", csName + "." + clName ), null,
                null );
        SnapshotUtil.checkSnapshotCL( cursor, clInfos, false, lobPages );
    }

    @AfterClass
    public void tearDown() {
        try {
            if ( sdb.isCollectionSpaceExist( csName ) ) {
                sdb.dropCollectionSpace( csName );
            }
        } finally {
            if ( sdb != null ) {
                sdb.close();
            }
        }
    }
}
