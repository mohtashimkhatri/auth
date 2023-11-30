const mongoose = require("mongoose");
const UserSchema = mongoose.Schema({
  UserName: {
    type: String,
    required: [true, "User Name is required"],
  },
  Password: {
    type: String,
    required: [true, "User Name is required"],
  },
  Contact: {
    type: String,
  },
});
const AuthModel = mongoose.model("user", UserSchema);
module.exports = AuthModel;
