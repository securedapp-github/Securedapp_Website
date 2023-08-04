import React, { useState } from "react";

import NavbarWithBread from "./NavWithBread";
import AboutUsHero from "./AboutUsHero";
import MeettheTeam from "./MeettheTeam";
import Transmission from "./Transmission";
import Footer from "./Footer";
import FooterInAbout from "./FooterInAbout";

const AboutComp = () => {
  const [selectedMenuItem, setSelectedMenuItem] = useState(1);

  const handleMenuItemClick = (index) => {
    setSelectedMenuItem(index);
  };
  return (
    <>
      <NavbarWithBread onItemClick={handleMenuItemClick} />
      <AboutUsHero />
      <MeettheTeam />
      <Transmission />
      <FooterInAbout />
    </>
  );
};

export default AboutComp;
