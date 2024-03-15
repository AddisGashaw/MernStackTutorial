// This line imports the express module,
// which is a popular web framework for Node.js
const express = require("express");
const {addnewstudent,getstudentbyId,getallstudents,deletestudent,updatestudent}=require("../controllers/studentcontrollers")
//This line creates a new instance of an Express router.
//Routers are used to define routes for handling HTTP requests

const router = express.Router();
//get all students


router.get("/", getallstudents);

// get a single student by ID
router.get("/:id", getstudentbyId);
//add new student
//first we need to call the controller at the top
router.post("/", addnewstudent);
//delete student
router.delete("/:id", deletestudent);
//update student profile
router.put("/:id", updatestudent);

//This line exports the router object so that it can be used in other parts of the application.
//It allows other files to import and use this router by using the require function.
module.exports = router;
