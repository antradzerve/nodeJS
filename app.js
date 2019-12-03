// import http from 'http';
const http = require('http');

const hostname = '127.0.0.1';
const port = 1234;

const server = http.createServer(
    function(request, response) {
        response.statusCode = 200;
        response.setHeader('Content-Type','text/plain');
        response.end('Hello World! \n');
    }
)

server.listen(port, hostname, 
    function() {
        console.log(`Well, something's happening here at http://${hostname}:${port}/`);
    });

