import React, { useState } from "react";

import NavbarWithBread from "./NavWithBread";
import AboutUsHero from "./AboutUsHero";
import MeettheTeam from "./MeettheTeam";
import Footer from "./Footer";
import FooterInAbout from "./FooterInAbout";
import TransmissionInAbout from "./TransmissonInAbout";
import Transmission from "./Transmission";
import {Helmet} from "react-helmet";


const AboutComp = () => {
  const [selectedMenuItem, setSelectedMenuItem] = useState(1);

  const handleMenuItemClick = (index) => {
    setSelectedMenuItem(index);
  };
  return (
    <>
     <Helmet>
            <title>About SecureDApp: Pioneering the Future of DeFi with Expertise & Innovation</title>
            <meta name="description" content="Discover SecureDApp, a leading DeFi ecosystem with a focus on blockchain security. From a token launchpad to an NFT marketplace and DAO community, SecureDApp offers a range of services backed by a team of experts. Dive into our mission, values, and meet the team behind our success." />
        </Helmet>
      <NavbarWithBread onItemClick={handleMenuItemClick} />
      <AboutUsHero />
      <MeettheTeam />
      <Transmission />
      <FooterInAbout />
    </>
  );
};

export default AboutComp;
