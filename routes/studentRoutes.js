const express = require("express");

const {
  viewResult,
  viewAllResult,
  addStudent,
  allStudents,
  savepdf,
} = require("../controllers/studentControllers");
const { verifyToken } = require("../middlewares/verifyToken");
const router = express.Router();

router.post("/view", viewResult);
router.post("/viewAll", viewAllResult);
router.post("/save", savepdf);
router.post("/addnew", verifyToken, addStudent);
//localhost:5050/api/student/all/?sem=4&branch=CS
router.get("/all", verifyToken, allStudents);

module.exports = router;
