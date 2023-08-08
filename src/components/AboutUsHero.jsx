import React from "react";
import Subheading from "./Subheading";
import SectionHeader from "./SectionHeader";
import AboutHeading from "./AboutHeading";
import AboutContent from "./AboutContent";
import Request from "./Request";

const Card = ({ number, heading, subheading }) => (
  <div className="w-full md:w-1/2 lg:w-1/4 p-0 ">
    <div className="bg-transparent border-[1px] border-[#3D3D3D] h-[300px]  pt-8 px-8 ">
      <div className="text-2xl font-bold text-white leading-[130%] font-sans text-opacity-20">
        {number}
      </div>
      <div className="text-2xl  font-normal mt-2 text-white font-sans leading-[130%] ">
        {heading}:
      </div>
      <div className="text-white font-sans text-[16px] font-normal leading-[130%] mt-5">
        {subheading}
      </div>
    </div>
  </div>
);

const AboutUsHero = () => {
  const cards = [
    {
      number: "01",
      heading: "Expertise",
      subheading:
        "SecureDApp's team of security experts has extensive experience in the DeFi industry.",
    },
    {
      number: "02",
      heading: "Reputation",
      subheading:
        " SecureDApp is a member of the DeFi Security Alliance, a leading organisation in the field of DeFi security.",
    },
    {
      number: "03",
      heading: "Services",
      subheading:
        "SecureDApp offers a wide range of DeFi security services, including smart contract auditing, token launchpad, NFT marketplace, DAO governance, and security consulting.",
    },
    {
      number: "04",
      heading: "Affordability",
      subheading:
        " SecureDApp's services are affordable and accessible to projects, investors, and users of all sizes.",
    },
  ];

  return (
    <div className="md:pt-[80px] pt-[130px]  abouthero ">
      <div className="md:pt-[50px] lg:mx-[80px] border-b-2 border-gray-500">
        <div className="flex gap-[40px] py-[15px] lg:px-0 px-[30px]">
          <a href="/">
            <span className="text-white font-sans text-[16px] font-normal leading-normal">
              Home
            </span>
          </a>
          <a href="/about-us">
            <span className="text-[#12D576] font-sans text-[16px] font-bold leading-normal">
              About Us
            </span>
          </a>
        </div>
      </div>

      <div className="lg:w-[730px] lg:mx-[80px] lg:mt-[75px] mt-[40px] mx-[20px]">
        <h1
          className="font-sans lg:text-[64px] text-[40px] text-ellipsis font-bold leading-[110%] bg-custom-gradient bg-clip-text text-transparent "
        >
          SecureDApp: Securing the Future of DeFi
        </h1>
      </div>
      <div className="lg:mx-[80px] lg:mt-[30px] lg:w-[980px] mx-[20px] mt-[40px]">
        <AboutContent content="SecureDApp is a DeFi ecosystem that originated as a distinguished blockchain security company and expanded into various categories, including a token launchpad, NFT marketplace, and DAO community. With a commitment to professionalism and excellence, SecureDApp encompasses a broad range of blockchain services, providing a secure, innovative, and community-driven environment for blockchain enthusiasts, projects, and users." />
        <AboutContent content="SecureDApp is a DeFi company that provides a comprehensive suite of services to help projects, investors, and users protect their digital assets. The company's mission is to make DeFi more secure and accessible to everyone." />
        <AboutContent content=" SecureDApp's team of security experts has extensive experience in the DeFi industry. The company has audited smart contracts for some of the largest DeFi projects in the world. SecureDApp is also a member of the DeFi Security Alliance, a leading organisation in the field of DeFi security." />
        <AboutContent content=" SecureDApp is committed to making DeFi more secure and accessible to everyone. The company's services help projects, investors, and users protect their digital assets and ensure that they can use DeFi technology with confidence." />
      </div>

      <Request/>

      <div className="lg:mx-[80px] lg:mt-[60px] mx-[20px] mt-[40px]">
        <h1 className=" md:text-4xl text-2xl text-left whitespace-break-spaces w-fit font-sans font-bold leading-[110%]  bg-custom-gradient bg-clip-text text-transparent pb-[10px]">
          Why Choose SecureDApp?
        </h1>
        <AboutContent content="There are many reasons to choose SecureDApp for your DeFi security needs. Here are just a few:" />

        <div className="flex flex-wrap pb-[20px] ">
          {cards.map((card) => (
            <Card key={card.number} {...card} />
          ))}
        </div>

        <AboutContent
          content={
            "If you are looking for a secure and reliable DeFi security partner, then SecureDApp is the right choice for you."
          }
        />
      </div>
    </div>
  );
};

export default AboutUsHero;
