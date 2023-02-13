import React from "react";
import logo from "../assets/logo.svg";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="relative container mx-auto p-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-20">
          <img src={logo} alt="shortly logo" />
          <div className=" hidden space-x-8 font-bold lg:flex">
            <Link
              to=""
              className="text-grayishViolet hover:text-veryDarkViolet"
            >
              Features
            </Link>
            <Link
              to=""
              className="text-grayishViolet hover:text-veryDarkViolet"
            >
              Pricing
            </Link>
            <Link
              to=""
              className="text-grayishViolet hover:text-veryDarkViolet"
            >
              Resources
            </Link>
          </div>
        </div>
        <div className="hidden items-center space-x-6 font-bold text-grayishViolet lg:flex">
          <Link to="" className="hover:text-veryDarkViolet">
            Login
          </Link>
          <Link
            to=""
            className="px-8 py-3 font-bold bg-cyan rounded-full text-white hover:opacity-70 duration-300"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
