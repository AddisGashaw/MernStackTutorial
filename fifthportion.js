
require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const app = express();
app.use(express.json());
//This line imports the module located at the './routes/Nextportionroutes' path and
//assigns it to the studentsroute variable.
const studentsroute = require("./routes/fifthportionroute");

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

