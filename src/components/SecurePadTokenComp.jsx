import React, { useState } from "react";

import Transmission from "./Transmission";
import FooterInScan from "./FooterInScan";
import Navbar from "./Navbar";
import SecureDAppToken from "./SecureDappToken";
const SecurePadTokenComp = () => {
  const [selectedMenuItem, setSelectedMenuItem] = useState(1);

  const handleMenuItemClick = (index) => {
    setSelectedMenuItem(index);
  };
  return (
    <>
      <Navbar onItemClick={handleMenuItemClick} />
      <SecureDAppToken />
      <div className="features"></div>
      <div className="bg-[#12D576]">
        <p className="text-black font-sans text-[16px] font-normal leading-[160%] -mt-[30px] lg:px-[80px] px-[20px] py-[20px]">
          Overall, SecurePAD is a powerful platform that can help projects to
          raise funds, trade tokens, and manage their token lifecycle. The
          platform's zero fees, security-focused approach, and no-code platform
          make it an attractive option for projects of all sizes.
        </p>
      </div>
      <div className="working"></div>
      <Transmission />
      <FooterInScan />
    </>
  );
};

export default SecurePadTokenComp;
