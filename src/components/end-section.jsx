import React from "react";

const EndSection = () => {
  return (
    <div id="end-section" className="py-24 bg-darkViolet">
      <div className="flex flex-col space-y-6">
        <h5 className="mx-auto space-y-10 text-[2.5rem] font-bold text-center text-white">
          Boost your links today
        </h5>
        <button className="px-10 py-5 rounded-full bg-cyan text-white text-2xl mx-auto font-bold focus:outline-none md:py-3 md:text-base hover:bg-cyanLight">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default EndSection;
