import React, { useState } from "react";

import Transmission from "./Transmission";
import FooterInScan from "./FooterInScan";
import Navbar from "./Navbar";
import SecureDAppToken from "./SecureDappToken";
import t1 from "../images/tokenb1.png";
import t2 from "../images/tokenb2.png";
import t3 from "../images/tokenb3.png";
import t4 from "../images/tokenb4.png";
import t5 from "../images/tokenb5.png";
import tw1 from "../images/tokenwork1.png";
import tw2 from "../images/tokenwork2.png";
import SectionHeader from "./SectionHeader";
import {Helmet} from "react-helmet";

const SecurePadTokenComp = () => {
  const [selectedMenuItem, setSelectedMenuItem] = useState(1);

  const handleMenuItemClick = (index) => {
    setSelectedMenuItem(index);
  };
  return (
    <>
       <Helmet>
            <title>SecurePAD: The Premier No-Code, Zero-Fee, Cross-Chain Token Launchpad</title>
            <meta name="description" content="Introducing SecurePAD, the world's pioneering zero-fee, security-centric, no-code, cross-chain token launchpad. Empower your projects with KYC verification, smart contract auditing, and the ability to launch tokens on multiple blockchains without any coding experience." />
        </Helmet>
      <Navbar onItemClick={handleMenuItemClick} />
      <SecureDAppToken />
      <div className="features ">
        <div className="py-[20px] flex justify-center items-center font-sans text-[28px] font-normal md:px-0 px-5 text-white text-opacity-80 leading-[100%]">
          <h1> It offers a wide range of features, including:</h1>
        </div>

        <div className="flex flex-wrap lg:px-[100px] md:px-[40px] px-[30px] gap-5 lg:gap-[100px] py-[50px] ">
          <div>
            <img src={t1} alt="t1" />
          </div>
          <div>
            <img src={t2} alt="t2" />
          </div>
          <div>
            <img src={t3} alt="t3" />
          </div>
          <div>
            <img src={t4} alt="t4" />
          </div>
          <div>
            <img src={t5} alt="t5" />
          </div>
        </div>
      </div>
      <div className="bg-[#12D576]">
        <p className="text-black font-sans text-[16px] font-normal leading-[160%] -mt-[30px] lg:px-[80px] px-[20px] py-[20px]">
          Overall, SecurePAD is a powerful platform that can help projects to
          raise funds, trade tokens, and manage their token lifecycle. The
          platform's zero fees, security-focused approach, and no-code platform
          make it an attractive option for projects of all sizes.
        </p>
      </div>
      <div className="meetteam">
        <div className="flex justify-center items-center py-[30px] md:mx-0 mx-[20px]">
          <SectionHeader content={"SecureDApp's Token Launchpad Workings"} />
        </div>

        <div className="flex lg:flex-row flex-col lg:px-[100px] md:px-[60px] px-[20px] gap-9 py-[50px]">
          <div>
            <img src={tw1} alt="tw1" />
          </div>
          <div className="lg:mx-0 md:mx-[60px]">
            <img src={tw2} alt="tw2" />
          </div>
        </div>
      </div>
      <Transmission />
      <FooterInScan />
    </>
  );
};

export default SecurePadTokenComp;
