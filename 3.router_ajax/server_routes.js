const express=require('express')
const app=express()
const todoroute=require('./routes/todos')
app.use(express.json())
app.use('/public',express.static(__dirname+'/public'))

app.use(express.urlencoded({extended:true}))
app.use('/todoroutes',todoroute)
app.listen(4444,()=>{
    console.log("started")
})