import React from "react";
import Subheading from "./Subheading";
import SectionHeader from "./SectionHeader";
import AboutHeading from "./AboutHeading";

const AboutUsHero = () => {
  return (
    <div className="md:pt-[80px] pt-[60px]  bg-gradient-to-tr from-neutral-900 via-stone-800 to-green-700  ">
      <div className="flex lg:flex-row   md:pt-[100px] md:px-[80px] p-[30px] flex-col">
        <div className="px-4 min-w-min flex-shrink-3">
          <AboutHeading content={"SecureDapp:"} />
          <AboutHeading content={"Securing the Future of Defi"} />
          <div className="mt-6 bg-gradient-to-r from-green-500 to-blue-800 w-[160px] h-2"></div>
        </div>

        <div className="px-4 mt-[50px] mr-6 lg:ml-8 lg:mb-0 mb-4 w-fit ">
          <p className="text-white font-sans text-[16px] font-normal  leading-[150%]">
            SecureDApp is a DeFi ecosystem that originated as a distinguished
            blockchain security company and expanded into various categories,
            including a token launchpad, NFT marketplace, and DAO community.
            With a commitment to professionalism and excellence, SecureDApp
            encompasses a broad range of blockchain services, providing a
            secure, innovative, and community-driven environment for blockchain
            enthusiasts, projects, and users.
            <br /> <br />
            SecureDApp is a DeFi company that provides a comprehensive suite of
            services to help projects, investors, and users protect their
            digital assets. The company's mission is to make DeFi more secure
            and accessible to everyone.
            <br /> <br />
            SecureDApp's team of security experts has extensive experience in
            the DeFi industry. The company has audited smart contracts for some
            of the largest DeFi projects in the world. SecureDApp is also a
            member of the DeFi Security Alliance, a leading organisation in the
            field of DeFi security.
            <br /> <br />
            SecureDApp is committed to making DeFi more secure and accessible to
            everyone. The company's services help projects, investors, and users
            protect their digital assets and ensure that they can use DeFi
            technology with confidence.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUsHero;
