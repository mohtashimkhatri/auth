const express = require("express");
const CourseController = require("../Controller/CourseController");
const courseRoute = express();
courseRoute.get("/", CourseController.get);
courseRoute.post("/", CourseController.add);
courseRoute.delete("/:id", CourseController.del);
module.exports = courseRoute;
