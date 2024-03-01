const mongoose =require('mongoose')

const Schema=mongoose.Schema

// or you can destruct from mongoose as 
//----const {Schema}=mongoose

const studentschema=new Schema({
    name: {
        type: String,
        required: true
      },
      age: {
        type: Number,
        default: 18
      },
      email: {
        type: String,
        required: true,
        unique: true
      },
    //   createdAt: {
    //     type: Date,
    //     default: Date.now
    //   }
},{timestamps:true})

// then make a model based on the schema
module.exports = mongoose.model('student', studentschema);
