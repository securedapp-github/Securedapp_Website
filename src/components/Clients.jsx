import React from "react";
import SectionHeader from "./SectionHeader";
import Marquee from "react-fast-marquee"
import client1 from "../client1.png"
import client2 from "../client2.png"
import client3 from "../client3.png"
import client4 from "../client4.png"
import client5 from "../client5.png"

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
    <img src={client1} alt="client1" className="w-50 h-16" />
  </div>
  <div>
    <img src={client2} alt="client2" className="w-50 h-16" />
  </div>
  <div>
    <img src={client3} alt="client3" className="w-50 h-16" />
  </div>
  <div>
    <img src={client4} alt="clien4" className="w-50 h-16"/>
  </div>
  <div>
    <img src={client5} alt="client5" className="w-50 h-16" />
  </div>
</Marquee>


     </div>
    

    </>
    
  );
};

export default Clients;
