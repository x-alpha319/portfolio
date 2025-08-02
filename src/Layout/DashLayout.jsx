import { Outlet } from "react-router-dom";

import Header from "../Components/Header";
import ProductManager from "../Pages/Dash/Product";
import Footer from "../Components/Footer";

function DashLayout() {
  return (
    <>
      <Header />
      <ProductManager />
      <Footer />
    </>
  );
}

export default DashLayout;
