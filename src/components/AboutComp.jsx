import React, { useState } from "react";

import NavbarWithBread from "./NavWithBread";
import AboutUsHero from "./AboutUsHero";
import MeettheTeam from "./MeettheTeam";
import Footer from "./Footer";
import FooterInAbout from "./FooterInAbout";
import TransmissionInAbout from "./TransmissonInAbout";

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
      <TransmissionInAbout />
      <FooterInAbout />
    </>
  );
};

export default AboutComp;
