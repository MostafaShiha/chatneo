const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  username: String,
  password: String,
  // Add other fields as necessary
});

module.exports = mongoose.model('User', UserSchema);
