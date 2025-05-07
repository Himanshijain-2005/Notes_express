const express=require("express")
const app=express()
app.get('/',(req,res)=>{
    res.send("Hello")
})

app.use(express.urlencoded({extended:true}))

app.get('/form',(req,res)=>{
    res.sendFile(__dirname+ "/files/form_post.html")
})

app.post('/greet',(req,res)=>{
    let person="Guest"
    if(req.body.person) person=req.body.person
    res.send("hello "+ person)
})

app.listen(4444,()=>{
    console.log("sever started at http://http://localhost:4444  or http://127.0.0.1:4444")
})