import React from "react";
import Subheading from "./Subheading";
// import hero from "../heroLaunch.png";
import Heading from "./Heading";
import pic1 from "../images/--hp-elite-dragonfly@2x.png";
const Launch = () => {
  return (
    <div
      className=" md:pt-[30px] pt-[60px] lg:h-[570px]    relative   "
      style={{
        background:
          "linear-gradient(rgba(18, 213, 118, 0.7) 0%, rgba(rgba(18, 213, 118, 0.1) 100%)",
      }}
    >
      <div className="absolute top-[-2010px] left-[-12px] rounded-[50%] [background:radial-gradient(50%_50%_at_50%_50%,_rgba(18,_213,_118,_0.7),_rgba(0,_0,_0,_0))] w-[2707px] h-[2707px]" />

      <div className="flex lg:flex-row md:flex-row  md:pt-[100px] md:px-[80px] p-[30px] pb-0 flex-col-reverse">
        <div className="px-5 pt-7 flex-shrink h-fit lg:w-2/4 mt-[57px] lg:pl-[40px] lg:pb-0 pb-[30px]">
          <Heading content="Unlocking the DeFi    " />
          <Heading content="Potential with SecurePAD  " />
          <div className="mt-[10px] w-13/14">
            <Subheading content="Discover the Power of Tokenomics with SecurePAD. Experience Exclusive Early Access to the Next Unicorn in DeFi Tokenization. Trustworthy Audited and Vetted Web3 Projects." />
          </div>
          <h3 className="text-green-500 font-roboto md:text-[22px] text-xl  font-semibold leading-[110%] mt-[30px]">
            Embark on the Future of Fundraising with us.
          </h3>

          <button className="mt-[50px] rounded-full py-2 px-7 border border-[2px] border-white text-white text-center font-sans md:text-[22px] text-xl font-normal leading-normal">
            Exciting Upcoming Project
          </button>
        </div>
        <div className="md:mb-[100px] lg:-ml-[50px] mr-[40px] mt-[40px] lg:pt-0 pt-[30px]  ml-[30px]  -mt-[10px] z-[100000]">
          <img
            src={pic1}
            className="lg:w-[689.025px] lg:h-[384.875px] w-full h-auto max-w-full object-cover"
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
  );
};

export default Launch;
