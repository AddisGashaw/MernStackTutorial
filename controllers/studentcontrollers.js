const studentmodel = require("../models/studentmodel");
const StudentModel = require("../models/studentmodel");

//add new student

const addnewstudent=async (req,res)=>{
    const { name, age, email } = req.body;
  try {
    const student = await StudentModel.create({name, age, email});
    res.status(200).json(student);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

//lets add a new function ----get all students

const getallstudents=async (req,res)=>{
  try {
    const allstud = await StudentModel.find({});
    res.status(200).json(allstud);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}


//get student list by specific id 
const getstudentbyId=async (req,res)=>{
    const {id}=req.params
const studentforspecificid=await studentmodel.findById(id)
if (!studentforspecificid){
    return res.status(404).json({error:`no data found by ${id}`})
}
res.status(200).json(studentforspecificid)
}


//lets add delete function

const deletestudent=async (req,res)=>{
    const {id}=req.params
    const studentforspecificid=await studentmodel.findByIdAndDelete(id)
if (!studentforspecificid){
    return res.status(404).json({error:`no data found by ${id}`})
}
res.status(200).json(studentforspecificid)
}


//lets finally add update function
const updatestudent = async (req, res) => {
    const { id } = req.params;
    try {
      const studentForSpecificId = await studentmodel.findByIdAndUpdate(id, req.body, { new: true });
      if (!studentForSpecificId) {
        return res.status(404).json({ error: `No data found for ID: ${id}` });
      }
      res.status(200).json(studentForSpecificId);
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  };
   
  //\\
//   \\
//you can remove the { new: true } 
//option from the findByIdAndUpdate method. 
//By default, when the new option is not specified, 
//the method will return the original document before the update is applied.

// then export each functions
module.exports={addnewstudent,getstudentbyId,getallstudents,deletestudent,updatestudent}