import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";
import Swal from "sweetalert2";
import { FaMoon, FaRegLightbulb } from "react-icons/fa6";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut()
      .then(() => Swal.fire("Log out Success!", "", "success"))
      .catch((error) => {
        console.log(error);
      });
  };

  const navLinks = (
    <>
      <li>
        <NavLink to="/"> Home </NavLink>
      </li>
      <li>
        <NavLink to="/add-product"> Add Product </NavLink>
      </li>
      <li>
        <NavLink to="/my-cart"> My Cart </NavLink>
      </li>
    </>
  );

  const handleDark = () => {
    const id = document.getElementById("root");
    id.classList.toggle("dark");
  };

  return (
    <>
      <div className=" bg-base-100 dark:text-black">
        <div className="navbar container mx-auto block lg:flex">
          <div className="navbar-start w-full lg:w-1/2">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                {navLinks}
              </ul>
            </div>
            <Link className="lg:w-36" to={"/"}>
              <img className="w-32 md:w-40 lg:w-auto" src={logo} alt="" />
            </Link>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">{navLinks}</ul>
          </div>
          <div className="navbar-end w-full lg:w-1/2">
            {user ? (
              <>
                {user?.displayName && (
                  <p className="pe-3 font-medium">{user?.displayName}</p>
                )}
                {user?.photoURL && (
                  <img
                    className="w-10 h-10 rounded-full"
                    src={user?.photoURL}
                    alt=""
                  />
                )}

                <button onClick={handleLogOut} className="btn ms-3">
                  Log Out
                </button>
              </>
            ) : (
              <NavLink className="btn" to="/login">
                Login
              </NavLink>
            )}

            <button className="ml-5" onClick={handleDark}>
              <FaMoon className="dark:hidden" />
              <FaRegLightbulb className="hidden dark:inline-block	" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
