import React, { useState } from "react";
import SectionHeader from "./SectionHeader";
import Description from "./Description";
import DescriptionFor from "./DescriptionFor";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ContactHero = () => {

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
    <div className="contacthero md:pt-[80px] pt-[130px]">
      <div className="md:pt-[50px] lg:mx-[80px] border-b-2 border-gray-500">
        <div className="flex gap-[40px] py-[15px] lg:px-0 px-[30px]">
          <a href="/">
            <span className="text-white font-sans text-[16px] font-normal leading-normal">
              Home
            </span>
          </a>
          <a href="/contact-us">
            <span className="text-[#12D576] font-sans text-[16px] font-bold leading-normal">
              Contact Us
            </span>
          </a>
        </div>
      </div>
      <div className=" lg:pt-[110px] pt-[10px] py-[60px]  md:px-[80px]  md:py-[50px] lg:pb-[60px] py-[50px]  w-full mb-[0px] flex lg:flex-row flex-col gap-[60px]">
        <div className="lg:w-7/12 lg:px-[0px] md:px-[0px] px-[50px] md:pt-0 pt-[50px] ">
          <h1
            className="font-sans lg:text-[64px] text-[40px] text-ellipsis font-bold leading-[110%] bg-custom-gradient bg-clip-text text-transparent "
            // style={{
            //   background: "linear-gradient(90deg, #12D576 0%, #2D5C8F 100%)",
            //   backgroundImage:
            //     "-webkit-linear-gradient(90deg, #12D576 0%, #2D5C8F 100%)",
            //   WebkitBackgroundClip: "text",
            //   WebkitTextFillColor: "transparent",
            // }}
          >
            Inquiries{" "}
          </h1>
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
    </div>
    </>
  );
};

export default ContactHero;
