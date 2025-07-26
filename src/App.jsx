import { BrowserRouter, Routes, Route } from "react-router-dom";
import Body from "./Pages/Body";
import Shop from "./Components/Shop";
import MainLayout from "./Layout/MainLayout";
import DashLayout from "./Layout/DashLayout";
import Dashboard from "./Pages/Dash/Dashborad";
import YupLogin from "./Pages/Auth/YupLogin";
import Task from "./Pages/Task";
import ProductManagement from "./Pages/Product";
import Conter from "./Conter";
import Authlayout from "./Layout/AuthLayout";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Body />} />
            <Route path="shop" element={<Shop />} />
            <Route path="Pages/Task" element={<Task />} />
          </Route>
          <Route>
            <Route path="/Auth" element={<Authlayout />}>
              <Route path="conter" element={<Conter />} />
              <Route path="YupLogin" element={<YupLogin />} />
            </Route>
          </Route>
          <Route>
            <Route path="/Dash" element={<DashLayout />}>
              <Route path="product" element={<ProductManagement />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
