import React from "react";
import SectionHeader from "./SectionHeader";
import hero from "../images/auditheropic.png";
const DappDevHero = () => {
  return (
    <div className="md:pt-[200px] pt-[150px]  audithero">
      <div className="flex gap-[0px] ">
        <div className="lg:px-[80px] px-[20px]">
          <SectionHeader content={"DApp Development"} />
          <div className="lg:w-[800px] lg:my-[40px] my-[20px]">
            <p className="text-white text-opacity-80 font-sans font-normal leading-[160%]">
              SecureDApp is a blockchain security solution that offers a
              comprehensive range of services for developers building
              decentralised applications (DApps). The platform's
              security-focused approach ensures that DApps are built on a secure
              foundation, while it's no-code platform makes it easy for
              developers to get started without having any coding experience.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DappDevHero;
