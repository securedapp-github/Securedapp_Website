import React from "react";
import SectionHeader from "./SectionHeader";
import hero from "../images/auditheropic.png";
const TokenFirstSec = () => {
  return (
    <div className="md:pt-[200px] pt-[140px] audithero">
      <div className="flex gap-[0px] ">
        <div className="lg:pl-[80px] lg:py-0 py-[20px] lg:px-0 px-[20px]">
          <SectionHeader content={"Tokenomics design, development & audit"} />
          <div className="lg:w-[1030px] lg:my-[40px] my-[20px]">
            <p className="text-white text-opacity-80 font-sans font-normal leading-[160%]">
              SecureDApp provides tokenomics design, development, and audit
              services to help businesses create and launch successful
              token-based projects. Our team of experienced tokenomics experts
              has a deep understanding of the economics of blockchain-based
              projects and can help you to design a token economy that is
              aligned with your business goals.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TokenFirstSec;
