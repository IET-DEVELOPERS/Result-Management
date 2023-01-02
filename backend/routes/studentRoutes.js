const express = require("express");

const {
  viewResult,
  addStudent,
  allStudents,
  savepdf,
} = require("../controllers/studentControllers");
const { verifyToken } = require("../middlewares/verifyToken");
const router = express.Router();

router.post("/view", viewResult);
router.post("/save", savepdf);
router.post("/addnew", addStudent);
//localhost:5050/api/student/all/?sem=4&branch=CS
router.get("/all", allStudents);

module.exports = router;
