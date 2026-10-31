const Student = require("../models/Student");
const Teacher = require("../models/Teacher");
const teacherExists = async (id) => (id ? !!(await Teacher.exists({ _id: id })) : true);
exports.getStudents = async (req, res, next) => {
  try {
    const students = await Student.find().populate("teacher", "fullname email");
    res.status(200).json(students);
  } catch (error) {
    next(error);
  }
};
exports.getStats = async (req, res, next) => {
  try {
    const stats = await Student.aggregate([
      { $group: { _id: "$course", count: { $sum: 1 } } },
      { $project: { _id: 0, course: "$_id", count: 1 } },
      { $sort: { count: -1 } },
    ]);
    res.status(200).json(stats);
  } catch (error) {
    next(error);
  }
};
exports.getStudent = async (req, res, next) => {
  try {
    const student = await Student.findById(req.params.id).populate("teacher", "fullname email");
    if (!student) return res.status(404).json({ message: "Student topilmadi" });
    res.status(200).json(student);
  } catch (error) {
    next(error);
  }
};
exports.createStudent = async (req, res, next) => {
  try {
    if (!(await teacherExists(req.body.teacher))) {
      return res.status(404).json({ message: "Bunday o'qituvchi mavjud emas" });
    }
    const student = await Student.create(req.body);
    res.status(201).json(student);
  } catch (error) {
    next(error);
  }
};
exports.updateStudent = async (req, res, next) => {
  try {
    if (!(await teacherExists(req.body.teacher))) {
      return res.status(404).json({ message: "Bunday o'qituvchi mavjud emas" });
    }
    const student = await Student.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!student) return res.status(404).json({ message: "Student topilmadi" });
    res.status(200).json(student);
  } catch (error) {
    next(error);
  }
};
exports.deleteStudent = async (req, res, next) => {
  try {
    const student = await Student.findByIdAndDelete(req.params.id);
    if (!student) return res.status(404).json({ message: "Student topilmadi" });
    res.status(200).json({ message: "Student o'chirildi" });
  } catch (error) {
    next(error);
  }
};
