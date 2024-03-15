const express = require("express");
const cors = require("cors");
const mongoose=require("mongoose")
const dbConfig=require("./app/config/db.config")
const app = express();




var corsOptions = {
  origin: "http://localhost:3001"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());
//BEGIN ADD THE CODE NEXT (2)
const db = require("./app/models");
const Role = db.role;
//you can use this one for connection
//db.mongoose.connect('mongodb://localhost:27017/BackEndTutorial')
// routes

require('./app/routes/auth.routes')(app);
require('./app/routes/user.routes')(app);

db.mongoose
  .connect(`mongodb://${dbConfig.HOST}:${dbConfig.PORT}/${dbConfig.DB}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Successfully connect to MongoDB.");
    initial();
  })
  .catch(err => {
    console.error("Connection error", err);
    process.exit();
  });
// END ADD THE CODE NEXT (2)



//Start ADD THE CODE NEXT (3)

// The initial() function appears to be a setup function that checks
// if the "Role" collection is empty and,
// if so, adds three roles ("user", "moderator", and "admin")
// to the collection using the Mongoose ORM.

async function initial() {
  try {
    //The Role.estimatedDocumentCount() method is called to get an approximate count of documents in the "Role" collection.
    //In the callback function, it checks if there was no error (!err) and 
                               //if the count is equal to zero (count === 0), indicating that the collection is empty.
    //If the conditions are met, three new Role documents are created with different names ("user", "moderator", and "admin") and saved to the collection using the .save() method.
    const count = await Role.estimatedDocumentCount();
    if (count === 0) {
      await new Role({ name: "user"}).save();
      await new Role({ name: "moderator" }).save();
      await new Role({ name: "admin" }).save();

      console.log("Added 'user', 'moderator', and 'admin' to the roles collection");
    }
  } catch (err) {
    console.error("Error:", err);
  }
}

//End ADD THE CODE NEXT (3)




// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// simple route
app.get("/", (req, res) => {
  //res.json({ message: "Welcome to backend" });
  res.send( "Welcome to backendd." );

});

// set port, listen for requests 
//process.env.PORT is a built in function for searching a free port 
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running at  http://localhost:${PORT}.`);
});