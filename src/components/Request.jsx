import React, { useState } from "react";
import AuditModal from "./AuditModal";
const Request = () => {
  const [showModal, setShowModal] = useState(false);

  const handleModalClose = () => {
    setShowModal(false);
  };
  return (
    <div className=" flex lg:flex-row flex-col  lg:h-[140px] lg:pt-[0px] pt-[40px]  req ">
      <div className="lg:mx-[100px] mx-[25px] md:my-[30px]  mb-[0px] pl-[20px]">
        <div className="text-white md:text-[32px] text-[25px] md:mb-[0px] mb-[10px]  font-semibold font-sans leading-[110%] ">
          Securing Your{" "}
          <span className="text-[#12D576] text-opacity-80">Web3 Journey</span>,
          So You Focus on Building
        </div>
        <div className="text-white pt-1 mt-[15px] text-[16px] font-normal font-sans leading-[135%] text-opacity-60">
          Comprehensive Blockchain Security Solutions & Smart Contract.
          Audits Secure your smart contract with SecureDApp.
        </div>
      </div>
      <div className="flex justify-center items-center md:mb-[20px] mb-[50px] md:ml-0 ml-[40px] pr-[30px] ">
        <button
          onClick={() => {
            setShowModal(true);
          }}
          className=" lg:mt-[50px] md:mb-[10px] md:mt-[5px] mt-[25px] h-[60px] w-[341px] py-2 px-8  border border-transparent text-black  rounded-full [background:linear-gradient(90deg,_#12d576,_#2d5c8f)] hover:[background:linear-gradient(90deg,_#2d5c8f,_#12d576)] shadow-[0px_0px_80px_rgba(18,_213,_118,_0.25)]  text-center font-sans md:text-xl text-xl font-normal leading-normal"
        >
          Request Your Audit Today
        </button>
      </div>

      {showModal && <AuditModal onClose={handleModalClose} />}
    </div>
  );
};

export default Request;
