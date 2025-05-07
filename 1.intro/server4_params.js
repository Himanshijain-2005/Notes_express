const express=require("express")
const app=express()
app.get("/:city/:name",(req,res)=>{
    res.send(req.params.city + 'in ' + req.params.name)
})

app.listen(4444,()=>{
    console.log("sever started at http://http://localhost:4444  or http://127.0.0.1:4444")
})