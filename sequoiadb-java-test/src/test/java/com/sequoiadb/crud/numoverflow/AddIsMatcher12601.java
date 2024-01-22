package com.sequoiadb.crud.numoverflow;

import java.util.Date;

import org.bson.BSONObject;
import org.bson.BasicBSONObject;
import org.bson.types.BSONDecimal;
import org.testng.Assert;
import org.testng.annotations.AfterClass;
import org.testng.annotations.BeforeClass;
import org.testng.annotations.DataProvider;
import org.testng.annotations.Test;

import com.sequoiadb.base.CollectionSpace;
import com.sequoiadb.base.DBCollection;
import com.sequoiadb.base.Sequoiadb;
import com.sequoiadb.crud.numoverflow.NumOverflowUtils;
import com.sequoiadb.exception.BaseException;
import com.sequoiadb.testcommon.SdbTestBase;

/**
 * FileName: AddIsMatcher12601.java test content:Numeric value overflow for
 * single character using $add operation, and the $add is used as a
 * matcherSymbol. testlink case:seqDB-12601
 * 
 * @author wuyan
 * @Date 2017.9.13
 * @version 1.00
 */

public class AddIsMatcher12601 extends SdbTestBase {
    @DataProvider(name = "operData")
    public Object[][] generateDatas() {
        String[] expRecords1 = {
                "{'a':-2147483648,'b':{'$numberLong':'-1024819115206086201'}}" };
        String[] expRecords2 = { "{'a':[1,[3,214748,[-1,2147483647]]],'b':1}" };
        String[] expRecords3 = {
                "{a:[{'$numberLong':'-9223372036854775808'},3],"
                        + "b:[{a:{'$numberLong':'9223372036854775807'}},'testo1']}" };
        return new Object[][] {
                // parameters:
                // matcherName,arithmeticValue,resultVaule,expRecords
                // int32 + int64 type numberflow:a+(-1)=-2147483649L
                new Object[] { "a", new Integer( -1 ), new Long( -2147483649L ),
                        expRecords1 },
                // int32(arr) + int64 type numberflow:a.1.2.1 +
                // 9223372034707292161L = Decimal(9223372036854775808)
                new Object[] { "a.1.2.1", new Long( 9223372034707292161L ),
                        new BSONDecimal( "9223372036854775808" ), expRecords2 },
                // int64 + int32 type numberflow: b +
                // (-8198552921648689608L)=Decimal(-9223372036854775809)
                new Object[] { "b", new Long( -8198552921648689608L ),
                        new BSONDecimal( "-9223372036854775809" ),
                        expRecords1 },
                // int64(arr) + int32
                // numberflow:Decimal(9223372036854775809)=9L*(b.0)
                new Object[] { "a.0", new Integer( -1 ),
                        new BSONDecimal( "-9223372036854775809" ),
                        expRecords3 },
                // int64(obj) + int32
                // numberflow:Decimal(9223372036854775809)=9L*(b.0)
                new Object[] { "b.a", new Integer( 1 ),
                        new BSONDecimal( "9223372036854775808" ),
                        expRecords3 }, };
    }

    private String clName = "add_matcher12601";
    private Sequoiadb sdb = null;
    private CollectionSpace cs = null;
    private static DBCollection cl = null;

    @BeforeClass
    public void setUp() {
        try {
            sdb = new Sequoiadb( SdbTestBase.coordUrl, "", "" );
        } catch ( BaseException e ) {
            Assert.assertTrue( false,
                    "connect %s failed," + coordUrl + e.getMessage() );
        }

        cs = sdb.getCollectionSpace( SdbTestBase.csName );
        cl = NumOverflowUtils.createCL( cs, clName );

        String[] records = {
                "{'a':-2147483648,'b':{'$numberLong':'-1024819115206086201'}}",
                "{a:[{'$numberLong':'-9223372036854775808'},3],b:[{a:{'$numberLong':'9223372036854775807'}},'testo1']}",
                "{a:[1,[3,214748,[-1,2147483647]]],b:1}" };

        NumOverflowUtils.insert( cl, records );
    }

    @Test(dataProvider = "operData")
    public void testAddAsMatcher( String matcherName, Object arithmeticValue,
            Object resultVaule, String[] expRecords ) {
        try {
            BSONObject mValue = new BasicBSONObject();
            mValue.put( "$add", arithmeticValue );
            mValue.put( "$et", resultVaule );

            NumOverflowUtils.matcherOper( cl, matcherName, mValue, expRecords );
        } catch ( BaseException e ) {
            Assert.assertTrue( false,
                    "abs intData is used as selector oper failed,"
                            + e.getMessage() );
        }
    }

    @AfterClass
    public void tearDown() {
        try {

            if ( cs.isCollectionExist( clName ) ) {
                cs.dropCollection( clName );
            }
        } catch ( BaseException e ) {
            Assert.fail( "clear env failed, errMsg:" + e.getMessage() );
        } finally {
            if ( sdb != null ) {
                sdb.close();
            }
        }
    }

}
