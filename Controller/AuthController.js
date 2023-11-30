const SendResponse = require("../Helper/ResponseHelper");
const AuthModel = require("../model/AuthModel");
const bscript = require("bcryptjs");
const JWt = require("jsonwebtoken");
const { findOne } = require("../model/CourseModel");

const AUthController = {
  Signup: async (req, res) => {
    try {
      let { UserName, Password, Contact } = req.body;
      let obj = { UserName, Password, Contact };
      const erraray = [];
      if (!obj.UserName) {
        erraray.push("UserName is Required");
      }
      if (!obj.Password) {
        erraray.push("Password is Required");
      }
      if (erraray.length > 0) {
        res.status(400).send(SendResponse(false, "Validation err", erraray));
        return;
      }
      let userExist = await AuthModel.findOne({ UserName: obj.UserName });
      if (userExist) {
        res
          .status(400)
          .send(SendResponse(false, "user ALready exist with this User"));
      }
      obj.Password = await bscript.hash(obj.Password, 10);
      let user = new AuthModel(obj);
      let result = await user.save();
      if (result) {
        res
          .status(200)
          .send(SendResponse(true, "user Created Succesfully", obj));
      }
    } catch (e) {
      res.status(500).send(SendResponse(false, "Internal Server Error", e));
    }
  },
  login: async (req, res) => {
    try {
      let { userName, password } = req.body;
      let obj = { userName, password };
      let existingUser = await UserModel.findOne({ userName: obj.userName });

      if (existingUser) {
        let corerctPassword = await bcrypt.compare(
          obj.password,
          existingUser.password
        );

        if (corerctPassword) {
          let token = jwt.sign({ ...existingUser }, process.env.SECRET_KEY);

          res.send(
            SendResponse(true, "Login Successfully", {
              token: token,
              user: existingUser,
            })
          );
        } else {
          res.send(SendResponse(false, "Password Not Match"));
        }
      } else {
        res.send(SendResponse(false, "User Not Found with this User Name"));
      }
    } catch (error) {}
  },
};
module.exports = AUthController;
