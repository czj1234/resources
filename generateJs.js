import('./list.js');
var db = new Sdb("localhost",11810,"sdbadmin","sdbadmin");

var findCLName = "ls.SNAPSHOT_CL";
var findCSName = "ls.SNAPSHOT_CS";
var findCATAName = "ls.SNAPSHOT_CATA";
var findDomainName = "ls.list_cs";

println('var db = new Sdb("localhost",11810,"admin","adminecm");');
println('var beginID = 0;');

var curID = 0;

function tryCatch(cmd, catchMsg) {
    var retStr = "try{ ";
    retStr += cmd;
    retStr += " } catch(e) { ";
    retStr += catchMsg;
    retStr += " };";
    return retStr;
}


function generateCreateCLJs(ARRAY) {
    for (let i = 0 ;i < ARRAY.length; i++) {
        let newClInfo = ARRAY[i];
        let mainCL = newClInfo.MainCLName;
        let lastCL = newClInfo.LastSubCLName;
        let curCL = newClInfo.NewSubCLName;
        let lowBound = newClInfo.LowBound;
        let upBound = newClInfo.UpBound;
        let maincsName = mainCL.split('.')[0];
        let mainclName = mainCL.split('.')[1];
        let curcsName = curCL.split('.')[0];
        let curclName = curCL.split('.')[1];
        
        // 获取 shardingkey
        let cursor = db.exec('select ShardingKey from ' + findCATAName + ' where Name = "' + lastCL + '" limit 1');
        let ShardingKey;
        while(cursor.next()) {
            ShardingKey = cursor.current().toObj().ShardingKey;
        }
        cursor.close();
        if (null == ShardingKey) {
            println('   // [ERROR] Failed to get ShardingKey from ' + lastCL);
        }
        // 获取 bound key,上下分界都一样
        cursor = db.exec('select t1.CataInfo.SubCLName,t1.CataInfo.LowBound as bound from (select CataInfo from ' + findCATAName + ' where Name = "' + mainCL + '" split by CataInfo) as t1 where t1.CataInfo.SubCLName = "' + lastCL + '" limit 1');
        let boundKey;
        while(cursor.next()) {
            boundKey = Object.keys(cursor.current().toObj().bound);
        }
        cursor.close();
        if (null == boundKey) {
            println('   // [ERROR] Failed to get bound from ' + mainCL);
        }
        // 获取数据域
        cursor = db.exec('select t1.Domain as domainName from ' + findDomainName + ' as t1 where t1.Name = "' + lastCL.split('.')[0] + '" limit 1');
        let domainName;
        while(cursor.next()){
            domainName = cursor.current().toObj().domainName;
        }
        cursor.close();
        if (null == domainName) {
            println('   // [ERROR] Failed to get domainName from ' + lastCL);
        }
        println('// -------------------------------------------------------------');
        println('if (beginID <= ' + curID + ') {');
        println('println("[ID: ' + curID + ']")');
        curID++;
        println('try{');
        println('   ' + tryCatch('db.createCS("' + curcsName + '", {Domain: "' + domainName + '"})', 'println("[ERROR] Failed to createCS ' + curcsName + ', error: " + e); throw e;'));
        println('   ' + tryCatch('db.getCS("' + curcsName + '").createCL("' + curclName + '", {ShardingType: "hash", ShardingKey: ' + JSON.stringify(ShardingKey) + ', ReplSize: 2, AutoSplit: true, Compressed: true})', 'println("[ERROR] Failed to createCL ' + curCL + ', error: " + e); throw e;'));
        // 挂载
        println('   ' + tryCatch('db.getCS("' + maincsName + '").getCL("' + mainclName + '").attachCL("' + curCL + '",  {LowBound: {' + boundKey + ': "' + lowBound + '"}, UpBound: {' + boundKey + ': "' + upBound + '"}})', 'println("[ERROR] Failed to attachCL ' + curCL + ', error: " + e); throw e;'));
        println('} catch(e) { throw e; }')
        println('}')
    }
}

generateCreateCLJs(array)
