# -*- coding: utf-8 -*-

import argparse
import random
import json


def generate_chinese_names(num_names):
    # 定义姓氏和名字的汉字列表
    surnames = ["赵", "钱", "孙", "李", "周", "吴", "郑", "王", "冯", "陈", "褚", "卫", "蒋", "沈", "韩", "杨", "朱", "秦", "尤", "许", "何", "吕", "施", "张", "孔", "曹", "严", "华", "金", "魏", "陶", "姜", "戚", "谢", "邹", "喻", "柏", "水", "窦", "章", "云", "苏", "潘", "葛", "奚", "范", "彭", "郎", "鲁", "韦", "昌", "马", "苗", "凤", "花", "方", "俞", "任", "袁", "柳", "酆", "鲍", "史", "唐", "费", "廉", "岑", "薛", "雷", "贺", "倪", "汤", "藤", "殷", "罗", "毕", "郝", "邬", "安", "常", "乐", "于", "时", "傅", "皮", "卞", "齐", "康", "伍", "余", "元", "卜", "顾", "孟", "平", "黄", "和", "穆", "萧", "尹"]
    given_names = ["伟", "芳", "娜", "秀英", "敏", "静", "丽", "强", "磊", "军", "洋", "勇", "艳", "杰", "涛", "明", "超", "秀兰", "霞", "平", "刚", "桂英", "世杰", "龙", "玉梅", "文", "辉", "亮", "红", "新", "建华", "玲", "国强", "秀华", "明明", "燕", "华", "慧", "云", "巧", "全", "瑞", "龚", "怡", "晓", "莉", "桂兰", "志强", "兵", "洁", "迪"]
    random_names = []
    # 随机生成中文姓名列表
    for _ in range(num_names):
        random_names.append(random.choice(surnames) + random.choice(given_names))
    return random_names

def generate_chinese_jiguan(num_jiguan):
    # 定义籍贯的汉字列表
    jiguan_list = ["北京", "上海", "广州", "深圳", "杭州", "南京", "成都", "重庆", "武汉", "西安", "天津", "厦门", "青岛", "大连", "沈阳", "长春", "哈尔滨", "济南", "郑州", "太原", "西宁", "兰州", "银川", "乌鲁木齐", "呼和浩特", "南昌", "合肥", "南宁", "拉萨", "贵阳", "昆明", "海口", "香港", "澳门", "台北", "悉尼", "伦敦", "纽约", "东京", "巴黎", "莫斯科", "新加坡", "迪拜", "孟买", "开罗", "内罗毕", "约翰内斯堡", "里约热内卢", "墨西哥城", "多伦多", "温哥华", "渥太华", "蒙特利尔", "布宜诺斯艾利斯", "利马", "圣保罗", "圣地亚哥", "伯尔尼", "布鲁塞尔", "阿姆斯特丹", "柏林", "慕尼黑", "罗马", "米兰", "马德里", "巴塞罗那", "斯德哥尔摩", "奥斯陆", "哥本哈根", "赫尔辛基", "布达佩斯", "华沙", "布拉格", "维也纳", "雅典", "伊斯坦布尔", "开普敦", "内罗毕", "卡拉奇", "孟买", "新德里", "曼谷", "吉隆坡", "雅加达", "悉尼", "墨尔本", "奥克兰"]

    # 随机生成中文籍贯列表
    random_jiguan = random.sample(jiguan_list, min(num_jiguan, len(jiguan_list)))
    return random_jiguan

def generate_chinese_address(num_address):
    # 定义地址的汉字列表
    address_list = ["广东省广州市", "浙江省杭州市", "江苏省南京市", "四川省成都市", "山东省青岛市", "福建省厦门市", "辽宁省大连市", "辽宁省沈阳市", "吉林省长春市", "黑龙江省哈尔滨市", "山东省济南市", "河南省郑州市", "山西省太原市", "青海省西宁市", "甘肃省兰州市", "宁夏银川市", "新疆乌鲁木齐市", "内蒙古呼和浩特市", "江西省南昌市", "安徽省合肥市", "广西南宁市", "西藏拉萨市", "贵州省贵阳市", "云南省昆明市", "海南省海口市", "香港特别行政区", "澳门特别行政区", "台北市", "悉尼", "伦敦", "纽约", "东京", "巴黎", "莫斯科", "新加坡", "迪拜", "孟买", "开罗", "内罗毕", "约翰内斯堡", "里约热内卢", "墨西哥城", "多伦多", "温哥华", "渥太华", "蒙特利尔", "布宜诺斯艾利斯", "利马", "圣保罗", "圣地亚哥", "伯尔尼", "布鲁塞尔", "阿姆斯特丹", "柏林", "慕尼黑", "罗马", "米兰", "马德里", "巴塞罗那", "斯德哥尔摩", "奥斯陆", "哥本哈根", "赫尔辛基", "布达佩斯", "华沙", "布拉格", "维也纳", "雅典", "伊斯坦布尔", "开普敦", "内罗毕", "卡拉奇", "孟买", "新德里", "曼谷", "吉隆坡", "雅加达", "悉尼", "墨尔本", "奥克兰"]

    # 随机生成中文地址列表
    random_address = random.sample(address_list, min(num_address, len(address_list)))
    return random_address

def generate_json_fields(num_fields):
    fields = ["name", "address", "jiguan", "姓名", "地址", "籍贯", "fld1", "fld2", "fld3", "fld4", "字段1", "字段2", "字段3", "字段4"]
    random_fields = random.sample(fields, min(num_fields, len(fields)))
    return random_fields

def generate_json_data(num_records, chinese_names, chinese_jiguan, chinese_address, fields):
    data = []
    for _ in range(num_records):
        record = {}
        for field in fields:
            if field == "name" or field == "姓名":
                record[field] = random.choice(chinese_names)
            elif field == "address" or field == "地址":
                record[field] = random.choice(chinese_address)
            elif field == "jiguan" or field == "籍贯":
                record[field] = random.choice(chinese_jiguan)
            else:
                record[field] = random.choice(chinese_address)
        data.append(record)
    return data

def main():
    # 创建命令行参数解析器
    parser = argparse.ArgumentParser(description="Generate random Chinese names, native places, and addresses.")
    parser.add_argument("-n", "--num_names", type=int, default=67, help="Number of Chinese names to generate")
    parser.add_argument("-j", "--num_jiguan", type=int, default=59, help="Number of native places (Jiguan) to generate")
    parser.add_argument("-a", "--num_address", type=int, default=97, help="Number of Chinese addresses to generate")
    parser.add_argument("-r", "--num_records", type=int, default=2000, help="Number of JSON records to generate")
    parser.add_argument("-f", "--num_fields", type=int, default=3, help="Number of fields in JSON record")
    parser.add_argument('--output_file', type=str, default='output.json', help='Output JSON file')

    args = parser.parse_args()

    # 生成中文姓名、籍贯和地址
    chinese_names = generate_chinese_names(args.num_names)
    chinese_jiguan = generate_chinese_jiguan(args.num_jiguan)
    chinese_address = generate_chinese_address(args.num_address)
    num_records = args.num_records
    fields = generate_json_fields(args.num_fields)
    output_file = args.output_file

    data = generate_json_data(num_records, chinese_names, chinese_jiguan, chinese_address, fields)
    
    with open(output_file, 'w', encoding='utf-8') as file:
        json.dump(data, file, ensure_ascii=False, indent=2)

if __name__ == "__main__":
    main()
