const mongoose = require("mongoose");

const ResultSchema = mongoose.Schema({
  resNo: {
    type: Number,
  },
  studRollNo: {
    type: String,
    required: true,
  },

  subject1: {
    type: [String],
  },
  subject2: {
    type: [String],
  },
  subject3: {
    type: [String],
  },
  subject4: {
    type: [String],
  },
  subject5: {
    type: [String],
  },
  subject6: {
    type: [String],
  },
  subject7: {
    type: [String],
  },
  compViva: {
    type: [String],
  },
});

const Result = mongoose.model("Result", ResultSchema);

module.exports = Result;
