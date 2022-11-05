const express = require("express");
const { viewResult, addStudent } = require("../controllers/studentControllers");
const router = express.Router();

router.get("/view/:rollNo", viewResult);
router.post("/addnew", addStudent);

module.exports = router;
