import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import "../Css/Adminstyles.css";
const logo = require("../images/logo.png");
const back = require("../images/back.jpg");

const Admin = () => {
  localStorage.removeItem("Admin");
  let navigate = useNavigate();
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const login = async () => {
    let r = await fetch("/api/admin/login", {
      method: "post",
      body: JSON.stringify({ userName, password }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (r.status === 400) {
      setUserName("");
      setPassword("");
      alert("enter valis username and pasword");
    }
    r = await r.json();

    if (r) {
      setUserName("");
      setPassword("");
      localStorage.setItem("Admin", JSON.stringify(r));
      navigate("/Admin");
    }
  };

  return (
    <div>
      <div className="header">
        <a href="/">
          <img src={back} className="img2" />
        </a>
        <img src={logo} className="img"></img>
        <br></br>

        <h2>WELCOME TO THE RESULT PORTAL</h2>
      </div>
      <form>
        <div className="main">
          <h2 className="h2">LOGIN TO CONTINUE</h2>

          <input
            placeholder="UserName"
            className="inpt"
            type="text"
            name="user"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          ></input>
          <br></br>

          <input
            placeholder="Password"
            className="inpt"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></input>
          <button type="button" onClick={login}>
            Login
          </button>
        </div>
      </form>
      <div className="footer">
        <h2>Created by IET-DEVELOPERS</h2>
      </div>
    </div>
  );
};

export default Admin;
