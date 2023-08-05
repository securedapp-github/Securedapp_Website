import React, { useState } from "react";

import Transmission from "./Transmission";
import Footer from "./Footer";
import FooterInAbout from "./FooterInAbout";
import Navbar from "./Navbar";
import DappSecurityHero from "./DappSecurityHero";
import AuditBenefit from "./AuditBenefit";
import FooterInScan from "./FooterInScan";
const DappSecurityAudit = () => {
  const [selectedMenuItem, setSelectedMenuItem] = useState(1);

  const handleMenuItemClick = (index) => {
    setSelectedMenuItem(index);
  };
  return (
    <>
      <Navbar onItemClick={handleMenuItemClick} />
      <DappSecurityHero />
      <AuditBenefit />
      <Transmission />
      <FooterInScan />
    </>
  );
};

export default DappSecurityAudit;
