const buffer1 = Buffer.alloc(100);
const buffer2 = new Buffer('Test');
const buffer3 = Buffer.from([1, 2, 3, 4]);

// Writing data to Buffer
buffer1.write("this is a buffer program");

// Reading data from Buffer
const a = buffer1.toString('utf-8');
console.log(a);

// Check length of Buffer
console.log(buffer1.length);

// Copy buffer
const bufferSrc = new Buffer('ABC');
const bufferDest = Buffer.alloc(3);
bufferSrc.copy(bufferDest);

const Data = bufferDest.toString('utf-8');
console.log(Data);

// concatenate two buffer
const bufferOne = new Buffer('Buf');
const bufferTwo = new Buffer('fer');
const bufferThree = Buffer.concat([bufferOne, bufferTwo]);
console.log(bufferThree.toString());
