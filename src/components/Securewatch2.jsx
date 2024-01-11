import React,{useState} from 'react'
import NavbarWithBread from "./NavWithBread";
import Footer from './Footer';
import {Helmet} from "react-helmet";
import m1_image from "../images/Group891.png"
import Transmission from "./Transmission";

function SecureWatch2() {
    const [selectedMenuItem, setSelectedMenuItem] = useState(1);

    const handleMenuItemClick = (index) => {
      setSelectedMenuItem(index);
    };
  return (
    <>
    <Helmet>
            <title>SecureDApp Blog: Expert Insights on NFTs, Token Sales & DeFi Trends</title>
            <meta name="description" content="Dive into SecureDApp's blog for insightful articles on NFTs, token sales, and the future of DeFi. Stay updated with the latest trends, guides, and expert opinions on blockchain, tokenomics, and more." />
        </Helmet>
        <NavbarWithBread onItemClick={handleMenuItemClick} />
        <div className='securewatch pt-48 text-center'>
        <div className='text-4xl font-extrabold w-full sm:w-5/6 lg:w-3/5 px-2 sm:px-0 mx-auto'>
        <span className='text-white px-1'>
        Stay Informed!</span>
        <span className='text-[#12D576] px-1'>
        SecureDApp</span>
        <span className='text-white px-1'>
        is in the Making</span>
        </div>
        <div className='w-full sm:w-5/6 lg:w-3/5 px-2 sm:px-0 mx-auto text-xl font-medium text-[#ABABAB] pt-4'>Our product is currently under development, but you can be among the first to experience it. We'll notify you as soon as SecureDApp is ready to safeguard your smart contracts.</div>
      </div>
      <Transmission/>
      <div>
      <Footer />
      </div>
    </>
  )
}

export default SecureWatch2