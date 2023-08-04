import React, { useState } from "react";

import AboutUsHero from "./AboutUsHero";
import MeettheTeam from "./MeettheTeam";
import Transmission from "./Transmission";
import Footer from "./Footer";
import FooterInAbout from "./FooterInAbout";
import Navbar from "./Navbar";
import SmartContractDevhero from "./SmartContractDevhero";
import SpecialNav from "./SpecialNav";
import SmartContractWorkflow from "./SmartContractWorkflow";
const SmartContractdev = () => {
  const [selectedMenuItem, setSelectedMenuItem] = useState(1);

  const handleMenuItemClick = (index) => {
    setSelectedMenuItem(index);
  };
  return (
    <>
      <SpecialNav onItemClick={handleMenuItemClick} />
      <SmartContractDevhero />
      <SmartContractWorkflow />
      <Transmission />
      <Footer />
    </>
  );
};

export default SmartContractdev;
