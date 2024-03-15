const mongoose = require("mongoose");

const User = mongoose.model(
  "User",
  new mongoose.Schema({
    username: String,
    email: String,
    password: String,
    roles: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Role"
      }
    ]
  })
);

module.exports = User;







// mongoose.model(): 
    // This function is used to define a Mongoose model. 
    // It takes two arguments: the model name and the schema definition.

// "User": This is the name of the model.
    //  It is typically in singular form and will be used to access and manipulate user documents in MongoDB.

// new mongoose.Schema({ ... }):
    //  This code creates a new instance of the mongoose.Schema class, which defines the structure and properties of the user document.

// username: String, email: String, password: String: 

    // These fields represent the properties of a user document. Each property is defined with its name and the corresponding data type. 
    //In this case, all three properties are defined as String types.

// roles: [{ type: mongoose.Schema.Types.ObjectId, ref: "Role" }]:
    //  This field represents a user's roles. It is defined as an array of objects, 
    //  where each object has a type property indicating the data type (in this case, mongoose.Schema.Types.ObjectId) 
    //  and a ref property specifying the referenced model ("Role").