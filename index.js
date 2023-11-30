const express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");
require("dotenv").config();
const courseRoute = require("./Router/CourseRouter");
const Route = require("./Router/AuthRoute");
app.use(express.json());
app.use(cors());
app.use("/course", courseRoute);
app.use("/auth", Route);
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(`Server Starting ${process.env.PORT} `);
    });
  })
  .catch((err) => {
    console.log("err", err);
  });
