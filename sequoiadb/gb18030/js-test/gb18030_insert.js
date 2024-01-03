( function()
{
   import( "gb18030/gb18030_test_data_3fields.js" );
   import( "gb18030/gb18030_test_data_6fields.js" );
   import( "gb18030/gb18030_test_data_10fields.js" );

   var csName = "test_GB18030";
   var clName = "chinese_gb18030_test";
   db = new Sdb( "localhost", 11810 );
   // insert 2000*2000 records
   db.setCharsets( "GB18030" );
   db.createCS(csName).createCL(clName, { ShardingKey: { _id: 1 }, AutoSplit: true } );
   var coll = db.getCS(csName).getCL(clName);
   var total_cost = 0;
   var rounds = 3;
   for( var count = 0; count < rounds; count++ )
   {
      var start = Date.now();
      for( var i = 0; i < 500; ++i )
      {
         coll.insert( gb18030_3fields );
      }
      var end = Date.now();
      println( "Cost " + ( end - start ) + " microseconds for " + count + " round" );
      println( "start: " + start + ",end:" + end );
      total_cost += ( end - start );
//      coll.remove();
   }
   println( "Total cost:" + total_cost + ",average cost:" + ( total_cost / rounds ) );
   db.dropCS(csName);
}() );
