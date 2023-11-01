const express = require('express');
const app = express();

app.get('/',(req,res)=>{
    res.send("You are on home page");
});

app.get('/about',(req,res)=>{
    res.send("You are now on about page");
});

app.listen(8000,()=>{
    console.log("App listening on 8000 port");
});