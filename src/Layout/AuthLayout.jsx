import { Outlet } from "react-router-dom";
import Login from "../Pages/Auth/Login";
import YupLogin from "../Pages/Auth/YupLogin";

function Authlayout() {
  return (
    <>
      <Login />
      <YupLogin />
    </>
  );
}

export default Authlayout;
