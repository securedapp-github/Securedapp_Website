import React, { useState } from "react";

import Transmission from "./Transmission";
import Footer from "./Footer";
import FooterInAbout from "./FooterInAbout";
import Navbar from "./Navbar";
import DappSecurityHero from "./DappSecurityHero";
import AuditBenefit from "./AuditBenefit";
import FooterInScan from "./FooterInScan";
import {Helmet} from "react-helmet";

const DappSecurityAudit = () => {
  const [selectedMenuItem, setSelectedMenuItem] = useState(1);

  const handleMenuItemClick = (index) => {
    setSelectedMenuItem(index);
  };
  return (
    <>
     <Helmet>
            <title>SecureDApp: Comprehensive Smart Contract Auditing for Enhanced Security</title>
            <meta name="description" content="SecureDApp offers meticulous smart contract auditing to ensure the security and reliability of smart contracts. With tools like static analysis, dynamic analysis, and AI-powered vulnerability detection, SecureDApp enhances the security, reliability, and confidence in your smart contracts." />
        </Helmet>
      <Navbar onItemClick={handleMenuItemClick} />
      <DappSecurityHero />
      <AuditBenefit />
      <Transmission />
      <FooterInScan />
    </>
  );
};

export default DappSecurityAudit;
