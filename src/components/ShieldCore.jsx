import React from "react";
import SectionHeader from "./SectionHeader";
import DescriptionFor from "./DescriptionFor";
import im from "../images/sch2.png";
const ShieldCore = () => {
  return (
    <div className="schield_core py-[50px] flex h-[350px] relative w-full justify-end ">
      <div className="absolute px-[80px] lg:pt-0 pt-[400px] h-full lg:h-[521px]  pb-[500px] z-[1000000] lg:bottom-[0px] lg:left-0 bottom-[140px]">
        <img
          src={im}
          alt="pic2"
          className="lg:h-[521px] lg:w-[500px] w-auto h-9/10 object-contain  "
        />
      </div>
      <div className="md:mx-[100px] mx-[50px] md:py-[50px] lg:pb-[60px] lg:pt-0 pt-[300px]  mb-[0px] lg:pl-[550px]">
        <SectionHeader content={"Solidity Shield’s Core"} />
        <DescriptionFor
          content={
            "The application supports a wide range of vulnerability types, including but not limited to reentrancy attacks, integer overflow and underflow, uninitialized storage pointers, and permission control issues. Solidity Shield's AI algorithms have been trained on vast datasets of known vulnerabilities, allowing it to recognize patterns and indicators of these issues, even in complex and sophisticated smart contracts."
          }
        />
      </div>
    </div>
  );
};

export default ShieldCore;
