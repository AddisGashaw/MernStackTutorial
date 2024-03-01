//Models and Schemas
//..........Schema..........
//A schema is a blueprint or definition that defines
//the structure, properties, and constraints of the data
// stored in a database collection or table.
// It outlines the expected fields, their data types, default values, validation rules, and any relationships between entities.
//..........Models..........
//A model, in the context of Mongoose,
//is a JavaScript class that represents a collection in the MongoDB database.
// It provides an interface to interact with the collection, allowing you to perform CRUD operations,
// run queries, and define custom methods and statics on the model.

//lets create a schema and model under model folder

//_________database connection___________
//This line loads the dotenv module and calls the config() method
//to load environment variables from a .env file into the process.env object.
//This allows you to store configuration values in a separate file and access them using process.env.
require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const app = express();
app.use(express.json());
//This line imports the module located at the './routes/Nextportionroutes' path and
//assigns it to the studentsroute variable.
const studentsroute = require("./routes/fourthportionroute");

//routes
//This line associates the studentsroute router with the path '/api/ECstudents'.
//It means that any routes defined in the studentsroute router will be accessible under the '/api/ECstudents' path.
//For example, the '/api/ECstudents/' route defined in studentsroute will be accessible as '/api/ECstudents/'.
app.use("/api/ECstudents", studentsroute);

//connect to database
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("database connected successfully");
  })
  .catch((err) => {
    console.log(err);
  });

//listen for request
app.listen(process.env.PORT, () => {
  console.log("listen at port", process.env.PORT);
});

//---------------------------------//
//  THE FIRST STEP IS INSTALL MONGOOSE
//   npm i mongoose
//  THE SECOND STEP IS USE MONGOOSE
//---------------------------------//

//Mongoose is an Object Data Modeling (ODM) library for MongoDB and Node.js.
//It provides a simple and flexible way to interact with MongoDB databases by providing a higher-level, schema-based approach to model and manipulate data

//Object Data Modeling (ODM) is a technique used in the context of
//NoSQL databases, such as MongoDB, to map objects in an application to documents in a database.
// It is analogous to Object-Relational Mapping (ORM) used in relational databases.




//-----------but putting the controllers in thise page is not good since this route handler is used for only 
//for handling routes not executions so we need to create a controller folder