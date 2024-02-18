import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Request from "./Request1";

function formatDate(dateString) {
  const options = { month: "long", day: "numeric", year: "numeric" };
  const date = new Date(dateString);
  const formattedDate = date.toLocaleDateString("en-US", options);

  const month = date.toLocaleString("default", { month: "short" });
  const day = date.getDate();
  const year = date.getFullYear();

  const suffix = getDaySuffix(day); // Function to get day suffix (e.g., 'th', 'st', 'nd')

  return `${month} ${day}${suffix} ${year}`;
}

// Function to get the suffix for the day (e.g., 'th', 'st', 'nd')
function getDaySuffix(day) {
  if (day >= 11 && day <= 13) {
    return "th";
  }
  switch (day % 10) {
    case 1:
      return "st";
    case 2:
      return "nd";
    case 3:
      return "rd";
    default:
      return "th";
  }
}
function getOrig(title1) {
  let l2 = title1 ? title1 : "";
  const largeString = l2;
  // Use regular expression to find text between <>
  // const matches = largeString.match(/<[^>]*>/g);

  // Replace matches with hyperlinks and links
  // const result = largeString.replace(/<([^|]+)\|([^>]+)>/g, '$1');
  const result2 = largeString.replace(/<([^|]+)\|([^>]+)>/g, "$1 ");
  const result3 = result2.replace(/&lt;([^|]+)\|([^&]+)&gt;/g, "$1 ");
  let result4 = result3.replace(/\/n\//g, "");
  let result = result4.replace(/\*\*.*?\*\*/g, "");

  let paragraphs = result.split("][");
  let result1 = "";
  paragraphs.forEach(function (paragraphText) {
    // Remove any remaining square brackets
    paragraphText = paragraphText.replace(/\[|\]/g, "");
    result1 = result1 + paragraphText;
  });

  return result1;
}
const BlogCard = ({ url, tag, id, topic, date, title, link }) => {
  // console.log(id)
  const alp = {
    topic1: topic,
    data: date,
    title1: title,
    link1: link,
    tag: tag,
  };
  const [isHovered, setIsHovered] = useState(false);

  const divStyle = {
    display: "inline-block",
    border: "0.5px white solid",
    borderRadius: "10px",
    padding: " 30px  ",
    height: "650px",
    width: "350px",
    transition: "ease-in-out 0.2s",
    backgroundColor: isHovered ? "rgba(169, 169, 169, 0.3)" : "",
    marginBottom: "20px",
    marginLeft: "0.8rem",
    marginRight: "0.8rem",
  };

  useEffect(() => {
    const title2 = getOrig(title);
    const tempDiv = document.createElement("div");
    tempDiv.innerHTML = title2;
    const l2 = document.getElementById(id);
    l2.innerHTML = "";
    const l4 = tempDiv.textContent;
    // console.log(l4)
    const l5 = l4.slice(0, 200) + "...";
    const tempDiv1 = document.createElement("div");
    tempDiv1.innerHTML = l5;
    l2.appendChild(tempDiv1);
  }, []);
  return (
    <Link
      to={`/blog/${url}`}
      state={alp}
      style={divStyle}
      onMouseOver={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src={link}
        alt="not found"
        className=" mx-auto  w-full h-40 rounded-lg"
      />
      <div className=" text-left pt-3 ">
        <div className="rounded-md  text-white " style={{ fontSize: "23px" }}>
          {topic}
        </div>
      </div>
      <div
        id={id}
        className="text-white pt-2  text-start mt-5 lh-base  "
        style={{ fontSize: "15px" }}
      ></div>
      <div
        className="text-white text-left pt-4 "
        style={{ fontSize: "15px", fontWeight: "lighter" }}
      >
        {date}
      </div>
    </Link>
  );
};

const BlogCard1 = ({ url, tag, id, topic, date, title, link }) => {
  // console.log(id)
  const alp = {
    topic1: topic,
    data: date,
    title1: title,
    link1: link,
    tag: tag,
  };
  useEffect(() => {
    const title2 = getOrig(title);
    const tempDiv = document.createElement("div");
    tempDiv.innerHTML = title2;
    const l2 = document.getElementById(id);
    l2.innerHTML = "";
    const l4 = tempDiv.textContent;
    const l5 = l4.slice(0, 100) + "...";
    const tempDiv1 = document.createElement("div");
    tempDiv1.innerHTML = l5;
    l2.appendChild(tempDiv1);
  }, []);
  const divStyle = {
    display: "inline-block",
    border: "1px white solid",
    padding: "20px",
    borderRadius: "10px",
    // margin: "5px",
  };
  return (
    <Link to={`/blog/${url}`} state={alp} style={divStyle}>
      <div className="grid lg:grid-cols-2 lg:gap-3">
        <div>
          <img
            src={link}
            alt="not found"
            className=" mx-auto rounded-lg w-full  lg:h-[12rem] "
          />
        </div>
        <div>
          <div className="grid pt-2 gap-1 lg:grid-cols-1 sm:grid-cols-1">
            <div
              className="rounded-md text-left text-white font-semibold my-auto text-sm px-1 "
              style={{ fontSize: "15px" }}
            >
              {topic}
            </div>
          </div>
          <div id={id} className="text-white pt-5 text-sm text-start"></div>
          <div
            className="text-white text-left pt-2"
            style={{ fontWeight: "lighter" }}
          >
            {date}
          </div>
        </div>
      </div>
    </Link>
  );
};

const BlogCard3 = ({ blog1, blog2 }) => {
  return (
    <div className="mx-10 my-10 grid  lg:grid-cols-4">
      <div className="col-span-2 my-5 grid">
        <BlogCard2
          tag={blog1.tags}
          url={blog1.url}
          id={blog1.id}
          topic={blog1.heading}
          date={formatDate(blog1.date)}
          title={blog1.content}
          link={blog1.image}
        />
      </div>
      <div className="col-span-2 grid">
        {blog2.map((blog) => (
          <div className="text-center m-4">
            <BlogCard1
              tag={blog.tags}
              url={blog.url}
              id={blog.id}
              topic={blog.heading}
              date={formatDate(blog.date)}
              title={blog.content}
              link={blog.image}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

const BlogCard2 = ({ url, tag, id, topic, date, title, link }) => {
  const alp = {
    topic1: topic,
    data: date,
    title1: title,
    link1: link,
    tag: tag,
  };
  useEffect(() => {
    const title2 = getOrig(title);
    const tempDiv = document.createElement("div");
    tempDiv.innerHTML = title2;
    const l4 = tempDiv.textContent;
    const l5 = l4.slice(0, 700) + "...";
    const tempDiv1 = document.createElement("div");
    tempDiv1.innerHTML = l5;
    console.log(id);
    const l2 = document.getElementsByClassName("cont1");
    l2[0].innerHTML = "";
    l2[0].appendChild(tempDiv1);
  }, [id]);
  const divStyle = {
    display: "inline-block",
    border: "1px white solid",
    padding: "20px",
    borderRadius: "10px",
  };
  return (
    <Link to={`/blog/${url}`} state={alp} style={divStyle}>
      <img
        src={link}
        alt="not found"
        className=" mx-auto w-full h-[25rem] rounded-lg"
      />
      <div className="gap-4 grid  pt-2 sm:grid-cols-1 lg:grid-cols-1">
        <div
          className="rounded-md text-left text-white font-semibold pt-2  "
          style={{ fontSize: "20px" }}
        >
          {topic}
        </div>
      </div>
      <div className="cont1 text-white pt-2 text-sm text-start"></div>
      <div className="text-white  pt-2" style={{ fontWeight: "lighter" }}>
        {date}
      </div>
    </Link>
  );
};

const BlogHero = () => {
  let [blog1, setBlog1] = useState({});
  let [blog2, setBlog2] = useState([]);
  let [blogs, setBlogs] = useState([]);
  let [page, setPage] = useState({});
  let [pageNo, setPageNo] = useState(1);
  let [totPage, setTotPage] = useState(0);
  let [firstSec, setFirstSec] = useState([]);

  const handleNext = () => {
    let ind1 = 4 * pageNo;
    let ind2 = ind1 + 1;
    let ind3 = ind2 + 1;
    let ind4 = ind3 + 1;
    // console.log(ind1,ind2,ind3,firstSec[ind1],firstSec[ind2],firstSec[ind3])
    setBlog1(firstSec[ind1]);
    if (firstSec.length == ind4) setBlog2([firstSec[ind2]]);
    else if (firstSec.length > ind4)
      setBlog2([firstSec[ind2], firstSec[ind3], firstSec[ind4]]);
    else setBlog2([]);
    setPageNo(pageNo + 1);
  };
  const handlePrev = () => {
    // let ind1 = 3 * (pageNo - 1) - 1;
    // let ind2 = ind1 - 1;
    // let ind3 = ind2 - 1;
    let ind1 = 4 * (pageNo - 1) - 1;
    let ind2 = ind1 - 1;
    let ind3 = ind2 - 1;
    let ind4 = ind3 - 1;

    setBlog1(firstSec[ind4]);
    setBlog2([firstSec[ind3], firstSec[ind2], firstSec[ind1]]);
    setPageNo(pageNo - 1);
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://139-59-5-56.nip.io:3443/getBlogList"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        let data = await response.json();

        // Ensure that the component is still mounted before updating state
        if (BlogHero.mounted) {
          data = data.filter((d1) => {
            return d1.status == 1;
          });
          data.sort((a, b) => b.sequence - a.sequence);
          setFirstSec(data.slice(0, 8));
          setBlog1(data[0]);
          setBlog2(data.slice(1, 4));
          setTotPage(2);
          setBlogs(data.slice(4));
          setPage({
            topic1: blog1.topic,
            data: blog1.date,
            title1: blog1.title,
            link1: blog1.link,
          });
          console.log(data);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    // Use a flag to check if the component is still mounted before updating state
    BlogHero.mounted = true;
    fetchData();

    return () => {
      // Cleanup function to set mounted flag to false when component unmounts
      BlogHero.mounted = false;
    };
  }, []);

  return (
    <div className="md:pt-[80px] pt-[130px]  bloghero ">
      <div className="md:pt-[50px] mb-10 mx-10"></div>
      <div className="xl:mx-auto xl:w-5/6  2xl:w-4/6">
        <h2 className="mx-10 mt-20  inline text-xl font-bold text-white  ">
          Web3 Security
        </h2>
        <BlogCard3 blog1={blog1} blog2={blog2} />
        <div className="flex justify-between mx-10 mb-20">
          <button
            onClick={handlePrev}
            className="rounded-md text-white font-semibold text-lg border border-white border-2 px-5 py-2"
            disabled={pageNo == 1}
          >
            Prev
          </button>
          <button
            onClick={handleNext}
            className="rounded-md text-white font-semibold text-lg border border-white border-2 px-5 py-2"
            disabled={pageNo == totPage}
          >
            Next
          </button>
        </div>
      </div>
      <div className="pb-10">
        <Request />
      </div>
      <div className="">
        <h2
          className=" text-xl font-bold text-white d-inline-block "
          style={{ marginLeft: "13%" }}
        >
          Web3 Security
        </h2>
        <div
          className=" "
          style={{
            display: "flex",
            flexWrap: "wrap",
            margin: "10px",
            padding: "20px",
            justifyContent: "center",
          }}
        >
          {blogs.map((blog) => (
            <div className="text-center  my-1">
              <BlogCard
                tag={blog.tags}
                url={blog.url}
                id={blog.id}
                topic={blog.heading}
                date={formatDate(blog.date.slice(0, 10))}
                title={blog.content}
                link={blog.image}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="mx-[100px] py-[90px]">
        <span className="text-white font-sans text-[24px] font-normal leading-[170%]"></span>
      </div>
    </div>
  );
};

export default BlogHero;
