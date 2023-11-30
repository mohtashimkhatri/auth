const SendResponse = require("../Helper/ResponseHelper");
const CourseModel = require("../model/CourseModel");

const CourseController = {
  get: async (req, res) => {
    try {
      const courses = await CourseModel.find();
      if (courses) {
        res.status(200).send(SendResponse(true, "data succesfully", courses));
      } else {
        res.status(500).send(SendResponse(false, "internale server err", null));
      }
    } catch (error) {
      res.status(500).send(SendResponse(false, "internale server err", null));
    }
  },
  add: async (req, res) => {
    const obj = req.body;
    const newCourse = new CourseModel(obj);
    const savedCourse = await newCourse.save();
    res
      .status(200)
      .send(SendResponse(true, "data send Succesfully", savedCourse));
  },
  del: async (req, res) => {
    try {
      const courseId = req.params.id;
      const deletedCourse = await CourseModel.findByIdAndDelete(courseId);
      if (!deletedCourse) {
        res.status(500).send(SendResponse(false, "data not found", null));
      }
      res.status(200).send(SendResponse(true, "deleted succesfully"));
    } catch (error) {}
  },
};
module.exports = CourseController;
