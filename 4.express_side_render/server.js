const express=require('express')
const app=express()
const todoroute=require('./routes/todo')
app.set('view engine','hbs')
app.set('views', 'views')
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use('/todos',todoroute)
app.listen(4444,()=>{
    console.log("started")
})