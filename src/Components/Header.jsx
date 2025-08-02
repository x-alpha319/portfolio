import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="bg-black shadow-md py-5 px-6 md:px-20">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-2xl font-extrabold text-lime-400 tracking-wide">
          <Link to="/" className="hover:text-white transition duration-300">
            CyberDev
          </Link>
        </h1>

        {/* Navigation Links */}
        <nav>
          <ul className="flex gap-6 items-center text-sm font-semibold">
            <li>
              <Link
                to="/"
                className="text-gray-300 hover:text-lime-400 transition duration-200"
              >
                HOME
              </Link>
            </li>
            <li>
              <Link
                to="/shop"
                className="text-gray-300 hover:text-lime-400 transition duration-200"
              >
                SHOP
              </Link>
            </li>
            <li>
              <Link
                to="/Pages/Task"
                className="text-gray-300 hover:text-lime-400 transition duration-200"
              >
                TASK
              </Link>
            </li>
            <li>
              <Link
                to="/Pages/Dash/Product"
                className="text-gray-300 hover:text-lime-400 transition duration-200"
              >
                STORE
              </Link>
            </li>
            <li>
              <Link to="/Auth/Conter">
                <button className="ml-2 px-4 py-2 text-cyan-400 border border-cyan-500 rounded hover:bg-cyan-500 hover:text-black transition duration-300 font-semibold shadow-sm">
                  LOG IN
                </button>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
