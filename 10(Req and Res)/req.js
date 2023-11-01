const express = require('express');

const app = express();

app.get('/',(req,res)=>{
console.log(req);
res.send("Response sent");
console.log(req.is('html'));
}); 

app.listen(5000,()=>{
console.log("app listening on 5000");
})