import React from "react";
import SectionHeader from "./SectionHeader";
import Marquee from "react-fast-marquee"
import logo1 from "../logo1.png"
import logo2 from "../logo2.png"
import logo3 from "../logo3.png"
import logo4 from "../logo4.png"
import logo5 from "../logo5.png"

import clientLogo from "../clientlogos.png";

const Clients = () => {
  return (
    <>
    <div className="client  md:p-[800px] md:pt-[20px] lg:p-[80px] p-[50px] md:px-[80px] flex lg:flex-row md:flex-col flex-col ">
      <div className="lg:w-4/12 mr-[50px]">
        <SectionHeader content={"Client"} />
        <div className="text-white pt-1 md:text-[20px] text-[18px] mt-[20px] font-normal font-sans leading-[135%] text-opacity-60 ">
          Leading DApp startups trust us to secure their blockchain applications
        </div>
      </div>
      
     
      <Marquee>
  <div>
    <img src={logo1} alt="logo1" className="w-50 h-16" />
  </div>
  <div>
    <img src={logo2} alt="logo2" className="w-50 h-16" />
  </div>
  <div>
    <img src={logo3} alt="logo3" className="w-50 h-16" />
  </div>
  <div>
    <img src={logo4} alt="logo4" className="w-50 h-16"/>
  </div>
  <div>
    <img src={logo5} alt="logo5" className="w-50 h-16" />
  </div>
</Marquee>


     </div>
    

    </>
    
  );
};

export default Clients;
