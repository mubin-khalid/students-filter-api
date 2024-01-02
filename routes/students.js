const router = require("express").Router();
const studentsController = require("../controllers/students.js");
router.get("/", studentsController.index.bind(studentsController));
module.exports = router;
