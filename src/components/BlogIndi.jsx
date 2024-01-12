import React,{useState,useEffect} from 'react'
import { useLocation} from 'react-router-dom';
import NavbarWithBread from "./NavWithBread";
import Footer from './Footer';
import {Helmet} from "react-helmet";
import Request from './Request1';

function BlogIndi() {
  const [selectedMenuItem, setSelectedMenuItem] = useState(1);

  const handleMenuItemClick = (index) => {
    setSelectedMenuItem(index);
  };
    const location=useLocation()
    const {topic1,data,title1,link1,tag}=location.state;
    let l1;
    // console.log(title1);
    l1=tag.split(',')
    useEffect(()=>{
      l1=tag.split(',')
      let l2=title1
      const largeString=l2;
  // Use regular expression to find text between <>
      // const matches = largeString.match(/<[^>]*>/g);
      console.log(largeString);

  // Replace matches with hyperlinks and links
      const result1 = largeString.replace(/<([^|]+)\|([^>]+)>/g, '<a target="_blank" href="$2">$1</a>');
      const result = result1.replace(/&lt;([^|]+)\|([^&]+)&gt;/g, '<a target="_blank" href="$2">$1</a>');

      console.log(result);

  // Print the result
     // Create a temporary div element
  const tempDiv = document.createElement('div');
  let paragraphs = result.split("][");
  tempDiv.innerHTML='';
  // console.log(paragraphs)
  paragraphs.forEach(function (paragraphText) {
    // Remove any remaining square brackets
    paragraphText = paragraphText.replace(/\[|\]/g, '');
    paragraphText = paragraphText.replace(/\/n\//g, '<br><br>');
    paragraphText = paragraphText.replace(/\*\*(.*?)\*\*/g, '<span style=" font-size: 28px; font-weight: bold;">$1</span>');

    // Create a <p> element
    var paragraphElement = document.createElement("p");

    // Set the content of the <p> element
    paragraphElement.innerHTML = paragraphText;

    // Append the <p> element to the container
    tempDiv.appendChild(paragraphElement);
});
  // Set innerHTML of the div to the result string (containing HTML tags)
  // tempDiv.innerHTML = result;
  const anchorTags = tempDiv.querySelectorAll('a');
// Loop through all anchor tags and set their text color
anchorTags.forEach(tag => {
  tag.style.color = '#07bc0c'; // Set text color to #07bc0c
});




  let l3=document.getElementById('content1');
  l3.innerHTML='';
  l3.appendChild(tempDiv) 

},[])
  return (
    <>
    <Helmet>
            <title>SecureDApp Blog: Expert Insights on NFTs, Token Sales & DeFi Trends</title>
            <meta name="description" content="Dive into SecureDApp's blog for insightful articles on NFTs, token sales, and the future of DeFi. Stay updated with the latest trends, guides, and expert opinions on blockchain, tokenomics, and more." />
        </Helmet>
      <NavbarWithBread onItemClick={handleMenuItemClick} />
    <div className='blogindi pt-40 pb-10'>
    <div className='mx-auto w-full px-10 lg:px-0 lg:w-4/6 pb-5'>
    {l1.map((item)=>{
      return (
        <span className='rounded-md mx-1 px-2 py-1 bg-[#07bc0c] text-white text-xl font-semibold'>{item}</span>
      )
    })}
    </div>
    <div className='w-full px-10 lg:px-0 lg:w-4/6 mx-auto pb-10 text-4xl text-white font-semibold'>{topic1}</div>
    <div className='sm:px-10 lg:px-0'>
    <img src={link1} alt="not found" className="bg-gradient-to-r p-1 from-[#07bc0c] via-[#3B82F6] to-[#ffffff] mx-auto rounded-xl   w-4/6 sm:w-full lg:w-4/6 lg:mx-auto" />
    </div>
    <div className="w-4/6 mx-auto gap-4 grid mt-2 pt-2 sm:grid-cols-1 lg:grid-cols-2">
      <div className="rounded-lg bg-[#07bc0c] py-2 text-white text-lg font-semibold inline my-auto text-center">{topic1}</div>
      <div className="text-center text-md text-white my-auto">{data}</div>
      </div> 
  <div id='content1' className="text-black pt-1 text-xl text-white sm:pt-10 w-full px-10 sm:w-full sm:px-10 lg:w-4/6 lg:mx-auto lg:px-0"></div>
  </div> 
  <div><Request/></div>
  <div>
  <Footer />
  </div>
  </>
  )
}

export default BlogIndi
