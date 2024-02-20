const express=require('express');
const app=express();

const port=3000;

app.get('/',(req,res)=>{
    res.send("Hell Team-1");
});
app.get('/sean',(req,res)=>{
    res.send("Hello Sean");
});

app.get('/waheed',(req,res)=>{
    res.send("Hello Waheed");
});

app.listen(port,()=>{
    console.log("Listening on port "+port);
});
