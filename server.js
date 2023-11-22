//import
const express = require('express');
const bodyParser = require("body-parser");
const connectDB = require("./config/db");
const userRoutes = require("./rauter/userroute");

const app = express();
const PORT = process.env.PORT || 7000;



//route for welcom page

app.use(bodyParser.json());
app.get("/",(req,res)=>{
  res.send("<h1>Welcome to the API</h1>");
})


app.use('/api', userRoutes);

//listen server

app.listen(PORT, async () => {
  try {
    await connectDB
    console.log("DB connected Successfully")
  }
  catch (err) {
    console.error(err.message)
    process.exit(1)
  }
  console.log(`Server is running on port ${PORT}`);
});