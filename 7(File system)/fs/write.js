const fs = require('fs');

fs.writeFile('newfile.txt','I am creating this new file',(err,data)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log("New file created");
    }
})