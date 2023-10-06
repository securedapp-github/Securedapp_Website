import React, { useState } from "react";

import Transmission from "./Transmission";
import FooterInScan from "./FooterInScan";
import Navbar from "./Navbar";
import DappDevHero from "./DappDevHero";
import DappDevBenefit from "./DappDevBenefit";
import DappExp from "./DappExp";
import {Helmet} from "react-helmet";


const DappDevComp = () => {
  const [selectedMenuItem, setSelectedMenuItem] = useState(1);

  const handleMenuItemClick = (index) => {
    setSelectedMenuItem(index);
  };
  return (
    <>
       <Helmet>
            <title>SecureDApp: Leading No-Code DApp Development with Enhanced Security</title>
            <meta name="description" content="SecureDApp offers a comprehensive suite of services for DApp development with a security-first approach. Benefit from a no-code platform, smart contract auditing, code reviews, and a drag-and-drop interface, ensuring a secure and user-friendly DApp creation experience." />
        </Helmet>
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
