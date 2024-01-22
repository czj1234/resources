package com.sequoiadb.decimal;

import java.math.BigDecimal;
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
import com.sequoiadb.exception.BaseException;
import com.sequoiadb.testcommon.SdbTestBase;

/**
 * Copyright (C), 2016-2016, ShenZhen info. Co., Ltd. FileName: Decimal9586.java
 * TestLink: seqDB-9586/seqDB-9588/seqDB-9589,use BSONDecimal(String value)
 * 
 * @author zhaoyu
 * @Date 2016.9.27
 * @version 1.00
 */

public class Decimal9586 extends SdbTestBase {
    private Sequoiadb sdb;

    private CollectionSpace cs = null;
    private String clName = "cl9586";
    private DBCollection cl = null;
    private String coordAddr;
    private String commCSName;

    @BeforeClass
    public void setUp() {
        this.coordAddr = SdbTestBase.coordUrl;
        this.commCSName = SdbTestBase.csName;
        try {
            sdb = new Sequoiadb( coordAddr, "", "" );
            if ( !sdb.isCollectionSpaceExist( commCSName ) ) {
                sdb.createCollectionSpace( commCSName );
            }
            cs = sdb.getCollectionSpace( commCSName );
            if ( cs.isCollectionExist( clName ) ) {
                cs.dropCollection( clName );
            }
            cl = cs.createCollection( clName );
        } catch ( BaseException e ) {
            Assert.fail( "prepare env failed" + e.getMessage() );
        }
    }

    @AfterClass
    public void tearDown() {
        try {
            if ( cs.isCollectionExist( clName ) ) {
                cs.dropCollection( clName );
            }
            sdb.disconnect();
        } catch ( BaseException e ) {
            Assert.fail( "clear env failed, errMsg:" + e.getMessage() );
        }
    }

    @DataProvider(name = "createTypicalDataProvider")
    public Object[][] createTypicalData() {
        return new Object[][] { { "123456", "123456" },
                { "1.23456", "1.23456" }, { "0", "0" },
                { "-123456", "-123456" }, { "-1.23456", "-1.23456" },
                { ".112233445566778899", "0.112233445566778899" },
                { "-.2", "-0.2" },
                { "1.7e+310",
                        "17000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000" },
                { "-17E309",
                        "-17000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000" },
                { "-4.94065645841246544E-329",
                        "-0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000494065645841246544" },
                { "49406.5645841246544e-333",
                        "0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000494065645841246544" }, };
    }

    @Test(dataProvider = "createTypicalDataProvider")
    public void test( String value, String expectValue ) {
        // insert data and check
        genTypicalDecimalFromBigDecimalAndCheck( value, expectValue );
    }

    @DataProvider(name = "createBoundaryDataProvider")
    public Object[][] createBoundaryData() {
        return new Object[][] { { "9", 147455, 16383 }, { "9", 147454, 16382 },
                { "9", 147454, 16383 }, { "-9", 147455, 16383 },
                { "-9", 147454, 16382 }, { "-9", 147454, 16383 }, };
    }

    @Test(dataProvider = "createBoundaryDataProvider")
    public void test( String basicString, int genPrecision, int genScale ) {
        // insert data and check
        genBoundaryDecimalFromBigDecimalAndCheck( basicString, genPrecision,
                genScale );
    }

    @DataProvider(name = "illegalDataProvider")
    public Object[][] createillegalData() {
        return new Object[][] { { "9", 147456, 16383 }, { "9", 147456, 16384 },
                { "9", 147455, 16382 }, { "9", 147455, 16384 },
                { "-9", 147456, 16383 }, { "-9", 147456, 16384 },
                { "-9", 147455, 16382 }, { "-9", 147455, 16384 }, };
    }

    @Test(dataProvider = "illegalDataProvider")
    public void testAbnormal( String basicString, int genPrecision,
            int genScale ) {
        // illegaData check
        try {
            genIllegalDecimalAndCheck( basicString, genPrecision, genScale );
            Assert.fail( "expect result need throw an error but not." );
        } catch ( IllegalArgumentException e ) {
        }
    }

    public void genBoundaryDecimalFromBigDecimalAndCheck( String basicString,
            int genPrecision, int genScale ) {
        BSONObject obj = new BasicBSONObject();
        String genValue = "";
        StringBuffer genInteger = new StringBuffer( basicString );
        StringBuffer genFractional = new StringBuffer();
        if ( basicString.contains( "-" ) ) {
            basicString = basicString.substring( 1 );
        }

        for ( int i = 0; i < genPrecision - genScale - 1; i++ ) {
            genInteger.append( basicString );
        }

        for ( int j = 0; j < genScale; j++ ) {
            genFractional.append( basicString );
        }

        if ( genScale != 0 ) {
            genValue = genInteger + "." + genFractional;
        } else {
            genValue = genInteger.toString();
        }

        try {
            BigDecimal data = new BigDecimal( genValue );
            obj.put( "a", data );
            cl.insert( obj );
            BSONDecimal getDecimal = ( BSONDecimal ) cl.queryOne().get( "a" );
            BigDecimal actualBigDecimal = getDecimal.toBigDecimal();
            if ( actualBigDecimal.compareTo( data ) != 0 ) {
                Assert.fail( "compare bigDecimal data failed,expect data:"
                        + data + ",actual data: " + actualBigDecimal );
            }
            cl.truncate();
        } catch ( IllegalArgumentException e ) {
            Assert.fail( "generate data:" + obj + " failed, errMsg:"
                    + e.getMessage() );
        } catch ( BaseException e ) {
            Assert.fail( "insert data:" + obj + " failed, errMsg:"
                    + e.getMessage() );
        }
    }

    public void genIllegalDecimalAndCheck( String basicString, int genPrecision,
            int genScale ) {
        String genValue = "";
        String genInteger = basicString;
        String genFractional = "";
        if ( basicString.contains( "-" ) ) {
            basicString = basicString.substring( 1 );
        }

        for ( int i = 0; i < genPrecision - genScale - 1; i++ ) {
            genInteger += basicString;
        }

        for ( int j = 0; j < genScale; j++ ) {
            genFractional += basicString;
        }

        if ( genScale != 0 ) {
            genValue = genInteger + "." + genFractional;
        } else {
            genValue = genInteger;
        }
        BigDecimal data = new BigDecimal( genValue );
        BSONDecimal decimal = new BSONDecimal( data );
    }

    public void genTypicalDecimalFromBigDecimalAndCheck( String value,
            String expectValue ) {
        BSONObject obj = new BasicBSONObject();
        try {
            BigDecimal data = new BigDecimal( value );
            BSONDecimal decimal = new BSONDecimal( data );
            obj.put( "a", decimal );
            cl.insert( obj );
            BSONDecimal actualData = ( BSONDecimal ) cl.queryOne().get( "a" );
            BigDecimal getBigDecimal = actualData.toBigDecimal();
            String actualValue = decimal.getValue();
            int actualPrecision = decimal.getPrecision();
            int actualScale = decimal.getScale();
            if ( getBigDecimal.compareTo( data ) != 0 ) {
                Assert.fail( "compare bigDecimal data failed,expect data:"
                        + data + ",actual data: " + getBigDecimal );
            }
            Assert.assertEquals( actualData, decimal );
            Assert.assertEquals( actualValue, expectValue );
            Assert.assertEquals( actualPrecision, -1 );
            Assert.assertEquals( actualScale, -1 );
            cl.truncate();
        } catch ( IllegalArgumentException e ) {
            Assert.fail( "generate data:" + obj + " failed, errMsg:"
                    + e.getMessage() );
        } catch ( BaseException e ) {
            Assert.fail( "insert data:" + obj + " failed, errMsg:"
                    + e.getMessage() );
        }
    }
}
