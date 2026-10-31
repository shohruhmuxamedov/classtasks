const generateOtp = require("../utils/generateOtp");
const sendEmail = require("../utils/sendEmail");
exports.sendOtp = async (req, res, next) => {
  try {
    const { email } = req.body;
    const otp = generateOtp();

    await sendEmail({
      to: email,
      subject: "Tasdiqlash kodi",
      text: `Sizning tasdiqlash kodingiz: ${otp}`,
    });
    res.status(200).json({ message: "OTP emailga yuborildi" });
  } catch (error) {
    next(error);
  }
};
