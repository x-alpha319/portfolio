import { Outlet } from "react-router-dom";
import Dashboard from "../Pages/Dash/Dashborad";
import ProductManagement from "../Pages/Product";

function DashLayout() {
  return (
    <>
      <ProductManagement />
    </>
  );
}

export default DashLayout;
