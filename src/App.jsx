import { BrowserRouter, Routes, Route } from "react-router-dom";
import Body from "./Pages/Body";
import Shop from "./Components/Shop";
import MainLayout from "./Layout/MainLayout";
import DashLayout from "./Layout/DashLayout";
import YupLogin from "./Pages/Auth/YupLogin";
import Task from "./Pages/Dash/Task";
import Conter from "./Pages/Auth/Conter";
import Authlayout from "./Layout/AuthLayout";
import ProductManager from "./Pages/Dash/Product";

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
            <Route path="/Pages" element={<DashLayout />}>
              <Route path="dash/product" element={<ProductManager />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
