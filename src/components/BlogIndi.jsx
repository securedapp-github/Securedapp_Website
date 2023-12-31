import React from 'react'
import { useLocation } from 'react-router-dom';

function BlogIndi() {
    const location=useLocation()
    console.log(location.state)
    const {topic1,data,title1,link1}=location.state;
  return (
    <div className='blogindi pt-20 fixed bottom-0 top-0'>
    <img src={link1} alt="not found" className=" mx-auto rounded-lg w-full px-10 sm:w-full sm:px-10 lg:w-1/2 lg:mx-auto lg:px-0" />
    <div className="w-1/2 mx-auto gap-4 grid  pt-2 sm:grid-cols-1 lg:grid-cols-2">
      <div className="rounded-lg bg-[#07bc0c] text-lg font-semibold inline my-auto text-center">{topic1}</div>
      <div className="text-black text-center text-md text-white">{data}</div>
      </div> 
  <div className="text-black pt-2 text-xl text-white sm:pt-10 w-full px-10 sm:w-full sm:px-10 lg:w-1/2 lg:mx-auto lg:px-0">{title1}</div>
  </div> 
  )
}

export default BlogIndi
