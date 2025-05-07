const express=require("express")
const app=express()
app.get('/',(req,res)=>{
    res.send("Hello")
})
app.get('/greet',(req,res)=>{
    let person="Himanshi"
    if(req.query.person) person=req.query.person
    res.send("HELLO "+ person)
})
app.get('/form',(req,res)=>{
    res.sendFile(__dirname+ "/files/form_get.html")
})

app.listen(4444,()=>{
    console.log("sever started at http://http://localhost:4444  or http://127.0.0.1:4444")
})