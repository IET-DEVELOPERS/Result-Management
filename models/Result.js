const mongoose = require("mongoose");

const ResultSchema = mongoose.Schema({
  studRollNo: {
    type: String,
    required: true,
    unique: true,
  },

  subject1: {
    type: Array,
  },
  subject2: {
    type: Array,
  },
  subject3: {
    type: Array,
  },
  subject4: {
    type: Array,
  },
  subject5: {
    type: Array,
  },
  subject6: {
    type: Array,
  },
  subject7: {
    type: Array,
  },
  compViva: {
    type: Array,
  },
  CGPA: {
    type: Number,
  },
});

const Result = mongoose.model("Result", ResultSchema);

module.exports = Result;
