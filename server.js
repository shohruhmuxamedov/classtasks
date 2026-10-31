require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");
const routes = require("./routes");
const errorHandler = require("./middlewares/errorHandler");

const app = express();
connectDB()

app.use(express.json());

app.use("/", routes);
app.use((req, res) => {
  res.status(404).json({ message: "Yo'l topilmadi" });
});
app.use(errorHandler);

const PORT = process.env.PORT || 3000;

connectDB().then(() => {
  app.listen(PORT, () => console.log(`Server ${PORT}-portda ishlamoqda`));
});
