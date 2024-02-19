import React from "react";
import { useState } from "react";
import AuditModal from "./AuditModal";
import Heading from "./Heading";
import hero from "../images/monitor.png";
const Launch = () => {
  const [showModal, setShowModal] = useState(false);

  const handleModalClose = () => {
    setShowModal(false);
  };

  return (
    <>
      <div
        className=" md:pt-[30px] pt-[80px] md:h-[570px] hero lg:pb-0 font-gilroy"
        style={{
          background:
            " radial-gradient(10% 40% 50.00% at 10% 40% 50.00%, rgba(18, 213, 118, 0.31) 0%, rgba(0, 0, 0, 0.00) 100%) ",
        }}
      >
        <div className="flex lg:flex-row  lg:justify-start  md:pt-[100px] md:px-[0px] p-[20px] mb-[0px] w-full  flex-col-reverse">
          <div className=" flex flex-col justify-start lg:mx-[80px] md:mx-[80px] md:mt-[80px] lg:mt-[100px] mt-[50px]">
            <Heading content="Comprehensive Web3 Security" />
            <div className="text-white py-5 text-[24px] font-normal font-gilroy leading-[135%] text-opacity-80">
              Smart Contracts Audit Solution for DApps
            </div>
            <button
              onClick={() => {
                setShowModal(true);
              }}
              className="lg:mt-[30px] rounded-full py-2 px-7 border border-[2px] hover:[background:linear-gradient(90deg,_#12d576,_#2d5c8f)] border-white text-white text-center font-gilroy md:text-[22px] text-xl font-normal leading-normal"
            >
              Get it Audited Today
            </button>
          </div>
          <div className="lg:ml-[300px] md:ml-[130px] lg:mt-[8px] md:mt-[2px] mt-[30px]">
            <img
              src={hero}
              className="md:w-[492px]  md:h-[445px] w-full h-auto "
              alt="hero"
            />
          </div>
        </div>
      </div>
      <div className=" flex lg:flex-row flex-col justify-between  lg:h-[140px]  md:h-[140px] lg:pt-[0px] md:pt-[350px] pt-[50px] lg:py-[10px] lg:pb-0  req">
        <div className="md:mx-[80px] mx-[25px] md:my-[30px]  mb-[0px] pl-[0px]">
          <div className="text-white md:text-[28px] text-[24px] md:mb-[0px] mb-[10px]  font-semibold font-gilroy leading-[110%] ">
            Securing Your{" "}
            <span className="text-[#12D576] text-opacity-80">Web3 Journey</span>
            , So You Focus on Buildings
          </div>
          <div className="text-white pt-1 mt-[15px] text-[16px] font-normal font-gilroy leading-[135%] text-opacity-60">
            Comprehensive Blockchain Security Solutions & Smart Contract Audits.
            {/* Secure your smart contract with SecureDApp. */}
          </div>
        </div>
        <div className="flex justify-center items-center md:mb-[20px] mb-[50px] md:mx-[80px] mx-[25px]  lg:pl-[30px] ">
          <button
            onClick={() => {
              setShowModal(true);
            }}
            className=" z-[100001] lg:mt-[50px] md:mb-[10px] md:mt-[5px] mt-[25px] h-[60px] w-[370px] py-2 px-8  border border-transparent text-black  rounded-full [background:linear-gradient(90deg,_#12d576,_#2d5c8f)] hover:[background:linear-gradient(90deg,_#2d5c8f,_#12d576)] shadow-[0px_0px_80px_rgba(18,_213,_118,_0.25)]  text-center font-gilroy md:text-2xl text-xl font-normal leading-normal"
          >
            Request Your Audit Today
          </button>
        </div>

        {showModal && <AuditModal onClose={handleModalClose} />}
      </div>
    </>
  );
};

export default Launch;
