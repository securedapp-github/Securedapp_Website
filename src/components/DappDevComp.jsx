import React, { useState } from "react";

import Transmission from "./Transmission";
import FooterInScan from "./FooterInScan";
import Navbar from "./Navbar";
import DappDevHero from "./DappDevHero";
import DappDevBenefit from "./DappDevBenefit";
import DappExp from "./DappExp";

const DappDevComp = () => {
  const [selectedMenuItem, setSelectedMenuItem] = useState(1);

  const handleMenuItemClick = (index) => {
    setSelectedMenuItem(index);
  };
  return (
    <>
      <Navbar onItemClick={handleMenuItemClick} />
      <DappDevHero />
      <DappDevBenefit />
      <DappExp />
      <Transmission />
      <FooterInScan />
    </>
  );
};

export default DappDevComp;
