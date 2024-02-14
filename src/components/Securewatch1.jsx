import React,{useState} from 'react'
import NavbarWithBread from "./NavWithBread";
import Footer from './Footer';
import {Helmet} from "react-helmet";
import m1_image from "../images/Group891.png"
import Transmission from "./Transmission";
import {useNavigate} from 'react-router-dom'

function Check({color}){

    return (
        <span className='my-auto'>
        <svg width="15" height="13" viewBox="0 0 15 13" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.6257 2.5417L5.12565 12.0417L0.771484 7.68754L2.35482 6.10421L5.12565 8.87504L13.0423 0.958374L14.6257 2.5417Z" fill={color}/>
</svg></span>
    )
}
function SecureWatch1() {
    const [selectedMenuItem, setSelectedMenuItem] = useState(1);

    const handleMenuItemClick = (index) => {
      setSelectedMenuItem(index);
    };
    const navigate=useNavigate()
    const nextPage = () => {
      navigate('/securewatch2')
    }
  return (
    <>
    <Helmet>
            <title>SecureDApp Blog: Expert Insights on NFTs, Token Sales & DeFi Trends</title>
            <meta name="description" content="Dive into SecureDApp's blog for insightful articles on NFTs, token sales, and the future of DeFi. Stay updated with the latest trends, guides, and expert opinions on blockchain, tokenomics, and more." />
        </Helmet>
        <NavbarWithBread onItemClick={handleMenuItemClick} />
        <div className='securewatch pt-44 pb-10 px-5  2xl:px-40'>
        <div className='text-[#00D870] font-extrabold text-5xl text-center pb-12'>Plans and Pricing</div>
        <div className='flex flex-col align-center gap-8  flex-wrap md:flex-row md:justify-center  lg:flex-nowrap'>
        <div className='mx-auto w-full sm:w-3/4 md:mx-0 md:w-1/2 lg:w-1/3'>
        <div className='mx-auto bg-white text-center py-2 w-1/2 font-medium text-md px-6 rounded-t-xl invisible'>Most selling plan</div>
        <div className='border-2 border-white rounded-3xl pt-6 pb-10'>
        <div className='font-bold text-3xl text-white px-10 border-b-2 border-white pb-6'>Trial</div>
        <div className='text-[#00D870] px-10 pt-8'>
        <span className='font-extrabold text-8xl'>$100</span>
        <span className='font-medium text-2xl'> / Month</span>
        </div>
        <div className='text-white text-lg font-semibold pl-10 pr-8 pt-6'>
        Ensure a worry-free experience with SecureWatch's intuitive interface, providing real-time transaction monitoring and efficient threat detection and resolution capabilities.</div>
        
        <div className='flex flex-row gap-2 px-10 pt-3'>
        <Check color={'#12D576'}/>
<span className='text-white text-lg font-medium'>Assets Discovery
</span>
        </div>
        <div className='flex flex-row gap-2 px-10 pt-1'>
        <Check color={'#12D576'}/>        
<span className='text-[rgba(255,255,255,0.2)] text-lg font-medium'>Threat Modeling
</span>
        </div>
        <div className='flex flex-row gap-2 px-10 pt-1'>
        <Check color={'#12D576'}/>
<span className='text-[rgba(255,255,255,0.2)] text-lg font-medium'>Custom Triggers (Unlimited)
</span>
        </div>
        <div className='flex flex-row gap-2 px-10 pt-1'>
        <Check color={'#12D576'}/>
<span className='text-[rgba(255,255,255,0.2)] text-lg font-medium'>Regulatory Compliance with Built-in Reporting Features
</span>
        </div>

        <div className='text-center pt-8'>
        <button onClick={nextPage} className='w-5/6 py-1 border-2  rounded-md border-[#00D870] text-[#00D870] mx-auto font-bold text-lg'>Get Started</button>
        </div>
        </div>
        </div>
        <div className='mx-auto w-full sm:w-3/4 md:mx-0 md:w-1/2 lg:w-1/3'>
        <div className='mx-auto bg-white text-center py-2 w-1/2 font-medium text-md px-6 rounded-t-xl'>Most selling plans</div>
        <div className='border-1 border-black rounded-3xl bg-[#12D576] pt-6 pb-10'>
        <div className='font-bold text-3xl text-black px-10 pb-6 border-b-2 border-black'>Premium</div>
        <div className='text-black px-10 pt-8'>
        <span className='font-extrabold text-8xl'>$399</span>
        <span className='font-medium text-2xl'> / Month</span>
        </div>
        <div className='text-black text-lg font-semibold pl-10 pr-8 pt-6'>
        Ensure a worry-free experience with SecureWatch's intuitive interface, providing real-time transaction monitoring and efficient threat detection and resolution capabilities.</div> 
        <div className='flex flex-row gap-2  px-10 pt-3'>
        <Check color={'#000000'}/>
<span className='text-black text-lg font-medium'>Asset Discovery
</span>
        </div>
        <div className='flex flex-row gap-2 px-10 pt-1'>
        <Check color={'#000000'}/>        
<span className='text-black text-lg font-medium'>Threat Modeling
</span>
        </div>
        <div className='flex flex-row gap-2 px-10 pt-1'>
        <Check color={'#000000'}/>
<span className='text-black text-lg font-medium'>Custom Trigger (5)
</span>
        </div>
       
        <div className='flex flex-row gap-2 px-10 pt-1'>
        <Check color={'rgba(0,0,0,0.25)'}/>
<span className='text-[rgba(0,0,0,0.25)] text-lg font-medium'>Regulatory Compliance with Built-in Reporting Features
</span>
        </div>
        <div className='text-center pt-8'>
        <button onClick={nextPage} className='w-5/6 py-1 border-2 text-white bg-black  rounded-md border-black text- mx-auto font-bold text-lg'>Get Started</button>
        </div>
        </div>
        </div>
        <div className='mx-auto w-full sm:w-3/4 md:mx-0 md:w-1/2 lg:w-1/3'>
        <div className='mx-auto bg-white text-center py-2 w-1/2 font-medium text-md px-6 rounded-t-xl invisible'>Most selling plan</div>
        <div className='border-2 border-white rounded-3xl pt-6 pb-10'>
        <div className='font-bold text-3xl text-white border-b-2 border-white px-10 pb-6'>Premium Plus</div>
        <div className='text-[#00D870] px-10 pt-8'>
        <span className='font-extrabold text-8xl'>$699</span>
        <span className='font-medium text-2xl'>/ Month</span>
        </div>
        <div className='text-white text-lg font-semibold pl-10 pr-8 pt-5'>
        Ensure a worry-free experience with SecureWatch's intuitive interface, providing real-time transaction monitoring and efficient threat detection and resolution capabilities.</div>
        
        <div className='flex flex-row gap-2 px-10 pt-3'>
        <Check color={'#12D576'}/>
<span className='text-white text-lg font-medium'>Assets Discovery
</span>
        </div>
        <div className='flex flex-row gap-2 px-10 pt-1'>
        <Check color={'#12D576'}/>        
<span className='text-white text-lg font-medium'>Threat Modeling
</span>
        </div>
        <div className='flex flex-row gap-2 px-10 pt-1'>
        <Check color={'#12D576'}/>
<span className='text-white text-lg font-medium'>Custom Triggers (Unlimited)
</span>
        </div>
        <div className='flex flex-row gap-2 px-10 pt-1'>
        <Check color={'#12D576'}/>
<span className='text-white text-lg font-medium'>Regulatory Compliance with Built-in Reporting Features
</span>
        </div>
       
        <div className='text-center pt-8'>
        <button onClick={nextPage} className='w-5/6 py-1 border-2  rounded-md border-[#00D870] text-[#00D870] mx-auto font-bold text-lg'>Get Started</button>
        </div>
        </div>
        </div>
        </div>
      </div>
      <Transmission/>
      <div>
      <Footer />
      </div>
    </>
  )
}

export default SecureWatch1
