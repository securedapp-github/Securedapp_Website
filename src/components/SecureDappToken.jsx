import React from "react";
import SectionHeader from "./SectionHeader";
import hero from "../images/securepadicon.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SecureDAppToken = () => {
  const SecurePad_Link = () => {
    return (
      <div
        className=" flex lg:flex-row flex-col  lg:h-[140px] lg:pt-[0px] pt-[40px]  "
        style={{ background: "rgba(217, 217, 217, 0.04)" }}
      >
        <div className="md:mx-[100px] mx-[25px] md:my-[30px]  mb-[0px] pl-[20px]">
          <div className="text-white md:text-[22px] text-[25px] md:mb-[0px] mb-[10px]  font-semibold font-sans leading-[110%] ">
            Introducing{" "}
            <span className="text-[#12D576] text-opacity-80">SecurePAD</span>,
            The pioneering zero-fee, security-centric, no-code, cross-chain
            platform empowering users to create, trade, and oversee the entire
            token lifecycle.
          </div>
        </div>
        <div className="flex justify-center items-center md:mb-[20px] mb-[50px] md:ml-0 ml-[40px] pr-[30px] ">
          <button
            onClick={() => {
              // toast("Coming Soon");
              window.open("https://securepad.xyz/", "_blank");
            }}
            className=" lg:mt-[50px] md:mb-[10px] md:mt-[5px] mt-[25px] h-[60px] w-[341px] py-2 px-8  border border-transparent text-black  rounded-full [background:linear-gradient(90deg,_#12d576,_#2d5c8f)] hover:[background:linear-gradient(90deg,_#2d5c8f,_#12d576)] shadow-[0px_0px_80px_rgba(18,_213,_118,_0.25)]  text-center font-sans md:text-xl text-xl font-normal leading-normal"
          >
            Launch SecurePad
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="md:pt-[200px] pt-[150px] pt-[0px] audithero">
      <ToastContainer
        position="top-center"
        autoClose={2000}
        theme="dark"
        pauseOnHover
      />
      <div className="flex lg:flex-row flex-col-reverse gap-[0px] ">
        <div className="lg:px-[80px] px-[20px] lg:pb-0 pb-5">
          <SectionHeader content={"SecurePAD's Token Launchpad"} />
          <div className="lg:w-[800px] lg:my-[40px] my-5">
            <p className="text-white text-opacity-80 font-sans font-normal leading-[160%]">
              SecurePAD is the world's first zero-fee, security-prominent,
              no-code, and cross-chain platform for anyone to create, trade, and
              manage the end-to-end lifecycle of a token.
            </p>
            <p className="text-white text-opacity-80 font-sans font-normal leading-[160%] pt-[30px]">
              Zero fees make it an affordable option for projects looking to
              raise funds through an IDO. The platform's security-focused
              approach ensures that projects are subject to KYC verification and
              smart contract auditing before they can launch on the platform.
              SecurePAD's no-code platform makes it easy for projects to launch
              an IDO without having any coding experience. And because SecurePAD
              is cross-chain, projects can launch their tokens on multiple
              blockchains.{" "}
            </p>
          </div>
        </div>

        <div className="pt-[50px]">
          <img src={hero} alt="hero" />
        </div>
      </div>
      <SecurePad_Link />
    </div>
  );
};

export default SecureDAppToken;
