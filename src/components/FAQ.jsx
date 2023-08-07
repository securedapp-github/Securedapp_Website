import React, { useState } from "react";
import SectionHeader from "./SectionHeader";
import Subheading from "./Subheading";

const FAQ = () => {
  const [selectedQuestion, setSelectedQuestion] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("token");

  const faqData = [
    {
      question: "What makes SecurePAD different from other token launchpads?",
      answer: "Zero Fee LaunchPad with no upfront cost on launching your token and ICO",
    },
    {
      question: "How do I get involved with SecurePAD?",
      answer: "Visit our website or contact us at hello@securedapp.in",
    },
    {
      question: "What is the future of SecurePAD?",
      answer: "We are coming up with our NFT launchpad and DAO launchpad for web3 users",
    },
    {
      question: "What are the risks associated with using SecurePAD?",
      answer: "SecurePad is battle tested against all exisitng vulnerabilities, Users has to keep their sensitive info like private keys safe and avoid using any vulnerable wallet application on site",
    },
    {
      question: "What is SecurePAD?",
      answer: "A LaunchPad for Token, Nft and DAO services all at zero cost",
    },
    {
      question: "How do I participate in an IDO on SecurePAD?",
      answer: "Subscribe our newsletter on website",
    }
  ];

  const secData = [
    {
      question: "What is securedapp smart contract audit firm?",
      answer:
        "Securedapp smart contract audit firm is a company that specializes in reviewing and evaluating the security of smart contracts on blockchain platforms such as Ethereum. Our experts use industry-standard tools and techniques to identify potential vulnerabilities and provide recommendations for improvement.",
    },
    {
      question: "Why is smart contract audit important?",
      answer: "Smart contract audit is important to ensure the security, reliability, and proper functionality of the code governing blockchain-based transactions and agreements.",
    },
    {
      question: "How does securedapp conduct smart contract audits?",
      answer: "By thoroughly reviewing the code for vulnerabilities, logic errors, and compliance with best practices to ensure security and reliability.",
    },
    {
      question: "How does securedapp approach smart contract security?",
      answer: "By analyzing code for vulnerabilities, conducting penetration testing, and verifying compliance with industry standards to mitigate risks.",
    },
    {
      question:
        "Can you give an example of a problem you have identified in a smart contract?",
      answer: "In a smart contract, we uncovered a critical vulnerability that allowed unauthorized access to funds due to improper input validation.",
    },
    {
      question: "How long does a smart contract audit take?",
      answer: "The duration of a smart contract audit typically ranges from one to four weeks, depending on contract complexity and audit depth.",
    },
    {
      question: "Does Securedapp provide smart contract remediation services?",
      answer: "Yes, to address and resolve identified vulnerabilities and issues",
    },
    {
      question: "Does Securedapp support multiple blockchain platforms?",
      answer: "Yes, SecureDApp support multiple blockchain platforms, tailoring their expertise to various technologies such as Ethereum, Binance Smart Chain, and others.",
    },
    {
      question: "How can I contact Securedapp for a smart contract audit?",
      answer: "Contact at hello@securedapp.in ",
    }
  ];

  const handleQuestionClick = (index) => {
    if (selectedQuestion === index) {
      setSelectedQuestion(null);
    } else {
      setSelectedQuestion(index);
    }
  };

  const handleTokenClick = () => {
    setSelectedCategory("token");
  };

  const handleSecurityClick = () => {
    setSelectedCategory("security");
  };

  return (
    <div className="lg:py-[40px] lg:px-[80px] md:p-[70px] p-[20px] flex md:flex-row flex-col faq">
      <div className="md:w-3/6  lg:py-8 md:p-2 p-1.5">
        <SectionHeader content={"Frequently Asked Questions"} />
        <p className="text-[#FFFFFFB2] py-3 text-opacity-70 font-sans md:text-lg text-base font-normal leading-[150%]">
          Haven't found the answers you are looking for? Contact us at
          <span className="text-[#12D576]"> support@securdapp.in</span>
        </p>
        <div className="flex md:mt-0 mt-2 justify-start w-full gap-3 items-center">
          <button
            className={`w-1/2 ${
              selectedCategory === "token"
                ? "bg-[#12D576] text-black"
                : "bg-transparent text-white"
            } py-4 rounded-xl font-sans text-xl font-bold leading-[110%]`}
            onClick={handleTokenClick}
          >
            Token
          </button>
          <button
            className={`w-1/2 ${
              selectedCategory === "security"
                ? "bg-[#12D576] text-black"
                : "bg-transparent text-white"
            } py-4 border border-white rounded-xl font-sans text-xl font-semibold leading-[110%]`}
            onClick={handleSecurityClick}
          >
            Security
          </button>
        </div>
      </div>
      <div className="md:w-4/6 w-full lg:p-8 md:p-4 pt-6 text-left">
        {selectedCategory === "token" &&
          faqData.map((item, index) => (
            <div key={index} className="mb-6">
              <button
                className="flex items-center justify-between w-full px-4 py-2 bg-transparent rounded-lg shadow"
                onClick={() => handleQuestionClick(index)}
              >
                <h3 className="text-lg font-semibold text-left text-white">
                  {item.question}
                </h3>
                <span className="md:px-[0px]  pl-[30px]">
                  {" "}
                  <Subheading
                    content={selectedQuestion === index ? "-" : "+"}
                  />
                </span>
              </button>
              {selectedQuestion === index && (
                <div className="mt-2 p-4 bg-transparent rounded-none">
                  <Subheading content={item.answer} />
                </div>
              )}
            </div>
          ))}
        {selectedCategory === "security" &&
          secData.map((item, index) => (
            <div key={index} className="mb-6">
              <button
                className="flex items-center justify-between w-full px-4 py-2 bg-transparent rounded-lg shadow"
                onClick={() => handleQuestionClick(index)}
              >
                <h3 className="text-lg font-semibold text-left text-white">
                  {item.question}
                </h3>
                <span className="md:px-[0px]  pl-[30px]">
                  {" "}
                  <Subheading
                    content={selectedQuestion === index ? "-" : "+"}
                  />
                </span>
              </button>
              {selectedQuestion === index && (
                <div className="mt-2 p-4 bg-transparent rounded-none">
                  <Subheading content={item.answer} />
                </div>
              )}
            </div>
          ))}
      </div>
    </div>
  );
};

export default FAQ;
