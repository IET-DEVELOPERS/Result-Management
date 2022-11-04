const mongoose=require("mongoose");

const connectDB= async()=>{
    try {
    const connection=await mongoose.connect("mongodb+srv://ietdevelopers:iet111911@cluster0.hhmimpq.mongodb.net/?retryWrites=true&w=majority");
    console.log("mongoose connected successfully!!")
    } catch (err) {
        console.log(err);
    }  
}

module.exports=connectDB;