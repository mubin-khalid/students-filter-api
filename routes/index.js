const express = require("express");
const router = express.Router();
const studentRouter = require("./students");
/* GET home page. */
router.get("/", function (req, res, next) {
  res.send("<p>HTML Data</p>");
});
router.use("/students", studentRouter);

module.exports = router;
