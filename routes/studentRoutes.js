const router = require("express").Router();
const ctrl = require("../controllers/studentController");
const validate = require("../middlewares/validate");
const validateObjectId = require("../middlewares/validateObjectId");
const { createStudentSchema, updateStudentSchema } = require("../validators/studentValidator");

router.get("/", ctrl.getStudents);
router.get("/stats", ctrl.getStats);
router.get("/:id", validateObjectId, ctrl.getStudent);
router.post("/", validate(createStudentSchema), ctrl.createStudent);
router.put("/:id", validateObjectId, validate(updateStudentSchema), ctrl.updateStudent);
router.delete("/:id", validateObjectId, ctrl.deleteStudent);

module.exports = router;
