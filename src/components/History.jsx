import React from 'react'

const History = () => {

  const tableData = [
    { s_no: 1, name: 'a1B2c3D4e5F6g7H8i9J0k1L2', report_link: 'link1' },
    { s_no: 2, name: 'm2N3o4P5q6R7s8T9u0V1w2X3', report_link: 'link2' },
    { s_no: 3, name: 'y3Z4a5B6c7D8e9F0g1H2i3J4', report_link: 'link3' },
    { s_no: 4, name: 'k4L5m6N7o8P9q0R1s2T3u4V5', report_link: 'link4' },
    { s_no: 5, name: 'w5X6y7Z8a9B0c1D2e3F4g5H6', report_link: 'link5' },
    { s_no: 6, name: 'i6J7k8L9m0N1o2P3q4R5s6T7', report_link: 'link6' },
    { s_no: 7, name: 'u7V8w9X0y1Z2a3B4c5D6e7F8', report_link: 'link7' },
    { s_no: 8, name: 'g8H9i0J1k2L3m4N5o6P7q8R9', report_link: 'link8' },
    { s_no: 9, name: 's9T0u1V2w3X4y5Z6a7B8c9D0', report_link: 'link9' },
    { s_no: 10, name: 'e0F1g2H3i4J5k6L7m8N9o0P1', report_link: 'link10' },
    { s_no: 11, name: 'q1R2s3T4u5V6w7X8y9Z0a1B2', report_link: 'link11' },
    { s_no: 12, name: 'c2D3e4F5g6H7i8J9k0L1m2N3', report_link: 'link12' },
    { s_no: 13, name: 'o3P4q5R6s7T8u9V0w1X2y3Z4', report_link: 'link13' },
    { s_no: 14, name: 'a4B5c6D7e8F9g0H1i2J3k4L5', report_link: 'link14' },
    { s_no: 15, name: 'm5N6o7P8q9R0s1T2u3V4w5X6', report_link: 'link15' },
    { s_no: 16, name: 'y6Z7a8B9c0D1e2F3g4H5i6J7', report_link: 'link16' },
    { s_no: 17, name: 'k7L8m9N0o1P2q3R4s5T6u7V8', report_link: 'link17' },
    { s_no: 18, name: 'w8X9y0Z1a2B3c4D5e6F7g8H9', report_link: 'link18' },
    { s_no: 19, name: 'i9J0k1L2m3N4o5P6q7R8s9T0', report_link: 'link19' },
    { s_no: 20, name: 'u0V1w2X3y4Z5a6B7c8D9e0F1', report_link: 'link20' },
    { s_no: 21, name: 'g1H2i3J4k5L6m7N8o9P0q1R2', report_link: 'link21' },
    { s_no: 22, name: 's2T3u4V5w6X7y8Z9a0B1c2D3', report_link: 'link22' },
    { s_no: 23, name: 'e3F4g5H6i7J8k9L0m1N2o3P4', report_link: 'link23' },
    { s_no: 24, name: 'q4R5s6T7u8V9w0X1y2Z3a4B5', report_link: 'link24' },
    { s_no: 25, name: 'c5D6e7F8g9H0i1J2k3L4m5N6', report_link: 'link25' },
  ];
  
  return (
    <section className=' pt-[150px] lg:px-[80px] md:px-[50px] px-[20px] pb-[70px] '>
<div className='pt-[70px]'>
<h1 className='text-white font-sans text-[40px] font-bold leading-[72px]'>Solidity Shield - <span className='text-[#12D576]'>Smart Contract Scanner
</span>
</h1>
</div>  

<div className='flex lg:flex-row flex-col gap-10 pt-5'>

<div className='text-center  border-[0.5px] border-white md:w-[380px]  '>
<h1 className='text-white font-sans text-[24px] font-normal leading-[30px] px-6 py-4'><span className='font-normal'> User: </span>thiru@securedapp.in
</h1>
</div>

<div className='text-center border-[0.5px] border-white md:w-[380px] '>
<h1 className='text-white font-sans text-[24px] font-normal leading-[30px] px-6 py-4'><span className='font-normal'> Plan: </span>Premium Plan
</h1>
</div>

<div className='text-center border-[0.5px] border-white md:w-[380px] '>
<h1 className='text-white font-sans text-[24px] font-normal leading-[30px] px-6 py-4'><span className='font-normal'> Scan Credit: </span>25/50
</h1>
</div>

<div>

</div>

<div>

</div>

</div>

<div className="overflow-x-auto lg:overflow-x-visible">
<h1 className='text-white text-[24px] font-bold leading-[72px] py-[5px]'>Scan History</h1>

<table className="w-full lg:mt-[50px] ">
<tbody className='border-t-[0.5px] overflow-scroll '>
  {tableData.map((row, index) => (
    <tr key={index} className={index % 2 === 0 ? 'bg-transparent' : 'bg-[#12D57612] bg-opacity-7'}>
      <td className="px-4 py-2">{row.s_no}</td>
      <td className="px-4 py-2">{row.name} </td>
 
      <td className="px-4 py-2 flex gap-4"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M22 6C22 4.9 21.1 4 20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6ZM20 6L12 11L4 6H20ZM20 18H4V8L12 13L20 8V18Z" fill="#12D576"/>
      </svg>
        <a href={row.report_link} target="_blank" rel="noopener noreferrer">
        Receive the report via email    
            </a>
      </td>
    </tr>
  ))}
</tbody>
</table>
</div>

</section>
  )
}

export default History
