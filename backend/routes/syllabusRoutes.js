const express = require("express");
const { getSyllabusandStudent, addSyllabus } = require("../controllers/syllabusControllers");
const { verifyToken } = require("../middlewares/verifyToken");
const router = express.Router();

router.get("/getsyllabus/:rno",verifyToken,getSyllabusandStudent);
router.post("/addsyllabus",verifyToken,addSyllabus);

module.exports = router;
