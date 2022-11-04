const express=require('express');
const { registerAdmin } = require('../controllers/adminControllers');
const router=express.Router();

router.post('/register',registerAdmin);

module.exports=router;
