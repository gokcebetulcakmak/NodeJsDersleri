var http = require('http');
var url =require('url');
var fs =require('fs');
http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type':'text/html'});

    fs.readFile('deneme.html',function(err,data){
        if (err){
            res.writeHead(404,{'Content-Type':'text/html'});
            return res.end();
        }
        res.writeHead(200,{'Content-Type':'text/html'});
        res.write(data);
        return res.end();
    });

    var bilgi =url.parse(req.url,true).query;
    console.log(req.url);
    if(bilgi.ad && bilgi.soyad && bilgi.yemek){

        fs.appendFile('bilgi.txt'," Ad :"+ bilgi.ad +
        "\n Soyad :"+bilgi.soyad+
        "\n Favori Yemek :"+bilgi.yemek+
        "\n \n", 
        function(err){
        if(err) throw err;
        console.log("Yeni dosya oluşturuldu")
        return res.end();
    
    });
    }

}).listen(8080);