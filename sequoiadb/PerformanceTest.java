import com.sequoiadb.base.*;
import com.sequoiadb.base.options.InsertOption;
import org.bson.BSONObject;
import org.bson.BasicBSONObject;

import java.util.ArrayList;
import java.util.List;

public class PerformanceTest {
    private String coordUrl = "192.168.30.72:11810";
    private String csName = "cs_gb18030";
    private String clName = "cl_gb18030";
    private String indexName = "index_gb18030";
    private CollectionSpace cs;
    private DBCollection cl;
    private Sequoiadb sdbUTF8;
    private Sequoiadb sdbGB18030;
    private int rounds = 3;
    private int totalCost = 0;
    private BSONObject clOptions;

    public PerformanceTest( String coordUrl, int testRound ) {
        this.coordUrl = coordUrl;
        this.rounds = testRound;
    }

    public void setUp() {
        sdbUTF8 = new Sequoiadb( coordUrl, "", "" );
        ClientCharset charset = new ClientCharset();
        charset.setCharsets( ClientCharsetEnum.GB18030 );
        ConfigOptions options = new ConfigOptions();
        options.setCharset( charset );
        sdbGB18030 = new Sequoiadb( coordUrl, "", "", options );
        if ( sdbUTF8.isCollectionSpaceExist( csName ) ) {
            sdbUTF8.dropCollectionSpace( csName );
        }
        clOptions = new BasicBSONObject();
        clOptions.put( "ShardingKey", new BasicBSONObject( "_id", 1 ) );
        clOptions.put( "ShardingType", "hash" );
        clOptions.put( "AutoSplit", true );
    }

    public void commonQuery( String charset, Sequoiadb sdb,
            BasicBSONObject matcher, BasicBSONObject hint ) {
        totalCost = 0;
        cl = sdb.getCollectionSpace( csName ).getCollection( clName );
        for ( int round = 0; round < rounds; round++ ) {
            List< BSONObject > result = new ArrayList<>();
            long start = System.currentTimeMillis();
            DBCursor query = cl.query( matcher, null, null, hint );
            while ( query.hasNext() ) {
                result.add( query.getNext() );
            }
            query.close();
            long end = System.currentTimeMillis();
            System.out.println( charset + " query cost: " + ( end - start )
                    + " ms for " + round + " times" );
            totalCost += ( end - start );
        }
        System.out.println( charset + " query average cost: "
                + ( totalCost / rounds ) + " ms for " + rounds + " times" );
    }

    public void commonInsert( String charset, Sequoiadb sdb,
            int bulkInsertCount, List< List< BSONObject > > data ) {
        totalCost = 0;
        cs = sdb.createCollectionSpace( csName );
        for ( int round = 0; round < rounds; round++ ) {
            cl = cs.createCollection( clName, clOptions );
            long start = System.currentTimeMillis();
            for ( int j = 0; j < bulkInsertCount; j++ ) {
                cl.bulkInsert( data.get( j ) );
            }
            long end = System.currentTimeMillis();
            System.out.println( charset + " insert cost: " + ( end - start )
                    + " ms for " + round + " times" );
            totalCost += ( end - start );
            cs.dropCollection( clName );
        }
        System.out.println( charset + " insert average cost: "
                + ( totalCost / rounds ) + " ms for " + rounds + " times" );
        sdbUTF8.dropCollectionSpace( csName );
    }

    public void testInsert( int bulkInsertCount, int singleInsertCount,
            int fieldsNum ) {
        // Generate data
        List< List< BSONObject > > bulkInsertDataList = new ArrayList<>();
        for ( int i = 0; i < bulkInsertCount; i++ ) {
            List< BSONObject > data = DataGenerator.generateData( fieldsNum,
                    singleInsertCount );
            bulkInsertDataList.add( data );
        }

        System.out.println( "Test bulkInsert performance,bulkInsertCount:"
                + bulkInsertCount + ",singleInsertCount:" + singleInsertCount
                + ",fieldsNum:" + fieldsNum );
        // UTF8 test
        commonInsert( "UTF8", sdbUTF8, bulkInsertCount, bulkInsertDataList );
        // GB18030 test
        commonInsert( "GB18030", sdbGB18030, bulkInsertCount,
                bulkInsertDataList );
    }

    public void testQuery( int recordNum, int fieldsNum ) {
        // prepare data
        int insertCount = 1;
        int lastInsertCount = 0;
        List<List<BSONObject>> bulkInsertDataList = new ArrayList<>();
        if(recordNum>1000000){
            insertCount = recordNum/1000000 ;
            lastInsertCount = recordNum%1000000;
            bulkInsertDataList = new ArrayList<>();
            for(int i=0;i<insertCount;i++){
                List<BSONObject> data = DataGenerator.generateData(fieldsNum,1000000);
                bulkInsertDataList.add(data);
            }
            List<BSONObject> data = DataGenerator.generateData(fieldsNum,lastInsertCount);
            bulkInsertDataList.add(data);
        }else{
            List<BSONObject> data = DataGenerator.generateData(fieldsNum,recordNum);
            bulkInsertDataList.add(data);
        }
        cs = sdbUTF8.createCollectionSpace( csName );
        cl = cs.createCollection( clName, clOptions );
        for ( int i = 0; i < insertCount; i++ ) {
            cl.bulkInsert( bulkInsertDataList.get( i ) );
        }
        System.out.println( "Test query performance,record number: " + recordNum
                + ", fields number: " + fieldsNum );
        // UTF8 test
        commonQuery( "UTF8", sdbUTF8, null, null );
        // GB18030 test
        commonQuery( "GB18030", sdbGB18030, null, null );
        sdbUTF8.dropCollectionSpace( csName );
    }

    public void testQueryWithIndex( int recordNum, int fieldsNum ) {
        // prepare data
        int insertCount = 1;
        int lastInsertCount = 0;
        List<List<BSONObject>> bulkInsertDataList = new ArrayList<>();
        if(recordNum>1000000){
            insertCount = recordNum/1000000 ;
            lastInsertCount = recordNum%1000000;
            bulkInsertDataList = new ArrayList<>();
            for(int i=0;i<insertCount;i++){
                List<BSONObject> data = DataGenerator.generateData(fieldsNum,1000000);
                bulkInsertDataList.add(data);
            }
            List<BSONObject> data = DataGenerator.generateData(fieldsNum,lastInsertCount);
            bulkInsertDataList.add(data);
        }else{
            List<BSONObject> data = DataGenerator.generateData(fieldsNum,recordNum);
            bulkInsertDataList.add(data);
        }
        cs = sdbUTF8.createCollectionSpace( csName );
        cl = cs.createCollection( clName, clOptions );
        cl.createIndex( indexName, new BasicBSONObject( "name", 1 ), false,
                false );
        for ( int i = 0; i < insertCount; i++ ) {
            cl.bulkInsert( bulkInsertDataList.get( i ) );
        }

        System.out.println( "Test query performance with index,record number: "
                + recordNum + ", fields number: " + fieldsNum );
        BasicBSONObject matcher = new BasicBSONObject( "name",
                new BasicBSONObject( "$gt", "巨杉" ) );
        BasicBSONObject hint = new BasicBSONObject( "", indexName );
        // UTF8 test
        commonQuery( "UTF8", sdbUTF8, matcher, hint );
        // GB18030 test
        commonQuery( "GB18030", sdbGB18030, matcher, hint );
        sdbUTF8.dropCollectionSpace( csName );
    }

    public void tearDown() {
        if ( sdbUTF8.isCollectionSpaceExist( csName ) ) {
            sdbUTF8.dropCollectionSpace( csName );
        }
        if ( sdbUTF8 != null ) {
            sdbUTF8.close();
        }
        if ( sdbGB18030 != null ) {
            sdbGB18030.close();
        }
    }

    public static void main( String[] args ) {
        PerformanceTest test = new PerformanceTest( "192.168.30.72:11810", 3 );
        test.setUp();
//        test.testInsert( 10, 2000, 6 );
//        System.out.println( "===========================================================================================" );
//        test.testQuery( 5000000, 6 );
//        System.out.println( "===========================================================================================" );
        test.testQueryWithIndex( 5000000, 6 );
        test.tearDown();
    }

}

