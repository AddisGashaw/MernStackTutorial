//This line loads the dotenv module and calls the config() method
//to load environment variables from a .env file into the process.env object. 
//This allows you to store configuration values in a separate file and access them using process.env.
require("dotenv").config();
const express = require("express");
const app = express();
//This line imports the module located at the './routes/Nextportionroutes' path and 
//assigns it to the studentsroute variable.
const studentsroute=require('./routes/Nextportionroutes')

//routes
//This line associates the studentsroute router with the path '/api/ECstudents'. 
//It means that any routes defined in the studentsroute router will be accessible under the '/api/ECstudents' path. 
//For example, the '/api/ECstudents/' route defined in studentsroute will be accessible as '/api/ECstudents/'.
app.use('/api/ECstudents',studentsroute)

//listen for request
app.listen(process.env.PORT, () => {
    console.log("listen at port", process.env.PORT);
  });