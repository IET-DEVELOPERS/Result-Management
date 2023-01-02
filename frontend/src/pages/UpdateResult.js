import React, { useState } from "react";
// import { use } from "../../../backend/routes/studentRoutes";
import "../Css/uddateResStyles.css";

const UpdateResult = () => {
  const [data, setData] = useState("");
  const [rollNo, setRollNo] = useState("");
  const [student, setstudent] = useState("");
  const [syllabus, setSyllabus] = useState("");
  const [result, setResult] = useState("");

  const [sub1theo, setSub1theo] = useState("");
  const [sub1prac, setSub1prac] = useState("");
  const [sub2theo, setSub2theo] = useState("");
  const [sub2prac, setSub2prac] = useState("");
  const [sub3theo, setSub3theo] = useState("");
  const [sub3prac, setSub3prac] = useState("");
  const [sub4theo, setSub4theo] = useState("");
  const [sub4prac, setSub4prac] = useState("");
  const [sub5theo, setSub5theo] = useState("");
  const [sub5prac, setSub5prac] = useState("");
  const [sub6theo, setSub6theo] = useState("");
  const [sub6prac, setSub6prac] = useState("");
  const [sub7theo, setSub7theo] = useState("");
  const [sub7prac, setSub7prac] = useState("");

  const [cv, setCV] = useState("");

  let update = async () => {
    let Result = await fetch("http://localhost:5050/api/student/view", {
      method: "post",
      body: JSON.stringify({ rollNo }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (Result.status == 400) {
      setResult("");
      //   console;
    } else {
      Result = await Result.json();
      console.log(Result);

      setResult(Result);
    }

    let res = await fetch(
      `http://localhost:5050/api/syllabus/getsyllabus/${rollNo}`,
      {
        method: "get",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    res = await res.json();

    setData(res);
    setstudent(res.studData);
    setSyllabus(res.syllabus[0]);

    // console.log(syllabus);
    // console.log(student);
  };

  let submit = async () => {
    let user = localStorage.getItem("Admin");
    user = JSON.parse(user);

    // console.log(JSON.parse(user).Name);
    let res = await fetch(`http://localhost:5050/api/result/addRes/${rollNo}`, {
      method: "post",
      body: JSON.stringify({
        sub1prac: sub1prac,
        sub1theo: sub1theo,

        sub2prac: sub2prac,
        sub2theo: sub2theo,

        sub3prac: sub3prac,
        sub3theo: sub3theo,

        sub4prac: sub4prac,
        sub4theo: sub4theo,

        sub5prac: sub5prac,
        sub5theo: sub5theo,

        sub6prac: sub6prac,
        sub6theo: sub6theo,

        sub7prac: sub7prac,
        sub7theo: sub7theo,

        cvprac: cv,
      }),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${user.token}`,
      },
    });

    res = await res.json();

    console.log(res);
  };

  return (
    <div className="App" isPrintable="true">
      <h2 className="head">Update Result</h2>
      <div>
        <ul className="l1">
          <li>
            <a href="/Admin">Class-Wise List</a>
          </li>
          <li>
            <a className="onthis">RollNumber-Wise</a>
          </li>
        </ul>
      </div>
      <input
        className="inp"
        placeholder="Enter Roll Number"
        type=""
        value={rollNo}
        onChange={(e) => setRollNo(e.target.value)}
      ></input>

      <button type="button" className="btn" onClick={update}>
        Fetch Data
      </button>

      {data && (
        <div>
          <ul className="ull2">
            <li>NAME: {student.name}</li>
            <li>BRANCH: {syllabus.branch}</li>
            <li>SEMESTER: {syllabus.sem}</li>
            <li>ROLL-NUMBER: {student.rollNo}</li>
            <li>ENROLLMENT-NUMBER: {student.enrlNo}</li>
          </ul>

          <ul className="table">
            <li>
              <ul className="listhead2">
                <li>Name</li>
                <li>Code</li>
                <li>Theory</li>
                <li>Practical</li>
              </ul>
            </li>
            <li>
              <ul className="listhead1">
                <li>{syllabus.subject1[0]}</li>
                <li>{syllabus.subject1[1]}</li>

                {result && (
                  <li>
                    {syllabus.subject1[3] > 0 && (
                      <input
                        placeholder={result.resData.subject1[2]}
                        className="valuechanger"
                      ></input>
                    )}
                  </li>
                )}
                {result && (
                  <li>
                    {syllabus.subject1[4] > 0 && (
                      <input
                        placeholder={result.resData.subject1[3]}
                        className="valuechanger"
                      ></input>
                    )}
                  </li>
                )}

                {!result && (
                  <li>
                    {syllabus.subject1[3] > 0 && (
                      <input
                        value={sub1theo}
                        onChange={(e) => setSub1theo(e.target.value)}
                      ></input>
                    )}
                  </li>
                )}
                {!result && (
                  <li>
                    {syllabus.subject1[4] > 0 && (
                      <input
                        value={sub1prac}
                        onChange={(e) => setSub1prac(e.target.value)}
                      ></input>
                    )}
                  </li>
                )}
              </ul>
            </li>

            {/*  */}
            <li>
              <ul className="listhead1">
                <li>{syllabus.subject2[0]}</li>
                <li>{syllabus.subject2[1]}</li>
                {result && (
                  <li>
                    {syllabus.subject2[3] > 0 && (
                      <input
                        placeholder={result.resData.subject2[2]}
                        className="valuechanger"
                      ></input>
                    )}
                  </li>
                )}
                {result && (
                  <li>
                    {syllabus.subject2[4] > 0 && (
                      <input
                        placeholder={result.resData.subject2[3]}
                        className="valuechanger"
                      ></input>
                    )}
                  </li>
                )}

                {!result && (
                  <li>
                    {syllabus.subject2[3] > 0 && (
                      <input
                        value={sub2theo}
                        onChange={(e) => setSub2theo(e.target.value)}
                      ></input>
                    )}
                  </li>
                )}
                {!result && (
                  <li>
                    {syllabus.subject2[4] > 0 && (
                      <input
                        value={sub2prac}
                        onChange={(e) => setSub2prac(e.target.value)}
                      ></input>
                    )}
                  </li>
                )}
              </ul>
            </li>
            {/*  */}
            <li>
              <ul className="listhead1">
                <li>{syllabus.subject3[0]}</li>
                <li>{syllabus.subject3[1]}</li>
                {result && (
                  <li>
                    {syllabus.subject3[3] > 0 && (
                      <input
                        placeholder={result.resData.subject3[2]}
                        className="valuechanger"
                      ></input>
                    )}
                  </li>
                )}
                {result && (
                  <li>
                    {syllabus.subject3[4] > 0 && (
                      <input
                        placeholder={result.resData.subject3[3]}
                        className="valuechanger"
                      ></input>
                    )}
                  </li>
                )}

                {!result && (
                  <li>
                    {syllabus.subject3[3] > 0 && (
                      <input
                        value={sub3theo}
                        onChange={(e) => setSub3theo(e.target.value)}
                      ></input>
                    )}
                  </li>
                )}
                {!result && (
                  <li>
                    {syllabus.subject3[4] > 0 && (
                      <input
                        value={sub3prac}
                        onChange={(e) => setSub3prac(e.target.value)}
                      ></input>
                    )}
                  </li>
                )}
              </ul>
            </li>
            {/*  */}

            <li>
              <ul className="listhead1">
                <li>{syllabus.subject4[0]}</li>
                <li>{syllabus.subject4[1]}</li>
                {result && (
                  <li>
                    {syllabus.subject4[3] > 0 && (
                      <input
                        placeholder={result.resData.subject4[2]}
                        className="valuechanger"
                      ></input>
                    )}
                  </li>
                )}
                {result && (
                  <li>
                    {syllabus.subject4[4] > 0 && (
                      <input
                        placeholder={result.resData.subject4[3]}
                        className="valuechanger"
                      ></input>
                    )}
                  </li>
                )}

                {!result && (
                  <li>
                    {syllabus.subject4[3] > 0 && (
                      <input
                        value={sub4theo}
                        onChange={(e) => setSub4theo(e.target.value)}
                      ></input>
                    )}
                  </li>
                )}
                {!result && (
                  <li>
                    {syllabus.subject4[4] > 0 && (
                      <input
                        value={sub4prac}
                        onChange={(e) => setSub4prac(e.target.value)}
                      ></input>
                    )}
                  </li>
                )}
              </ul>
            </li>
            <li>
              <ul className="listhead1">
                <li>{syllabus.subject5[0]}</li>
                <li>{syllabus.subject5[1]}</li>
                {result && (
                  <li>
                    {syllabus.subject5[3] > 0 && (
                      <input
                        placeholder={result.resData.subject5[2]}
                        className="valuechanger"
                      ></input>
                    )}
                  </li>
                )}
                {result && (
                  <li>
                    {syllabus.subject5[4] > 0 && (
                      <input
                        placeholder={result.resData.subject5[3]}
                        className="valuechanger"
                      ></input>
                    )}
                  </li>
                )}

                {!result && (
                  <li>
                    {syllabus.subject5[3] > 0 && (
                      <input
                        value={sub5theo}
                        onChange={(e) => setSub5theo(e.target.value)}
                      ></input>
                    )}
                  </li>
                )}
                {!result && (
                  <li>
                    {syllabus.subject5[4] > 0 && (
                      <input
                        value={sub5theo}
                        onChange={(e) => setSub5theo(e.target.value)}
                      ></input>
                    )}
                  </li>
                )}
              </ul>
            </li>
            <li>
              <ul className="listhead1">
                <li>{syllabus.subject6[0]}</li>
                <li>{syllabus.subject6[1]}</li>
                {result && (
                  <li>
                    {syllabus.subject6[3] > 0 && (
                      <input
                        placeholder={result.resData.subject6[2]}
                        className="valuechanger"
                      ></input>
                    )}
                  </li>
                )}
                {result && (
                  <li>
                    {syllabus.subject6[4] > 0 && (
                      <input
                        placeholder={result.resData.subject6[3]}
                        className="valuechanger"
                      ></input>
                    )}
                  </li>
                )}

                {!result && (
                  <li>
                    {syllabus.subject6[3] > 0 && (
                      <input
                        value={sub6theo}
                        onChange={(e) => setSub6theo(e.target.value)}
                      ></input>
                    )}
                  </li>
                )}
                {!result && (
                  <li>
                    {syllabus.subject6[4] > 0 && (
                      <input
                        value={sub6prac}
                        onChange={(e) => setSub6prac(e.target.value)}
                      ></input>
                    )}
                  </li>
                )}
              </ul>
            </li>
            <li>
              <ul className="listhead1">
                <li>{syllabus.subject7[0]}</li>
                <li>{syllabus.subject7[1]}</li>
                {result && (
                  <li>
                    {syllabus.subject7[3] > 0 && (
                      <input
                        placeholder={result.resData.subject7[2]}
                        className="valuechanger"
                      ></input>
                    )}
                  </li>
                )}
                {result && (
                  <li>
                    {syllabus.subject7[4] > 0 && (
                      <input
                        placeholder={result.resData.subject7[3]}
                        className="valuechanger"
                      ></input>
                    )}
                  </li>
                )}

                {!result && (
                  <li>
                    {syllabus.subject7[3] > 0 && (
                      <input
                        value={sub7theo}
                        onChange={(e) => setSub7theo(e.target.value)}
                      ></input>
                    )}
                  </li>
                )}
                {!result && (
                  <li>
                    {syllabus.subject7[4] > 0 && (
                      <input
                        value={sub7prac}
                        onChange={(e) => setSub7prac(e.target.value)}
                      ></input>
                    )}
                  </li>
                )}
              </ul>
            </li>
            <li>
              <ul className="listhead1">
                <li>{syllabus.compViva[0]}</li>
                <li>{syllabus.compViva[1]}</li>
                {result && (
                  <li>
                    {syllabus.compViva[3] > 0 && (
                      <input
                        placeholder={result.resData.compViva[2]}
                        className="valuechanger"
                      ></input>
                    )}
                  </li>
                )}
                {result && (
                  <li>
                    {syllabus.compViva[4] > 0 && (
                      <input
                        placeholder={result.resData.compViva[3]}
                        className="valuechanger"
                      ></input>
                    )}
                  </li>
                )}

                {!result && (
                  <li>{syllabus.compViva[3] > 0 && <input></input>}</li>
                )}
                {!result && (
                  <li>
                    {syllabus.compViva[4] > 0 && (
                      <input
                        value={cv}
                        onChange={(e) => setCV(e.target.value)}
                      ></input>
                    )}
                  </li>
                )}
              </ul>
            </li>
          </ul>

          <button type="button" onClick={submit}>
            Submit
          </button>
        </div>
      )}
    </div>
  );
};

export default UpdateResult;
