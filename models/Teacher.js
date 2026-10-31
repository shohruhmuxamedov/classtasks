const mongoose = require("mongoose");

const teacherSchema = new mongoose.Schema(
  {
    fullname: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true, lowercase: true },
    subject: { type: String, required: true, trim: true },
    phone: { type: String, required: true, trim: true },
  },
  { timestamps: false } 
);

module.exports = mongoose.model("Teacher", teacherSchema);
