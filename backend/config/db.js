const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const connection = await mongoose.connect(process.env.MONGOURI);
    console.log("mongoose connected successfully!!");
  } catch (err) {
    console.log(err);
  }
};

module.exports = connectDB;
