import React, { useState } from "react";

import NavbarWithBread from "./NavWithBread";
import BlogHero from "./BlogHero";
import Transmission from "./Transmission";
import Footer from "./Footer";
import {Helmet} from "react-helmet";

const BlogComp = () => {
  const [selectedMenuItem, setSelectedMenuItem] = useState(1);

  const handleMenuItemClick = (index) => {
    setSelectedMenuItem(index);
  };
  return (
    <>
     <Helmet>
            <title>SecureDApp Blog: Expert Insights on NFTs, Token Sales & DeFi Trends</title>
            <meta name="description" content="Dive into SecureDApp's blog for insightful articles on NFTs, token sales, and the future of DeFi. Stay updated with the latest trends, guides, and expert opinions on blockchain, tokenomics, and more." />
        </Helmet>
      <NavbarWithBread onItemClick={handleMenuItemClick} />
      <BlogHero />
      <Transmission />
      <Footer />
    </>
  );
};

export default BlogComp;
