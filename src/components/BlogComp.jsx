import React, { useState } from "react";

import NavbarWithBread from "./NavWithBread";
import BlogHero from "./BlogHero";
import Transmission from "./Transmission";
import Footer from "./Footer";
const BlogComp = () => {
  const [selectedMenuItem, setSelectedMenuItem] = useState(1);

  const handleMenuItemClick = (index) => {
    setSelectedMenuItem(index);
  };
  return (
    <>
      <NavbarWithBread onItemClick={handleMenuItemClick} />
      <BlogHero />
      <Transmission />
      <Footer />
    </>
  );
};

export default BlogComp;
