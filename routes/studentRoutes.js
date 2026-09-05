import express from "express";
const studentRoute = express.Router();

import {
  createStudent,
  getStudentById,
  updateStudent,
  deleteStudent
} from "../controllers/studentController.js";


studentRoute.post("/new-student", createStudent);
studentRoute.get("/get-student/:id", getStudentById);
studentRoute.put("/update-student/:id", updateStudent);
studentRoute.delete("/delete-student/:id", deleteStudent);

export default studentRoute;
