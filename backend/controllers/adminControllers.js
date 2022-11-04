const Admin=require('../models/adminModel');
const asyncHandler = require('express-async-handler')
const registerAdmin=asyncHandler ( async (req,res)=>{
        const admin=await Admin.create(req.body);
        if(admin){
        res.status(201).json(admin);
        }else{
            throw new Erro("cant create admin!!");
        }      
})
module.exports={registerAdmin};