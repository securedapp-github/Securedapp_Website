import React from "react";
import NavbarWithBread from "./NavWithBread";
import ContactHero from "./ContactHero";
import Transmission from "./Transmission";
import Footer from "./Footer";
import FooterInAbout from "./FooterInAbout";

const ContactComp = () => {
  return (
    <>
      <NavbarWithBread />
      <ContactHero />
      <Transmission />
      <FooterInAbout />
    </>
  );
};

export default ContactComp;
