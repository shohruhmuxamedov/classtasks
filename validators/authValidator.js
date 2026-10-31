const Joi = require("joi");

const registerSchema = Joi.object({
  fullname: Joi.string().min(3).max(100).required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(6).max(50).required(),
});

const loginSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required(),
});

const otpSchema = Joi.object({
  email: Joi.string().email().required(),
});

module.exports = { registerSchema, loginSchema, otpSchema };
