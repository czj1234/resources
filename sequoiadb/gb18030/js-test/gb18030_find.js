( function()
{
   import( "gb18030/english_test_data_3fields.js" );
   import( "gb18030/english_test_data_6fields.js" );
   import( "gb18030/english_test_data_10fields.js" );

   var csName = "test_GB18030";
   var clName = "chinese_GB18030";
   var indexName = "index_GB18030";
   var cs;
   var cl;
   function test_find ( coll, data_to_insert )
   {
      //Prepare data
      var total_cost = 0;
      for( var i = 0; i < 500; ++i )
      {
         coll.insert( data_to_insert );
      }
      // Find test
      var rounds = 3;
      for( var count = 0; count < rounds; count++ )
      {
         var start = Date.now();
         //var cursor = coll.find( { "字段2":{$gte: "河南省郑州市" }} ).hint( { "": indexName } );
         var cursor = coll.find();
   //      var cursor = coll.find( { "name":{$gte: "a" }} ).hint( { "": indexName } );
         while( cursor.next() )
         {
            continue;
         }
         cursor.close();
         var end = Date.now();
         total_cost += ( end - start );
         println("find cost:" + (end-start)+ " for " + count+ "rounds");
      }
      println( "Total find cost: " + total_cost + ",average cost:" + ( total_cost / rounds ) );
   }
   db = new Sdb( "localhost", 11810 );
   db.setCharsets( "GB18030" );
   var data_array = [english_3fields, english_6fields, english_10fields];
   cs = db.createCS( csName );
   for( var idx = 0; idx < data_array.length; idx++ )
   {
      cl = cs.createCL( clName, { ShardingKey: { _id: 1 }, AutoSplit: true } );
     // cl.createIndex( indexName, { "字段2": 1 } );
     // cl.createIndex( indexName, { "name": 1 } );
      test_find( cl, data_array[idx] );
      cs.dropCL( clName );
   }
   db.dropCS( csName );
}() );
