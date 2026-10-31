const router = require("express").Router();
const auth = require("../controllers/authController");
const otp = require("../controllers/otpController");
const protect = require("../middlewares/auth");
const validate = require("../middlewares/validate");
const { registerSchema, loginSchema, otpSchema } = require("../validators/authValidator");

router.post("/register", validate(registerSchema), auth.register);
router.post("/login", validate(loginSchema), auth.login);
router.get("/profile", protect, auth.getProfile);
router.post("/send-otp", validate(otpSchema), otp.sendOtp);

module.exports = router;
