import React from "react";
import AboutHeading from "./AboutHeading";
import cto from "../images/cto.png";
import ceo from "../images/ceo.png";
import creative from "../images/creative.png";
import TeamHeading from "./TeamHeading";
import TeamSubHeading from "./TeamSubHeading";
import { TeamDescription } from "./TeamDescription";
const FounderSection = () => {
  return (
    <div className=" bg-gradient-to-tr from-neutral-900 via-stone-800 to-green-700   pb-[60px]">
      <div className="md:pt-[100px] md:px-[80px] p-[30px]">
        <AboutHeading content={"Meet the Team"} />
      </div>
      <div className="grid md:pt-[00px] md:px-[80px] p-[30px] grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-0">
        <div className="bg-[#D9D9D9] lg:h-[300px] md:h-[220px] h-[180px]  flex items-end relative">
          <div className="w-full h-full flex">
            <img
              src={cto}
              alt="cto"
              className="h-[98%]  w-full mt-1.5 object-cover"
            />
          </div>
        </div>
        <div className="bg-[#12D576] lg:h-[300px] md:h-[220px] h-[180px] ">
          <TeamHeading content={"Himanshu Gautam"} />
          <TeamSubHeading content={"Co-Founder & CTO"} />
          <TeamDescription
            content={
              "Meet Himanshu, an experienced, smart contract auditor with over 05 years of experience in the field. He has done his Masters in Technology from IIT Kanpur. He has a strong background in computer science and a deep understanding of blockchain technology. Himanshu has worked with many clients, including top-notch blockchain companies, startups, and the government projects."
            }
          />
        </div>
        <div className="bg-[#D9D9D9] lg:h-[300px] md:h-[220px] h-[180px]">
          <div className="w-full h-full">
            <img
              src={ceo}
              alt="ceo"
              className="h-[100%]  w-full object-cover"
            />
          </div>
        </div>
        <div className="bg-gray-200 lg:h-[300px] md:h-[220px] h-[180px]">
          <TeamHeading content={"Abhishek Singh"} />
          <TeamSubHeading content={"Co-Founder & CEO"} />
          <TeamDescription
            content={
              "Meet Abhishek, a marketing expert with over 15 years of experience helping startups to grow and succeed. Abhishek holds a masters degree in management from Bangalore university. Throughout his career, Abhishek has worked with many companies, from early-stage startups to well-established enterprises, to develop and execute marketing strategies that drive results."
            }
          />
        </div>

        <div className="bg-gray-200 lg:h-[300px] md:h-[220px] h-[180px]">
          <TeamHeading content={"Abhishek Roushan"} />
          <TeamSubHeading content={"Head of Partnerships & Outreach"} />
          <TeamDescription
            content={
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
            }
          />
        </div>
        <div className="bg-[#D9D9D9] lg:h-[300px] md:h-[220px] h-[180px]"></div>
        <div className="bg-gray-200 lg:h-[300px] md:h-[220px] h-[180px]">
          <TeamHeading content={"Andrews Ellavendhan"} />
          <TeamSubHeading content={"Head of Creatives"} />
          <TeamDescription
            content={
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
            }
          />
        </div>
        <div className="bg-[#D9D9D9] lg:h-[300px] md:h-[220px] h-[180px]">
          <div className="w-full h-full">
            <img
              src={creative}
              alt="creative"
              className="h-[100%]  w-full object-fill"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FounderSection;
