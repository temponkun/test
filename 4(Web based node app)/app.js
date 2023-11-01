const http = require('http');

http.createServer((req,res)=>{
res.write('<html><body><h1>Hello</h1></body></html>');
//res.end();
}).listen(8000);

console.log('Open port 8000');