const express = require("express");
const async = require("hbs/lib/async");
require("../cons/cons");
const Student = require("../cons/models/students")

const app = express();
const port = process.env.PORT || 3000;
app.use(express.json())

const studentRouter = require("./routers/student")


// we need register router
app.use(studentRouter)


// app.get("/student",(req, res)=>{
//     res.end("User")
// })
// app.post("/student", (req, res)=>{
//     //  res.send("Hello From the server side")
//     console.log(req.body);
//     const User = new Student(req.body);
//     User.save().then(()=>
//     {
//          res.status(200).send(User)
//         }).catch((err)=>
//      {
//          res.status(400).send(err)
//         })
// })


app.listen(port, ()=>{
    console.log(`connection successfull port number ${port}`);
})