const mongoose = require('mongoose');

//create schema
const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  role: { type: String, required: true },
  email: { type: String, required: true },
  phoneNumber: { type: Number, required: true },
});

const User = mongoose.model('User', userSchema);

//export user module
module.exports = User;