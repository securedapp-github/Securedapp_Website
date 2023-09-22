import React from "react";

const BlogCard = ({ topic, date, title, link }) => {
  return (
    <a href={link} className="lg:mx-0 mx-2">
      <div className="blogimg flex flex-col justify-between lg:px-0 px-7 ">
        <div className="w-[200px] h-[25px] bg-blue-600 bg-opacity-90 mt-[14px] lg:mx-[14px]  flex justify-center items-center rounded-lg">
          <span className="text-white font-sans text-[13px] font-normal leading-normal">
            {topic}
          </span>
        </div>

        <div className="flex flex-col my-[14px] ml-[14px]">
          <div>
            <span className="text-white font-sans text-[14px] font-bold leading-normal">
              {date}
            </span>
          </div>

          <div>
            <span className="text-white font-sans text-[20px] font-bold leading-normal">
              {title}
            </span>
          </div>
        </div>
      </div>
    </a>
  );
};

const BlogHero = () => {
  const blogs = [
    {
      id: 1,
      topic: "SMART CONTRACTS, TOKEN",
      date: "June 30, 2023",
      title: "Blits Estates: The Future of Real Estate Investing",
      link: "https://securedapp.in/blits-estates-the-future-of-real-estate-investing/",
    },
    {
      id: 2,
      topic: "NFT, TOKEN, TOKEN SALES",
      date: "June 16, 2023",
      title: "How Does Fractional Investment Work? And What Are Its Benefits?",
      link: "https://securedapp.in/how-does-fractional-investment-work-and-what-are-its-benefits/",
    },
    {
      id: 3,
      topic: "TOKEN, TOKEN SALES",
      date: "June 8, 2023",
      title: "How To Design Tokenomics For Your Cryptocurrency: The Basics Of Creating Your Token",
      link: "https://securedapp.in/how-to-design-tokenomics-for-your-cryptocurrency-the-basics-of-creating-your-token/",
    },
    {
      id: 4,
      topic: "TOKEN, WHITEPAPER",
      date: "May 31, 2023",
      title: "SAFT: Revolutionizing Token Sales with a Secure Investment Model",
      link: "https://securedapp.in/saft-revolutionizing-token-sales-with-a-secure-investment-model/",
    },
    {
      id: 5,
      topic: "TOKEN, TOKEN SALES",
      date: "May 21, 2023",
      title: "Token Launchpads: A Guide for Investors",
      link: "https://securedapp.in/token-launchpads-a-guide-for-investors/",
    },
    {
      id: 6,
      topic: "TOKEN, TOKEN SALES",
      date: "May 12, 2023",
      title: "Token Offerings 101: An Overview of ICOs, STOs, IDOs, and More",
      link: "https://securedapp.in/token-offerings-101-an-overview-of-icos-stos-idos-and-more/",
    },
    {
      id: 7,
      topic: "MARKET RESERCH",
      date: "May 3, 2023",
      title: "The Future of DApps: Trends to Watch in 2023 and Beyond",
      link: "https://securedapp.in/the-future-of-dapps/",
    },
    {
      id: 8,
      topic: "SMART CONTRACTS",
      date: "April 26, 2023",
      title: "Introduction to ZKEVM and its Applications",
      link: "https://securedapp.in/introduction-to-zkevm-and-its-applications/",
    },
    {
      id: 9,
      topic: "SMART CONTRACTS",
      date: "April 20, 2023",
      title: "What is Tronscan smart contract and how does it work",
      link: "https://securedapp.in/what-is-tronscan-smart-contract-and-how-does-it-work/",
    },
    {
      id: 10,
      topic: "SMART CONTRACT, WHITEPAPER",
      date: "April 18, 2023",
      title: "The Global Landscape of smart Contract Audits",
      link: "https://securedapp.in/the-global-landscape-of-smart-contract-audits/",
    },

    // Add more blog data objects
  ];
  return (
    <div className="md:pt-[80px] pt-[130px]  bloghero ">
      <div className="md:pt-[50px] lg:mx-[80px] border-b-2 border-gray-500">
        <div className="flex gap-[40px] py-[15px] lg:px-0 px-[30px]">
          <a href="/">
            <span className="text-white font-sans text-[16px] font-normal leading-normal">
              Home
            </span>
          </a>
          <a href="/blog">
            <span className="text-[#12D576] font-sans text-[16px] font-bold leading-normal">
              Blog
            </span>
          </a>
        </div>
      </div>

      <div className="lg:pt-[50px] lg:mx-[60px] flex lg:flex-row flex-col-reverse
      m-0.5 lg:pb-[0px] ">
        <div className="flex w-8/12 flex-wrap gap-[40px]">
          {blogs.map((blog) => (
            <BlogCard
              key={blog.id}
              topic={blog.topic}
              date={blog.date}
              title={blog.title}
              link={blog.link}
            />
          ))}
        </div>

        <div className="flex flex-col gap-[20px] lg:py-0 py-7 px-6">
          <button className="w-[340px] h-[64px] rounded-[20px] border border-white  border-opacity-20">
            {" "}
            <span className="text-white font-sans text-[24px] font-normal leading-[170%]">
              Team
            </span>
          </button>
          <button className="w-[340px] h-[64px] rounded-[20px] border border-white  border-opacity-20">
            {" "}
            <span className="text-white font-sans text-[24px] font-normal leading-[170%]">
              Smart Contract
            </span>
          </button>{" "}
          <button className="w-[340px] h-[64px] rounded-[20px] border border-white  border-opacity-20">
            {" "}
            <span className="text-white font-sans text-[24px] font-normal leading-[170%]">
              Market Research
            </span>
          </button>
        </div>
      </div>
      <div className="mx-[100px] py-[90px]">
        
      </div>
    </div>
  );
};

export default BlogHero;
