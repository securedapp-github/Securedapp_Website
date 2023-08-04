import React, { useState } from "react";

import NavbarWithBread from "./NavWithBread";
import AboutUsHero from "./AboutUsHero";

const AboutComp = () => {
  const [selectedMenuItem, setSelectedMenuItem] = useState(1);

  const handleMenuItemClick = (index) => {
    setSelectedMenuItem(index);
  };
  return (
    <>
      <NavbarWithBread onItemClick={handleMenuItemClick} />
      <AboutUsHero />
    </>
  );
};

export default AboutComp;
