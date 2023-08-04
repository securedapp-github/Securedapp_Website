import React from "react";
import Subheading from "./Subheading";
import SectionHeader from "./SectionHeader";
import AboutHeading from "./AboutHeading";
import AboutContent from "./AboutContent";

const Card = ({ number, heading, subheading }) => (
  <div className="w-full md:w-1/2 lg:w-1/4 p-0">
    <div className="bg-white border border-gray-300 rounded p-6 shadow-md">
      <div className="text-2xl font-semibold">{number}</div>
      <div className="text-lg font-semibold mt-2">{heading}</div>
      <div className="text-gray-600 mt-1">{subheading}</div>
    </div>
  </div>
);

const AboutUsHero = () => {
  const cards = [
    { number: 1, heading: "Card One", subheading: "This is the first card." },
    { number: 2, heading: "Card Two", subheading: "This is the second card." },
    { number: 3, heading: "Card Three", subheading: "This is the third card." },
    { number: 4, heading: "Card Four", subheading: "This is the fourth card." },
  ];
  return (
    <div className="md:pt-[80px] pt-[60px]  abouthero ">
      <div className="md:pt-[50px] lg:mx-[80px] border-b-2 border-gray-500">
        <div className="flex gap-[40px] py-[15px]">
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

      <div className="w-[730px] lg:mx-[80px] lg:mt-[75px]">
        <h1
          className="font-sans text-[64px] font-bold leading-[110%] bg-custom-gradient bg-clip-text text-transparent "
          // style={{
          //   background: "linear-gradient(90deg, #12D576 0%, #2D5C8F 100%)",
          //   backgroundImage:
          //     "-webkit-linear-gradient(90deg, #12D576 0%, #2D5C8F 100%)",
          //   WebkitBackgroundClip: "text",
          //   WebkitTextFillColor: "transparent",
          // }}
        >
          SecureDApp: Securing the Future of DeFi
        </h1>
      </div>
      <div className="lg:mx-[80px] lg:mt-[30px] w-[980px]">
        <AboutContent content="SecureDApp is a DeFi ecosystem that originated as a distinguished blockchain security company and expanded into various categories, including a token launchpad, NFT marketplace, and DAO community. With a commitment to professionalism and excellence, SecureDApp encompasses a broad range of blockchain services, providing a secure, innovative, and community-driven environment for blockchain enthusiasts, projects, and users." />
        <AboutContent content="SecureDApp is a DeFi company that provides a comprehensive suite of services to help projects, investors, and users protect their digital assets. The company's mission is to make DeFi more secure and accessible to everyone." />
        <AboutContent content=" SecureDApp's team of security experts has extensive experience in the DeFi industry. The company has audited smart contracts for some of the largest DeFi projects in the world. SecureDApp is also a member of the DeFi Security Alliance, a leading organisation in the field of DeFi security." />
        <AboutContent content=" SecureDApp is committed to making DeFi more secure and accessible to everyone. The company's services help projects, investors, and users protect their digital assets and ensure that they can use DeFi technology with confidence." />
      </div>

      <div className="lg:mx-[80px] lg:mt-[60px]">
        <h1 className=" md:text-4xl text-2xl text-left whitespace-break-spaces w-fit font-sans font-bold leading-[110%]  bg-custom-gradient bg-clip-text text-transparent pb-[10px]">
          Why Choose SecureDApp?
        </h1>
        <AboutContent content="There are many reasons to choose SecureDApp for your DeFi security needs. Here are just a few:" />

        <div className="flex flex-wrap ">
          {cards.map((card) => (
            <Card key={card.number} {...card} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutUsHero;
