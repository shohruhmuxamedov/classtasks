const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema(
  {
    fullname: { type: String, required: true, trim: true },
    age: { type: Number, required: true, min: 1 },
    email: { type: String, required: true, trim: true, lowercase: true },
    course: { type: String, required: true, trim: true },
    isActive: { type: Boolean, default: true },
    teacher: { type: mongoose.Schema.Types.ObjectId, ref: "Teacher" },
  },
  { timestamps: false } 
);

module.exports = mongoose.model("Student", studentSchema);
