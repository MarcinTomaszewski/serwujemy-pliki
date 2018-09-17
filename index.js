var http = require('http');
var fs = require('fs');

var server = http.createServer();
server.on('request', function (request, response){
    response.setHeader("Content-Type", "text/html; charset=utf-8");
    if (request.method === 'GET' && request.url === '/h') {        
        fs.readFile('./index.html', 'utf-8', function (err, data){
            console.log(data);                                      //mam problem z wysłaniem zawartości pliku index.html, zeby wyświetlił się na stronie po podaniu url. Wyświetla się w consoli ale nie w oknie przeglądarki. Jakieś wskazówki mile widziane :)
        });    
            
        response.end();
    } else {                                                    //i taki sam problem z wyświetleniem zdjęcia w oknie przeglądarki. 
        response.statusCode = 404;
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
