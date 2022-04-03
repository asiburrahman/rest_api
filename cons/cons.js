const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/students-api").then(()=> console.log(`Server connection successfull`)).catch(()=>{
    console.log(`Server is not conneted`);
});


// const student = mongoose.Schema(
//     {

//     }
// )