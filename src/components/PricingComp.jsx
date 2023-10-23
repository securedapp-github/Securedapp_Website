import React, { useState } from "react";

import NavbarWithBread from "./NavbarNew";
import PricingTable from "./PricingTable";
import Transmission from "./Transmission";
import Footer from "./Footer";
const PricingComp = () => {
  const [selectedMenuItem, setSelectedMenuItem] = useState(1);

  const handleMenuItemClick = (index) => {
    setSelectedMenuItem(index);
  };
  return (
    <>
      <NavbarWithBread onItemClick={handleMenuItemClick} />
     
      <PricingTable />
      <Transmission />
      <Footer />
    </>
  );
};

export default PricingComp;
