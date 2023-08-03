import React, { useState } from "react";
import Navbar from "./components/Navbar";
import AboutUsHero from "./components/AboutUsHero";
import WhySecureDapp from "./components/WhySecureDapp";
import FounderSection from "./components/MeettheTeam";
import Transmission from "./components/Transmission";
import Footer from "./components/Footer";

const AboutComp = () => {
  const [selectedMenuItem, setSelectedMenuItem] = useState(1);

  const handleMenuItemClick = (index) => {
    setSelectedMenuItem(index);
  };
  return (
    <>
      <Navbar onItemClick={handleMenuItemClick} />
      <AboutUsHero />
      <WhySecureDapp />
      <FounderSection />
      <Transmission />
      <Footer />
    </>
  );
};

export default AboutComp;
