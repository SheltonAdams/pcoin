import React, { useState } from "react";
import Navbar from "../Components/Navbar/Navbar";
import Hero from "../Components/Hero/Hero";
import { homeObjOne, homeObjThree, homeObjTwo } from "../Components/Hero/Data";
import TServices from "../Components/TradingServices/TServices";
import Rewards from "../Components/Rewards/Rewards";
import Sidebar from "../Components/Navbar/Sidebar";
import Footer from "../Components/Footer/Footer";

function Home() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    // set the state to go from false to true
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <Hero {...homeObjOne} />
      <Hero {...homeObjTwo} />
      <TServices />
      <Hero {...homeObjThree} />
      <Rewards />
      <Footer />
    </>
  );
}

export default Home;
