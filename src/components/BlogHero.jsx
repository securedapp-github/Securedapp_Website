import React from "react";

const BlogCard = ({ topic, date, title, link }) => {
  return (
    <a href={link}>
      <div className="blogimg flex flex-col justify-between ">
        <div className="w-[200px] h-[25px] bg-black bg-opacity-90 mt-[14px] ml-[14px] flex justify-center items-center rounded-[36px]">
          <span className="text-white font-sans text-[15px] font-normal leading-normal">
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
      topic: "NFT, TOKEN, TOKEN SALES",
      date: "June 16, 2023",
      title: "How Does Fractional Investment Work? And What Are Its Benefits?",
      link: "#",
    },
    {
      id: 2,
      topic: "NFT, TOKEN, TOKEN SALES",
      date: "June 16, 2023",
      title: "How Does Fractional Investment Work? And What Are Its Benefits?",
      link: "#",
    },
    {
      id: 3,
      topic: "NFT, TOKEN, TOKEN SALES",
      date: "June 16, 2023",
      title: "How Does Fractional Investment Work? And What Are Its Benefits?",
      link: "#",
    },
    {
      id: 4,
      topic: "NFT, TOKEN, TOKEN SALES",
      date: "June 16, 2023",
      title: "How Does Fractional Investment Work? And What Are Its Benefits?",
      link: "#",
    },
    {
      id: 5,
      topic: "NFT, TOKEN, TOKEN SALES",
      date: "June 16, 2023",
      title: "How Does Fractional Investment Work? And What Are Its Benefits?",
      link: "#",
    },
    {
      id: 6,
      topic: "NFT, TOKEN, TOKEN SALES",
      date: "June 16, 2023",
      title: "How Does Fractional Investment Work? And What Are Its Benefits?",
      link: "#",
    },
    {
      id: 7,
      topic: "NFT, TOKEN, TOKEN SALES",
      date: "June 16, 2023",
      title: "How Does Fractional Investment Work? And What Are Its Benefits?",
      link: "#",
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
          <a href="/about-us">
            <span className="text-[#12D576] font-sans text-[16px] font-bold leading-normal">
              About Us
            </span>
          </a>
        </div>
      </div>

      <div className="lg:pt-[50px] lg:mx-[80px] flex lg:pb-[0px] ">
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

        <div className="flex flex-col gap-[20px]">
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
        <span className="text-white font-sans text-[24px] font-normal leading-[170%]">
          older
        </span>
      </div>
    </div>
  );
};

export default BlogHero;
