import React from "react";
import AboutHeading from "./AboutHeading";

const WhySecureDapp = () => {
  return (
    <div className="md:pt-[80px] pt-[1px]  bg-gradient-to-tr from-neutral-900 via-stone-800 to-green-700  ">
      <div className="md:pt-[100px] md:px-[80px] p-[30px]">
        <AboutHeading content="Why Choose SecureDApp?" />
        <div className="py-[60px]">
          <p className="text-white font-sans text-lg font-normal leading-6 pb-11">
            There are many reasons to choose SecureDApp for your DeFi security
            needs. Here are just a few:
          </p>

          <div className="ml-[30px]">
            <ul className="list-disc">
              <li className="text-white font-sans text-lg font-normal leading-6 pb-11">
                Expertise: SecureDApp's team of security experts has extensive
                experience in the DeFi industry.
              </li>
              <li className="text-white font-sans text-lg font-normal leading-6 pb-11">
                Reputation: SecureDApp is a member of the DeFi Security
                Alliance, a leading organisation in the field of DeFi security.{" "}
              </li>
              <li className="text-white font-sans text-lg font-normal leading-6 pb-11">
                Services: SecureDApp offers a wide range of DeFi security
                services, including smart contract auditing, token launchpad,
                NFT marketplace, DAO governance, and security consulting.
              </li>
              <li className="text-white font-sans text-lg font-normal leading-6 pb-11">
                Affordability: SecureDApp's services are affordable and
                accessible to projects, investors, and users of all sizes.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhySecureDapp;
