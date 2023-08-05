import React from "react";
import SectionHeader from "./SectionHeader";
import hero from "../images/auditheropic.png";
const DappSecurityHero = () => {
  return (
    <div className="md:pt-[200px] pt-[0px] audithero">
      <div className="flex gap-[15px] ">
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

          <div className="flex flex-wrap pt-[20px] lg:w-[737px] ">
            <div className="auditButton flex justify-center items-center mr-[30px] my-[10px]">
              <div className="flex justify-evenly items-center w-full">
                <h1
                  className="font-sans text-[32px] font-medium leading-[110%]"
                  style={{
                    background:
                      "linear-gradient(90deg, #12D576 0%, #2D5C8F 100%)",
                    backgroundClip: "text",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  01
                </h1>
                <h1 className="text-white font-sans text-[20px] font-normal leading-[110%]">
                  {" "}
                  Collect Documentation
                </h1>
              </div>
            </div>
            <div className="auditButton flex justify-center items-center my-[10px]">
              <div className="flex justify-evenly items-center w-full">
                <h1
                  className="font-sans text-[32px] font-medium leading-[110%]"
                  style={{
                    background:
                      "linear-gradient(90deg, #12D576 0%, #2D5C8F 100%)",
                    backgroundClip: "text",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  02
                </h1>
                <h1 className="text-white font-sans text-[20px] font-normal leading-[110%]">
                  {" "}
                  Automated Testing
                </h1>
              </div>
            </div>
            <div className="auditButton flex justify-center items-center mr-[30px] my-[10px]">
              <div className="flex justify-evenly items-center w-full">
                <h1
                  className="font-sans text-[32px] font-medium leading-[110%]"
                  style={{
                    background:
                      "linear-gradient(90deg, #12D576 0%, #2D5C8F 100%)",
                    backgroundClip: "text",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  03
                </h1>
                <h1 className="text-white font-sans text-[20px] font-normal leading-[110%]">
                  {" "}
                  Manual Review
                </h1>
              </div>
            </div>
            <div className="auditButton flex justify-evenly items-center my-[10px] ">
              <div className="flex justify-evenly items-center w-full">
                <h1
                  className="font-sans text-[32px] px-4 font-medium leading-[110%]"
                  style={{
                    background:
                      "linear-gradient(90deg, #12D576 0%, #2D5C8F 100%)",
                    backgroundClip: "text",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  04
                </h1>
                <h1 className="text-white font-sans text-[20px] font-normal leading-[110%]">
                  {" "}
                  Classification of Contract Errors
                </h1>
              </div>
            </div>
            <div className="auditButton flex justify-center items-center mr-[30px] my-[10px]">
              <div className="flex justify-evenly items-center w-full">
                <h1
                  className="font-sans text-[32px] font-medium leading-[110%]"
                  style={{
                    background:
                      "linear-gradient(90deg, #12D576 0%, #2D5C8F 100%)",
                    backgroundClip: "text",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  05
                </h1>
                <h1 className="text-white font-sans text-[20px] font-normal leading-[110%]">
                  {" "}
                  Initial Report
                </h1>
              </div>
            </div>
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
