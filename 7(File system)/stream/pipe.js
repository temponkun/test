var fs = require("fs");
var readerStream = fs.createReadStream('test.txt');
var writerStream = fs.createWriteStream('output.txt');
readerStream.pipe(writerStream);
console.log("Program Ended. Data wrote in output.txt");
