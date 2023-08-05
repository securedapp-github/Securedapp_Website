import React from "react";
import SectionHeader from "./SectionHeader";
import hero from "../images/auditheropic.png";
const DappSecurityHero = () => {
  return (
    <div className="md:pt-[200px] pt-[0px] audithero">
      <div className="flex gap-[15px]">
        <div className="lg:pl-[80px]">
          <SectionHeader content={"Smart Contract Audit"} />
          <div className="lg:w-[737px] lg:mt-[40px]">
            <p className="text-white text-opacity-80 font-sans font-normal leading-[160%]">
              Smart contract auditing is a critical step in ensuring the
              security and reliability of smart contracts. Smart contracts are
              computer programs that are stored on a blockchain and can be used
              to automate transactions. However, smart contracts can also be
              vulnerable to security vulnerabilities, which can lead to
              financial losses or other damages.At SecureDApp, a smart contract
              audit is a process of reviewing the code of a smart contract to
              identify and mitigate security vulnerabilities very diligently.
              SecureDApp’s smart contract auditors typically use a variety of
              tools and techniques to perform the audit, including static
              analysis, dynamic analysis, and manual review. SecureDApp’s
              AI-powered smart contract vulnerability detection tool plays a
              very important role in auditing. 
            </p>
          </div>

          <div className="rounded-full">
            <div className="gradient-border rounded-full">dfdfd</div>
          </div>
        </div>

        <div className="lg:pl-[50px]">
          <img src={hero} alt="hero" />
        </div>
      </div>
    </div>
  );
};

export default DappSecurityHero;
