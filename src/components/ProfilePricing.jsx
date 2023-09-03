import React from "react";
import NavbarWithBread from "./NavWithBread";
import History from "./History";
import Transmission from "./Transmission";
import Footer from "./Footer";

import FooterInAbout from "./FooterInAbout";
import { useParams } from 'react-router-dom';

const ProfilePricing = () => {

  return (
    <>
      <NavbarWithBread />
<div className="bloghero"> <History />
</div>
     

      <Transmission />
      <FooterInAbout />
    </>
  );
};

export default ProfilePricing;
