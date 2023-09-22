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

const HomeComp = () => {
  const [selectedMenuItem, setSelectedMenuItem] = useState(1);

  const handleMenuItemClick = (index) => {
    setSelectedMenuItem(index);
  };

  return (
    <>
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
