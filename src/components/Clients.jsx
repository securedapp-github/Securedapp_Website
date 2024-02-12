import React from "react";
import SectionHeader from "./SectionHeader";
import clientLogo from "../clientlogos.png";

const Clients = () => {
  return (
    <div className="client font-gilroy  md:p-[100px] lg:pt-[100px] md:pt-[300px]  lg:p-[80px] p-[50px] md:px-[80px] flex lg:flex-row md:flex-col flex-col "
    >
      <div className="lg:w-4/12 mr-[50px]">
        <SectionHeader content={"Client"} />
        <div className="text-white pt-1 md:text-[20px] text-[18px] mt-[20px] font-normal font-gilroy leading-[135%] text-opacity-60 ">
          Leading DApp startups trust us to secure their blockchain applications
        </div>
      </div>
      <div className="flex flex-wrap lg:px-[30px] lg:ml-[60px] lg:mt-0 mt-[50px] ">
        <img
          src={clientLogo}
          alt="logos"
          className="md:w-auto md:h-auto w-[600px] h-[100px]"
        />
      </div>
    </div>
  );
};

export default Clients;
