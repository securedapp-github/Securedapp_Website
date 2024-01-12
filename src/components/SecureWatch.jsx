import React,{useState} from 'react'
import NavbarWithBread from "./NavWithBread";
import Footer from './Footer';
import {Helmet} from "react-helmet";
import m1_image from "../images/Group891.png"
import Transmission from "./Transmission";
import {useNavigate} from 'react-router-dom'

function SecureWatch() {
    const [selectedMenuItem, setSelectedMenuItem] = useState(1);

    const handleMenuItemClick = (index) => {
      setSelectedMenuItem(index);
    };
    const navigate = useNavigate()
    const nextPage=()=>{
        navigate('/securewatch1')
    }
  return (
    <>
    <Helmet>
            <title>SecureDApp Blog: Expert Insights on NFTs, Token Sales & DeFi Trends</title>
            <meta name="description" content="Dive into SecureDApp's blog for insightful articles on NFTs, token sales, and the future of DeFi. Stay updated with the latest trends, guides, and expert opinions on blockchain, tokenomics, and more." />
        </Helmet>
        <NavbarWithBread onItemClick={handleMenuItemClick} />
        <div className='securewatch pt-36 pb-10 px-5 lg:px-20 2xl:px-40 flex flex-col-reverse md:flex-row  gap-4'>
        <div className='flex-1 pt-20'>
      <h1 className='text-[#12D576] font-extrabold text-6xl'>Securewatch</h1>
      <div className='flex flex-row  gap-3 pt-5'>
      <div>
      <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9 18.5C13.95 18.5 18 14.45 18 9.5C18 4.55 13.95 0.5 9 0.5C4.05 0.5 0 4.55 0 9.5C0 14.45 4.05 18.5 9 18.5Z" fill="#12D576"/>
<path d="M5.17578 9.49997L7.72278 12.047L12.8258 6.953" fill="#12D576"/>
<path d="M5.17578 9.49997L7.72278 12.047L12.8258 6.953" stroke="black" stroke-width="1.66443" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</div>
<div className='font-bold text-xl text-white'>Comprehensive Vulnerability Detection</div>
      </div>
      <div className='text-[#ABABAB] font-medium text-lg'>Detect a wide range of vulnerabilities with Solidity Shield's advanced scanning, providing unmatched assurance against common pitfalls and complex security threats. </div>
      <div className='flex flex-row gap-3 pt-5'>
      <div>
      <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9 18.5C13.95 18.5 18 14.45 18 9.5C18 4.55 13.95 0.5 9 0.5C4.05 0.5 0 4.55 0 9.5C0 14.45 4.05 18.5 9 18.5Z" fill="#12D576"/>
<path d="M5.17578 9.49997L7.72278 12.047L12.8258 6.953" fill="#12D576"/>
<path d="M5.17578 9.49997L7.72278 12.047L12.8258 6.953" stroke="black" stroke-width="1.66443" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</div>
<div className='font-bold text-xl text-white'>Real-time Risk Reporting</div>
      </div>
      <div className='text-[#ABABAB] font-medium text-lg'>Get instant reports on potential security risks as Solidity Shield scans your contracts, enabling proactive measures to address vulnerabilities promptly.</div>
      <div className='flex flex-row gap-3 pt-5'>
      <div>
      <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9 18.5C13.95 18.5 18 14.45 18 9.5C18 4.55 13.95 0.5 9 0.5C4.05 0.5 0 4.55 0 9.5C0 14.45 4.05 18.5 9 18.5Z" fill="#12D576"/>
<path d="M5.17578 9.49997L7.72278 12.047L12.8258 6.953" fill="#12D576"/>
<path d="M5.17578 9.49997L7.72278 12.047L12.8258 6.953" stroke="black" stroke-width="1.66443" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</div>
<div className='font-bold text-xl text-white'>User-Friendly Interface</div>
      </div>
      <div className='text-[#ABABAB] font-medium text-lg'>Enjoy a hassle-free experience with SecureDApp's user-friendly interface. Seamlessly integrate Solidity Shield into your development workflow, navigate scan results effortlessly, and access actionable insights. </div>
      <button onClick={nextPage} className='font-extrabold text-black bg-[#00D870] mt-10 rounded-xl px-7 py-4 text-xl'>View Plans</button>
      </div>
      <div className='flex-1 my-auto'>
      <img src={m1_image} className='my-auto -rotate-6 w-full' alt="not found"/>
      </div>
      </div>
      <Transmission/>
      <div>
      <Footer />
      </div>
    </>
  )
}

export default SecureWatch
