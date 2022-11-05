const express = require("express");
const {
  viewResult,
  addStudent,
  allStudents,
} = require("../controllers/studentControllers");
const router = express.Router();

router.get("/view/:rollNo", viewResult);
router.post("/addnew", addStudent);
router.get("/all", allStudents);

module.exports = router;
