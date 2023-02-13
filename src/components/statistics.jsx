import React from "react";
import img1 from "../assets/icon-brand-recognition.svg";
import img2 from "../assets/icon-detailed-records.svg";
import img3 from "../assets/icon-fully-customizable.svg";
import Features from "./features";

const featureList = [
  {
    id: 1,
    img: img1,
    heading: "Brand Recognition",
    description:
      "Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instil confidence in your content.",
    style: "md:mt-4",
  },
  {
    id: 2,
    img: img2,
    heading: "Detailed Records",
    description:
      "Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.",
    style: "md:mt-10",
  },
  {
    id: 3,
    img: img3,
    heading: "Fully Customizable",
    description:
      "Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.",
    style: "md:mt-16",
  },
];
const Statistics = () => {
  return (
    <div className="bg-gray-100 pb-24">
      <div className=" container mx-auto px-3">
        <h2 className="text-[2.55rem] mb-6 font-bold text-center">
          Advanced Statistics
        </h2>
        <p className="max-w-xs mx-auto text-center text-gray-400 md:max-w-md font-medium text-lg">
          Track how your links are performing across the web with our advanced
          statistics dashboard.
        </p>
      </div>
      <div className="pt-2">
        <div className="relative container flex flex-col items-start px-6 mx-auto md:flex-row md:space-x-7">
          {/*vertical line */}
          <div className="absolute w-2 h-5/6 top-14 left-1/2 -ml-1 bg-cyan md:hidden"></div>

          {/*horizontal line */}
          <div className="hidden absolute top-2 w-10/12 mt-24 left-16 h-3 bg-cyan md:block"></div>

          {featureList.map((feature) => (
            <Features key={feature.id} feature={feature} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Statistics;
