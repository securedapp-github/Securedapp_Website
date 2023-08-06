import React, { useState } from "react";

import Transmission from "./Transmission";
import FooterInScan from "./FooterInScan";
import Navbar from "./Navbar";
import SecureDAppToken from "./SecureDappToken";
import TokenFirstSec from "./TokenFirstSec";
const TokenomicsComp = () => {
  const [selectedMenuItem, setSelectedMenuItem] = useState(1);

  const handleMenuItemClick = (index) => {
    setSelectedMenuItem(index);
  };
  return (
    <>
      <Navbar onItemClick={handleMenuItemClick} />
      <TokenFirstSec />
      <div className="TokenSecond">
        <div className="lg:pl-[80px] lg:pt-[30px] lg:pb-[10px]">
          <h1 className="text-white font-sans text-opacity-80 text-[20px] font-normal leading-[100%]">
            Our tokenomics design services include:
          </h1>
        </div>

        <div className="flex justify-evenly lg:pb-[50px] lg:pt-[20px] lg:px-[40px]  ">
          <div className="w-[380px] ">
            <h1 className="text-[#12D576] text-justify text-[16px] font-bold leading-[160%]">
              Defining your token's utility:{" "}
            </h1>
            <h1 className="text-white text-opacity-80 font-[16px] font-normal leading-[160%]">
              We help you to define the purpose of your token and how it will be
              used in your project.
            </h1>
          </div>

          <div className="w-[2px] h-[80px] mr-[30px] bg-[#D9D9D9] bg-opacity-20 "></div>

          <div className="w-[380px]">
            <h1 className="text-[#12D576] text-justify text-[16px] font-bold leading-[160%]">
              Determining your token's supply and distribution:
            </h1>
            <h1 className="text-white text-opacity-80 font-[16px] font-normal leading-[160%]">
              We help you to determine how many tokens will be created and how
              they will be distributed.
            </h1>
          </div>
          <div className="w-[2px] h-[80px] mr-[30px] bg-[#D9D9D933] bg-opacity-20 "></div>

          <div className="w-[380px]">
            <h1 className="text-[#12D576] text-justify text-[16px] font-bold leading-[160%]">
              Setting your token's price:
            </h1>
            <h1 className="text-white text-opacity-80 font-[16px] font-normal leading-[160%]">
              We help you to set a fair price for your token that will attract
              investors and users.
            </h1>
          </div>
        </div>
      </div>

      <div className="tokenthird"></div>
      <div className="bg-[#12D576]">
        <div className="text-black">
          <div className="lg:pl-[80px] lg:pt-[30px] lg:pb-[10px]">
            <h1 className=" font-sans text-opacity-80 text-[20px] font-bold leading-[100%]">
              Our tokenomics design services include:
            </h1>
          </div>

          <div className="flex justify-evenly lg:pb-[50px] lg:pt-[20px] lg:px-[40px]  ">
            <div className="w-[380px] ">
              <h1 className=" text-justify text-[16px] font-bold leading-[160%]">
                Defining your token's utility:{" "}
              </h1>
              <h1 className=" text-opacity-80 font-[16px] font-normal leading-[160%]">
                We help you to define the purpose of your token and how it will
                be used in your project.
              </h1>
            </div>

            <div className="w-[2px] h-[80px] mr-[30px] bg-[#fff] bg-opacity-20 "></div>

            <div className="w-[380px]">
              <h1 className=" text-justify text-[16px] font-bold leading-[160%]">
                Determining your token's supply and distribution:
              </h1>
              <h1 className=" text-opacity-80 font-[16px] font-normal leading-[160%]">
                We help you to determine how many tokens will be created and how
                they will be distributed.
              </h1>
            </div>
            <div className="w-[2px] h-[80px] mr-[30px] bg-[#fff] bg-opacity-20 "></div>

            <div className="w-[380px]">
              <h1 className=" text-justify text-[16px] font-bold leading-[160%]">
                Setting your token's price:
              </h1>
              <h1 className=" text-opacity-80 font-[16px] font-normal leading-[160%]">
                We help you to set a fair price for your token that will attract
                investors and users.
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="TokenSecond">
        <div className="lg:pl-[80px] lg:pt-[30px] lg:pb-[10px]">
          <h1 className="text-white font-sans text-opacity-80 text-[20px] font-normal leading-[100%]">
            Our tokenomics design services include:
          </h1>
        </div>

        <div className="flex justify-evenly lg:pb-[50px] lg:pt-[20px] lg:px-[40px]  ">
          <div className="w-[380px] ">
            <h1 className="text-[#12D576] text-justify text-[16px] font-bold leading-[160%]">
              Defining your token's utility:{" "}
            </h1>
            <h1 className="text-white text-opacity-80 font-[16px] font-normal leading-[160%]">
              We help you to define the purpose of your token and how it will be
              used in your project.
            </h1>
          </div>

          <div className="w-[2px] h-[80px] mr-[30px] bg-[#D9D9D9] bg-opacity-20 "></div>

          <div className="w-[380px]">
            <h1 className="text-[#12D576] text-justify text-[16px] font-bold leading-[160%]">
              Determining your token's supply and distribution:
            </h1>
            <h1 className="text-white text-opacity-80 font-[16px] font-normal leading-[160%]">
              We help you to determine how many tokens will be created and how
              they will be distributed.
            </h1>
          </div>
          <div className="w-[2px] h-[80px] mr-[30px] bg-[#D9D9D933] bg-opacity-20 "></div>

          <div className="w-[380px]">
            <h1 className="text-[#12D576] text-justify text-[16px] font-bold leading-[160%]">
              Setting your token's price:
            </h1>
            <h1 className="text-white text-opacity-80 font-[16px] font-normal leading-[160%]">
              We help you to set a fair price for your token that will attract
              investors and users.
            </h1>
          </div>
        </div>
      </div>
      <div className="TokenLast">
        <div className="lg:pl-[80px] lg:py-[50px]">
          <h1 className="text-white text-opacity-80 text-[20px] font-bold leading-[100%]">
            Our tokenomics design, development, and audit services can help you
            to:
          </h1>
        </div>

        <div className="flex justify-evenly lg:pb-[50px]  lg:px-[40px] ">
          <div className="w-[380px] ">
            <h1 className="text-[#12D576] text-justify text-[16px] font-bold leading-[160%]">
              Create a successful token-based project:{" "}
            </h1>
            <h1 className="text-white text-opacity-80 font-[16px] font-normal leading-[160%]">
              Our team of experts can help you to design, develop, and launch a
              token-based project that is aligned with your business goals and
              that will be successful in the market.
            </h1>
          </div>

          <div className="w-[2px] h-[130px] mr-[30px] bg-[#D9D9D9] bg-opacity-20 "></div>

          <div className="w-[380px]">
            <h1 className="text-[#12D576] text-justify text-[16px] font-bold leading-[160%]">
              Attract investors and users:{" "}
            </h1>
            <h1 className="text-white text-opacity-80 font-[16px] font-normal leading-[160%]">
              Our team of experts can help you to market and launch your token
              to the public, attracting investors and users who will help to
              grow your project.{" "}
            </h1>
          </div>
          <div className="w-[2px] h-[130px] mr-[30px] bg-[#D9D9D933] bg-opacity-20 "></div>

          <div className="w-[380px]">
            <h1 className="text-[#12D576] text-justify text-[16px] font-bold leading-[160%]">
              Track the performance of your token:{" "}
            </h1>
            <h1 className="text-white text-opacity-80 font-[16px] font-normal leading-[160%]">
              Our team of experts can help you to track the performance of your
              token, providing you with insights that will help you to make
              necessary adjustments to your tokenomics.
            </h1>
          </div>
        </div>

        <div className="flex justify-center items-center">
          <div className="w-[88%] h-[2px] bg-[#D9D9D9] bg-opacity-20 py-[0px] lg:px-[80px]"></div>
        </div>

        <div className="lg:py-[30px] lg:px-[80px]">
          <p className="text-white text-opacity-80 text-[16px] font-normal leading-[120%]">
            If you are considering launching a token-based project, it is
            important to have your tokenomics designed, developed, and audited
            by a qualified firm. A tokenomics audit from SecureDApp can help you
            to ensure that your tokenomics are sound and sustainable, and that
            your token-based project will be successful in the market.
          </p>
        </div>
      </div>
      <Transmission />
      <FooterInScan />
    </>
  );
};

export default TokenomicsComp;
