import React from "react";
import hero from "../images/smartdevhero.png";
import SectionHeader from "./SectionHeader";
const SmartContractDevhero = () => {
  return (
    <div className="md:pt-[150px] pt-[0px] smartdevbg ">
      <div className="flex md:flex-row flex-col-reverse lg:pt-0 pt-[00px]">
        <div className="lg:pt-[20px] pt-[00px] pl-[90px] pr-[30px] lg:-mt-[400px] -mt-[500px]">
          <img src={hero} alt="hero" className="pt-[500px]" />
        </div>
        <div className="lg:pt-[85px] pt-[150px] lg:w-[700px] pl-[30px]">
          <SectionHeader content={"Smart Contact Development"} />
          <p className="text-white text-opacity-80 text-[16px] font-normal leading-[160%] pt-6">
            SecureDApp is a company that specialises in smart contract
            development and security.
          </p>
          <p className="text-white text-opacity-80 text-[16px] font-normal leading-[160%] pt-6">
            We have the expertise, tools, and resources to help businesses
            develop secure and reliable smart contracts.
          </p>
          <p className="text-white text-opacity-80 text-[16px] font-normal leading-[160%] py-6">
            We offer a wide range of services to help businesses with smart
            contract development, including:
          </p>
          <li className="text-white text-opacity-80 text-[16px] text-left font-normal leading-[160%] pb-6 ">
            Consulting: We can help businesses understand the risks involved in
            smart contract development and how to mitigate those risks.
          </li>
          <li className="text-white text-opacity-80 text-[16px] text-left font-normal leading-[160%] pb-6 ">
            Development: We can develop smart contracts for businesses on a
            custom basis or using a pre-existing smart contract template.
          </li>
          <li className="text-white text-opacity-80 text-[16px] text-left font-normal leading-[160%] pb-6 ">
            Auditing: We can audit smart contracts to ensure that they are
            secure and reliable.
          </li>
          <li className="text-white text-opacity-80 text-[16px] text-left font-normal leading-[160%] pb-6 ">
            Testing: We can test smart contracts to ensure that they work as
            expected.
          </li>
        </div>
      </div>
    </div>
  );
};

export default SmartContractDevhero;
