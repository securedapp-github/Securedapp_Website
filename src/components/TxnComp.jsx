import React from "react";
import NavbarWithBread from "./NavWithBread";
import ContactHero from "./ContactHero";
import Transmission from "./Transmission";
import FooterInAbout from "./FooterInAbout";

import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loader from "utils/loader";
import { useParams } from 'react-router-dom';


const TxnHero = () => {
  const [status, setstatus] = useState("");
  const [loading, setLoading] = useState(true);
  const { id } = useParams();


  const blurryDivStyle = {
    filter: loading ? "blur(5px)" : "blur(0px)",
  };

  const fetchTxnData = async () => {
    try {
      const apiUrl = 'https://139-59-5-56.nip.io:3443/check-phonepay';
      const response = await fetch(`${apiUrl}?txnid=${id}`);
      const result = await response.json();

      console.log(result);
      setLoading(false);

      // setData(result);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    fetchTxnData();
  }, []);



  return (
    <>
      {loading && <Loader />}
      <ToastContainer
        position="top-center"
        autoClose={2000}
        theme="dark"
        pauseOnHover
      />
      <div
        style={{ ...blurryDivStyle }}
        className="contacthero md:pt-[80px] pt-[130px]"
      >
        <div className=" lg:pt-[110px] pt-[10px] py-[60px]  md:px-[80px]  md:py-[50px] lg:pb-[60px] py-[50px]  w-full mb-[0px] flex lg:flex-row flex-col gap-[60px]">
            {!loading && (
              <h1 className="text-white text-[36px] font-normal font-sans leading-[110%] pb-[20px]">
              Transaction Status : {status}
              </h1>
            )}
        </div>
      </div>
    </>
  );
};

const TxnComp = () => {
  return (
    <>
      <NavbarWithBread />
      <TxnHero />
      <Transmission />
      <FooterInAbout />
    </>
  );
};

export default TxnComp;
