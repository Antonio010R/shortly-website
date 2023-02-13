import React from "react";
import { Link } from "react-router-dom";
import heroImage from "../assets/illustration-working.svg";

const Hero = () => {
  return (
    <div>
      <div className="container flex flex-col-reverse mx-auto p-6 lg:flex-row">
        <div className="flex flex-col space-y-10 mb-44 lg:mt-16 lg:w-1/2 xl:mb-52">
          <h1 className="text-5xl font-bold text-center lg:text-6xl lg:max-w-md lg:text-left">
            More than just shorter links
          </h1>
          <p className="text-gray-400 text-2xl text-center lg:max-w-md lg:text-left">
            Build your brand's recognition and get detailed insights on how your
            links are performing.
          </p>
          <Link
            to=""
            className=" px-10 py-5 rounded-full bg-cyan text-white text-2xl font-bold w-fit mx-auto hover:opacity-70 lg:py-4 lg:mx-0"
          >
            Get Started
          </Link>
        </div>
        <div className="mb-24 mx-auto md:w-180 lg:mb-0 lg:w-1/2">
          <img src={heroImage} alt="HeroImage" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
