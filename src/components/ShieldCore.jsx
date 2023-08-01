import React from "react";
import SectionHeader from "./SectionHeader";
import DescriptionFor from "./DescriptionFor";
import im from "../images/sch2.png";
const ShieldCore = () => {
  return (
    <div className=" bg-[#0c4126] bg-opacity-50 py-[50px] flex h-[350px] relative w-full justify-end ">
      <div className="absolute pl-[80px] h-full lg:h-[521px]  pb-[500px] z-[1000000] bottom-[0px] left-0">
        <img
          src={im}
          alt="pic2"
          className="lg:h-[521px] lg:w-[500px] w-auto h-full object-cover  "
        />
      </div>
      <div className="md:mx-[100px] mx-[50px] md:py-[50px] lg:pb-[60px]  mb-[0px] pl-[550px]">
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
