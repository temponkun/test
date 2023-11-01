const fs = require('fs');

fs.appendFile('test.txt','\nThis is the data i will append in the file',(err,_)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log("Data entry done");
    }
})