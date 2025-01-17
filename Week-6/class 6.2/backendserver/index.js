const express=require("express");
const app=express() 
const cors = require("cors");  //cross origin resource sharing 
app.use(cors());    //cors r used to establish connection btween client and server.
const TODOS = [{
    id: 1,
    title: "Go to Gym",
    description: "Hit the gym from 7-9"
}, {
    id: 2,
    title: "Go to eat food",
    description: "Eat food from from 9-11"
}]


app.get("/todo" ,(req,res)=>{
    const id=parseInt(req.query.id)
    const todo=TODOS.find((x)=>x.id===id)
    return res.json(todo);
})

app.listen(3001)