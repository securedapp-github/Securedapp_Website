import React,{useState} from 'react'
import NavbarWithBread from "./NavWithBread";
import Footer from './Footer';
import {Helmet} from "react-helmet";
import m1_image from "../images/Group891.png"
import Transmission from "./Transmission";
import m1 from '../images/memoji.png'
import m2 from '../images/memoji(1).png'
import m3 from '../images/memoji(2).png'
import m4 from '../images/memoji(3).png'
import m5 from '../images/memoji(4).png'
import m6 from '../images/memoji(5).png'
import m7 from '../images/nastyatoki.png'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function SecureWatch2() {
    const [selectedMenuItem, setSelectedMenuItem] = useState(1);
    const [email, setEmail] = useState("");

    const handleMenuItemClick = (index) => {
      setSelectedMenuItem(index);
    };

    const sendMail = async (e) => {
      e.preventDefault();
  
      if (email == "") {
        toast("Invalid Mail");
        return;
      }
      fetch("https://139-59-5-56.nip.io:3443/addSecurewatchUser", {
        method: "POST",
        body: JSON.stringify({
          mail: email,
        }),
        headers: {
          "Content-type": "application/json",
        },
      })
        .then((res) => {})
        .then((data) => {
          toast.success("Mail Send Successfully");
        })
        .catch((err) => {
          console.log(err.message);
          toast("Error in sending mail");
        });
    };


  return (
    <>
    <ToastContainer
        position="top-center"
        autoClose={2000}
        theme="dark"
        pauseOnHover
      />
    <Helmet>
            <title>SecureDApp Blog: Expert Insights on NFTs, Token Sales & DeFi Trends</title>
            <meta name="description" content="Dive into SecureDApp's blog for insightful articles on NFTs, token sales, and the future of DeFi. Stay updated with the latest trends, guides, and expert opinions on blockchain, tokenomics, and more." />
        </Helmet>
        <NavbarWithBread onItemClick={handleMenuItemClick} />
        <div className='securewatch pt-48 text-center'>
       <div className='text-3xl px-1 sm:px-0 md:text-4xl font-extrabold w-full sm:w-5/6 lg:w-3/5   mx-auto'>
        <span className='text-white pr-1'>
        Stay Informed!</span>
        <span className='text-[#12D576] px-1'>
        SecureWatch</span>
        <span className='text-white pl-1'>
        is in the Making</span>
  </div>
        <div className='w-full sm:w-5/6 lg:w-3/5 px-2 sm:px-0 mx-auto text-xl font-medium text-[#ABABAB] pt-4'>Hey! We're in the final stretch to unveil something incredible! We're hustling to finalize something awesome. Being candid, we're a bit behind schedule. Drop your email, and we'll shoot you a heads-up as soon as it's ready. Hang tight—your patience means the world!</div>
        <div className='pt-10 flex flex-row justify-center'>
        <img src={m1} className='relative left-6' alt="not found"/>
        <img src={m2} className='relative left-4' alt="not found"/>
        <img src={m3} className='relative left-2' alt="not found"/>
        <img src={m4} className='relative ' alt="not found"/>
        <img src={m5} className='relative right-2' alt="not found"/>
        <img src={m6} className='relative right-4' alt="not found"/>
        <img src={m7} className='relative right-6' alt="not found"/>
        </div>
        <div className='pt-6'>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Enter your Email Address' className='bg-transparent border-2 border-[#12FF8D] rounded-lg h-[3rem] w-[20rem] md:w-[24rem] placeholder-[rgba(255,255,255,0.37)] focus:outline-none text-white font-bold text-sm pl-4'/>
        </div>
        <button onClick={sendMail} className='mt-8 text-black font-bold text-lg bg-[#00D870] rounded-xl py-3 px-8 mb-8'>Continue</button>
      </div>
      <Transmission/>
      <div>
      <Footer />
      </div>
    </>
  )
}

export default SecureWatch2