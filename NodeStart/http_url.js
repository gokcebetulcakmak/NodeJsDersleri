var http =require('http');
var url =require('url');
http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type':'text/html'});
    var bilgi =url.parse(req.url,true).query;
    res.write("Kullanici adi="+bilgi.username);
    res.write("<br/>Sifre="+ bilgi.password);
    res.end();


}).listen(8080);