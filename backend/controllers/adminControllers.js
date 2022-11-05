const Admin=require('../models/adminModel');
const asyncHandler = require('express-async-handler');
const bcrypt=require('bcryptjs');
const registerAdmin=asyncHandler ( async (req,res)=>{
    
    let name=req.body.name
    let email=req.body.email
    let password=req.body.password
    
    if(!name || !email  || !password){
        res.status(400);
        throw new Error("Please Enter all the fields");
    }

  const adminExists = await Admin.findOne({ email: email });
  if (adminExists) {
    res.status(400);
    throw new Error("admin already exists");
  }

  const salt = await bcrypt.genSalt(10);
  password = await bcrypt.hash(password, salt);

  const admin = await Admin.create({
    name,
    email,
    password,
  });

  if (admin) {
    res.status(201).json(admin);
   }else{
        res.status(400);
        throw new Error("Cant Create Admin");
   }
})
module.exports={registerAdmin};