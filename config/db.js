// config/db.js
const mongoose = require('mongoose');
require("dotenv").config()
const database=process.env.mongodb_URI

const connectDB = mongoose.connect(database)

 
module.exports = connectDB;