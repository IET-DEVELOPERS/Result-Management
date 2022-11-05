const mongoose = require("mongoose");

const StudSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  rollNo: {
    type: String,
    required: true,
  },
  enrlNo: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  sem: {
    type: Number,
    required: true,
  },
  branch: {
    type: String,
    required: true,
  },
});

const Student = mongoose.model("Student", StudSchema);

module.exports = Student;
