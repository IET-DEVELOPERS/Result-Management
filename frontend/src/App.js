import "./App.css";
import React from "react";
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import View from "./pages/viewResult";
import UpdateResult from "./pages/UpdateResult";
import AdminLogin from "./pages/AdminLogin";
import Admin from "./pages/Admin";
import Home from "./pages/home";
const logo = require("./images/logo.png");
// import { useNavigate } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/ViewResult" element={<View />}></Route>
        <Route path="/UpdateResult" element={<UpdateResult />}></Route>
        <Route path="/AdminLog" element={<AdminLogin />}></Route>
        <Route path="/Admin" element={<Admin />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
