const express = require("express");
const studentRoute = express.Router();

const {
  createStudent,
  getStudentById,
  updateStudent,
  deleteStudent
} = require("../controllers/studentController");


studentRoute.post("/new-student", createStudent);
studentRoute.get("/get-student/:id", getStudentById);
studentRoute.put("/update-student/:id", updateStudent);
studentRoute.delete("/delete-student/:id", deleteStudent);

module.exports = studentRoute;
