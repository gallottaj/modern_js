var moment = require('moment');
var math = require('mathjs');

console.log(moment("20241031", "YYYYMMDD").fromNow());

console.log(moment().format('MMMM Do YYYY, h:mm:ss a'));

console.log(math.sqrt(-4));
