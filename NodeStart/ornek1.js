var http =require('http');
var url =require('url');
http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type':'text/html'});
    var kullanici= "gokce";
    var sifre ="123"
    var bilgi =url.parse(req.url,true).query;
    // res.write("Kullanici adi="+bilgi.username);
    // res.write("<br/>Sifre="+ bilgi.password);
    if(kullanici==bilgi.username && sifre==bilgi.password ){
        res.write("Kullanici adi ve sifre dogru!");
    }
    else{
        res.write("Girilen bilgiler yanlis!");
    }

    res.end();


}).listen(8080);