import React, { useState } from "react";
import SectionHeader from "./SectionHeader";
import Description from "./Description";
import DescriptionFor from "./DescriptionFor";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const BenefitsOfScan = () => {

  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const [description, setDescription] = useState("");

  const sendMail = async () => {

    if(name == "" ||  email == "" || description == ""){
      toast("Invalid Input");
      return;
    }

    fetch('https://139-59-5-56.nip.io:3443/contactMail', {
        method: 'POST',
        body: JSON.stringify({
            name: name,
            mail: email,
            msg: number+"---"+description
        }),
        headers: {
            'Content-type': 'application/json',
        },
    })
        .then((res) => { })
        .then((data) => {
            toast.success('Mail Send Successfully');
        })
        .catch((err) => {
            console.log(err.message);
            toast("Error in sending mail");
        });

};



  return (
      <>
  <ToastContainer
          position="top-center"
          autoClose={2000}
          theme="dark"
          pauseOnHover
        />
    <div className="md:px-[80px]  md:py-[50px] lg:pb-[60px] py-[50px] schield_benefit w-full mb-[0px] flex lg:flex-row flex-col gap-[60px]">
      <div className="lg:w-7/12 lg:px-[0px] md:px-[0px] px-[50px] md:pt-0 pt-[50px] ">
        <SectionHeader content={"Solidity Shields Benefits"} />
        <Description content={"Security:"} />
        <DescriptionFor
          content={
            "Solidity Shield's AI-powered vulnerability detection engine can identify and report security vulnerabilities in smart contracts. This helps to protect smart contracts from attack and ensure that they are secure."
          }
        />

        <Description content={"Reliability:"} />
        <DescriptionFor
          content={
            "Solidity Shield's audit reports are comprehensive and easy to understand. This helps developers to understand the security risks in their smart contracts and to take steps to mitigate those risks. "
          }
        />

        <Description content={" Cost-effectiveness:"} />

        <DescriptionFor
          content={
            " Solidity Shield's audit services are affordable and accessible to developers of all sizes. This makes it possible for developers to protect their smart contracts without breaking the bank."
          }
        />
      </div>
      <div className="lg:w-5/12 lg:px-[0px] md:px-[0px] px-[50px] ">
        <h1 className="text-white text-[36px] font-normal font-sans leading-[110%] pb-[20px]">
          Lead Form
        </h1>
        <div className="pb-[25px]">
          <input
            type="email"
            placeholder="Your email"
            value={email}
              onChange={(e) => setEmail(e.target.value)}
            style={{ border: "1px solid rgba(255, 255, 255, 0.20)" }}
            className="bg-transparent p-4 border rounded-[20px] placeholder:text-[16px] placeholder:font-sans placeholder:text-[#FFF] placeholder:text-opacity-20 w-11/12 "
          />
        </div>
        <div className="pb-[25px]">
          <input
            type="text"
            placeholder="Company name"
            value={name}
              onChange={(e) => setName(e.target.value)}
            style={{ border: "1px solid rgba(255, 255, 255, 0.20)" }}
            className="bg-transparent p-4 border rounded-[20px] placeholder:text-[16px] placeholder:font-sans placeholder:text-[#FFF] placeholder:text-opacity-20 w-11/12 "
          />
        </div>
        <div className="pb-[25px]">
          <input
            type="text"
            placeholder="Contact number"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            style={{ border: "1px solid rgba(255, 255, 255, 0.20)" }}
            className="bg-transparent p-4 border rounded-[20px] placeholder:text-[16px] placeholder:font-sans placeholder:text-[#FFF] placeholder:text-opacity-20 w-11/12 "
          />
        </div>
        <div className="pb-[25px]">

          <textarea
            placeholder="Requirement (optional)"
            value={description}
              onChange={(e) => setDescription(e.target.value)}
            className="bg-transparent p-4 border rounded-[20px] placeholder:text-[16px] placeholder:font-sans placeholder:text-[#FFF] placeholder:text-opacity-20 w-11/12 "
            cols="30"
            rows="10"
          ></textarea>
        </div>
        <button
          type="button"
          onClick={() => {sendMail();}}
          className=" w-11/12 rounded-[55px] bg-[#12D576] px-7 py-3 font-sans text-[21px] font-normal leading-[100%] "
        >
          SUBMIT
        </button>
      </div>
    </div>
    </>
  );
};

export default BenefitsOfScan;
