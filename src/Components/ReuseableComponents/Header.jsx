import React from "react";
import { NavLink } from "react-router-dom";
import { BsCart4 } from "react-icons/bs";

const Header = () => {
    const NavManu = <>
    <li><NavLink to="/" className={({isActive})=> isActive && "font-bold text-yellow-600"}>Home</NavLink></li>
    <li><NavLink to="/product" className={({isActive})=> isActive && "font-bold text-yellow-600"}>Product</NavLink></li>
    <li><NavLink to="/about" className={({isActive})=> isActive && "font-bold text-yellow-600"}>About</NavLink></li>
    <li><NavLink to="/checkout" className={({isActive})=> isActive && "font-bold text-yellow-600"}>Checkout</NavLink></li>
    </>
  return (
    <div className="shadow-sm font-Inter">
      <div className="navbar bg-base-100 w-11/12 mx-auto">
        <div className="navbar-start">
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
              className="menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 z-20"
            >
              {NavManu}
            </ul>
          </div>
          <NavLink to="/" className="font-bold font-Raleway text-lg">Globo<span className="text-yellow-500">Bazaar</span></NavLink>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu-horizontal px-1 flex justify-center gap-5 text-sm">
          {NavManu}
          </ul>
        </div>
        <div className="navbar-end">
          <NavLink className="px-2 py-1 rounded-md shadow-md"><BsCart4 className="text-2xl"/></NavLink>
        </div>
      </div>
    </div>
  );
};

export default Header;