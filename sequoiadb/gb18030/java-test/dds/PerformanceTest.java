import java.util.ArrayList;
import java.util.List;

import com.mongodb.*;
import com.mongodb.charset.ClientCharset;
import com.mongodb.charset.ClientCharsetEnum;
import com.mongodb.client.*;
import com.mongodb.client.model.IndexOptions;
import org.bson.Document;

public class PerformanceTest {
    private String connectionStr = "mongodb://192.168.30.72:15000";
    private String dbName = "cs_gb18030";
    private String clName = "cl_gb18030";
    private String indexName = "index_gb18030";
    private MongoDatabase db;
    private MongoCollection cl;
    private MongoClient clientUTF8;
    private MongoClient clientGB18030;
    private int rounds = 3;
    private int totalCost = 0;

    public PerformanceTest( String connectionStr, int testRound ) {
        this.connectionStr = connectionStr;
        this.rounds = testRound;
    }

    public void setUp() {
        ServerApi serverApi = ServerApi.builder().version( ServerApiVersion.V1 )
                .build();
        ClientCharset charset = new ClientCharset();
        charset.setCharsets( ClientCharsetEnum.GB18030 );
        MongoClientSettings settings = MongoClientSettings.builder()
                .applyConnectionString( new ConnectionString( connectionStr ) )
                .charset( charset ).serverApi( serverApi ).build();
        clientUTF8 = MongoClients.create( connectionStr );
        clientGB18030 = MongoClients.create( settings );
        clientUTF8.getDatabase( dbName ).drop();
    }

    public void commonQuery( String charset, MongoClient client,
            Document matcher, Document hint ) {
        totalCost = 0;
        cl = client.getDatabase( dbName ).getCollection( clName );
        for ( int round = 0; round < rounds; round++ ) {
            List< Document > result = new ArrayList<>();
            long start = System.currentTimeMillis();
            if ( matcher == null){
                cl.find().into(result);
            }else{
                cl.find( matcher ).hint( hint ).into( result );
            }
            long end = System.currentTimeMillis();
            System.out.println( charset + " query cost: " + ( end - start )
                    + " ms for " + round + " times" );
            totalCost += ( end - start );
        }
        System.out.println( charset + " query average cost: "
                + ( totalCost / rounds ) + " ms for " + rounds + " times" );
    }

    public void commonInsert( String charset, MongoClient client,
            int bulkInsertCount, List< List< Document > > data ) {
        totalCost = 0;
        db = client.getDatabase( dbName );
        for ( int round = 0; round < rounds; round++ ) {
            db.createCollection( clName );
            cl = db.getCollection( clName );
            long start = System.currentTimeMillis();
            for ( int j = 0; j < bulkInsertCount; j++ ) {
                cl.insertMany( data.get( j ) );
            }
            long end = System.currentTimeMillis();
            System.out.println( charset + " insert cost: " + ( end - start )
                    + " ms for " + round + " times" );
            totalCost += ( end - start );
            cl.drop();
        }
        System.out.println( charset + " insert average cost: "
                + ( totalCost / rounds ) + " ms for " + rounds + " times" );
        db.drop();
    }

    public void testInsert( int bulkInsertCount, int singleInsertCount,
            int fieldsNum ) {
        // Generate data
        List< List< Document > > bulkInsertDataList = new ArrayList<>();
        for ( int i = 0; i < bulkInsertCount; i++ ) {
            List< Document > data = DataGenerator.generateData( fieldsNum,
                    singleInsertCount );
            bulkInsertDataList.add( data );
        }

        System.out.println( "Test bulkInsert performance,bulkInsertCount:"
                + bulkInsertCount + ",singleInsertCount:" + singleInsertCount
                + ",fieldsNum:" + fieldsNum );
        // UTF8 test
        commonInsert( "UTF8", clientUTF8, bulkInsertCount, bulkInsertDataList );
        // GB18030 test
        commonInsert( "GB18030", clientGB18030, bulkInsertCount,
                bulkInsertDataList );
    }

    public void testQuery( int recordNum, int fieldsNum ) {
        // prepare data
        List< Document > data = DataGenerator.generateData( fieldsNum,
                recordNum );

        db = clientUTF8.getDatabase( dbName );
        db.createCollection( clName );
        cl = db.getCollection( clName );
        cl.insertMany( data );
        System.out.println( "Test query performance,record number: " + recordNum
                + ", fields number: " + fieldsNum );
        // UTF8 test
        commonQuery( "UTF8", clientUTF8, null, null );
        // GB18030 test
        commonQuery( "GB18030", clientGB18030, null, null );
        db.drop();
    }

    public void testQueryWithIndex( int recordNum, int fieldsNum ) {
        // prepare data
        List< Document > data = DataGenerator.generateData( fieldsNum,
                recordNum );

        db = clientUTF8.getDatabase( dbName );
        db.createCollection( clName );
        cl = db.getCollection( clName );
        cl.insertMany( data );
        cl.createIndex( new Document( "name", 1 ),
                new IndexOptions().name( indexName ) );

        System.out.println( "Test query performance with index,record number: "
                + recordNum + ", fields number: " + fieldsNum );
        Document matcher = new Document( "name", new Document( "$gt", "巨杉" ) );
        Document hint = new Document( "name", 1 );
        // UTF8 test
        commonQuery( "UTF8", clientUTF8, matcher, hint );
        // GB18030 test
        commonQuery( "GB18030", clientGB18030, matcher, hint );
        db.drop();
    }

    public void tearDown() {
        clientUTF8.getDatabase( dbName ).drop();
        if ( clientUTF8 != null ) {
            clientUTF8.close();
        }
        if ( clientGB18030 != null ) {
            clientGB18030.close();
        }
    }

    public static void main( String[] args ) {
        PerformanceTest test = new PerformanceTest(
                "mongodb://192.168.30.72:10000", 3 );
        test.setUp();
        test.testInsert( 2000, 2000, 3 );
        test.testInsert( 2000, 2000, 6 );
        test.testInsert( 2000, 2000, 10 );
        System.out.println(
                "===========================================================================================" );
        test.testQuery( 5000000, 3 );
        test.testQuery( 5000000, 6 );
        test.testQuery( 5000000, 10 );
        System.out.println(
                "===========================================================================================" );
        test.testQueryWithIndex( 5000000, 3 );
        test.testQueryWithIndex( 5000000, 6 );
        test.testQueryWithIndex( 5000000, 10 );
        test.tearDown();
    }

}
