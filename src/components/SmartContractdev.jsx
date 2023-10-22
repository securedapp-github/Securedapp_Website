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
import {Helmet} from "react-helmet";

const SmartContractdev = () => {
  const [selectedMenuItem, setSelectedMenuItem] = useState(1);

  const handleMenuItemClick = (index) => {
    setSelectedMenuItem(index);
  };
  return (
    <>
     <Helmet>
            <title>SecureDApp: Expertise in Smart Contract Development & Security</title>
            <meta name="description" content="SecureDApp specializes in smart contract development and security, offering consulting, development, auditing, and testing services. Dive into comprehensive blockchain security solutions and secure your Web3 journey with SecureDApp." />
        </Helmet>
      <SpecialNav onItemClick={handleMenuItemClick} />
      <SmartContractDevhero />
      <SmartContractWorkflow />
      <Transmission />
      <Footer />
    </>
  );
};

export default SmartContractdev;
