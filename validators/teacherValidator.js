const Joi = require("joi");

const createTeacherSchema = Joi.object({
  fullname: Joi.string().min(3).max(100).required(),
  email: Joi.string().email().required(),
  subject: Joi.string().min(2).max(100).required(),
  phone: Joi.string().min(7).max(20).required(),
});

// Update da hamma maydon ixtiyoriy, lekin kamida bittasi bo'lishi kerak
const updateTeacherSchema = Joi.object({
  fullname: Joi.string().min(3).max(100),
  email: Joi.string().email(),
  subject: Joi.string().min(2).max(100),
  phone: Joi.string().min(7).max(20),
}).min(1);

module.exports = { createTeacherSchema, updateTeacherSchema };
