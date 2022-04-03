const mongoose = require("mongoose");
const validator = require("validator");

const studentSchema = mongoose.Schema({
    name:{
        type: String,
        required: true,
        minlength: 3
    },
    email:{
        type:String,
        required:true,
        unique:[true, "Email is already present"],
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error ("Envalid Email")
            }
        }
    },

    phone:{
        type: String,
        min: 10,
        required: true,
        unique: true

    },
    address:{
        type: String,
        required:true
    }
})


// create a new collection with model

const Student = new mongoose.model("Student", studentSchema);

module.exports= Student;