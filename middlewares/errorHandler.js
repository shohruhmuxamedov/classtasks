const errorHandler = (err, req, res, next) => {
  console.error(err);
  if (err.code === 11000) {
    return res.status(409).json({ message: "Bu email allaqachon mavjud" });
  }

  if (err.name === "CastError") {
    return res.status(400).json({ message: "Noto'g'ri ma'lumot formati" });
  }

  if (err.name === "ValidationError") {
    return res.status(400).json({ message: err.message });
  }

  if (err.name === "JsonWebTokenError" || err.name === "TokenExpiredError") {
    return res.status(401).json({ message: "Token yaroqsiz yoki muddati tugagan" });
  }

  res.status(err.status || 500).json({ message: err.message || "Server xatosi" });
};

module.exports = errorHandler;
