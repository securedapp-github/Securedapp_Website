import React from "react";
import andrew from "../images/andrew.png";
import rouhan from "../images/rouhan.png";
import AboutContent from "./AboutContent";
import himanshu from "../images/himanshu.png";
import abishek from "../images/abishek.png";

const TeamCard = ({ image, name, designation, description }) => (
  <div className="w-full md:w-1/2 lg:w-[300px] lg:ml-[25px] mx-[20px] pb-[20px]">
    <div className="bg-transparent border border-[#3D3D3D] h-[610px] p-0 shadow-md">
      <div className="relative h-[300px] mb-4 bg-[#D9D9D9]">
        <img
          src={image}
          alt={name}
          className="object-cover w-full h-full rounded-t"
        />
      </div>
      <div className="text-2xl font-bold leading-normal text-white font-sans pt-1 pl-[21px]">
        {name}
      </div>
      <div className="text-white text-[16px] font-sans font-normal leading-normal mb-2 py-0 pl-[21px]">
        {designation}
      </div>
      <p className="text-white font-sans text-[14px] font-normal leading-[130%] ml-[21px] mr-[22px]">
        {description}
      </p>
    </div>
  </div>
);
const MeettheTeam = () => {
  const teamMembers = [
    {
      image: himanshu,
      name: "Himanshu Gautam",
      designation: "Co-Founder & CTO",
      description:
        "Meet Himanshu, an experienced, smart contract auditor with over 05 years of experience in the field. He has done his Masters in Technology from IIT Kanpur. He has a strong background in computer science and a deep understanding of blockchain technology. Himanshu has worked with many clients, including top-notch blockchain companies, startups, and the government projects.",
    },
    {
      image: abishek,
      name: "Abhishek Singh",
      designation: "Co-Founder & CEO",
      description:
        "Meet Abhishek, a marketing expert with over 15 years of experience helping startups to grow and succeed. Abhishek holds a masters degree in management from Bangalore university. Throughout his career, Abhishek has worked with many companies, from early-stage startups to well-established enterprises, to develop and execute marketing strategies that drive results.",
    },
    {
      image: andrew,
      name: "Andrews Ellavendhan",
      designation: "Head of creative",
      description:
        "Meet Andrew, he is a senior creative designer with over 12 years of experience in UI/UX, graphic design, and branding. He is passionate about creating user-centred experiences that are both visually appealing and functional. Andrew has a strong understanding of the latest design trends and technologies, and he is always up-to-date on the latest industry best practices.",
    },
    {
      image: rouhan,
      name: "Abhishek Roushan",
      designation: "Head of Partnerships & Outreach",
      description:
        "Meet Abhishek Roushan, Head of    Partnership & Outreach With 8+ web3 companies under my belt as a consultant, I have honed my skills as an expert UI and 3D Designer. My passion for AR/VR drives me to create immersive experiences, while my sales acumen forges meaningful connections and fosters growth. Scaling communities to 50k+ members, I continue to pioneer digital transformation within the Metaverse.",
    },
    // Add more team members here
  ];
  return (
    <section className="w-full meetteam -mt-[60px] pt-[60px] lg:pb-[50px]">
      <div className="lg:mx-[80px] lg:mt-[60px] ">
        <div className="flex justify-center items-center py-[30px]">
          <h1 className=" md:text-4xl text-2xl text-left whitespace-break-spaces w-fit font-sans font-bold leading-[110%]  bg-custom-gradient bg-clip-text text-transparent pb-[10px]">
            Meet the Team
          </h1>
        </div>
        <div className="flex flex-wrap lg:-mx-7 lg:w-[1450px] ">
          {teamMembers.map((member, index) => (
            <TeamCard key={index} {...member} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MeettheTeam;
