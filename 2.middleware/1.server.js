const express=require('express')
const app=express()
app.use('/xyz',express.static(__dirname+'/public'))
function m1(req,res,next)
{
    console.log("pre m1")
    next()
    console.log("post m1")
}
function m2(req,res,next)
{
    console.log("pre m2")
    next()
    console.log("post m2")
}
function m3(req,res,next)
{
    console.log("pre m3")
    next()
    console.log("post m3")
}

app.get('/middle',m1,m2,m3,(req,res)=>{
    console.log("completed")
    res.send("finished")
})
app.get('/hello',(req,res)=>{
    let person1="Guest"
    if(req.query.person) person1="himanshi"
    res.send(person1)
})


app.listen(4444,(req,res)=>{
    console.log("started")
})