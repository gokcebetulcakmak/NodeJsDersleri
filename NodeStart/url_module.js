var url = require('url');
var adr="http://localhost:8080/giris.html?username=gokce&password=123";
var q = url.parse(adr,true);
console.log(q.host); //localhost:8080
console.log(q.pathname); //giris.html
console.log(q.search); //?username=gokce&password=123
console.log(q.query); //object{username:gokce, password:123}

var bilgi = q.query;
console.log(bilgi.username);
console.log(bilgi.password);