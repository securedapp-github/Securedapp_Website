import React from "react";
import andrew from "../images/andrew.png";
import rouhan from "../images/rouhan.png";
import AboutContent from "./AboutContent";
import himanshu from "../images/himanshu.png";
import abishek from "../images/abishek.png";
import m1 from '../images/linkedin.png'
import m2 from '../images/telegram.png'
import m3 from '../images/twitter.png'

const TeamCard = ({ image,linkedin,telegram,twitter, name, designation, description }) => (
  <div className="w-[calc(25% - 20px)] w-[calc(33.33% - 20px)] lg:w-[300px] lg:ml-[25px] mx-[20px] pb-[20px]">
    <div className="bg-transparent border rounded-md border-[#3D3D3D] lg:h-[670px] md:h-[690px] h-[690px] lg:w-auto md:w-[300px] w-[300px] overflow-x-visible  p-0 shadow-md">
      <div className="relative rounded-md h-[300px] mb-4 bg-[#D9D9D9]">
        <img
          src={image}
          alt={name}
          className="rounded-md object-cover w-full h-full  rounded-t"
        />
      </div>
      <div className="flex flex-row justify-center gap-3 items-center">
        <div className="w-8 h-8">
          <a href={linkedin} target="_blank"><img src={m1} alt="" className="w-8 rounded-md h-8" /></a>
        
        </div>
        <div className="w-10 h-10">     <a href={telegram} target="_blank"><img src={m2} alt="" className="w-10 h-10" /></a>   
</div>
        <div className="w-10 h-10">
          <a href={twitter} target="_blank"><img src={m3} alt="" className="w-10 h-10" /></a>
        
          </div>
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
      linkedin:"https://www.linkedin.com/in/himanshu-gautam-69647289/",
      telegram:"https://web.telegram.org/k/#@himang305",
      twitter:"https://twitter.com/Himansh58851412",
      name: "Himanshu Gautam",
      designation: "Co-Founder & CTO",
      description:
        "Meet Himanshu, an experienced, smart contract auditor with over 05 years of experience in the field. With a Master's in Technology from IIT Kanpur, he combines a strong computer science foundation with extensive blockchain expertise. Himanshu's portfolio is diverse, featuring collaborations with leading blockchain firms, innovative startups, and prestigious government projects.",
    },
    {
      image: abishek,
      linkedin:"https://www.linkedin.com/in/avicsingh01/",
      telegram:"https://web.telegram.org/k/#@a_bhisheks",
      twitter:"https://twitter.com/A_bhisheks",
      name: "Abhishek Singh",
      designation: "Co-Founder & CEO",
      description:
        "Abhishek is a seasoned marketing maestro with a 15-year track record of propelling startups to success. A holder of a Master's degree in Management from Bangalore University, Abhishek has a rich history of collaborating with a spectrum of companies, from early-stage startups to established giants. His expertise lies in crafting and implementing marketing strategies that not only resonate with audiences but also deliver tangible outcomes.",
    },
    {
      image: andrew,
      linkedin:"https://www.linkedin.com/in/andrews-ellavendhan-34929433/",
      telegram:"https://web.telegram.org/k/#@andrews_a",
      twitter:"https://x.com/andrewsarena?t=B-kCwIYXYo8-vkJUD9PPBA&s=09",
      name: "Andrews Ellavendhan",
      designation: "Head of creative",
      description:
        "Andrew is a senior creative designer with a 12-year track record in UI/UX, graphic design, and branding. Focused on crafting user-centered experiences, he merges visual appeal with functionality. His keen insight into the latest design trends and technologies ensures he remains at the forefront of industry best practices.",
    },
    {
      image: rouhan,
      linkedin:"https://www.linkedin.com/in/abhishek-metakraft/",
      telegram:"https://web.telegram.org/k/#@TheMetakrafterGuy",
      twitter:"https://twitter.com/themetakrafter",
      name: "Abhishek Roushan",
      designation: "Head of Partnerships & Outreach",
      description:
        "With over 8 web3 companies under his belt, Abhishek has honed his skills as an expert UI and 3D designer. Driven by a passion for AR/VR, he creates immersive experiences and builds strong connections that spur growth. Known for scaling communities to over 50,000 members, Abhishek is a vanguard of digital innovation in the Metaverse.",
    },
    // Add more team members here
  ];
  return (
    <section className="w-full meetteam -mt-[60px] pt-[60px] lg:pb-[50px] lg:z-10 md:z-[121231231232]">
      <div className="  lg:mt-[60px] w-[100%] ">
        <div className="flex justify-center lg:pl-[80px] items-center py-[30px] w-full">
          <h1 className=" md:text-4xl text-2xl text-left whitespace-break-spaces w-fit font-sans font-bold leading-[110%]  bg-custom-gradient bg-clip-text text-transparent pb-[10px]">
            Meet the Team
          </h1>
        </div>
        <div className="flex justify-center overflow-x-auto">
          {teamMembers.map((member, index) => (
            <TeamCard key={index} {...member} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MeettheTeam;
