var http=require('http');
var fs=require('fs');

http.createServer(function(req,res){
    fs.readFile('deneme.html', function(err, data){
        res.writeHead(200,{'Content-Type':'text/html'});
        var isim="Gokce"
        res.write(data);
        res.write("<script> document.getElementById('yazi').innerHTML = '"+isim+"' ;</script>");
        return res.end();
});

}).listen(8080);