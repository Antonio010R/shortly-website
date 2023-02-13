import React, { useState } from "react";
import UrlContainer from "./urlcontainer";

const urlList = [
  {
    id: 1,
    mainUrl: "https://frontendmentor.io",
    shortenedUrl: "https://rel.ink/k4IKyk",
  },
  {
    id: 2,
    mainUrl: "https://twitter.com/frontendmentor",
    shortenedUrl: "https://rel.ink/gxOXp9",
  },
  {
    id: 3,
    mainUrl: "https://linkedin.com/frontend-mentor",
    shortenedUrl: "https://rel.ink/gob3X9",
  },
];

const Shortenning = () => {
  const [value, setValue] = useState("");

  const onClickHandler = (event) => {
    event.preventDefault();
    setValue(event.target.value);
    console.log(value);
  };

  return (
    <div className="relative bg-gray-100 p-6 lg:px-20">
      <div className="relative  mx-auto -top-24  max-w-4xl space-y-6">
        <form
          id="form-url"
          className="relative flex flex-col p-10 bg-darkViolet rounded-lg space-y-4 md:flex-row md:space-y-0 md:space-x-4 w-full"
        >
          <input
            id="input-url"
            type="text"
            className="p-3 rounded-lg border-2 placeholder-yellow-500 text-lg flex-1 outline-none placeholder:font-medium focus:outline-none"
            placeholder="Shorten a link here"
          />
          <button
            id="button-url"
            className="px-10 py-3 bg-cyan text-white font-medium rounded-lg hover:bg-cyanLight focus:outline-none md:py-2"
            onClick={(e) => onClickHandler(e)}
          >
            Shorten It !
          </button>
          <div
            id="err-msg"
            className="absolute left-10 bottom-3 text-red text-sm md:left-7"
          ></div>
        </form>
        {urlList.map((url) => (
          <UrlContainer key={url.id} url={url} />
        ))}
      </div>
    </div>
  );
};

export default Shortenning;
