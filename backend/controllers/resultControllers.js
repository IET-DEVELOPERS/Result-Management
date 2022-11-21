const Syllabus = require("../models/Syllabus");
const Student = require("../models/Student");
const asyncHandler = require("express-async-handler");
const Result = require("../models/Result");

const addResult = asyncHandler(async (req, res) => {
  const rno = req.params.rno;

  let studData;
  if (!req.params.rno || rno.length != 7) {
    res.status(400);
    throw new Error("Please Enter Correct Roll Number");
  } else {
    studData = await Student.findOne({ rollNo: rno });
  }

  const branch = studData.branch;

  const sem = studData.sem;

  const syllabus = await Syllabus.find({ branch: branch, sem: sem });

  const result = req.body;

  let totalCredits = 0;
  let score = 0;

  let subject1 = new Array();
  let subject2 = new Array();
  let subject3 = new Array();
  let subject4 = new Array();
  let subject5 = new Array();
  let subject6 = new Array();
  let subject7 = new Array();
  let cv = new Array();

  if (syllabus[0].subject1.length > 0) {
    subject1[0] = syllabus[0].subject1[0];
    subject1[1] = syllabus[0].subject1[1];

    totalCredits += syllabus[0].subject1[2] * 10;

    if (result.sub1theo.length > 0) {
      subject1[2] = result.sub1theo;
      if (result.sub1theo == "O") {
        score += syllabus[0].subject1[3] * 10;
      }
      if (result.sub1theo == "A+") {
        score += syllabus[0].subject1[3] * 9;
      }
      if (result.sub1theo == "A") {
        score += syllabus[0].subject1[3] * 8;
      }
      if (result.sub1theo == "B+") {
        score += syllabus[0].subject1[3] * 7;
      }
      if (result.sub1theo == "B") {
        score += syllabus[0].subject1[3] * 6;
      }
      if (result.sub1theo == "C") {
        score += syllabus[0].subject1[3] * 5;
      }
      if (result.sub1theo == "P") {
        score += syllabus[0].subject1[3] * 4;
      }
      if (result.sub1theo == "F") {
        score += syllabus[0].subject1[3] * 3;
      }
    }

    if (result.sub1prac.length > 0) {
      subject1[3] = result.sub1prac;
      if (result.sub1prac == "O") {
        score += syllabus[0].subject1[4] * 10;
      }
      if (result.sub1prac == "A+") {
        score += syllabus[0].subject1[4] * 9;
      }
      if (result.sub1prac == "A") {
        score += syllabus[0].subject1[4] * 8;
      }
      if (result.sub1prac == "B+") {
        score += syllabus[0].subject1[4] * 7;
      }
      if (result.sub1prac == "B") {
        score += syllabus[0].subject1[4] * 6;
      }
      if (result.sub1prac == "C") {
        score += syllabus[0].subject1[4] * 5;
      }
      if (result.sub1prac == "P") {
        score += syllabus[0].subject1[4] * 4;
      }
      if (result.sub1prac == "F") {
        score += syllabus[0].subject1[4] * 3;
      }
    }
  }

  if (syllabus[0].subject2.length > 0) {
    totalCredits += syllabus[0].subject2[2] * 10;

    subject2[0] = syllabus[0].subject2[0];
    subject2[1] = syllabus[0].subject2[1];

    if (result.sub1theo.length > 0) {
      subject2[2] = result.sub2theo;

      if (result.sub2theo == "O") {
        score += syllabus[0].subject2[3] * 10;
      }
      if (result.sub2theo == "A+") {
        score += syllabus[0].subject2[3] * 9;
      }
      if (result.sub2theo == "A") {
        score += syllabus[0].subject2[3] * 8;
      }
      if (result.sub2theo == "B+") {
        score += syllabus[0].subject2[3] * 7;
      }
      if (result.sub2theo == "B") {
        score += syllabus[0].subject2[3] * 6;
      }
      if (result.sub2theo == "C") {
        score += syllabus[0].subject2[3] * 5;
      }
      if (result.sub2theo == "P") {
        score += syllabus[0].subject2[3] * 4;
      }
      if (result.sub2theo == "F") {
        score += syllabus[0].subject2[3] * 3;
      }
    }

    if (result.sub2prac.length > 0) {
      subject2[3] = result.sub2prac;
      if (result.sub2prac == "O") {
        score += syllabus[0].subject2[4] * 10;
      }
      if (result.sub2prac == "A+") {
        score += syllabus[0].subject2[4] * 9;
      }
      if (result.sub2prac == "A") {
        score += syllabus[0].subject2[4] * 8;
      }
      if (result.sub2prac == "B+") {
        score += syllabus[0].subject2[4] * 7;
      }
      if (result.sub2prac == "B") {
        score += syllabus[0].subject2[4] * 6;
      }
      if (result.sub1prac == "C") {
        score += syllabus[0].subject2[4] * 5;
      }
      if (result.sub2prac == "P") {
        score += syllabus[0].subject1[4] * 4;
      }
      if (result.sub2prac == "F") {
        score += syllabus[0].subject2[4] * 3;
      }
    }
  }

  if (syllabus[0].subject3.length > 0) {
    subject3[0] = syllabus[0].subject3[0];
    subject3[1] = syllabus[0].subject3[1];

    totalCredits += syllabus[0].subject3[2] * 10;

    if (result.sub3theo.length > 0) {
      subject3[2] = result.sub3theo;
      if (result.sub3theo == "O") {
        score += syllabus[0].subject3[3] * 10;
      }
      if (result.sub3theo == "A+") {
        score += syllabus[0].subject3[3] * 9;
      }
      if (result.sub3theo == "A") {
        score += syllabus[0].subject3[3] * 8;
      }
      if (result.sub3theo == "B+") {
        score += syllabus[0].subject3[3] * 7;
      }
      if (result.sub3theo == "B") {
        score += syllabus[0].subject3[3] * 6;
      }
      if (result.sub3theo == "C") {
        score += syllabus[0].subject3[3] * 5;
      }
      if (result.sub3theo == "P") {
        score += syllabus[0].subject3[3] * 4;
      }
      if (result.sub3theo == "F") {
        score += syllabus[0].subject3[3] * 3;
      }
    }

    if (result.sub3prac.length > 0) {
      subject3[3] = result.sub3prac;
      if (result.sub3prac == "O") {
        score += syllabus[0].subject3[4] * 10;
      }
      if (result.sub3prac == "A+") {
        score += syllabus[0].subject3[4] * 9;
      }
      if (result.sub3prac == "A") {
        score += syllabus[0].subject3[4] * 8;
      }
      if (result.sub3prac == "B+") {
        score += syllabus[0].subject3[4] * 7;
      }
      if (result.sub3prac == "B") {
        score += syllabus[0].subject3[4] * 6;
      }
      if (result.sub3prac == "C") {
        score += syllabus[0].subject3[4] * 5;
      }
      if (result.sub3prac == "P") {
        score += syllabus[0].subject3[4] * 4;
      }
      if (result.sub3prac == "F") {
        score += syllabus[0].subject3[4] * 3;
      }
    }
  }

  if (syllabus[0].subject4.length > 0) {
    subject4[0] = syllabus[0].subject4[0];
    subject4[1] = syllabus[0].subject4[1];

    totalCredits += syllabus[0].subject4[2] * 10;

    if (result.sub4theo.length > 0) {
      subject4[2] = result.sub4theo;
      if (result.sub4theo == "O") {
        score += syllabus[0].subject4[3] * 10;
      }
      if (result.sub4theo == "A+") {
        score += syllabus[0].subject4[3] * 9;
      }
      if (result.sub4theo == "A") {
        score += syllabus[0].subject4[3] * 8;
      }
      if (result.sub4theo == "B+") {
        score += syllabus[0].subject4[3] * 7;
      }
      if (result.sub4theo == "B") {
        score += syllabus[0].subject4[3] * 6;
      }
      if (result.sub4theo == "C") {
        score += syllabus[0].subject4[3] * 5;
      }
      if (result.sub4theo == "P") {
        score += syllabus[0].subject4[3] * 4;
      }
      if (result.sub4theo == "F") {
        score += syllabus[0].subject4[3] * 3;
      }
    }

    if (result.sub4prac.length > 0) {
      subject4[3] = result.sub4prac;
      if (result.sub4prac == "O") {
        score += syllabus[0].subject4[4] * 10;
      }
      if (result.sub4prac == "A+") {
        score += syllabus[0].subject4[4] * 9;
      }
      if (result.sub4prac == "A") {
        score += syllabus[0].subject4[4] * 8;
      }
      if (result.sub4prac == "B+") {
        score += syllabus[0].subject4[4] * 7;
      }
      if (result.sub4prac == "B") {
        score += syllabus[0].subject4[4] * 6;
      }
      if (result.sub4prac == "C") {
        score += syllabus[0].subject4[4] * 5;
      }
      if (result.sub4prac == "P") {
        score += syllabus[0].subject4[4] * 4;
      }
      if (result.sub4prac == "F") {
        score += syllabus[0].subject4[4] * 3;
      }
    }
  }

  if (syllabus[0].subject5.length > 0) {
    subject5[0] = syllabus[0].subject5[0];
    subject5[1] = syllabus[0].subject5[1];

    totalCredits += syllabus[0].subject5[2] * 10;

    if (result.sub5theo.length > 0) {
      subject5[2] = result.sub5theo;
      if (result.sub5theo == "O") {
        score += syllabus[0].subject5[3] * 10;
      }
      if (result.sub5theo == "A+") {
        score += syllabus[0].subject5[3] * 9;
      }
      if (result.sub5theo == "A") {
        score += syllabus[0].subject5[3] * 8;
      }
      if (result.sub5theo == "B+") {
        score += syllabus[0].subject5[3] * 7;
      }
      if (result.sub5theo == "B") {
        score += syllabus[0].subject5[3] * 6;
      }
      if (result.sub5theo == "C") {
        score += syllabus[0].subject5[3] * 5;
      }
      if (result.sub5theo == "P") {
        score += syllabus[0].subject5[3] * 4;
      }
      if (result.sub5theo == "F") {
        score += syllabus[0].subject5[3] * 3;
      }
    }

    if (result.sub5prac.length > 0) {
      subject5[3] = result.sub5prac;
      if (result.sub5prac == "O") {
        score += syllabus[0].subject5[4] * 10;
      }
      if (result.sub5prac == "A+") {
        score += syllabus[0].subject5[4] * 9;
      }
      if (result.sub5prac == "A") {
        score += syllabus[0].subject5[4] * 8;
      }
      if (result.sub5prac == "B+") {
        score += syllabus[0].subject5[4] * 7;
      }
      if (result.sub5prac == "B") {
        score += syllabus[0].subject5[4] * 6;
      }
      if (result.sub5prac == "C") {
        score += syllabus[0].subject5[4] * 5;
      }
      if (result.sub5prac == "P") {
        score += syllabus[0].subject5[4] * 4;
      }
      if (result.sub5prac == "F") {
        score += syllabus[0].subject5[4] * 3;
      }
    }
  }

  if (syllabus[0].subject6.length > 0) {
    subject6[0] = syllabus[0].subject6[0];
    subject6[1] = syllabus[0].subject6[1];

    totalCredits += syllabus[0].subject6[2] * 10;

    if (result.sub6theo.length > 0) {
      subject6[2] = result.sub6theo;
      if (result.sub6theo == "O") {
        score += syllabus[0].subject6[3] * 10;
      }
      if (result.sub6theo == "A+") {
        score += syllabus[0].subject6[3] * 9;
      }
      if (result.sub6theo == "A") {
        score += syllabus[0].subject6[3] * 8;
      }
      if (result.sub6theo == "B+") {
        score += syllabus[0].subject6[3] * 7;
      }
      if (result.sub6theo == "B") {
        score += syllabus[0].subject6[3] * 6;
      }
      if (result.sub6theo == "C") {
        score += syllabus[0].subject6[3] * 5;
      }
      if (result.sub6theo == "P") {
        score += syllabus[0].subject6[3] * 4;
      }
      if (result.sub6theo == "F") {
        score += syllabus[0].subject6[3] * 3;
      }
    }

    if (result.sub6prac.length > 0) {
      subject6[3] = result.sub6prac;
      if (result.sub6prac == "O") {
        score += syllabus[0].subject6[4] * 10;
      }
      if (result.sub6prac == "A+") {
        score += syllabus[0].subject6[4] * 9;
      }
      if (result.sub6prac == "A") {
        score += syllabus[0].subject6[4] * 8;
      }
      if (result.sub6prac == "B+") {
        score += syllabus[0].subject6[4] * 7;
      }
      if (result.sub6prac == "B") {
        score += syllabus[0].subject6[4] * 6;
      }
      if (result.sub6prac == "C") {
        score += syllabus[0].subject6[4] * 5;
      }
      if (result.sub6prac == "P") {
        score += syllabus[0].subject6[4] * 4;
      }
      if (result.sub6prac == "F") {
        score += syllabus[0].subject6[4] * 3;
      }
    }
  }

  if (syllabus[0].subject7.length > 0) {
    subject7[0] = syllabus[0].subject7[0];
    subject7[1] = syllabus[0].subject7[1];

    totalCredits += syllabus[0].subject7[2] * 10;

    if (result.sub7theo.length > 0) {
      subject7[2] = result.sub7theo;
      if (result.sub7theo == "O") {
        score += syllabus[0].subject7[3] * 10;
      }
      if (result.sub7theo == "A+") {
        score += syllabus[0].subject7[3] * 9;
      }
      if (result.sub7theo == "A") {
        score += syllabus[0].subject7[3] * 8;
      }
      if (result.sub7theo == "B+") {
        score += syllabus[0].subject7[3] * 7;
      }
      if (result.sub7theo == "B") {
        score += syllabus[0].subject7[3] * 6;
      }
      if (result.sub7theo == "C") {
        score += syllabus[0].subject7[3] * 5;
      }
      if (result.sub7theo == "P") {
        score += syllabus[0].subject7[3] * 4;
      }
      if (result.sub7theo == "F") {
        score += syllabus[0].subject7[3] * 3;
      }
    }

    if (result.sub7prac.length > 0) {
      subject7[3] = result.sub7prac;
      if (result.sub7prac == "O") {
        score += syllabus[0].subject7[4] * 10;
      }
      if (result.sub7prac == "A+") {
        score += syllabus[0].subject7[4] * 9;
      }
      if (result.sub7prac == "A") {
        score += syllabus[0].subject7[4] * 8;
      }
      if (result.sub7prac == "B+") {
        score += syllabus[0].subject7[4] * 7;
      }
      if (result.sub7prac == "B") {
        score += syllabus[0].subject7[4] * 6;
      }
      if (result.sub7prac == "C") {
        score += syllabus[0].subject7[4] * 5;
      }
      if (result.sub7prac == "P") {
        score += syllabus[0].subject7[4] * 4;
      }
      if (result.sub7prac == "F") {
        score += syllabus[0].subject7[4] * 3;
      }
    }
  }

  if (syllabus[0].compViva.length > 0) {
    cv[0] = syllabus[0].compViva[0];
    cv[1] = syllabus[0].compViva[1];

    totalCredits += syllabus[0].compViva[2] * 10;

    if (result.cvprac.length > 0) {
      cv[3] = result.cvprac;
      if (result.cvprac == "O") {
        score += syllabus[0].compViva[4] * 10;
      }
      if (result.cvprac == "A+") {
        score += syllabus[0].compViva[4] * 9;
      }
      if (result.cvprac == "A") {
        score += syllabus[0].compViva[4] * 8;
      }
      if (result.cvprac == "B+") {
        score += syllabus[0].compViva[4] * 7;
      }
      if (result.cvprac == "B") {
        score += syllabus[0].compViva[4] * 6;
      }
      if (result.cvprac == "C") {
        score += syllabus[0].compViva[4] * 5;
      }
      if (result.cvprac == "P") {
        score += syllabus[0].compViva[4] * 4;
      }
      if (result.cvprac == "F") {
        score += syllabus[0].compViva[4] * 3;
      }
    }
  }

  //   console.log(totalCredits, score);

  let CGPA = (score / totalCredits) * 10;
  CGPA = CGPA.toPrecision(2);

  const resu = await Result.create({
    studRollNo: rno,
    subject1,
    subject2,
    subject3,
    subject4,
    subject5,
    subject6,
    subject7,
    compViva: cv,
    CGPA,
  });

  if (resu) {
    res.status(200).json({ studData: studData, resData: resu });
    // res.status(200).json(studData);
  } else {
    res.status(400);
    throw new Error("Couldn't Get Result");
  }
});

module.exports = { addResult };
