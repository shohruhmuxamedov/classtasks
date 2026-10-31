const router = require("express").Router();

router.use("/", require("./authRoutes")); 
router.use("/teachers", require("./teacherRoutes"));
router.use("/students", require("./studentRoutes"));

module.exports = router;
