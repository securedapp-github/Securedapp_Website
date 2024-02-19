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
        "SecureDApp boasts a highly skilled security team with deep roots in the DeFi sector, ensuring unparalleled expertise in blockchain protection.",
    },
    {
      number: "02",
      heading: "Reputation",
      subheading:
        "As an esteemed member of the DeFi Security Alliance, SecureDApp stands at the forefront of DeFi security innovation and standards.",
    },
    {
      number: "03",
      heading: "Services",
      subheading:
        "SecureDApp provides a full suite of DeFi security solutions, alongside a token launchpad, NFT marketplace, & DAO governance.",
    },
    {
      number: "04",
      heading: "Affordability",
      subheading:
        "Offering competitive pricing, SecureDApp ensures its top-tier security services are accessible to a broad spectrum of projects, investors, and users.",
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

      <div className="lg:w-[830px] lg:mx-[80px] lg:mt-[75px] mt-[40px] mx-[20px]">
        <h1 className="font-sans lg:text-[37px] text-[40px] text-ellipsis font-bold leading-[110%] bg-custom-gradient bg-clip-text text-transparent ">
        SecureDApp: Making Web3 Secured for Everyone
        </h1>
      </div>
      <div className="lg:mx-[80px] lg:mt-[30px] lg:w-[980px] mx-[20px] mt-[40px]">
        <AboutContent content=" In the fast-paced world of blockchain, where innovation races ahead at breakneck speed, the shadow of vulnerabilities and cyber threats looms large. It’s a field where the excitement of technological breakthroughs is often tempered by the risks they bring. Ensuring safety and compliance isn’t just important; it's essential to the ecosystem's growth and sustainability." />
        <AboutContent content="Enter SecureDApp, a luminary in the broader Web3 universe, initially revered for its blockchain security acumen before broadening its horizons. Today, SecureDApp stands as a multifaceted platform encompassing a token launchpad, NFT marketplace, and an engaging DAO community. This expansion is a clear reflection of SecureDApp’s dedication not just to security, but to fostering innovation and community involvement across the entire Web3 space." />
        <AboutContent content="With a mission centered on making Web3 safer and more accessible, SecureDApp's expert team brings unparalleled experience to the table, auditing contracts for leading DeFi projects and contributing to the DeFi Security Alliance." />
        <AboutContent content="SecureDApp is shaping a future where the Web3 landscape isn’t just a frontier of innovation, but a domain where security, inclusivity, and community flourish together." />
      </div>

      <div className="lg:mx-[80px] lg:mt-[60px] mx-[20px] mt-[40px]">
        <h1 className=" md:text-4xl text-2xl text-left whitespace-break-spaces w-fit font-sans font-bold leading-[110%]  bg-custom-gradient bg-clip-text text-transparent pb-[10px]">
          Why Choose SecureDApp?
        </h1>
        <AboutContent content="With SecureDApp, leap into Web3 knowing you're backed by the best in security." />

        <div className="flex flex-wrap pb-[50px] ">
          {cards.map((card) => (
            <Card key={card.number} {...card} />
          ))}
        </div>

        <AboutContent
          content={
            ""
          }
          check={true}
        />
      </div>
    </div>
  );
};

export default AboutUsHero;
