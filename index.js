var http = require('http');
var fs = require('fs');

var server = http.createServer();
server.on('request', function (request, response){
    
    if (request.method === 'GET' && request.url === '/h') {     
        response.setHeader("Content-Type", "text/html; charset=utf-8");   
        fs.readFile('./index.html', 'utf-8', function (err, data){
            response.write(data);                                      
            response.end();
        });    
            
    } else if (request.method === 'GET' && request.url === '/style.css') {
        response.setHeader("Content-Type", "text/css; charset=utf-8"); 
        fs.readFile('./style.css', 'utf-8', function (err, data) {
            response.write(data);       
            response.end();
        });
    
    } else {                                                    
        response.statusCode = 404;
        response.setHeader("Content-Type", "text/html; charset=utf-8");
        response.write('<h1>404: Zła ścieżka!</h1>');
        response.end();
    }
});

server.listen(8080);


/*var fs = require('fs');
var colors = require('colors');

fs.readFile('./tekst.txt', 'utf-8', function(err, data) {
    console.log('Dane przed zapisem!'.blue);
    console.log(data);
    fs.writeFile('./tekst.txt', 'A tak wyglądają po zapisie!', function(err) {
        if (err) throw err;
        console.log('Zapisano!'.blue);
        fs.readFile('./tekst.txt', 'utf-8', function(err, data) {
            console.log('Dane po zapisie'.blue)
            console.log(data);
        });
    });
});


var http = require('http');

var server = http.createServer();
server.on('request', function (request, response) {     
    response.write('<body>');        //tutaj coś się dzieje :)
    response.write('<h1>To jest nagłówek pierwszego stopnia</h1>');
    response.write('</body>');
    response.end();
});

server.listen(9000);    //server bedzie działał w trybie ciągłym




var http = require('http');

var server = http.createServer();

server.on('request', function (request, response) {
    //response.setHeader("Content-Type", "text/html; charset=utf-8");
    if (request.method === 'GET' && request.url === '/hello') {
        response.write('<h1>Hello World!</h1>');
        response.end();
    } else {
        response.statusCode = 404;
        response.write('<h1>404: Zła ścieżka!</h1>');
        response.end();
    }
});

server.listen(8080);*/
