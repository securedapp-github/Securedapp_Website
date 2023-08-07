import React from "react";
import Subheading from "./Subheading";
import { useState } from "react";
import AuditModal from "./AuditModal";
// import hero from "../heroLaunch.png";
import Heading from "./Heading";
import pic1 from "../images/--hp-elite-dragonfly@2x.png";
import hero from "../images/monitor.png";
const Launch = () => {
  const [showModal, setShowModal] = useState(false);

  const handleModalClose = () => {
    setShowModal(false);
  };

  return (
    <>
      <div
        className=" md:pt-[30px] pt-[60px] lg:h-[570px] hero lg:pb-0      "
        style={{
          background:
            " radial-gradient(10% 40% 50.00% at 10% 40% 50.00%, rgba(18, 213, 118, 0.31) 0%, rgba(0, 0, 0, 0.00) 100%) ",
        }}
      >
        <div className="flex lg:flex-row md:flex-row lg:justify-start  md:pt-[100px] md:px-[0px] p-[20px] mb-[0px] w-full  flex-col-reverse">
          <div className=" flex flex-col justify-start lg:ml-[80px] lg:mt-[100px] mt-[50px]">
            <Heading content="Comprehensive Web3 Security    " />
            <div className="text-white py-5 text-[24px] font-normal font-sans leading-[135%] text-opacity-80">
              Smart Contracts Audit Solution for DApps
            </div>
            <button
              onClick={() => {
                setShowModal(true);
              }}
              className="lg:mt-[30px] rounded-full py-2 px-7 border border-[2px] border-white text-white text-center font-sans md:text-[22px] text-xl font-normal leading-normal"
            >
              Get it Audited Today
            </button>
          </div>
          <div className="lg:ml-[300px] lg:mt-[8px] mt-[60px]">
            <img
              src={hero}
              className="lg:w-[492px] lg:h-[445px] w-full h-auto "
              alt="hero"
            />
          </div>
        </div>

        {/* <div className=" h-[7.04%] w-[85.43%] top-[2.65%] right-[7.14%] bottom-[90.31%] left-[7.43%] text-5xl">
        <img
          className="absolute h-full w-[53.09%] top-[0%] right-[0%] bottom-[0%] left-[46.91%] max-w-full overflow-hidden max-h-full object-cover"
          alt=""
          src={pic1}
        />
        <b className="absolute w-[38.04%] top-[11.95%] left-[0%] text-17xl leading-[110%] inline-block">
          Unlocking the DeFi Potential with SecurePAD
        </b>
        <b className="absolute w-[47.32%] top-[60%] left-[0%] leading-[110%] inline-block text-mediumspringgreen">
          Embark on the Future of Fundraising with us.
        </b>
        <div className="absolute w-[49.75%] top-[36.36%] left-[0%] text-base leading-[135%] text-gray-600 inline-block">
          Discover the Power of Tokenomics with SecurePAD. Experience Exclusive
          Early Access to the Next Unicorn in DeFi Tokenization. Trustworthy
          Audited and Vetted Web3 Projects.
        </div>
        <div className="absolute h-[15.58%] w-[28.51%] top-[77.14%] right-[71.49%] bottom-[7.27%] left-[0%] rounded-13xl shadow-[0px_0px_80px_rgba(18,_213,_118,_0.25)] box-border border-[2px] border-solid border-white" />
        <div className="absolute top-[81.3%] left-[2.68%] text-center">
          Exciting Upcoming Project
        </div>
      </div> */}
      </div>
      <div className=" flex lg:flex-row flex-col  lg:h-[140px] lg:pt-[0px] pt-[50px] lg:py-[10px]  req">
        <div className="md:mx-[80px] mx-[25px] md:my-[30px]  mb-[0px] pl-[0px]">
          <div className="text-white md:text-[32px] text-[25px] md:mb-[0px] mb-[10px]  font-semibold font-sans leading-[110%] ">
            Securing Your{" "}
            <span className="text-[#12D576] text-opacity-80">Web3 Journey</span>
            , So You Focus on Building
          </div>
          <div className="text-white pt-1 mt-[15px] text-[16px] font-normal font-sans leading-[135%] text-opacity-60">
            Comprehensive Blockchain Security Solutions & Smart Contract.
            Audits Secure your smart contract with SecureDApp.
          </div>
        </div>
        <div className="flex justify-center items-center md:mb-[20px] mb-[50px] md:ml-0 ml-[40px] pr-[30px] lg:pl-[30px] ">
          <button
            onClick={() => {
              setShowModal(true);
            }}
            className=" z-[100001] lg:mt-[50px] md:mb-[10px] md:mt-[5px] mt-[25px] h-[60px] w-[341px] py-2 px-8  border border-transparent text-black  rounded-full [background:linear-gradient(90deg,_#12d576,_#2d5c8f)] shadow-[0px_0px_80px_rgba(18,_213,_118,_0.25)]  text-center font-sans md:text-2xl text-xl font-normal leading-normal"
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
