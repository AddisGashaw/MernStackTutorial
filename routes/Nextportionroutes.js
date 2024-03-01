// This line imports the express module,
// which is a popular web framework for Node.js

const express = require("express");
//This line creates a new instance of an Express router.
//Routers are used to define routes for handling HTTP requests
const router = express.Router();
//get all students
router.get("/", (req, res) => {
  // this line sends a response with the text or json to the client.
  res.json({ message: "Ethio computer students list" });
});

// get a single student by ID
router.get("/:id", (req, res) => {
  res.json({ message: "find student by id" });
});
//add new student
router.post("/", (req, res) => {
  res.json({ message: "create student" });
});
//delete student
router.delete("/:id", (req, res) => {
  res.json({ message: "delete student" });
});
//update student profile
router.put("/:id", (req, res) => {
  res.json({ message: "update student" });
});

//This line exports the router object so that it can be used in other parts of the application.
//It allows other files to import and use this router by using the require function.
module.exports = router;
