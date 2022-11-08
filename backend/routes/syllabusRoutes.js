const express = require("express");
const { getSyllabusandStudent } = require("../controllers/syllabusControllers");
const router = express.Router();

router.get("/getsyllabus/:rno", getSyllabusandStudent);

module.exports = router;
