import React from "react";

const AuditBenefit = () => {
  return (
    <div className="auditBenefit">
      <div className="lg:pl-[80px] lg:py-[80px] py-[40px] pl-[20px]">
        <h1 className="text-white text-opacity-80 lg:text-[32px] text-xl font-normal leading-[100%]">
          The benefits of smart contract auditing by SecureDApp include:
        </h1>
      </div>

      <div className="flex lg:flex-row flex-col lg:justify-evenly lg:pb-[50px] lg:px-0 px-[20px]  ">
        <div className="w-[320px] ">
          <h1 className="text-[#12D576] text-justify text-[16px] font-bold leading-[160%]">
            Increased security:{" "}
          </h1>
          <h1 className="text-white text-opacity-80 font-[16px] font-normal leading-[160%] lg:pb-0 pb-[20px]">
            A smart contract audit can help to identify and mitigate security
            vulnerabilities in smart contracts, which can help to protect users
            from financial losses or other damages.
          </h1>
        </div>

        <div className="w-[2px] h-[130px] mr-[30px]  bg-[#D9D9D9] bg-opacity-20 lg:block hidden "></div>

        <div className="w-[320px]">
          <h1 className="text-[#12D576] text-justify text-[16px] font-bold leading-[160%]">
            Increased reliability:
          </h1>
          <h1 className="text-white text-opacity-80 font-[16px] font-normal leading-[160%] lg:pb-0 pb-[20px]">
            A smart contract audit by SecureDApp can help to ensure that smart
            contracts are reliable and that they will function as intended.
          </h1>
        </div>
        <div className="w-[2px] h-[130px] mr-[30px]  bg-[#D9D9D9] bg-opacity-20 lg:block hidden "></div>

        <div className="w-[320px]">
          <h1 className="text-[#12D576] text-justify text-[16px] font-bold leading-[160%]">
            Increased confidence:
          </h1>
          <h1 className="text-white text-opacity-80 font-[16px] font-normal leading-[160%] lg:pb-0 pb-[20px]">
            A smart contract audit by SecureDApp can help to increase the
            confidence of users in smart contracts, which can help to promote
            adoption.
          </h1>
        </div>
      </div>

      <div className="flex justify-center items-center">
        <div className="w-[88%] h-[2px] bg-[#D9D9D9] bg-opacity-20 py-[0px] lg:px-[80px]"></div>
      </div>

      <div className="lg:py-[50px] lg:px-[80px] px-[20px] py-[40px]">
        <p className="text-white text-opacity-80 text-[20px] font-normal leading-[130%]">
          If you are developing or using smart contracts, it is important to
          have them audited by a qualified auditor. A smart contract audit can
          help to ensure the security, reliability, and confidence in your smart
          contracts.
        </p>
      </div>
    </div>
  );
};

export default AuditBenefit;
