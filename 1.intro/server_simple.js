const express=require('express')
const app=express()
app.get('/',(req,res)=>
{
    res.send("hello world")
})
app.get('/greet',(req,res)=>{
    let person="guest"
    if(req.query.person) person=req.query.person
    res.send("Good Morning" + person);
})
app.listen(4444,()=>{
    console.log("sever started at http://http://localhost:4444  or http://127.0.0.1:4444")
})

