import React from "react";
import { FaDiscord,FaInstagram, FaTelegram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import logo from "../images/logo.png";
import { FaRegArrowAltCircleUp } from "react-icons/fa";

const FooterInAbout = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  return (
    <footer className="footerInabout">
      <div className="container px-6 py-8 mx-auto">
      <div onClick={scrollToTop} className="cursor-pointer flex justify-end">
      <FaRegArrowAltCircleUp color="#ffffff" className="w-14 h-14 my-auto"/>
      </div>
        <div className="grid grid-cols-2 gap-6 mt-12 sm:grid-cols-2 md:grid-cols-3 lg:px-[90px] lg:grid-cols-4 xl:grid-cols-5">
          <div>
            <h3 className="text-xl font-bold pb-[15px] text-white leading-[110%]">
              Company
            </h3>

            <div className="flex flex-col items-start mt-4 space-y-4">
              <a
                href="/about-us"
                className="text-[#FFF] font-sans font-normal leading-[170%] text-lg transition-colors duration-200 dark:text-gray-200 dark:hover:text-blue-400 hover:underline hover:text-blue-600"
              >
                Team
              </a>
              <a
                href="/about-us"
                className="text-[#FFF] transition-colors duration-200 dark:text-gray-200 dark:hover:text-blue-400 hover:underline hover:text-blue-600"
              >
                About Us
              </a>
              <a
                href="/"
                className="text-[#FFF] transition-colors duration-200 dark:text-gray-200 dark:hover:text-blue-400 hover:underline hover:text-blue-600"
              >
                Request a quote
              </a>
              <a
                href="/"
                className="text-[#FFF] transition-colors duration-200 dark:text-gray-200 dark:hover:text-blue-400 hover:underline hover:text-blue-600"
              >
                Referral
              </a>
              <a
                 href="https://securedapp.gitbook.io/securedapp-launchpad/careers"
                 target="_blank"
                className="text-[#FFF] transition-colors duration-200 dark:text-gray-200 dark:hover:text-blue-400 hover:underline hover:text-blue-600"
              >
                Career
              </a>
              <a
                href="https://securedapp.gitbook.io/securedapp-launchpad/contact-us"
                target="_blank"
                className="text-[#FFFFFF] transition-colors duration-200 dark:text-gray-200 dark:hover:text-blue-400 hover:underline hover:text-blue-600"
              >
                Contact Us
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold pb-[15px] text-white leading-[110%]">
              Resource
            </h3>

            <div className="flex flex-col items-start mt-4 space-y-4">
             
              <a
                href="/"
                className="text-[#FFF] transition-colors duration-200 dark:text-gray-200 dark:hover:text-blue-400 hover:underline hover:text-blue-600"
              >
                Audit Process
              </a>
            
           
              <a
                href="https://securedapp.gitbook.io/securedapp-launchpad/workplace-policy"
                target="_blank"
                className="text-[#FFF] transition-colors duration-200 dark:text-gray-200 dark:hover:text-blue-400 hover:underline hover:text-blue-600"
              >
                Workplace Policy
              </a>
              <a
                href="/"
                className="text-[#FFF] transition-colors duration-200 dark:text-gray-200 dark:hover:text-blue-400 hover:underline hover:text-blue-600"
              >
                Our Mission & Core values
              </a>
              <a
                href="https://securedapp.gitbook.io/securedapp-launchpad/shipping-and-delivery-policy"
                target="_blank"
                className="text-[#FFFFFF] transition-colors duration-200 dark:text-gray-200 dark:hover:text-blue-400 hover:underline hover:text-blue-600"
              >
                Shipping & Delivery Policy
              </a>
              <a
                href="https://securedapp.gitbook.io/securedapp-launchpad/cancellation-and-refund-policy"
                target="_blank"
                className="text-[#FFFFFF] transition-colors duration-200 dark:text-gray-200 dark:hover:text-blue-400 hover:underline hover:text-blue-600"
              >
                Cancellation and Refunds
              </a>
              <a
                href="https://securedapp.gitbook.io/securedapp-launchpad/pricing-policy"
                target="_blank"
                className="text-[#FFFFFF] transition-colors duration-200 dark:text-gray-200 dark:hover:text-blue-400 hover:underline hover:text-blue-600"
              >
                Pricing Policy
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold pb-[15px] text-white leading-[110%]">
              Products{" "}
            </h3>

            <div className="flex flex-col items-start mt-4 space-y-4">
              
              <a
                href="/smart-contract-scanner-solidity-shield"
                className="text-[#FFF] transition-colors duration-200 dark:text-gray-200 dark:hover:text-blue-400 hover:underline hover:text-blue-600"
              >
                Solidity Shield
              </a>
              <a
                href="/"
                className="text-[#FFF] transition-colors duration-200 dark:text-gray-200 dark:hover:text-blue-400 hover:underline hover:text-blue-600"
              >
                Rewards
              </a>
             
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold pb-[15px] text-white leading-[110%]">
              Participate
            </h3>

            <div className="flex flex-col items-start mt-4 space-y-4">
              <a
                 href="https://linktr.ee/securedapp"
                 target="_blank"
                className="text-[#FFF] transition-colors duration-200 dark:text-gray-200 dark:hover:text-blue-400 hover:underline hover:text-blue-600"
              >
                Community
              </a>
             
              
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold pb-[15px] text-white leading-[110%]">
              Explore
            </h3>

            <div className="flex flex-col items-start mt-4 space-y-4">
              <a
                 href="securepad.netlify.app"
                 target="_blank"
                className="text-[#FFF] transition-colors duration-200 dark:text-gray-200 dark:hover:text-blue-400 hover:underline hover:text-blue-600"
              >
                Tokens
              </a>
              
              <a
                href="/"
                className="text-[#FFF] transition-colors duration-200 dark:text-gray-200 dark:hover:text-blue-400 hover:underline hover:text-blue-600"
              >
                Wallets
              </a>
              <a
                href="/blog"
                className="text-[#FFF] transition-colors duration-200 dark:text-gray-200 dark:hover:text-blue-400 hover:underline hover:text-blue-600"
              >
                Blog
              </a>
              <a
                href="https://github.com/securedapp-github"
                target="_blank"
                className="text-[#fff] font-normal leading-[170%]  transition-colors duration-200 dark:text-gray-200 dark:hover:text-blue-400 hover:underline hover:text-blue-600"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>

        <hr className="my-6 border-gray-200 md:my-10 dark:border-gray-700" />
        <div className="flex flex-col items-center justify-between  sm:flex-row lg:px-[40px] ">
          <div className="md:pl-[50px] sm:py-[20px]">
            <a href="/">
              {" "}
              <img src={logo} alt="logo" />
            </a>
          </div>
          <div className="flex items-center space-x-4 py-[20px] lg:py-[0px] text-white">
            <a
              href="https://securedapp.gitbook.io/securedapp-launchpad/terms-and-conditions"
              target="_blank"
              className="text-[#FFF] px-[20px] hover:text-blue-600 transition-colors duration-200"
            >
              Terms of Condition
            </a>{" "}
            |
            <a
                            href="https://securedapp.gitbook.io/securedapp-launchpad/privacy-policy-securedapp"
                            target="_blank"
              className="text-[#FFF] px-[20px] hover:text-blue-600 transition-colors duration-200"
            >
              Privacy Policy
            </a>{" "}
            |
            <a
              href="/"
              className="text-[#FFF] hover:text-blue-600 transition-colors duration-200"
            >
              Lite Paper
            </a>
          </div>
          <div className="flex items-center justify-center md:pr-[50px] space-x-4 sm:justify-end">
            <a
              href="https://discord.com/invite/jQcd5WwhNy"
              target="_blank"
              className="text-gray-300 hover:text-blue-600 transition-colors duration-200"
            >
              <FaDiscord className="w-[30px] h-[30px]" />
            </a>
            <a
              href="https://twitter.com/secure_dapp"
              target="_blank"
              className="text-gray-300 hover:text-blue-600 transition-colors duration-200"
            >
              <FaXTwitter className="w-[30px] h-[30px]" />
            </a>
            <a
              href="https://www.instagram.com/securedapp_official/"
              target="_blank"
              className="text-gray-300 hover:text-blue-600 transition-colors duration-200"
            >
              <FaInstagram className="w-[30px] h-[30px]" />
            </a>
            <a
              href="https://telegram.me/securedappcommunity"
              target="_blank"
              className="text-gray-300 hover:text-blue-600 transition-colors duration-200"
            >
              <FaTelegram className="w-[30px] h-[30px]" />
            </a>
          </div>
        </div>
        <div className=" flex flex-col items-center justify-between  sm:flex-row py-1 md:py-0  text-[#FFFFFF] px-[0px] sm:px-[20px]">Powered By VettedCode Technologies India Pvt. Ltd.</div>

      </div>
    </footer>
  );
};

export default FooterInAbout;