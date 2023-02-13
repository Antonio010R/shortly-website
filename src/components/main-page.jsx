import React from "react";
import Navbar from "./navbar";
import Hero from "./hero";
import Shortenning from "./shortenning";
import Statistics from "./statistics";
import EndSection from "./end-section";
import Footer from "./footer";

const MainPage = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Shortenning />
      <Statistics />
      <EndSection />
      <Footer />
    </div>
  );
};

export default MainPage;
