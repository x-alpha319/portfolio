import { BrowserRouter, Routes, Route } from "react-router-dom";
import Body from "./Pages/Body";
import Shop from "./Components/Shop";
import MainLayout from "./Layout/MainLayout";
import Login from "./Pages/Auth/Login";
import Authlayout from "./Layout/Authlayout";
import DashLayout from "./Layout/DashLayout";
import Dashboard from "./Pages/Dash/Dashborad";
import YupLogin from "./Pages/Auth/YupLogin";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Body />} />
            <Route path="shop" element={<Shop />} />
          </Route>
          <Route>
            <Route path="/Auth" element={<Authlayout />}>
              <Route path="login" element={<Login />} />
              <Route path="YupLogin" element={<YupLogin />} />
            </Route>
          </Route>
          <Route>
            <Route path="/Dash" element={<DashLayout />}>
              <Route path="dashboard" element={<Dashboard />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
