const mongoose = require("mongoose");

const SyllabusSchema = mongoose.Schema({
  sem: {
    type: Number,
    required: true,
  },
  branch: {
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

const Syllabus = mongoose.model("Syllabus", SyllabusSchema);

module.exports = Syllabus;
