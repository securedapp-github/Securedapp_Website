import React from "react";
import SectionHeader from "./SectionHeader";
import DescriptionFor from "./DescriptionFor";
import hero from "../images/prodHero.png";
const ProductHero = () => {
  return (
    <div className="md:pt-[60px] pt-[60px]  bg-gradient-to-tr from-neutral-900 via-stone-800 to-green-700 w-full h-fit ">
      <div className="flex lg:flex-row md:flex-row w-full md:pt-[30px] md:mt-0 mt-[100px] md:px-[80px] px-[30px] flex-col h-fit">
        <div className="md:mb-[100px] lg:mt-[80px] mt-[0px] lg:w-6/12 h-10/12">
          <img
            src={hero}
            className="md:w-[1100px] md:h-[600px] w-auto h-full"
            alt="hero"
          />
        </div>
        <div className="px-3 pt-7 md:mt-0 mt-[50px] lg:mt-[80px] md:pb-0 pb-[50px] lg:ml-[80px] flex-shrink lg:w-10/12 h-fit">
          <div className="md:w-3/4 lg:w-full">
            <SectionHeader content="Smart Contact Development" />
          </div>
          <div className="py-[60px]">
            <p className="text-white text-opacity-80 font-sans text-[16px] font-normal leading-6 pb-11">
              SecureDApp is a company that specialises in smart contract
              development and security. We have the expertise, tools, and
              resources to help businesses develop secure and reliable smart
              contracts.
            </p>
            <p className="text-white text-opacity-80 font-sans text-[16px] font-normal leading-6 pb-11">
              We offer a wide range of services to help businesses with smart
              contract development, including:
            </p>

            <div className="ml-[30px]">
              <ul className="list-disc">
                <li className="text-white text-opacity-80 font-sans text-[16px] font-normal leading-6 pb-11">
                  Consulting: We can help businesses understand the risks
                  involved in smart contract development and how to mitigate
                  those risks.
                </li>
                <li className="text-white  font-sans text-[16px] font-normal leading-6 pb-11">
                  Development: We can develop smart contracts for businesses on
                  a custom basis or using a pre-existing smart contract
                  template.
                </li>
                <li className="text-white font-sans text-[16px] font-normal leading-6 pb-11">
                  Auditing: We can audit smart contracts to ensure that they are
                  secure and reliable.
                </li>
                <li className="text-white font-sans text-[16px] font-normal leading-6 pb-11">
                  Testing: We can test smart contracts to ensure that they work
                  as expected.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#12D576] bg-opacity-10 lg:-mt-[100px] lg:ml-[90px] lg:px-[100px] px-[50px] py-[50px]">
        <div>
          {" "}
          <p className="text-white text-opacity-80 font-sans text-[16px] font-normal leading-6 pb-11">
            We also offer a number of other services to help businesses with
            smart contract development, including how to develop secure and
            reliable smart contracts and help companies after their smart
            contracts have been developed.
          </p>
        </div>

        <div>
          <p className="text-white text-opacity-80 font-sans text-[16px] font-normal leading-6 pb-11">
            SecureDAPP is committed to helping businesses develop secure and
            reliable DApp. SecureDApp believes that smart contracts have the
            potential to revolutionise the way businesses operate, and we are
            excited to be a part of that revolution.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductHero;
