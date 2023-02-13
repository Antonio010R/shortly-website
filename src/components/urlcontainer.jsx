import React from "react";

const UrlContainer = ({ url }) => {
  const { mainUrl, shortenedUrl } = url;
  return (
    <div className="flex w-full flex-col p-4 py-5 items-center text-center bg-white rounded-lg md:flex-row md:justify-between">
      <div className="font-bold text-lg">{mainUrl}</div>
      <div className="flex flex-col items-center justify-center md:flex-row space-y-2 md:space-y-0 md:space-x-4">
        <div className="font-bold text-cyan text-lg space-y-1 ">
          {shortenedUrl}
        </div>
        <button className="w-fit px-8 py-2 bg-cyan text-white rounded-lg hover:bg-cyanLight font-medium focus:bg-veryDarkBlue">
          Copy
        </button>
      </div>
    </div>
  );
};

export default UrlContainer;
