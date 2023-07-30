import React from "react";

const Transmission = () => {
  return (
    <div
      style={{
        background:
          "radial-gradient(50%_50%_at_50%_50%,_rgba(18,_213,_118,_0.24),_rgba(0,_0,_0,_0))",
      }}
      className="lg:py-[40px] lg:px-[100px] md:p-[70px] p-[50px] bg-gradient-to-r from-green-500 via-emerald-500 to-cyan-600 flex lg:justify-between lg:flex-row flex-col items-center    "
    >
      <div className=" md:text-[48px] md:leading-[110%] text-3xl text-center whitespace-break-spaces w-fit font-sans font-bold leading-[110%] text-black">
        Receive Transmissions
      </div>
      <div className="py-8">
        <button className="email-button rounded-3xl bg-gray-500 text-white  flex items-center justify-between md:w-[620px] md:h-[92px] w-[300px]  py-7 px-9 ">
          <span class="email-text font-light font-sans text-2xl leading-[110%]">
            Your email
          </span>
          <span class="arrow font-light font-sans text-2xl leading-[110%]">
            &gt;
          </span>
        </button>
      </div>
    </div>
  );
};

export default Transmission;
