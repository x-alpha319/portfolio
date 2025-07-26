import { Link } from "react-router-dom";
function Header() {
  const name = "Dipo";
  return (
    <header>
      <div className="flex justify-between bg-black p-8">
        <div>
          <h1 className="text-xl font-bold text-green-500">
            <Link to="/">CyberDev</Link>
          </h1>
        </div>
        <div>
          <ul className="flex  font-bold ">
            <li className="p-3  text-green-500">
              <Link to="/">HOME</Link>
            </li>
            <li className="p-3  text-green-500">
              <Link to="/shop">SHOP</Link>
            </li>
            <li className="p-3  text-green-500">
              <Link to="./Pages/Task">TASK</Link>
            </li>
            <li className="p-3  text-green-500">
              <Link to="/Dash/Product">STORE</Link>
            </li>
            <li className="p-3  text-cyan-700">
              <button className=" border border-cyan-500 px-3 rounded">
                <Link to="/Auth/Conter">LOG IN</Link>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
export default Header;
