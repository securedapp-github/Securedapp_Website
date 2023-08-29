import React from "react";
import flow from "../smartworkpic.png";
const SmartContractWorkflow = () => {
  return (
    <div className="smartdevwork pb-[20px]">
      <div className="lg:mx-[180px] mx-[20px] lg:pt-[120px] pt-[10px]">
        <h1 className="font-sans lg:text-[60px] md:text-[50px] font-bold leading-[110%]  bg-custom-gradient bg-clip-text text-transparent lg:w-[450px]">
          How does a smart contract work?
        </h1>

        <div className="lg:-mt-[150px] md:-mt-[0px]">
          <img src={flow} alt="flow" />
        </div>

        <div className="lg:mt-[10px]">
          <p className="text-white font-sans text-opacity-80 text-[16px] font-normal leading-[160%]">
            We also offer a number of other services to help businesses with
            smart contract development, including how to develop secure and
            reliable smart contracts and help companies after their smart
            contracts have been developed.
          </p>
          <br />
          <p className="text-white font-sans text-opacity-80 text-[16px] font-normal leading-[160%] mb-[50px]">
            SecureDAPP is committed to helping businesses develop secure and
            reliable DApp. SecureDApp believes that smart contracts have the
            potential to revolutionise the way businesses operate, and we are
            excited to be a part of that revolution.{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SmartContractWorkflow;
