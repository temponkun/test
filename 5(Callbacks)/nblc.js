const fs = require('fs');

fs.readFile('test.txt',(err,data)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log(data.toString());
    }
});
console.log("End");