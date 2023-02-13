import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";

import Twitter from "../assets/js-icons/twitter";
import Instagram from "../assets/js-icons/instagram";
import Facebook from "../assets/js-icons/facebook";
import Pinterest from "../assets/js-icons/pinterest";
import Logo from "../assets/js-icons/logo";

const Footer = () => {
  return (
    <div className="py-16 bg-veryDarkViolet">
      <div className="container flex flex-col items-center justify-around mx-auto space-y-16 md:flex-row md:space-y-0 md:items-start">
        <div className="w-4/5 flex justify-center md:mr-10 lg:mr-20 md:justify-start">
          <Logo className=" hover:fill-green-800" />
        </div>

        <div className="flex flex-col items-center w-full md:items-start">
          <div className="mb-5 font-bold text-lg text-white capitalize">
            Features
          </div>
          <div className="flex flex-col items-center space-y-3 md:items-start">
            <Link
              to=""
              className="capitalize text-grayishViolet hover:text-cyan"
            >
              Link Shortening
            </Link>
            <Link
              to=""
              className="capitalize text-grayishViolet hover:text-cyan"
            >
              Branded Links
            </Link>
            <Link
              to=""
              className="capitalize text-grayishViolet hover:text-cyan"
            >
              Analytics
            </Link>
          </div>
        </div>

        <div className="flex flex-col items-center w-full md:items-start">
          <div className="mb-5 font-bold text-lg text-white capitalize">
            Resources
          </div>
          <div className="flex flex-col items-center space-y-3 md:items-start">
            <Link
              to=""
              className="capitalize text-grayishViolet hover:text-cyan"
            >
              Blog
            </Link>
            <Link
              to=""
              className="capitalize text-grayishViolet hover:text-cyan"
            >
              Developers
            </Link>
            <Link
              to=""
              className="capitalize text-grayishViolet hover:text-cyan"
            >
              Support
            </Link>
          </div>
        </div>

        <div className="flex flex-col items-center w-full md:items-start">
          <div className="mb-5 font-bold text-lg text-white capitalize">
            Company
          </div>
          <div className="flex flex-col items-center space-y-3 md:items-start">
            <Link
              to=""
              className="capitalize text-grayishViolet hover:text-cyan"
            >
              About
            </Link>
            <Link
              to=""
              className="capitalize text-grayishViolet hover:text-cyan"
            >
              Our Team
            </Link>
            <Link
              to=""
              className="capitalize text-grayishViolet hover:text-cyan"
            >
              Careers
            </Link>
            <Link
              to=""
              className="capitalize text-grayishViolet hover:text-cyan"
            >
              Contact
            </Link>
          </div>
        </div>

        <div className="flex space-x-6">
          <Link to="" className="">
            <Facebook className=" hover:fill-green-800" />
          </Link>
          <Link to="" className="">
            <Twitter className=" hover:fill-green-800" />
          </Link>
          <Link to="" className="">
            <Pinterest className=" hover:fill-green-800" />
          </Link>
          <Link to="" className="">
            <Instagram className=" hover:fill-green-800" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
