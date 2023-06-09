import React, { createContext, useContext } from "react";
import logo from "../../images/Logo.svg";
import { Link, NavLink } from "react-router-dom";
import AuthProvider, { AuthContext } from "../AuthProvider/AuthProvider";
import { SearchContext } from "../SearchProvider/SearchProvider";
const Header = () => {
  const { handleSearch } = useContext(SearchContext);

  const { user, logOut } = useContext(AuthContext);

  return (
    <div className="bg-opacity-70 backdrop-blur-sm bg-slate-800 top-0 sticky z-30  py-2 flex lg:flex-row flex-col   justify-between items-center">
      <div className="navbar text-white font-semibold">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
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
              className=" menu menu-compact dropdown-content bg-slate-800 mt-3 p-2  rounded-box w-52">
              <li>
                <Link to={"/order"}>Order</Link>
              </li>
              <li>
                <Link to={"/review"}>Order Review</Link>
              </li>
              <li>
                <Link to={"/inventory"}>Manage Inventory</Link>
              </li>

              {user ? (
                <li>
                  {" "}
                  <Link onClick={logOut}>Logout</Link>
                </li>
              ) : (
                <li>
                  {" "}
                  <Link to={"/login"}>Login</Link>
                </li>
              )}
            </ul>
          </div>
          <Link to={"/"} className="btn btn-ghost normal-case text-xl">
            <img src={logo} alt="" />
          </Link>
          <input
            type="text"
            onChange={handleSearch}
            placeholder="Search Products"
            className="w-[100px] px-4 py-2 rounded-lg outline-none  bg-white  bg-opacity-20  text-gray-300  lg:w-full "
          />
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link to={"/order"}>Order</Link>
            </li>
            <li>
              <Link to={"/review"}>Order Review</Link>
            </li>
            <li>
              <Link to={"/inventory"}>Manage Inventory</Link>
            </li>

            {user ? (
              <li>
                <Link onClick={logOut}>Logout</Link>
              </li>
            ) : (
              <li>
                <Link to={"/login"}>Login</Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
