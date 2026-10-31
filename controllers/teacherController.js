const Teacher = require("../models/Teacher");
exports.getTeachers = async (req, res, next) => {
  try {
    const teachers = await Teacher.find();
    res.status(200).json(teachers);
  } catch (error) {
    next(error);
  }
};
exports.getTeacher = async (req, res, next) => {
  try {
    const teacher = await Teacher.findById(req.params.id);
    if (!teacher) return res.status(404).json({ message: "O'qituvchi topilmadi" });
    res.status(200).json(teacher);
  } catch (error) {
    next(error);
  }
};
exports.createTeacher = async (req, res, next) => {
  try {
    const teacher = await Teacher.create(req.body);
    res.status(201).json(teacher);
  } catch (error) {
    next(error);
  }
};
exports.updateTeacher = async (req, res, next) => {
  try {
    const teacher = await Teacher.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!teacher) return res.status(404).json({ message: "O'qituvchi topilmadi" });
    res.status(200).json(teacher);
  } catch (error) {
    next(error);
  }
};
exports.deleteTeacher = async (req, res, next) => {
  try {
    const teacher = await Teacher.findByIdAndDelete(req.params.id);
    if (!teacher) return res.status(404).json({ message: "O'qituvchi topilmadi" });
    res.status(200).json({ message: "O'qituvchi o'chirildi" });
  } catch (error) {
    next(error);
  }
};
