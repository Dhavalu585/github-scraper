// removed
var C = require('./src/');

var start = Date.now();
C.crawlUser('nelsonic', function(err, profile){
  console.log(profile);
  var end = Date.now();
  var time = end - start;
  console.log('       T: ' + time +' ms');
})
