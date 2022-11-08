const express = require("express");
const { addResult } = require("../controllers/resultControllers");
const router = express.Router();

router.post("/addRes/:rno", addResult);

module.exports = router;
