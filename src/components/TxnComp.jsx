import React from "react";
import NavbarWithBread from "./NavWithBread";
import ContactHero from "./ContactHero";
import Transmission from "./Transmission";
import FooterInAbout from "./FooterInAbout";
import SuccessImage from "../images/successful.png";
import TransactionPendingImage from "../images/transaction-history.png";

import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loader from "utils/loader";
import { useParams } from "react-router-dom";

const TxnHero = () => {
  const [status, setstatus] = useState("");
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  const blurryDivStyle = {
    filter: loading ? "blur(5px)" : "blur(0px)",
  };

  const fetchTxnData = async () => {
    try {
      const apiUrl = "https://139-59-5-56.nip.io:3443/check-phonepay";
      const response = await fetch(`${apiUrl}?txnid=${id}`);
      const result = await response.json();

      // console.log(result.data.status);
      setLoading(false);
      if (result.data?.status && result.data.status === 1) {
        setstatus("Successful");
      } else {
        setstatus("Pending (Contact Team)");
      }
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
        <div className="sm:p-[50px] lg:p-[70px]">
          {!loading && (
            <div className="text-center text-white">
              <img
                className="mx-auto mb-4" // Center align the image horizontally
                src={
                  status === "Successful"
                    ? SuccessImage
                    : TransactionPendingImage
                }
                height={300}
                width={300}
                alt=""
              />
              {status === "Successful" ? (
                <>
                  <div className="text-[50px]">Thank you.</div>
                  <div className="text-[35px] pb-2">
                    Account Recharged Successfully!
                  </div>
                  <div className="text-[25px]">
                    You will be redirected to the home page shortly.
                  </div>
                </>
              ) : (
                <>
                  <div className="text-[50px] pb-2">Pending</div>
                  <div className="text-[25px]">
                    Your Transaction Status is {status}
                  </div>
                </>
              )}
            </div>
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
