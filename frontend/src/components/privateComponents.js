import { Navigate, Outlet } from "react-router-dom";

const PrivComp = () => {
  const a = localStorage.getItem("Admin");
  return a ? <Outlet></Outlet> : <Navigate to="/AdminLog"></Navigate>;
};

export default PrivComp;
