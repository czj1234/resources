import org.bson.BSONObject;
import org.bson.BasicBSONObject;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Random;

public class DataGenerator {
    private static List< String > generateChineseNames( int numNames ) {
        List< String > surnames = Arrays.asList( "赵", "钱", "孙", "李", "周", "吴",
                "郑", "王", "冯", "陈", "褚", "卫", "蒋", "沈", "韩", "杨", "朱", "秦", "尤",
                "许", "何", "吕", "施", "张", "孔", "曹", "严", "华", "金", "魏", "陶", "姜",
                "戚", "谢", "邹", "喻", "柏", "水", "窦", "章", "云", "苏", "潘", "葛", "奚",
                "范", "彭", "郎", "鲁", "韦", "昌", "马", "苗", "凤", "花", "方", "俞", "任",
                "袁", "柳", "酆", "鲍", "史", "唐", "费", "廉", "岑", "薛", "雷", "贺", "倪",
                "汤", "藤", "殷", "罗", "毕", "郝", "邬", "安", "常", "乐", "于", "时", "傅",
                "皮", "卞", "齐", "康", "伍", "余", "元", "卜", "顾", "孟", "平", "黄", "和",
                "穆", "萧", "尹" );
        List< String > givenNames = Arrays.asList( "伟", "芳", "娜", "秀英", "敏",
                "静", "丽", "强", "磊", "军", "洋", "勇", "艳", "杰", "涛", "明", "超",
                "秀兰", "霞", "平", "刚", "桂英", "世杰", "龙", "玉梅", "文", "辉", "亮", "红",
                "新", "建华", "玲", "国强", "秀华", "明明", "燕", "华", "慧", "云", "巧", "全",
                "瑞", "龚", "怡", "晓", "莉", "桂兰", "志强", "兵", "洁", "迪" );
        List< String > randomNames = new ArrayList<>();
        Random random = new Random();
        for ( int i = 0; i < numNames; i++ ) {
            randomNames.add( surnames.get( random.nextInt( surnames.size() ) )
                    + givenNames.get( random.nextInt( givenNames.size() ) ) );
        }
        return randomNames;
    }

    private static List< String > generateChineseJiguan( int numJiguan ) {
        List< String > jiguanList = Arrays.asList( "北京", "上海", "广州", "深圳", "杭州",
                "南京", "成都", "重庆", "武汉", "西安", "天津", "厦门", "青岛", "大连", "沈阳",
                "长春", "哈尔滨", "济南", "郑州", "太原", "西宁", "兰州", "银川", "乌鲁木齐", "呼和浩特",
                "南昌", "合肥", "南宁", "拉萨", "贵阳", "昆明", "海口", "香港", "澳门", "台北",
                "悉尼", "伦敦", "纽约", "东京", "巴黎", "莫斯科", "新加坡", "迪拜", "孟买", "开罗",
                "内罗毕", "约翰内斯堡", "里约热内卢", "墨西哥城", "多伦多", "温哥华", "渥太华", "蒙特利尔",
                "布宜诺斯艾利斯", "利马", "圣保罗", "圣地亚哥", "伯尔尼", "布鲁塞尔", "阿姆斯特丹", "柏林",
                "慕尼黑", "罗马", "米兰", "马德里", "巴塞罗那", "斯德哥尔摩", "奥斯陆", "哥本哈根",
                "赫尔辛基", "布达佩斯", "华沙", "布拉格", "维也纳", "雅典", "伊斯坦布尔", "开普敦", "内罗毕",
                "卡拉奇", "孟买", "新德里", "曼谷", "吉隆坡", "雅加达", "悉尼", "墨尔本", "奥克兰" );

        List< String > randomJiguan = new ArrayList<>();
        Random random = new Random();
        for ( int i = 0; i < numJiguan; i++ ) {
            randomJiguan.add(
                    jiguanList.get( random.nextInt( jiguanList.size() ) ) );
        }
        return randomJiguan;
    }

    private static List< String > generateChineseAddress( int numAddress ) {
        List< String > addressList = Arrays.asList( "广东省广州市", "浙江省杭州市",
                "江苏省南京市", "四川省成都市", "山东省青岛市", "福建省厦门市", "辽宁省大连市", "辽宁省沈阳市",
                "吉林省长春市", "黑龙江省哈尔滨市", "山东省济南市", "河南省郑州市", "山西省太原市", "青海省西宁市",
                "甘肃省兰州市", "宁夏银川市", "新疆乌鲁木齐市", "内蒙古呼和浩特市", "江西省南昌市", "安徽省合肥市",
                "广西南宁市", "西藏拉萨市", "贵州省贵阳市", "云南省昆明市", "海南省海口市", "香港特别行政区",
                "澳门特别行政区", "台北市", "悉尼", "伦敦", "纽约", "东京", "巴黎", "莫斯科", "新加坡",
                "迪拜", "孟买", "开罗", "内罗毕", "约翰内斯堡", "里约热内卢", "墨西哥城", "多伦多", "温哥华",
                "渥太华", "蒙特利尔", "布宜诺斯艾利斯", "利马", "圣保罗", "圣地亚哥", "伯尔尼", "布鲁塞尔",
                "阿姆斯特丹", "柏林", "慕尼黑", "罗马", "米兰", "马德里", "巴塞罗那", "斯德哥尔摩", "奥斯陆",
                "哥本哈根", "赫尔辛基", "布达佩斯", "华沙", "布拉格", "维也纳", "雅典", "伊斯坦布尔",
                "开普敦", "内罗毕", "卡拉奇", "孟买", "新德里", "曼谷", "吉隆坡", "雅加达", "悉尼",
                "墨尔本", "奥克兰" );

        List< String > randomAddress = new ArrayList<>();
        Random random = new Random();
        for ( int i = 0; i < numAddress; i++ ) {
            randomAddress.add(
                    addressList.get( random.nextInt( addressList.size() ) ) );
        }
        return randomAddress;
    }

    private static List< String > generateJsonFields( int numFields ) {
        List< String > fields = Arrays.asList( "name", "address", "jiguan",
                "姓名", "地址", "籍贯" );
        return new ArrayList<>(
                fields.subList( 0, Math.min( numFields, fields.size() ) ) );
    }

    private static List< BSONObject > generateJsonData( int numRecords,
            List< String > chineseNames, List< String > chineseJiguan,
            List< String > chineseAddress, List< String > fields ) {
        List< BSONObject > data = new ArrayList<>();
        Random random = new Random();
        for ( int i = 0; i < numRecords; i++ ) {
            BSONObject record = new BasicBSONObject();
            for ( String field : fields ) {
                switch ( field ) {
                case "name":
                case "姓名":
                    record.put( field, chineseNames
                            .get( random.nextInt( chineseNames.size() ) ) );
                    break;
                case "address":
                case "地址":
                    record.put( field, chineseAddress
                            .get( random.nextInt( chineseAddress.size() ) ) );
                    break;
                case "jiguan":
                case "籍贯":
                    record.put( field, chineseJiguan
                            .get( random.nextInt( chineseJiguan.size() ) ) );
                    break;
                default:
                    record.put( field, "null" );
                }
            }
            data.add( record );
        }
        return data;
    }

    public static List< BSONObject > generateData( int numFields,
            int numRecords ) {
        int numNames = 67;
        int numJiguan = 59;
        int numAddress = 97;

        List< String > chineseNames = generateChineseNames( numNames );
        List< String > chineseJiguan = generateChineseJiguan( numJiguan );
        List< String > chineseAddress = generateChineseAddress( numAddress );
        List< String > fields = generateJsonFields( numFields );
        List< BSONObject > data = generateJsonData( numRecords, chineseNames,
                chineseJiguan, chineseAddress, fields );
        return data;
    }

    public static void main( String[] args ) {
        List< BSONObject > bsonObjects = generateData( 6, 2000 );
        for ( BSONObject bsonObject : bsonObjects ) {
            System.out.println( bsonObject );
        }
    }
}

