const express=require('express');
const app=express();

const port=8080;

app.get('/',(req,res)=>{
    res.send("Hell Team-1");
});
app.get('/sean',(req,res)=>{
    res.send("Hello Sean");
});

app.get('/waheed',(req,res)=>{
    res.send("Waheed");
});

app.get('/josh',(req,res)=>{
    res.send("Josh");
});

app.get('/caden',(req,res)=>{
    res.send("Hello Caden");
});

app.get('/luke',(req,res)=>{
    res.send("Hello Luke");
});

app.listen(port,()=>{
    console.log("Listening on port "+port);
});
