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
});

const Syllabus = mongoose.model("Syllabus", SyllabusSchema);

module.exports = Syllabus;
