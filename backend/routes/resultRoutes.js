const express = require("express");
const { addResult } = require("../controllers/resultControllers");
const { verifyToken } = require("../middlewares/verifyToken");
const router = express.Router();

router.post("/addRes/:rno",verifyToken,addResult);

module.exports = router;
