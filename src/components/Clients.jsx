import React from "react";
import SectionHeader from "./SectionHeader";
import clientLogo from "../clientlogos.png";
import c1 from '../images/c1.png'
import c2 from '../images/c2.png'
import c3 from '../images/c3.png'
import c4 from '../images/c4.png'
import c5 from '../images/c5.png'
import c6 from '../images/c6.png'
import c7 from '../images/c7.png'
import c8 from '../images/c8.png'
import c9 from '../images/c9.png'
import c10 from '../images/c10.png'
import c11 from '../images/c11.png'
import c12 from '../images/c12.png'
import c13 from '../images/c13.png'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const Clients = () => {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000, // Adjust slide speed as needed
      pauseOnHover: true,
      arrow:false,
      responsive: [
        {
          breakpoint: 1000,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
  return (
    <div className="client font-gilroy  md:p-[100px] lg:pt-[100px] md:pt-[300px]  lg:p-[80px] p-[50px] md:px-[80px] flex lg:flex-row md:flex-col flex-col "
    >
      <div className="lg:w-4/12">
        <SectionHeader content={"Client & Partners"} />
        <div className="text-white pt-1 md:text-[20px] text-[18px] mt-[20px] font-normal font-gilroy leading-[135%] text-opacity-60 ">
          Leading DApp startups trust us to secure their blockchain applications
        </div>
      </div>
      <div className="lg:w-8/12 my-auto lg:px-[30px]  lg:mt-0 mt-[50px] py-5 rounded-2xl" style={{'backgroundColor':'rgba(255,255,255,0.3)','backdropFilter':'blur(30px)'}}>
        <Slider {...settings}>
          <div>
        <img src={c2} alt="" className="my-auto h-14 mx-auto"/>
        </div>
        <div className="mx-2 lg:mx-3 px-2 lg:px-3 ">
        <img src={c3} alt="" className="my-auto h-14 mx-auto"/></div>
        <div className="mx-2 lg:mx-3 px-2 lg:px-3 ">
        <img src={c1} alt="" className="my-auto h-14 mx-auto"/></div>
        <div className="mx-2 lg:mx-3 px-2 lg:px-3 ">
        <img src={c4} alt="" className="my-auto h-14 mx-auto"/></div>
        <div className="mx-2 lg:mx-3 px-2 lg:px-3 ">
        <img src={c5} alt="" className="my-auto h-14 mx-auto"/></div>
        <div className="mx-2 lg:mx-3 px-2 lg:px-3 ">
        <img src={c6} alt="" className="my-auto h-14 mx-auto"/></div>
        <div className="mx-2 lg:mx-3 px-2 lg:px-3 ">
        <img src={c7} alt="" className="my-auto h-14 mx-auto"/></div>
        <div className="mx-2 lg:mx-3 px-2 lg:px-3 ">
        <img src={c8} alt="" className="my-auto h-14 mx-auto"/></div>
        <div className="mx-2 lg:mx-3 px-2 lg:px-3 ">
        <img src={c9} alt="" className="my-auto h-14 mx-auto"/></div>
        <div className="mx-2 lg:mx-3 px-2 lg:px-3 ">
        <img src={c10} alt="" className="my-auto h-14 mx-auto"/></div>
        <div className="mx-2 lg:mx-3 px-2 lg:px-3 ">
        <img src={c11} alt="" className="my-auto h-14 mx-auto"/></div>
        <div className="mx-2 lg:mx-3 px-2 lg:px-3 ">
        <img src={c12} alt="" className="my-auto h-14 mx-auto"/></div>
        <div className="mx-2 lg:mx-3 px-2 lg:px-3 ">
        <img src={c13} alt="" className="my-auto h-14 mx-auto"/></div>
        </Slider>
      </div>
      {/* <div className="lg:px-[30px] lg:ml-[60px] lg:mt-0 mt-[50px] ">

        <div className="flex flex-wrap gap-5 md:gap-10 lg:gap-20 mb-4">
        <img src={c1} alt="" className="h-14 mx-auto"/>
        <img src={c2} alt="" className="h-14 mx-auto"/>
        <img src={c3} alt="" className="h-14 mx-auto"/>
        </div>
        <div className="flex flex-wrap gap-5 md:gap-10 lg:gap-20 mb-4">
        <img src={c4} alt="" className="h-14 mx-auto"/>
        <img src={c5} alt="" className="h-14 mx-auto"/>
        <img src={c6} alt="" className="h-14 mx-auto"/>
        </div>
        <img src={c7} alt="" className="h-14 mx-auto"/>
      </div> */}
    </div>
  );
};

export default Clients;
