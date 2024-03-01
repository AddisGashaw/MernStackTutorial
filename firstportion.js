require("dotenv").config();
//this line imports the express module and assigns it to the express constANT
//It allows us to use the functionalities provided by express
const express = require("express");
//this line creates a new express appplication by calling the express() function
//It returns an instance of the express application.
//that we can use to define routes and middlewares.
const app = express();
//this defines the a route handler for the HTTPget method on the root url ('/)
//It takes two parameters req(request) and res(response)
//the arrow function is the callback function.
app.get("/", (req, res) => {
  // this line sends a response with the text or json to the client.
  res.json({ message: "welcome to Ethio omputer" });
});

//this line of code starts the server and makes it listen on a specific port .
//the listen () function takes two params. the port number to listen on and an optional call back function.
// for listening we can do just like this but to make hidden some sensitive datas
//we need to add env(environment) file

//---------------previous code--------------------
// app.listen(3000,()=>{
//     console.log('listen at port 3000')
// })
//-----------------------------------

//first we need to install dotenv package using a command
//npm i dotenv
// then add ----require('dotenv').config() at the top
// create .env file and put the port and other sensitive data
//then call it


//--------------LISTENER FOR FIRST PORTION

// app.listen(process.env.PORT, () => {
//   console.log("listen at port", process.env.PORT);
// });



//////////NEXT PORTION API ROUTES///////////////

//POST METHOD

app.post("/saveall", (req, res) => {
    // this line sends a response with the text or json to the client.
    res.json({ message: "THIS IS POST METHOD" });
  });
  app.put("/updateall", (req, res) => {
    // this line sends a response with the text or json to the client.
    res.json({ message: "THIS IS PUT METHOD" });
  });
  app.delete("/deleteall", (req, res) => {
    // this line sends a response with the text or json to the client.
    res.json({ message: "THIS IS DELETE METHOD" });
  });

  app.listen(process.env.PORT, () => {
  console.log("listen at port", process.env.PORT);
});