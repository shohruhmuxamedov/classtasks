const Joi = require("joi");

const objectId = Joi.string().hex().length(24);

const createStudentSchema = Joi.object({
  fullname: Joi.string().min(3).max(100).required(),
  age: Joi.number().integer().min(1).max(100).required(),
  email: Joi.string().email().required(),
  course: Joi.string().min(2).max(100).required(),
  isActive: Joi.boolean(),
  teacher: objectId,
});

const updateStudentSchema = Joi.object({
  fullname: Joi.string().min(3).max(100),
  age: Joi.number().integer().min(1).max(100),
  email: Joi.string().email(),
  course: Joi.string().min(2).max(100),
  isActive: Joi.boolean(),
  teacher: objectId,
}).min(1);

module.exports = { createStudentSchema, updateStudentSchema };
