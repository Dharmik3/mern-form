const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "must have a name"],
    trim: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
    minlength: [8, "A password must have atleast 8 character"],
  },
});

const User = mongoose.model("User", userSchema);
module.exports = User;
