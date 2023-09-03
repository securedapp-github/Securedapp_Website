import React from 'react'
import image1 from "../realestateperson.png";
const PricingTable = () => {
    const plans = [
        { name: 'No of Scans', c1:"1 Scan",  c2: "6 Scan", c3: "24 Scan", c4: "Unlimited" },
        { name: 'Run', c1:"All Super Spotter",  c2: "All Super Spotter", c3: "All Super Spotter", c4: "All Super Spotter"  },
        { name: 'Audit Score',c1:true, c2: true, c3: true, c4: true },
        { name: 'Vulnerability Count',c1:true, c2: true, c3: true, c4: true },
        { name: 'Vulnerability Descriptions',c1:false, c2: true, c3: true, c4: true },
        { name: 'Audit Report',c1:false, c2: true, c3: true, c4: true },
        { name: 'Report Publish',c1:false, c2: false, c3: true, c4: true },
        { name: 'Report Download',c1:false, c2: false, c3: true, c4: true },
        { name: 'Github',c1:false, c2: false, c3: true, c4: true },
        { name: 'Social Shares (SecureDApp)',c1:false, c2: false, c3: true, c4: true },
        { name: 'Dedicate Blog (SecureDApp)',c1:false, c2: false, c3: true, c4: true },
        { name: 'Email Support',c1:false, c2: false, c3: true, c4: true },
        { name: 'API',c1:false, c2: false, c3: false, c4: true },
        { name: 'Dedicated Support',c1:false, c2: false, c3: false, c4: true },
      ];
    
  return (
    <section className="lg:pt-[180px] md:pt-[160px] pt-[150px] bg-transparent bloghero">
    <div className='lg:px-[80px] md:px-[50px] px-[20px] '>
    <h1 className="text-white font-sans md:text-[64px] text-[50px] font-bold
    leading-[72px]">SecureDApp Smart Contract 
  
    </h1>
    <h1 className="text-[#12D577] font-sans text-[64px] font-bold
    leading-[72px]">Scanning Payment
  
    </h1>

    <div className='my-[35px]'>
 <h1 className='text-white font-sans text-[18px] font-normal leading-[30px]'>   Scan your smart contracts for security vulnerabilities with SecureDApp’’s Solidity Shield. Our automated scanning engine will identify and report on potential security risks, helping you to keep your contracts safe and secure.</h1>
    </div>

<div className='flex gap-5'>
<button className='flex px-[32px] py-[21px] text-white justify-center items-center gap-3 rounded-[11px] bg-[#00D870] '> Get Started For Free
</button>

<button className='flex px-[32px] py-[21px] text-black justify-center items-center gap-3 rounded-[11px] bg-[#FFF] '> See Plans
</button>
</div>

    </div>
    <div className="container lg:mx-auto lg:px-0 my-10 md:px-4  ">
    <div className="min-w-full bg-transparent rounded-3xl border overflow-hidden">
      <div className="flex  ">
        <div className="w-1/5 lg:py-2 md:py-6 px-4 border text-center text-white font-sans md:text-[36px] text-[25px] font-bold leading-normal flex justify-center items-center "><h1> Plans </h1></div>
        <div className="w-1/5 py-2 px-4 border text-center flex flex-col items-center "><h1 className='text-white font-sans md:text-[22px] text-[15px] font-bold leading-[27px] text-center '> Base Plan</h1>
        <h1 className='text-white font-sans md:text-[36px] text-[25px] font-bold leading-[27px] text-center lg:py-[32px] md:py-[45px] py-[50px]'> Free</h1>
        <button className='bg-[#00C767] text-white flex md:px-[15px] py-[10px] justify-center rounded-[4px] text-center'> Choose This Plan
        </button>
        </div>
        <div className="w-1/5 py-2 px-4 border text-center flex flex-col items-center "><h1 className='text-white font-sans md:text-[22px] text-[15px] font-bold leading-[27px] text-center '> Plus Plan</h1>
        <h1 className='text-white font-sans md:text-[36px] text-[25px] font-bold leading-[27px] text-center lg:py-[17px] md:py-[30px] py-[20px] '> $69
        <span className='text-white font-sans text-[13px] font-medium leading-[27px] text-center py-[2px] block '> $ 11.5 / Scan</span>
        </h1>

        <button className='bg-[#00C767] text-white flex md:px-[15px]  py-[10px] justify-center rounded-[4px] text-center'> Choose This Plan
        </button>
        </div>       
        
        <div className="w-1/5 py-2 px-4 border text-center flex flex-col items-center "><h1 className='text-white font-sans md:text-[22px] text-[15px] font-bold leading-[27px] text-center '>Premium Plan</h1>
        <h1 className='text-white font-sans md:text-[36px] text-[25px]  font-bold leading-[27px] text-center lg:py-[17px] md:py-[15px] py-[20px]  '> $199
        <span className='text-white font-sans text-[13px] font-bold leading-[27px] text-center py-[2px] block '> $ 8.3 / <span className='font-medium'>Scan
        </span> </span></h1>
       

        <button className='bg-[#00C767] text-white flex md:px-[15px] py-[10px] justify-center rounded-[4px] text-center'> Choose This Plan
        </button>
        </div>    
        <div className="w-1/5 py-2 px-4 border text-center flex flex-col items-center "><h1 className='text-white font-sans md:text-[22px] text-[15px] font-bold leading-[27px] text-center '>Enterprise Plan</h1>
        <h1 className='text-white font-sans md:text-[36px] text-[25px] font-bold leading-[27px] text-center md:py-[17px] py-[35px] '> $1000
        <span className='text-white font-sans text-[13px] font-medium leading-[27px] text-center py-[2px] block'> Exclusive</span>
        </h1>

        <button className='bg-[#00C767] text-white flex md:px-[15px] py-[10px] justify-center rounded-[4px] text-center'> Choose This Plan
        </button>
        </div>          </div>
      {plans.map((plan, index) => (
        <div className="flex text-white" key={index}>
          <div className="w-1/5 py-7 md:px-4 px-2 border md:text-[17px] text-[10px] font-bold leading-[24px] ">{plan.name}</div>
          <div className="w-1/5 py-7 px-4 border text-center md:text-[17px] text-[10px]">{plan.c1 === true ? ( <h1 className='flex justify-center'>
          <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
          <path d="M20.5 6.87903L9.5 17.879L4.5 12.879" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
        </svg></h1>) : (plan.c1)  }</div>
          <div className="w-1/5 py-7 px-4 border text-center md:text-[17px] text-[10px] ">{plan.c2 === true ? (<h1 className='flex justify-center'>
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
            <path d="M20.5 6.87903L9.5 17.879L4.5 12.879" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
          </svg></h1>) : (plan.c2)  }</div>

          <div className="w-1/5 py-7 px-4 border text-center md:text-[17px] text-[10px]">{plan.c3 == true ?  <h1 className='flex justify-center'>
          <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
          <path d="M20.5 6.87903L9.5 17.879L4.5 12.879" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
        </svg></h1> : (plan.c3)}</div>
          <div className="w-1/5 py-7 px-4 border text-center md:text-[17px] text-[10px]">{plan.c4 == true ?  <h1 className='flex justify-center'>
          <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
          <path d="M20.5 6.87903L9.5 17.879L4.5 12.879" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
        </svg></h1> : (plan.c4)}</div>
        </div>
      ))}
    </div>
  </div>

  <div className='lg:px-[80px] md:px-[50px] px-[20px] lg:pt-[30px] md:pt-[25px] pt-[10px] lg:pb-[10px]'>

  <h1 className='text-white font-sans text-[22px] font-medium leading-[37px]'>
  <span className='text-[#00C767] text-[30px] font-extrabold'>Secure payment :
  </span> We use a secure payment processor that is PCI compliant and has a  good reputation for security. Your payment information is safe with us.
  </h1>
  
  </div>
  <div className='lg:px-[80px]  md:px-[50px] px-[20px] lg:py-[15px] md:pt-[25px] pt-[10px]'>

  <h1 className='text-white font-sans text-[22px] font-medium leading-[37px]'>
  <span className='text-[#00C767] text-[30px] font-extrabold'>Guarantee : 
  </span> We are so confident in our service that we offer a 100% satisfaction guarantee.
  </h1>
  
  </div>
  <div className='lg:px-[80px]  md:px-[50px] px-[20px] lg:py-[10px] md:pt-[25px]  pt-[10px]'>

  <h1 className='text-white font-sans text-[22px] font-medium leading-[37px]'>
  <span className='text-[#00C767] text-[30px] font-extrabold'>Privacy Policy :
  </span> We respect your privacy and will never share your information with third parties.
  </h1>
  
  </div>

  <div className='lg:px-[80px]  md:px-[50px] px-[20px] lg:py-[40px] md:py-[30px] py-[20px]' >

  <div className='flex lg:flex-row flex-col lg:gap-[100px md:gap-[50px] gap-[40px]'>
  <div className='flex gap-4 justify-center '>
  <div><img src={image1} alt='image1' />
  </div>
  <div className='flex flex-col justify-around'> <h1 className='text-white text-center text-[30px] font-bold leading-[18px]'>Eshan</h1>
  <h1 className='text-white text-center text-[14px] font-medium leading-[18px]'>CEO of BlitsEstate</h1>
  </div>
  </div>

  <div className='flex text-white font-sans text-[28px] font-medium leading-[40px]'>
  "SecureDApp has helped me to keep my smart contracts safe and secure. I would highly recommend their service."  </div>
  </div>
  
  </div>
  
  

   
    </section>
  )
}

export default PricingTable
