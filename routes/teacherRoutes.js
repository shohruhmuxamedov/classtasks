const router = require("express").Router();
const ctrl = require("../controllers/teacherController");
const validate = require("../middlewares/validate");
const validateObjectId = require("../middlewares/validateObjectId");
const { createTeacherSchema, updateTeacherSchema } = require("../validators/teacherValidator");

router.get("/", ctrl.getTeachers);
router.get("/:id", validateObjectId, ctrl.getTeacher);
router.post("/", validate(createTeacherSchema), ctrl.createTeacher);
router.put("/:id", validateObjectId, validate(updateTeacherSchema), ctrl.updateTeacher);
router.delete("/:id", validateObjectId, ctrl.deleteTeacher);

module.exports = router;
