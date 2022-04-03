const express = require("express")
const Student = require("../../cons/models/students")

// create a new router
const router = new express.Router();
//Create student registration
router.post("/student", async(req, res)=>{
    try {
        const User = new Student(req.body);
    const creatUser = await User.save();
    res.status(200).send(creatUser)
    } catch (error) {
        res.status(400).send(error)
    }
    
})

// Get student data
router.get("/student", async(req, res)=>{
    try {
        const result = await Student.find();
        res.send(result);
    } catch (error) {
        res.send(error);
    }
})

// Find studnet by Id
router.get("/student/:id", async(req, res)=>{
    try {
        const _id = req.params.id;
        const result = await Student.findById(_id);
        if(!result){
            return res.status(404).send();
        }else{
            res.send(result);
        }
        
    } catch (error) {
        res.status(500).send(error);
    }
})

// Delete student data by id
router.delete("/student/:id", async(req, res)=>{
    try {
        const _id = req.params.id;
        const result = await Student.findByIdAndDelete(_id);
        if(!result){
            return res.status(404).send();
        }else{
            res.send(result);
        }
        
    } catch (error) {
        res.status(500).send(error);
    }
})

// Update student by data
router.patch("/student/:id", async(req, res)=>{
    try {
        const _id = req.params.id;
        const result = await Student.findByIdAndUpdate(_id, req.body,{
            new:true,
        });
        if(!result){
            return res.status(404).send();
        }else{
            res.send(result);
        }
        
    } catch (error) {
        res.status(500).send(error);
    }
})

module.exports = router;
