const express = require('express');

const app = express();

app.get('/',(req,res)=>{
res.send("response");
//res.status(200);
//res.set('Content-Type','text/plain');
});

app.listen(8000,()=>{
});