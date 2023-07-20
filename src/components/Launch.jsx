import React from "react";
import Subheading from "./Subheading";
import hero from "../heroLaunch.png";
import Heading from "./Heading";
const Launch = () => {
  return (
    <div
      className="md:pt-[30px] pt-[60px] lg:h-min  md:h-fit lg:h-[535px]  "
      style={{
        background:
          "radial-gradient(50% 50.00% at 0% 100.00%, rgba(18, 213, 118, 0.31) 0%, rgba(0, 0, 0, 0.00) 100%)",
      }}
    >
      <div className="flex lg:flex-row md:flex-row  md:pt-[100px] md:px-[80px] p-[30px] pb-0 flex-col-reverse">
        <div className="px-3 pt-7 flex-shrink h-fit">
          <Heading content="Unlocking the DeFi    Potential with SecurePAD" />
          <div className="mt-[10px]">
            <Subheading content="Discover the Power of Tokenomics with SecurePAD. Experience Exclusive Early Access to the Next Unicorn in DeFi Tokenization. Trustworthy Audited and Vetted Web3 Projects." />
          </div>
          <h3 className="text-green-500 font-roboto md:text-[22px] text-xl  font-semibold leading-[110%] mt-[30px]">
            Embark on the Future of Fundraising with us.
          </h3>

          <button className="mt-[50px] rounded-full py-2 px-7 border border-white text-white text-center font-sans md:text-[22px] text-xl font-normal leading-normal">
            Exciting Upcoming Project
          </button>
        </div>
        <div className="md:mb-[100px] mt-[40px] -mt-[10px]">
          <img
            src={hero}
            className="md:w-[1400px] md:h-[360px] w-auto h-auto"
            alt="hero"
          />
        </div>
      </div>
    </div>
  );
};

export default Launch;
