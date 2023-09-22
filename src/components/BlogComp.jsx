import React, { useState } from "react";
import NavbarWithBread from "./NavWithBread";
//import BlogHero from "./BlogHero";
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
      <iframe src="https://securedapp.in/blog/" width="100%" height="2600" className="m-2"></iframe>
      <Transmission />
      <Footer />
    </>
  );
};

export default BlogComp;
