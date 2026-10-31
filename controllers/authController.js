const bcrypt = require("bcrypt");
const User = require("../models/User");
const generateToken = require("../utils/generateToken");
exports.register = async (req, res, next) => {
  try {
    const { fullname, email, password } = req.body;

    const exists = await User.findOne({ email });
    if (exists) {
      return res.status(409).json({ message: "Bu email bilan ro'yxatdan o'tilgan" });
    }

    const hashed = await bcrypt.hash(password, 10);
    const user = await User.create({ fullname, email, password: hashed });

    res.status(201).json({
      message: "Ro'yxatdan muvaffaqiyatli o'tdingiz",
      token: generateToken(user._id),
      user: { id: user._id, fullname: user.fullname, email: user.email },
    });
  } catch (error) {
    next(error);
  }
};
exports.login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(401).json({ message: "Email yoki parol noto'g'ri" });
    }

    res.status(200).json({
      message: "you entered successfully",
      token: generateToken(user._id),
    });
  } catch (error) {
    next(error);
  }
};
exports.getProfile = (req, res) => {
  res.status(200).json(req.user);
};
