import React from "react";
import SectionHeader from "./SectionHeader";
import hero from "../images/securepadicon.png";
const SecureDAppToken = () => {
  return (
    <div className="md:pt-[200px] pt-[150px] pt-[0px] audithero">
      <div className="flex lg:flex-row flex-col-reverse gap-[0px] ">
        <div className="lg:px-[80px] px-[20px] lg:pb-0 pb-5">
          <SectionHeader content={"SecurePAD's Token Launchpad"} />
          <div className="lg:w-[800px] lg:my-[40px] my-5">
            <p className="text-white text-opacity-80 font-sans font-normal leading-[160%]">
              SecurePAD is the world's first zero-fee, security-prominent,
              no-code, and cross-chain platform for anyone to create, trade, and
              manage the end-to-end lifecycle of a token.
            </p>
            <p className="text-white text-opacity-80 font-sans font-normal leading-[160%] pt-[30px]">
              Zero fees make it an affordable option for projects looking to
              raise funds through an IDO. The platform's security-focused
              approach ensures that projects are subject to KYC verification and
              smart contract auditing before they can launch on the platform.
              SecurePAD's no-code platform makes it easy for projects to launch
              an IDO without having any coding experience. And because SecurePAD
              is cross-chain, projects can launch their tokens on multiple
              blockchains.{" "}
            </p>
          </div>
        </div>

        <div className="pt-[50px]">
          <img src={hero} alt="hero" />
        </div>
      </div>
    </div>
  );
};

export default SecureDAppToken;
