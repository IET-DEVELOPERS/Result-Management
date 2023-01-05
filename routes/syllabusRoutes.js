const express = require("express");
const {
  getSyllabusandStudent,
  addSyllabus,
} = require("../controllers/syllabusControllers");
const { verifyToken } = require("../middlewares/verifyToken");
const router = express.Router();

router.get("/getsyllabus/:rno", getSyllabusandStudent);
router.post("/addsyllabus", addSyllabus);

module.exports = router;
