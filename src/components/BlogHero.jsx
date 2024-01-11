import React from "react";
import { useEffect ,useState} from "react";
import {Link} from 'react-router-dom';
import Request from "./Request1";

function formatDate(dateString) {
  const options = { month: 'long', day: 'numeric', year: 'numeric' };
  const date = new Date(dateString);
  const formattedDate = date.toLocaleDateString('en-US', options);

  const month = date.toLocaleString('default', { month: 'short' });
  const day = date.getDate();
  const year = date.getFullYear();

  const suffix = getDaySuffix(day); // Function to get day suffix (e.g., 'th', 'st', 'nd')

  return `${month} ${day}${suffix} ${year}`;
}

// Function to get the suffix for the day (e.g., 'th', 'st', 'nd')
function getDaySuffix(day) {
  if (day >= 11 && day <= 13) {
    return 'th';
  }
  switch (day % 10) {
    case 1:
      return 'st';
    case 2:
      return 'nd';
    case 3:
      return 'rd';
    default:
      return 'th';
  }
}
function getOrig(title1){
  let l2=title1?title1:"";
      const largeString=l2;
  // Use regular expression to find text between <>
      const matches = largeString.match(/<[^>]*>/g);
  
  // Replace matches with hyperlinks and links
      const result = largeString.replace(/<([^|]+)\|([^>]+)>/g, '$1');
      let paragraphs = result.split("][");
      let result1='';
      paragraphs.forEach(function (paragraphText) {
        // Remove any remaining square brackets
        paragraphText = paragraphText.replace(/\[|\]/g, '');
        result1=result1+paragraphText;
    });
      return result1;
}
const BlogCard = ({url,tag,id,topic, date, title, link }) => {
  // console.log(id)
  const alp={topic1:topic,data:date,title1:title,link1:link,tag:tag}
  const title2=getOrig(title);
  return (
    <Link to={`/blog/${url}`} state={alp}>
      <img src={link} alt="not found" className="bg-gradient-to-r p-1 from-[#07bc0c] via-[#3B82F6] to-[#ffffff] mx-auto  w-full h-60 rounded-lg" />
      {/* <div className="flex flex-col justify-between lg:px-0 px-7 rounded-3xl " style={{backgroundImage:`url(${link})`,backgroundRepeat:'no-repeat'}}> */}
      <div className="grid  pt-2 lg:grid-cols-2 sm:grid-cols-1">
        <div className="rounded-md bg-[#07bc0c] text-white font-semibold my-auto text-sm px-1">{topic}</div>
        <div className="text-white">{date}</div>
        </div> 
      <div className="text-white pt-2 text-sm text-start">{title2.slice(0,100)}...</div>
    </Link>
  );
};

const BlogCard1 = ({url,tag,id,topic, date, title, link }) => {
  // console.log(id)
  const alp={topic1:topic,data:date,title1:title,link1:link,tag:tag}
  const title2=getOrig(title);
  return (
    <Link to={`/blog/${url}`} state={alp}>
      <div className="grid lg:grid-cols-2 lg:gap-3">
        <div>
      <img src={link} alt="not found" className="bg-gradient-to-r p-1 from-[#07bc0c] via-[#3B82F6] to-[#ffffff] mx-auto rounded-lg w-full  lg:h-[12rem] " />
      </div>
      {/* <div className="flex flex-col justify-between lg:px-0 px-7 rounded-3xl " style={{backgroundImage:`url(${link})`,backgroundRepeat:'no-repeat'}}> */}
      <div>
      <div className="grid pt-2 gap-1 lg:grid-cols-2 sm:grid-cols-1">
        <div className="rounded-md bg-[#07bc0c] text-white font-semibold my-auto text-sm px-1">{topic}</div>
        <div className="text-white">{date}</div>
        </div> 
      <div className="text-white pt-2 text-sm text-start">{title2.slice(0,100)}...</div>
      </div>
      </div>
    </Link>
  );
};

const BlogCard3=({blog1,blog2})=>{
  return (
    <div className="mx-10 my-10 grid gap-10 lg:grid-cols-4">
    <div className="col-span-2">
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
    <div className="col-span-2 grid gap-10 grid-rows-2">
    {blog2.map((blog) => (
        <div className="text-center">
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
  )
}

const BlogCard2=({url,tag,id,topic, date, title, link })=>{
  const alp={topic1:topic,data:date,title1:title,link1:link,tag:tag}
  const title2=getOrig(title);
  return (
    <Link to={`/blog/${url}`} state={alp}>
      <img src={link} alt="not found" className="bg-gradient-to-r p-1 from-[#07bc0c] via-[#3B82F6] to-[#ffffff] mx-auto w-full h-[25rem] rounded-lg" />
      {/* <div className="flex flex-col justify-between lg:px-0 px-7 rounded-3xl " style={{backgroundImage:`url(${link})`,backgroundRepeat:'no-repeat'}}> */}
      <div className="gap-4 grid  pt-2 sm:grid-cols-1 lg:grid-cols-2">
        <div className="rounded-md bg-[#07bc0c] text-white font-semibold text-sm my-auto text-center px-1">{topic}</div>
        <div className="text-white text-center">{date}</div>
        </div>
        <div className="text-white pt-2 text-sm text-start">{title2?title2.slice(0,200):(<p>Loading</p>)}...</div>
    </Link>
  )
}

const BlogHero = () => {
  let [blog1,setBlog1]=useState({});
  let [blog2,setBlog2]=useState([]);
  let [blogs,setBlogs]=useState([]);
  let [page,setPage]=useState({});
  let [pageNo,setPageNo]=useState(1);
  let [totPage, setTotPage]=useState(0);
  let [firstSec,setFirstSec]=useState([]);
  // const [totalResults,setTotalResults]=(0);

  const handleNext=()=>{
    let ind1=3*pageNo;
    let ind2=ind1+1;
    let ind3=ind2+1;
    // console.log(ind1,ind2,ind3,firstSec[ind1],firstSec[ind2],firstSec[ind3])
    setBlog1(firstSec[ind1]);
    if(firstSec.length==ind3)setBlog2([firstSec[ind2]]);
    else if(firstSec.length>ind3)setBlog2([firstSec[ind2],firstSec[ind3]]);
    else setBlog2([]);
    setPageNo(pageNo+1);
  }
  const handlePrev=()=>{
    let ind1=3*(pageNo-1)-1;
    let ind2=ind1-1;
    let ind3=ind2-1;
    setBlog1(firstSec[ind3]);
    setBlog2([firstSec[ind2],firstSec[ind1]]);
    setPageNo(pageNo-1);
  }
  useEffect(()=>{
    // const fetchData=async ()=>{
    //   const url=`https://139-59-5-56.nip.io:3443/getBlogList`;
    //   const ft=await fetch(url)
    //   const resp=await ft.json()
    // }
    const fetchData = async () => {
      try {
        const response = await fetch('https://139-59-5-56.nip.io:3443/getBlogList');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        let data = await response.json();
        
        // Ensure that the component is still mounted before updating state
        if (BlogHero.mounted) {
          data=data.filter((d1)=>{
            return d1.status==1;
          })
          data.sort((a,b)=>b.sequence-a.sequence);
          setFirstSec(data.slice(0,4))
          setBlog1(data[0]);
          setBlog2(data.slice(1,3));
          setTotPage(2);
          setBlogs(data.slice(3));
          setPage({topic1:blog1.topic,data:blog1.date,title1:blog1.title,link1:blog1.link})
          console.log(data)
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    // Use a flag to check if the component is still mounted before updating state
    BlogHero.mounted = true;
    fetchData();

    return () => {
      // Cleanup function to set mounted flag to false when component unmounts
      BlogHero.mounted = false;
    };

  },[])
  // const fetchMoreData=async ()=>{
  // }
  return (
    <div className="md:pt-[80px] pt-[130px]  bloghero ">
      <div className="md:pt-[50px] mb-10 mx-10">
        {/*<div className="flex gap-[40px] py-[15px] lg:px-0 ">
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
        </div> */}
        </div>
      <div className="xl:mx-auto xl:w-5/6  2xl:w-4/6">
      <h2 className="mx-10 mt-20  inline text-xl font-bold text-white border-4 border-transparent border-b-[#07bc0c]">Web3 Security</h2>
    <BlogCard3 blog1={blog1} blog2={blog2}/>
    <div className="flex justify-between mx-10 mb-20">
    <button onClick={handlePrev} className="rounded-sm text-[#07bc0c] font-semibold text-lg border border-[#07bc0c] px-5 py-2" disabled={pageNo==1}>Prev</button>
    <button onClick={handleNext} className="rounded-sm text-[#07bc0c] font-semibold text-lg border border-[#07bc0c] px-5 py-2" disabled={pageNo==totPage}>Next</button>
    </div>
    </div>
    <div className="pb-10"><Request/></div>
    <div className="xl:mx-auto xl:w-5/6  2xl:w-4/6">
    <h2 className="mx-10 text-xl font-bold inline text-white border-4 border-transparent border-b-[#07bc0c]">Web3 Security</h2>
      <div className="grid gap-10 mx-10 my-10 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
          {blogs.map((blog) => (
        <div className="text-center">
            <BlogCard
              tag={blog.tags}
              url={blog.url}
              id={blog.id}
              topic={blog.heading}
              date={formatDate(blog.date.slice(0,10))}
              title={blog.content}
              link={blog.image}
            />
        </div>
          ))}

        {/* <div className="flex flex-col gap-[20px] lg:py-0 py-7 px-6 lg:w-auto md:w-full">
          <button className="w-[340px] h-[64px] rounded-[20px] border border-white mx-auto  border-opacity-20">
            {" "}
            <span className="text-white font-sans text-[24px] font-normal leading-[170%]">
              Team
            </span>
          </button>
          <button className="w-[340px] h-[64px] rounded-[20px] border border-white  mx-auto border-opacity-20">
            {" "}
            <span className="text-white font-sans text-[24px] font-normal leading-[170%]">
              Smart Contract
            </span>
          </button>{" "}
          <button className="w-[340px] h-[64px] rounded-[20px] border border-white mx-auto  border-opacity-20">
            {" "}
            <span className="text-white font-sans text-[24px] font-normal leading-[170%]">
              Market Research
            </span>
          </button>
        </div> */}
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
