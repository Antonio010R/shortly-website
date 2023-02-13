import React from "react";

const Features = ({ feature }) => {
  const { img, style, heading, description } = feature;
  return (
    <div
      className={`relative flex flex-col p-6 space-y-6 mt-24   bg-white rounded-lg md:w-1/3 ${style}`}
    >
      <div className="absolute -ml-10 left-1/2 -top-10 md:left-16">
        <div className="flex items-center justify-center w-20 h-20 p-4 rounded-full bg-veryDarkViolet">
          <img src={img} alt="image1" />
        </div>
      </div>
      <h5 className="pt-6 text-[1.35rem] font-bold text-center capitalize md:text-left">
        {heading}
      </h5>
      <p className="text-center leading-7 text-gray-400 text-lg md:text-left">
        {description}
      </p>
    </div>
  );
};

export default Features;
