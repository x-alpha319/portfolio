import { Link } from "react-router-dom";
function Header() {
  const name = "Dipo";
  return (
    <header>
      <div className="flex justify-between bg-black p-8">
        <div>
          <h1 className="text-xl text-center  text-blue-200 ">
            <Link to="/">VALUEMAX CODER'S HUB</Link>
          </h1>
        </div>
        <div>
          <ul className="flex  font-bold ">
            <li className="p-3 text-blue-300">
              <Link to="/">HOME</Link>
            </li>
            <li className="p-3 text-blue-300">
              <Link to="/shop">ABOUT US</Link>
            </li>
            <li className="p-3 text-blue-300">
              <Link to="/Dash/Dashboard">SERVICES</Link>
            </li>
            <li className="p-3 text-blue-300">
              <a href="#">CONTACT US</a>
            </li>
            <li className="p-3  border-1 rounded  text-cyan-300">
              <button>
                <Link to="/Auth/Login">LOG IN</Link>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
export default Header;
