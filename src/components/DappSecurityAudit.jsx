import React, { useState } from "react";

import Transmission from "./Transmission";
import Footer from "./Footer";
import FooterInAbout from "./FooterInAbout";
import Navbar from "./Navbar";
import DappSecurityHero from "./DappSecurityHero";
const DappSecurityAudit = () => {
  const [selectedMenuItem, setSelectedMenuItem] = useState(1);

  const handleMenuItemClick = (index) => {
    setSelectedMenuItem(index);
  };
  return (
    <>
      <Navbar onItemClick={handleMenuItemClick} />
      <DappSecurityHero />
    </>
  );
};

export default DappSecurityAudit;
