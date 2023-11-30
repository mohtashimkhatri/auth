const mongoose = require("mongoose");
const courseSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  shortname: {
    type: String,
    required: true,
  },
  fee: {
    type: Number,
    required: true,
  },
  institutename: {
    type: String,
    required: true,
  },
});

const CourseModel = mongoose.model("Course", courseSchema);
module.exports = CourseModel;
