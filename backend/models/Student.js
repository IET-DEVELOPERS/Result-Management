const mongoose = require("mongoose");

const StudSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    default: "Test",
  },
  rollNo: {
    type: String,
    required: true,
  },
  enrlNo: {
    type: String,
    required: true,
    default: "Test",
  },
  email: {
    type: String,
    required: true,
    default: "Test",
  },
  sem: {
    type: Number,
    required: true,
    default: "Test",
  },
  branch: {
    type: String,
    required: true,
    default: "Test",
  },
});

const Student = mongoose.model("Student", StudSchema);

module.exports = Student;