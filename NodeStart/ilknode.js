var http = require('http');
var x = require('./ilkmodule')
http.createServer(function(req, res){
    res.writeHead(200,{'Content-Type':'text/html'});
    res.write('<h1> Tarih-Saat </h1>')
    res.write('<p>Su anki saat ve tarih:</p>');
    res.write("<p id='saat'></p>")
    setInterval(function(){
        res.write("<script> document.getElementById('saat').innerHTML = '"+ x.Zaman()+ "' ; </script>");
    } ,1000);

}).listen(8080);