const express = require('express');

const app = express();


app.get('/',(req,res,next)=>{
console.log("test");
next();
},
(req,res)=>{
res.send('<div><h1>test<h1></div>');
});


app.listen(5000,()=>{
console.log("port 5000");
})