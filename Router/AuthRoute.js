const express = require("express");
const AUthController = require("../Controller/AuthController");
const Route = express();
Route.post("/Signup", AUthController.Signup);
Route.post("/login", AUthController.login);

module.exports = Route;
