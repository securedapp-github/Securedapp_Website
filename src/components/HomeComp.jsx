import React, { useState } from "react";
import Audit from "./Audit";
import Benefits from "./Benefits";
import Clients from "./Clients";
import Core from "./Core";
import FAQ from "./FAQ";
import Footer from "./Footer";
import Launch from "./Launch";
import Navbar from "./Navbar";
import Products from "./Products";
import Stats from "./Stats";
import Transmission from "./Transmission";
import {Helmet} from "react-helmet";

const HomeComp = () => {
  const [selectedMenuItem, setSelectedMenuItem] = useState(1);

  const handleMenuItemClick = (index) => {
    setSelectedMenuItem(index);
  };
  

  return (
    <>
    
       <Helmet>
            <title>SecuredApp.io: Leading Web3 Security & Smart Contract Audit Solutions</title>
            <meta name="description" content="Explore securedapp.io for comprehensive Web3 security solutions tailored for DApps and smart contracts. Dive into the benefits of audits, their robust services, and their commitment to Ethereum blockchain security. Trusted by many, they've protected over USD 20 Million in assets." />
        </Helmet>
      {" "}
      <Navbar onItemClick={handleMenuItemClick} />
      <Launch />
      <Clients />
      <Benefits />
      <Products />
      <Stats />
      <Core />
      <Audit />
      <FAQ />
      <Transmission />
      <Footer />
    </>
  );
};

export default HomeComp;
