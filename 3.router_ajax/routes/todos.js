const route=require('express').Router()
let todos=[]
route.get('/',function(req,res)
{
    res.send(todos)
})
route.get('/messy',(req,res)=>{
    res.send("trying to create less mess")
})
route.post('/',function(req,res)
{
    todos.push({
        task:req.body.task
    })
    res.send(todos)
})

module.exports=route