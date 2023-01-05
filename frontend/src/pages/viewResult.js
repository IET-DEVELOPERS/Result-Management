import React from "react";
import "../Css/viewResultCss.css";
import { useState, useEffect } from "react";
import {} from "react-router-dom";

const logo = require("../images/logo.png");

function View() {
  let [rollNo, setRollNo] = useState("");
  // let [pass, setPass] = useState("");
  let [name, setname] = useState("");
  let [rno, setrno] = useState("");
  let [enrno, setenr] = useState("");
  let [sem, setsem] = useState("");
  let [email, setemail] = useState("");
  let [branch, setbranch] = useState("");
  let [s1, sets1] = useState([]);
  let [s2, sets2] = useState([]);
  let [s3, sets3] = useState([]);
  let [s4, sets4] = useState([]);
  let [s5, sets5] = useState([]);
  let [s6, sets6] = useState([]);
  let [s7, sets7] = useState([]);
  let [s8, sets8] = useState([]);
  let [cgpa, setcgpa] = useState("");
  let [data, setdata] = useState("");
  let [status, setstatus] = useState("");

  // const navi = useNavigate();

  const signin = async () => {
    //console.warn( email, pass);

    let result = await fetch("/api/student/view", {
      method: "post",
      body: JSON.stringify({ rollNo }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (result.status === 400) {
      alert("Enter Correct Roll Numbers");
      setRollNo("");
      setdata("");
    }

    result = await result.json();
    // localStorage.setItem("res", JSON.stringify(result));

    if (result) {
      setdata(result);

      if (result.resData.CGPA > 3.5) {
        setstatus("Pass");
      } else {
        setstatus("Fail");
      }

      setname(result.name);
      setrno(result.rollNo);
      setenr(result.enrlNo);
      setsem(result.sem);
      setemail(result.email);
      setbranch(result.branch);

      localStorage.setItem("sub1", result.resData.subject1[0]);

      sets1(result.resData.subject1);
      sets2(result.resData.subject2);
      sets3(result.resData.subject3);
      sets4(result.resData.subject4);
      sets5(result.resData.subject5);
      sets6(result.resData.subject6);
      sets7(result.resData.subject7);
      sets8(result.resData.compViva);
      setcgpa(result.resData.CGPA);
    } else {
      alert("Enter Correct Roll Numbers");
      setRollNo("");
    }
  };

  const save = async () => {
    let res = await fetch("/api/student/save", {
      method: "post",
      body: JSON.stringify({
        s1,
        s2,
        s3,
        s4,
        s5,
        s6,
        s7,
        s8,
        cgpa,
        status,
        name,
        rno,
        sem,
        branch,
        enrno,
        email,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (res.status === 400) {
      alert("Pdf not sent");
    } else {
      alert("Pdf sent");
    }
    res = await res.json();
  };
  return (
    <div className="App" isPrintable="true">
      <h2 className="head">View Result</h2>

      <input
        className="inp"
        placeholder="Enter Roll Number"
        // type=""
        value={rollNo}
        onChange={(e) => setRollNo(e.target.value)}
      ></input>

      <button type="button" className="btn" onClick={signin}>
        viewResult
      </button>

      {data && (
        <button type="button" className="btn" onClick={window.print}>
          Print result
        </button>
      )}

      {data && (
        <button type="button" className="btn" onClick={save}>
          Send to Email
        </button>
      )}
      {data && (
        <p>
          <ul className="list">
            <li>
              <img src={logo} className="img"></img>
            </li>
            <li className="list2">
              <ul className="list6">
                <li className="li1">Name:</li>
                <li>{name.toUpperCase()}</li>
              </ul>
            </li>
            <li className="list2">
              <ul className="list6">
                <li className="li1">Roll Number: </li>
                <li>{rno}</li>
              </ul>
            </li>
            <li className="list2">
              <ul className="list6">
                <li className="li1"> Enrollment Number: </li>
                <li>{enrno}</li>
              </ul>
            </li>
            <li className="list2">
              <ul className="list6">
                <li className="li1"> Semester: </li>
                <li> {sem}</li>
              </ul>
            </li>
            <li className="list2">
              <ul className="list6">
                <li className="li1">Branch: </li>
                <li> {branch}</li>
              </ul>
            </li>

            <li className="list3">
              <ul className="list1">
                <li className="list5">Subject Name</li>
                <li className="list5">Subject Code</li>
                <li className="list5">Subject Theory Grade</li>
                <li className="list5">Subject Practical Garde</li>
              </ul>
            </li>
            <li>
              <ul className="list1">
                <li>{s1[0]}</li>
                <li>{s1[1]}</li>
                <li>{s1[2]}</li>
                <li>{s1[3]}</li>
              </ul>
            </li>

            <li>
              <ul className="list12">
                <li>{s2[0]}</li>
                <li>{s2[1]}</li>
                <li>{s2[2]}</li>
                <li>{s2[3]}</li>
              </ul>
            </li>
            <li>
              <ul className="list1">
                <li>{s3[0]}</li>
                <li>{s3[1]}</li>
                <li>{s3[2]}</li>
                <li>{s3[3]}</li>
              </ul>
            </li>
            <li>
              <ul className="list12">
                <li>{s4[0]}</li>
                <li>{s4[1]}</li>
                <li>{s4[2]}</li>
                <li>{s4[3]}</li>
              </ul>
            </li>
            <li>
              <ul className="list1">
                <li>{s5[0]}</li>
                <li>{s5[1]}</li>
                <li>{s5[2]}</li>
                <li>{s5[3]}</li>
              </ul>
            </li>
            <li>
              <ul className="list12">
                <li>{s6[0]}</li>
                <li>{s6[1]}</li>
                <li>{s6[2]}</li>
                <li>{s6[3]}</li>
              </ul>
            </li>
            <li>
              <ul className="list1">
                <li>{s7[0]}</li>
                <li>{s7[1]}</li>
                <li>{s7[2]}</li>
                <li>{s7[3]}</li>
              </ul>
            </li>
            <li>
              <ul className="list12">
                <li>{s8[0]}</li>
                <li>{s8[1]}</li>

                <li>{s8[2]}</li>
                <li>{s8[3]}</li>
              </ul>
            </li>

            <li className="list2" id="cg">
              CGPA: {cgpa}
            </li>
            <li className="list2" id="st">
              Status: {status}
            </li>
          </ul>
        </p>
      )}
    </div>
  );
}

export default View;
