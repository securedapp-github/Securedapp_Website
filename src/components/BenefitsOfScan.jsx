import React from "react";
import SectionHeader from "./SectionHeader";
import Description from "./Description";
import DescriptionFor from "./DescriptionFor";

const BenefitsOfScan = () => {
  return (
    <div className="md:px-[100px]  md:py-[50px] lg:pb-[60px] py-[50px] schield_benefit w-full mb-[0px] flex lg:flex-row flex-col gap-[60px]">
      <div className="lg:w-7/12 lg:px-[0px] md:px-[0px] px-[50px] md:pt-0 pt-[50px] ">
        <SectionHeader content={"Solidity Shields Benefits"} />
        <Description content={"Security:"} />
        <DescriptionFor
          content={
            "Solidity Shield's AI-powered vulnerability detection engine can identify and report security vulnerabilities in smart contracts. This helps to protect smart contracts from attack and ensure that they are secure."
          }
        />

        <Description content={"Reliability:"} />
        <DescriptionFor
          content={
            "Solidity Shield's audit reports are comprehensive and easy to understand. This helps developers to understand the security risks in their smart contracts and to take steps to mitigate those risks. "
          }
        />

        <Description content={" Cost-effectiveness:"} />

        <DescriptionFor
          content={
            " Solidity Shield's audit services are affordable and accessible to developers of all sizes. This makes it possible for developers to protect their smart contracts without breaking the bank."
          }
        />
      </div>
      <div className="lg:w-5/12 lg:px-[0px] md:px-[0px] px-[50px] ">
        <h1 className="text-white text-[36px] font-normal font-sans leading-[110%] pb-[20px]">
          Lead Form
        </h1>
        <div className="pb-[25px]">
          <input
            type="email"
            placeholder="Your email"
            style={{ border: "1px solid rgba(255, 255, 255, 0.20)" }}
            className="bg-transparent p-4 border rounded-[20px] placeholder:text-[16px] placeholder:font-sans placeholder:text-[#FFF] placeholder:text-opacity-20 w-11/12 "
          />
        </div>
        <div className="pb-[25px]">
          <input
            type="text"
            placeholder="Company name"
            style={{ border: "1px solid rgba(255, 255, 255, 0.20)" }}
            className="bg-transparent p-4 border rounded-[20px] placeholder:text-[16px] placeholder:font-sans placeholder:text-[#FFF] placeholder:text-opacity-20 w-11/12 "
          />
        </div>
        <div className="pb-[25px]">
          <input
            type="text"
            placeholder="Contact number"
            style={{ border: "1px solid rgba(255, 255, 255, 0.20)" }}
            className="bg-transparent p-4 border rounded-[20px] placeholder:text-[16px] placeholder:font-sans placeholder:text-[#FFF] placeholder:text-opacity-20 w-11/12 "
          />
        </div>
        <div className="pb-[25px]">
          {/* <input
            type="text"
            placeholder="Your name"
            style={{ border: "1px solid rgba(255, 255, 255, 0.20)" }}
            className="bg-transparent p-4 border rounded-[20px] placeholder:text-[16px] placeholder:font-sans placeholder:text-[#FFF] placeholder:text-opacity-20 w-11/12 "
          /> */}

          <textarea
            placeholder="Requirement (optional)"
            className="bg-transparent p-4 border rounded-[20px] placeholder:text-[16px] placeholder:font-sans placeholder:text-[#FFF] placeholder:text-opacity-20 w-11/12 "
            cols="30"
            rows="10"
          ></textarea>
        </div>
        <button
          type="submit"
          className=" w-11/12 rounded-[55px] bg-[#12D576] px-7 py-3 font-sans text-[21px] font-normal leading-[100%] "
        >
          SUBMIT
        </button>
      </div>
    </div>
  );
};

export default BenefitsOfScan;
