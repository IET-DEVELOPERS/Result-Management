const express = require("express");
const {viewResult,addStudent,allStudents} = require("../controllers/studentControllers");
const { verifyToken } = require("../middlewares/verifyToken");
const router = express.Router();

router.get("/view/:rollNo", viewResult);
router.post("/addnew",verifyToken,addStudent);
http://localhost:5050/api/student/all/?sem=4&branch=CS
router.get("/all",verifyToken,allStudents);

module.exports = router;
