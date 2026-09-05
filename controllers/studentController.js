const studentModel = require("../model/studentModel");

//create student
const createStudent = async (req, res) => {
  try {
    const { name, regNo, email } = req.body;
    const student = await studentModel.create({ name, regNo, email });
    return res.status(201).json({
      message: "Student created successfully",
      data: student,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//GENERAL GET

const getAllStudents = async (req, res) => {
  try {
    const students = await studentModel.find();
    return res.status(200).json({
      message: "Students retrieved successfully",
      data: students,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getStudentById = async (req, res) => {
  try {
    const student = await studentModel.findById(req.params.id);
    if (!student) {
      return res.status(404).json({ message: "Student not found" });
    }
    return res.status(200).json({
      message: "Student retrieved successfully",
      data: student,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//UPDATE STUDENT
const updateStudent = async (req, res) => {
  try {
    const { name } = req.body;
    const student = await studentModel.findByIdAndUpdate(
      req.params.id,
      { name },
      { new: true },
    );
    if (!student) {
      return res.status(404).json({ message: "Student not found" });
    }
    return res.status(200).json({
      message: "Student updated successfully",
      data: student,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//DELETE STUDENT
const deleteStudent = async (req, res) => {
  try {
    const student = await studentModel.findByIdAndDelete(req.params.id);
    if (!student) {
      return res.status(404).json({ message: "Student not found" });
    }
    return res.status(200).json({
      message: "Student deleted successfully",
      data: student,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createStudent,
  getStudentById,
  updateStudent,
  deleteStudent,
};
