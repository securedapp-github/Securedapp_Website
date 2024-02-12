import React, { useState, useEffect } from "react";
import SectionHeader from "./SectionHeader";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loader from "utils/loader";
import image1 from "../realestateperson.png";
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import Modal from "react-modal";
import QRCode from 'qrcode.react';
import logo from "../images/logo2.jpeg";
import sha256 from 'crypto-js/sha256';
import {Buffer} from 'buffer';
import axios from "axios";

const { v4: uuidv4 } = require('uuid');


const FlatContractForm = () => {
  const [showverify, setshowverify] = useState(false); // for otp verify screen options
  const [modalOpen, setModalOpen] = useState(false);
  const [enterotp, setenterotp] = useState(0);
  const [loading, setLoading] = useState(false);
  const [showFileUpload, setshowFileUpload] = useState(false);
  const [showsendotp, setshowsendotp] = useState(true);

  const [plan, setplan] = useState("");
  const [credit, setcredit] = useState(0);
  const [rcredit, setrcredit] = useState(0);

  const [isplanVisible, setIsPlanVisible] = useState(false); // table toggle
  const [showHistoryTable, setShowHisotryTable] = useState(false); // table toggle
  const [tableData, setTableData] = useState([]);

  const [showPlans, setshowPlans] = useState(false);   // for scan history and scan plans
  // const [showPlans, setshowPlans] = useState(false);   // for scan history and scan plans

  const [showScanResult, setShowScanResult] = useState(false);  // for scan results

  const [version, setVersion] = useState('0.8.17');
  const versionOptions = [
    '0.7.0', '0.7.1', '0.7.2', '0.7.3', '0.7.4', '0.7.5', '0.7.6',
    '0.8.0', '0.8.1', '0.8.2', '0.8.3', '0.8.4', '0.8.5', '0.8.6', '0.8.7', '0.8.8', '0.8.9', '0.8.10', '0.8.11', '0.8.12', '0.8.13', '0.8.14', '0.8.15', '0.8.16', '0.8.17', '0.8.18', '0.8.19', '0.8.20', '0.8.21'
  ];

  const [email, setEmail] = useState("");
  const [file, setFile] = useState(null);
  const [critical, setcritical] = useState(0);
  const [medium, setmedium] = useState(0);
  const [low, setlow] = useState(0);
  const [info, setinfo] = useState(0);
  const [gas, setgas] = useState(0);
  const [score, setscore] = useState("");
  const [hash, sethash] = useState("");
  const [contracts, setcontracts] = useState(0);
  const [lines, setlines] = useState(0);
  const [assembly, setassembly] = useState(0);
  const [erc, seterc] = useState("");
  const [total, settotal] = useState(0);

  //Invoice States
  const [planid, setplanid] = useState(0);
  const [paymentid, setpaymentid] = useState(0);
  const [paymentaddress, setpaymentaddress] = useState("");
  const [paymentamount, setpaymentamount] = useState(0);


  useEffect(() => {
    var user = sessionStorage.getItem("securedapp_session_user");
    console.log("session : ", user);
    // var user_mail = user[0].mail
    if (user == null) {
      console.log("login session");
    } else {
      console.log("existing login session");
      setEmail(user);
      updateUserSession(user);
    }
  }, []);

  const customStyles = {
    overlay: {
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    content: {
      width: '500px',
      margin: 'auto',
      border: '1px solid #ccc',
      background: '#fff',
      borderRadius: '4px',
      boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
      textAlign: 'center',
    },
    header: {
      background: '#000000', // Set the background color for the header strip
      color: '#fff', // Set the text color for the header strip
      padding: '10px', // Add some padding to the header strip
      borderTopLeftRadius: '4px',
      borderTopRightRadius: '4px'
    },
    paymentDetails: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center', // Center-align the content horizontally
    },
    verifyButton: {
      backgroundColor: '#4CAF50', // Background color for the "Verify" button
      color: '#fff', // Text color for the "Verify" button
      border: 'none',
      padding: '10px 20px',
      margin: '25px',
      borderRadius: '4px',
      cursor: 'pointer',
    },
    closeButton: {
      backgroundColor: '#d9534f', // Background color for the "Close Modal" button
      color: '#fff', // Text color for the "Close Modal" button
      border: 'none',
      padding: '10px 20px',
      margin: '5px',
      borderRadius: '4px',
      cursor: 'pointer',
    }
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const sendOTP = async () => {

    setLoading(true);

    // setshowsendotp(false);
    // setshowverify(true);
    // setLoading(false);
    // await new Promise(resolve => setTimeout(resolve, 5000));
    // setshowanalyse(true);
    // return;


    // fetch('http://127.0.0.1:8000/sendOtp2', {
      fetch("https://139-59-5-56.nip.io:3443/sendOtp2", {
      method: "POST",
      body: JSON.stringify({
        mail: email,
      }),
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((res) => { })
      .then((data) => {
        toast.success("OTP Send Successfully, Check Mail");
        setshowsendotp(false);
        setshowverify(true);
        setLoading(false);
        // setTimeout(function () { window.location.reload(true); }, 5000);
      })
      .catch((err) => {
        console.log(err.message);
        setLoading(false);
        toast("Error in sending OTP, Try again");
      });

    setLoading(false);
  };

  const updateUserSession = (mails) => {
    setLoading(true);

    // fetch('http://127.0.0.1:8000/verifyOtp2', {
      fetch("https://139-59-5-56.nip.io:3443/getUser", {
      method: "POST",
      body: JSON.stringify({
        mail: mails
      }),
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Network response was not ok.");
      })
      .then((data) => {
        console.log(data);
        if(data.length == 0) toast("User Detail Error");
        let userdata = data[0];

        let plandetail = "Free Plan";
        if (userdata.plan == 1) {
          plandetail = "Basic Plan"
        }
        if (userdata.plan == 2) {
          plandetail = "Premium Plan"
        }
        if (userdata.plan == 3) {
          plandetail = "Exclusive Plan"
        }
        setplan(plandetail);
        setcredit(userdata.credit);
        setrcredit(userdata.rcredit);

        setshowPlans(true);
        setshowverify(false);
        setshowsendotp(false);
        sessionStorage.setItem("securedapp_session_user", mails);

      })
      .catch((error) => {
        console.error("Error:", error);
        setLoading(false);
      });

    setLoading(false);

  };

  const verifyOTP = () => {
    setLoading(true);

    // fetch('http://127.0.0.1:8000/verifyOtp2', {
      fetch("https://139-59-5-56.nip.io:3443/verifyOtp2", {
      method: "POST",
      body: JSON.stringify({
        mail: email,
        otp: enterotp
      }),
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Network response was not ok.");
      })
      .then((data) => {
        console.log(data);
        if(data.length == 0) toast("Wrong OTP");
        let userdata = data[0];

        let plandetail = "Free Plan";
        if (userdata.plan == 1) {
          plandetail = "Basic Plan"
        }
        if (userdata.plan == 2) {
          plandetail = "Premium Plan"
        }
        if (userdata.plan == 3) {
          plandetail = "Exclusive Plan"
        }
        setplan(plandetail);
        setcredit(userdata.credit);
        setrcredit(userdata.rcredit);

        setshowPlans(true);
        setshowverify(false);

        sessionStorage.setItem("securedapp_session_user", email);

      })
      .catch((error) => {
        console.error("Error:", error);
        setLoading(false);
      });

    setLoading(false);

  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!file) {
      toast("Please select a file.");
      return;
    }

    if (rcredit < 1) {
      toast("No Credit, Purchase a Plan");
      return;
    }

    setLoading(true);
    const formData = new FormData();
    formData.append("mail", email);
    formData.append("files", file);
    formData.append('version', version);

    // fetch('http://127.0.0.1:8000/audits', {
      fetch("https://139-59-5-56.nip.io:3443/audits", {
      method: "POST",
      body: formData,
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Network response was not ok.");
      })
      .then((data) => {

        setShowScanResult(true);
        generateTable(data);
        // setFile(null);
        console.log(data);
        if (credit > 1 && rcredit > 1) {
          generatePDF(data);
        }

      })
      .catch((error) => {
        console.error("Error:", error);
        setLoading(false);
      });
  };

  function generateTable(data) {
    let finding_names = [
      "high_issues",
      "medium_issues",
      "low_issues",
      "informational_issues",
      "optimization_issues",
    ];

    var score =
      5 -
      Number(
        data.findings[finding_names[0]] +
        data.findings[finding_names[1]] +
        data.findings[finding_names[2]] +
        3
      ) *
      0.239;

    setcritical(data.findings[finding_names[0]]);
    setmedium(data.findings[finding_names[1]]);
    setlow(data.findings[finding_names[2]]);
    setinfo(data.findings[finding_names[3]]);
    setgas(data.findings[finding_names[4]]);

    setscore(score.toFixed(1) + "/5");
    sethash(data.id);
    setcontracts(data.contracts);
    setlines(data.lines);
    setassembly(data.assembly_lines);
    seterc(data.ercs.join("  |  "));
    settotal(data.detectors);
    setLoading(false);
  }

  const blurryDivStyle = {
    filter: loading ? "blur(5px)" : "blur(0px)",
  };

  const GradientBar = ({ label, value, width }) => (
    <div
      className="w-[100%] dark:bg-neutral-600 rounded-full mb-[35px] "
      style={{
        boxShadow: "6px 4px 5px 0px rgba(0, 0, 0, 0.06) inset",
        background: "rgba(0, 0, 0, 0.20)",
      }}
    >
      <div
        style={{
          background: "linear-gradient(90deg, #12D576 0%, #2D5C8F 100%)",
          width: width > 100 ? "100%" : `${width}%`,
          height: "40px",
        }}
        className="bg-primary text-left flex justify-start  items-center align-middle rounded-full font-sans text-[20px] font-normal leading-[110%] text-black text-primary-100"
      >
        <span className="lg:px-[50px] pl-[10px] lg:text-[20px] w-full text-white whitespace-nowrap text-[14px]">
          {label}: {value}
        </span>
      </div>
    </div>
  );

  const ScanResult = () => {
    const stats = [
      { label: "Critical", value: critical, width: critical },
      { label: "Medium", value: medium, width: medium },
      { label: "Low", value: low, width: low },
      { label: "Informational", value: info, width: info },
      { label: "Gas Optimization", value: gas, width: gas },
    ];

    const AuditStat = [
      {
        label: "Audit Score",
        value: score,
      },
      {
        label: "Audit Hash",
        value: hash,
      },
      {
        label: "Number of Contracts",
        value: contracts,
      },
      {
        label: " Lines of code scanned",
        value: lines,
      },
      {
        label: " Lines of assembly code",
        value: assembly,
      },
      {
        label: "ERCs Standard Used",
        value: erc,
      },
      {
        label: "Total Vulnerabilities Found ",
        value: total,
      },
    ];

    return (
      <div style={{ ...blurryDivStyle }} className="res">
        <div className="flex justify-center items-center py-[60px] pb-[30px]">
          <SectionHeader content="Scan Results" />
        </div>

        <div className="mx-[8%]">
          <div className="lg:px-[80px] px-[60px] pb-[50px]   ">
            {stats.map((stat, index) => (
              <GradientBar key={index} {...stat} />
            ))}
          </div>
        </div>

        <div className="lg:px-[80px] px-[60px]">
          <div className=" md:text-2xl text-xl text-left whitespace-break-spaces w-fit font-sans font-bold leading-[110%]  bg-custom-gradient bg-clip-text text-transparent">
            Audit Statistics
          </div>
          <div className="grid gap-4 pt-[20px] pr-[40px]">
            {AuditStat.map((stat, index) => (
              <p key={index} className="flex items-center lg:w-auto w-fit">
                <span className="lg:w-[250px] w-[150px] text-white font-sans lg:text-[18px] text-[14px] font-normal leading-[230%]">
                  {stat.label}
                </span>
                <span className="text-white font-sans lg:text-[18px] text-[14px] font-normal leading-[230%]">
                  :
                </span>
                <span className="lg:w-1/2 w-[200px] text-white font-sans lg:text-[18px] text-[14px] overflow-clip font-normal lg:leading-[230%] text-left lg:pl-[60px] pl-[20px]">
                  {stat.value}
                </span>
              </p>
            ))}
            <p className="flex items-center  lg:w-auto w-fit">
              <span className="lg:w-[250px] w-[150px] text-white font-sans lg:text-[18px] text-[14px] font-normal leading-[230%] underline">
                <a href="/"> By SecureDApp</a>
              </span>
              <span className="text-white font-sans lg:text-[18px] text-[14px] font-normal leading-[230%]">
                :
              </span>
              <span className="lg:w-1/2 w-[200px] text-white font-sans lg:text-[18px] text-[14px] font-normal leading-[230%] text-left lg:pl-[60px] pl-[20px] underline">
                <a href="/contact-us">
                  {" "}
                  Request Manual Audit For Detailed Report
                </a>
              </span>
            </p>
          </div>
        </div>
      </div>
    );
  };

  const getScanHistory = async () => {
    setLoading(true);

    // fetch('http://127.0.0.1:8000/getHistory', {
      fetch("https://139-59-5-56.nip.io:3443/getHistory", {
      method: "POST",
      body: JSON.stringify({
        mail: email,
      }),
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Network response was not ok.");
      })
      .then((data) => {
        console.log(data);
        setTableData(data);
      })
      .catch((error) => {
        console.error("Error:", error);
        setLoading(false);
      });

    setLoading(false);
  }

  const downloadReport = async (id) => {
    setLoading(true);

    // fetch('http://127.0.0.1:8000/getReport', {
      fetch("https://139-59-5-56.nip.io:3443/getReport", {
      method: "POST",
      body: JSON.stringify({
        id: id,
      }),
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Network response was not ok.");
      })
      .then((data) => {
        console.log(JSON.parse(data[0].reportdata));
        generatePDF(JSON.parse(data[0].reportdata));
      })
      .catch((error) => {
        console.error("Error:", error);
        setLoading(false);
      });

    setLoading(false);
  }

  const HistorySection = () => {


    return (
      <section className=' pt-[0px] lg:px-[80px] md:px-[50px] px-[20px] pb-[70px] '>
        <div className='pt-[70px]'>
          <h1 className='text-white font-sans text-[40px] font-bold leading-[72px]'>Solidity Shield - <span className='text-[#12D576]'>Smart Contract Scanner
          </span>
          </h1>
        </div>

        <div className='flex lg:flex-row flex-col gap-10 pt-5'>

          <div className='text-center  border-[0.5px] border-white md:w-[380px]  '>
            <h1 className='text-white font-sans text-[24px] font-normal leading-[30px] px-6 py-4'><span className='font-normal'> User: </span>{email}
            </h1>
          </div>

          <div className='text-center border-[0.5px] border-white md:w-[380px] '>
            <h1 className='text-white font-sans text-[24px] font-normal leading-[30px] px-6 py-4'><span className='font-normal'> Plan: </span>{plan}
            </h1>
          </div>

          <div className='text-center border-[0.5px] border-white md:w-[380px] '>
            <h1 className='text-white font-sans text-[24px] font-normal leading-[30px] px-6 py-4'><span className='font-normal'> Remaining Scan Credit: </span>{rcredit}/{credit}
            </h1>
          </div>

          <div>

          </div>

          <div>

          </div>

        </div>

        <div>

          <div style={{ display: 'flex', gap: '10px' }}>
            <button
              className='flex px-[22px] py-[11px] text-black justify-center items-center gap-3 rounded-[11px] bg-[#FFF] mt-4'
              onClick={() => { getScanHistory(); setShowHisotryTable(!showHistoryTable) }}>
              {showHistoryTable ? 'Hide Scan History' : 'Show Scan History'}
            </button>
            <button
              className='flex px-[22px] py-[11px] text-black justify-center items-center gap-3 rounded-[11px] bg-[#FFF] mt-4'
              onClick={() => setshowFileUpload(!showFileUpload)}>
              Scan Contract
            </button>
          </div>



          {showHistoryTable && ( // Render the table only if showTable is true
            <table className="w-full lg:mt-[50px] " style={{ backgroundColor: 'black', border: '2px solid white', marginTop: '20px' }}>
              <thead>
                <tr>
                  <th>Report ID</th>
                  <th>Date</th>
                  <th>Report Link</th>
                </tr>
              </thead>
              <tbody className='border-t-[0.5px] overflow-scroll '>
                {tableData.map((row, index) => (
                  <tr key={index} className={index % 2 === 0 ? 'bg-transparent' : 'bg-[#12D57612] bg-opacity-7'}>
                    <td className="px-4 py-2 text-white text-center">{row.id} </td>
                    <td className="px-4 py-2 text-white text-center">{row.date} </td>

                    <td className="px-4 py-2 flex gap-4 text-white text-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M22 6C22 4.9 21.1 4 20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6ZM20 6L12 11L4 6H20ZM20 18H4V8L12 13L20 8V18Z"
                          fill="#12D576"
                        />
                      </svg>
                      <a href={"link"}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => {
                          e.preventDefault();
                          console.log(row.id);
                          downloadReport(row.id);
                        }}
                      >
                        Download Report
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>

      </section>
    )
  }

  const PurchasePlan = async (planid) => {

    setLoading(true);

    let cost = 0;
    if (planid == 1) cost = 15000;
    if (planid == 2) cost = 30000;
    if (planid == 3) cost = 80000;

    if (cost > 0) {
      setplanid(planid);

      const transactionid = "Tr-"+uuidv4().toString(36).slice(-6);
      console.log("Txn_ID : ", transactionid);


      const response2 = await fetch("https://139-59-5-56.nip.io:3443/payment-insert", {
        method: "POST",
        body: JSON.stringify({
          mail: email,
          paymentid: transactionid,
          planid: planid
        }),
        headers: {
          "Content-type": "application/json"
        },
      });
  
      const data = await response2.json();
      console.log("db entry data : ", data);
  
      if (!data.success) {
        console.log("Failed DB payment Entry");
        return;
      }

      const payload = {
        merchantId: "M22P2TA2GX0OB", //process.env.NEXT_PUBLIC_MERCHANT_ID,
        merchantTransactionId: transactionid,
        merchantUserId: 'himang305@gmail.com',
        amount: cost*100,
        redirectUrl: `https://139-59-5-56.nip.io:3443/payment-update`,
        // redirectUrl: `http://127.0.0.1:8000/payment-update`,
        // redirectMode: "REDIRECT",
        redirectMode: "POST",
        // callbackUrl: `http://127.0.0.1:8000/payment-update`,
        // callbackUrl: `http://139-59-5-56.nip.io:3443/payment-update`,
        mobileNumber: '9598241681',
        paymentInstrument: {
          type: "PAY_PAGE",
        },
      };

      const dataPayload = JSON.stringify(payload);
      console.log("payload :",dataPayload);

      const dataBase64 = Buffer.from(dataPayload).toString("base64");
      console.log("base64 :", dataBase64);

      const fullURL =
        // dataBase64 + "/pg/v1/pay" + process.env.NEXT_PUBLIC_SALT_KEY;
        dataBase64 + "/pg/v1/pay" + "099eb0cd-02cf-4e2a-8aca-3e6c6aff0399";
        
     const dataSha256 = sha256(fullURL);
      // const checksum = dataSha256 + "###" + process.env.NEXT_PUBLIC_SALT_INDEX;
      const checksum = dataSha256 + "###" + "1";

      console.log("c====",checksum);

    const UAT_PAY_API_URL =
    "https://api.phonepe.com/apis/hermes/pg/v1/pay";
    // "https://api-preprod.phonepe.com/apis/pg-sandbox/pg/v1/pay";


  const response = await axios.post(
    UAT_PAY_API_URL,
    {
      request: dataBase64,
    },
    {
      headers: {
        accept: "application/json",
        "Content-Type": "application/json",
         "X-VERIFY": checksum,
      },
    }
  );
    console.log("response : ", response);

  const redirect=response.data.data.instrumentResponse.redirectInfo.url;
  console.log("redirect : ", redirect);

  
  window.location.replace(redirect)

    }

  }

  const Plans = () => {
    const plans = [
      { name: 'No of Scans', c1: "1 Scan", c2: "6 Scan", c3: "24 Scan", c4: "Unlimited" },
      { name: 'Run', c1: "All Super Spotter", c2: "All Super Spotter", c3: "All Super Spotter", c4: "All Super Spotter" },
      { name: 'Audit Score', c1: true, c2: true, c3: true, c4: true },
      { name: 'Vulnerability Count', c1: true, c2: true, c3: true, c4: true },
      { name: 'Vulnerability Descriptions', c1: false, c2: true, c3: true, c4: true },
      { name: 'Audit Report', c1: false, c2: true, c3: true, c4: true },
      { name: 'Report Publish', c1: false, c2: false, c3: true, c4: true },
      { name: 'Report Download', c1: false, c2: false, c3: true, c4: true },
      { name: 'Github', c1: false, c2: false, c3: true, c4: true },
      { name: 'Social Shares (SecureDApp)', c1: false, c2: false, c3: true, c4: true },
      { name: 'Dedicate Blog (SecureDApp)', c1: false, c2: false, c3: true, c4: true },
      { name: 'Email Support', c1: false, c2: false, c3: true, c4: true },
      { name: 'API', c1: false, c2: false, c3: false, c4: true },
      { name: 'Dedicated Support', c1: false, c2: false, c3: false, c4: true },
    ];

    return (

      <section className="lg:pt-[40px] md:pt-[160px] pt-[150px] mt-[70px]  contacthero bg-fixed">
        <div className='lg:px-[80px] md:px-[50px] px-[20px] '>
          <h1 className="text-white font-sans md:text-4xl text-5xl font-bold leading-9">
            SecureDApp Solidity Shield <span className="text-[#12D577] font-sans text-4xl font-bold leading-9">Subscription Plans</span>
          </h1>

          {/* <h1 className="text-[#12D577] font-sans text-[34px] font-bold
  leading-[72px]">Subscription Plans
          </h1> */}

          <div className='my-[35px]'>
            <h1 className='text-white font-sans text-[18px] font-normal leading-[30px]'>   Scan your smart contracts for security vulnerabilities with SecureDApp’’s Solidity Shield. Our automated scanning engine will identify and report on potential security risks, helping you to keep your contracts safe and secure.</h1>
          </div>

          <div className='flex gap-5'>
            <button
              onClick={() => setshowFileUpload(!showFileUpload)}
              className='flex px-[32px] py-[21px] text-white justify-center items-center gap-3 rounded-[11px] bg-[#00D870] '> Get Started For Free
            </button>

            <button
              onClick={() => { setIsPlanVisible(!isplanVisible); }}
              className='flex px-[32px] py-[21px] text-black justify-center items-center gap-3 rounded-[11px] bg-[#FFF] '>
              {isplanVisible ? 'Hide Plans' : 'See Plans'}
            </button>

          </div>

        </div>

        {isplanVisible && (
          <div className="container lg:mx-auto lg:px-0 my-10 md:px-4  ">
            <div className="min-w-full bg-transparent rounded-3xl border overflow-hidden">
              <div className="flex  ">
                <div className="w-1/5 lg:py-2 md:py-6 px-4 border text-center text-white font-sans md:text-[36px] text-[25px] font-bold leading-normal flex justify-center items-center "><h1> Plans </h1></div>
                <div className="w-1/5 py-2 px-4 border text-center flex flex-col items-center "><h1 className='text-white font-sans md:text-[22px] text-[15px] font-bold leading-[27px] text-center '> Base Plan</h1>
                  <h1 className='text-white font-sans md:text-[36px] text-[25px] font-bold leading-[27px] text-center lg:py-[32px] md:py-[45px] py-[50px]'> Free</h1>
                  <button
                    onClick={() => setshowFileUpload(!showFileUpload)}
                    className='bg-[#00C767] text-white flex md:px-[15px] py-[10px] justify-center rounded-[4px] text-center'> Choose This Plan
                  </button>
                </div>
                <div className="w-1/5 py-2 px-4 border text-center flex flex-col items-center "><h1 className='text-white font-sans md:text-[22px] text-[15px] font-bold leading-[27px] text-center '> Plus Plan</h1>
                  <h1 className='text-white font-sans md:text-[36px] text-[25px] font-bold leading-[27px] text-center lg:py-[17px] md:py-[30px] py-[20px] '> Rs 15000
                    <span className='text-white font-sans text-[13px] font-medium leading-[27px] text-center py-[2px] block '> Rs 2500 / Scan</span>
                  </h1>

                  <button
                    onClick={() => { PurchasePlan(1) }}

                    className='bg-[#00C767] text-white flex md:px-[15px]  py-[10px] justify-center rounded-[4px] text-center'> Choose This Plan
                  </button>
                </div>

                <div className="w-1/5 py-2 px-4 border text-center flex flex-col items-center "><h1 className='text-white font-sans md:text-[22px] text-[15px] font-bold leading-[27px] text-center '>Premium Plan</h1>
                  <h1 className='text-white font-sans md:text-[36px] text-[25px]  font-bold leading-[27px] text-center lg:py-[17px] md:py-[15px] py-[20px]  '> Rs 30000
                    <span className='text-white font-sans text-[13px] font-bold leading-[27px] text-center py-[2px] block '> Rs 1250 / <span className='font-medium'>Scan
                    </span> </span></h1>


                  <button
                    onClick={() => { PurchasePlan(2) }}

                    className='bg-[#00C767] text-white flex md:px-[15px] py-[10px] justify-center rounded-[4px] text-center'> Choose This Plan
                  </button>
                </div>
                <div className="w-1/5 py-2 px-4 border text-center flex flex-col items-center "><h1 className='text-white font-sans md:text-[22px] text-[15px] font-bold leading-[27px] text-center '>Enterprise Plan</h1>
                  <h1 className='text-white font-sans md:text-[36px] text-[25px] font-bold leading-[27px] text-center md:py-[17px] py-[35px] '> 80000
                    <span className='text-white font-sans text-[13px] font-medium leading-[27px] text-center py-[2px] block'> Exclusive</span>
                  </h1>

                  <button
                    onClick={() => { PurchasePlan(3) }}
                    className='bg-[#00C767] text-white flex md:px-[15px] py-[10px] justify-center rounded-[4px] text-center'> Choose This Plan
                  </button>
                </div>          </div>
              {plans.map((plan, index) => (
                <div className="flex text-white" key={index}>
                  <div className="w-1/5 py-7 md:px-4 px-2 border md:text-[17px] text-[10px] font-bold leading-[24px] ">{plan.name}</div>
                  <div className="w-1/5 py-7 px-4 border text-center md:text-[17px] text-[10px]">{plan.c1 === true ? (<h1 className='flex justify-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                      <path d="M20.5 6.87903L9.5 17.879L4.5 12.879" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
                    </svg></h1>) : (plan.c1)}</div>
                  <div className="w-1/5 py-7 px-4 border text-center md:text-[17px] text-[10px] ">{plan.c2 === true ? (<h1 className='flex justify-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                      <path d="M20.5 6.87903L9.5 17.879L4.5 12.879" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
                    </svg></h1>) : (plan.c2)}</div>

                  <div className="w-1/5 py-7 px-4 border text-center md:text-[17px] text-[10px]">{plan.c3 == true ? <h1 className='flex justify-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                      <path d="M20.5 6.87903L9.5 17.879L4.5 12.879" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
                    </svg></h1> : (plan.c3)}</div>
                  <div className="w-1/5 py-7 px-4 border text-center md:text-[17px] text-[10px]">{plan.c4 == true ? <h1 className='flex justify-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                      <path d="M20.5 6.87903L9.5 17.879L4.5 12.879" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
                    </svg></h1> : (plan.c4)}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className='lg:px-[80px] md:px-[50px] px-[20px] lg:pt-[30px] md:pt-[25px] pt-[10px] lg:pb-[10px] mt-[100px]'>

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

  const generatePDF = async (reportData) => {
    try{
      
    console.log(11);
    const date = reportData.date;
    // const logo = logo;
    const pdf = new jsPDF('p', 'mm', 'a4');
    const linePositionY = 25;

    pdf.setFontSize(10);
    pdf.setFont("times", "bold");
    pdf.setTextColor(100, 100, 100);
    pdf.text(date, 180, 275);
    pdf.text('SecureDapp', 10, 275);
    pdf.setFont("times", "normal");
    pdf.text('235, 2nd & 3rd Floor, 13th Cross Rd, Indira Nagar II Stage,', 10, 280, null, null, 'left');
    pdf.text('Hoysala Nagar, Indiranagar, Bengaluru, Karnataka 560038', 10, 285, null, null, 'left');
    pdf.text('hello@securedapp.in', 10, 290, null, null, 'left');

    pdf.setFontSize(18); // Change font size to 18
    pdf.setFont("times", "bold"); // Set font to bold
    pdf.text('SecureDApp Solidity Shield Audit Report', 48, 20); // Adjust the coordinates

    // Executive Summary
    pdf.setFontSize(12);

    const headers = [
      ['AUDIT_HASH', reportData.id],
      ['Contracts', reportData.contracts],
      ['Lines', reportData.lines],
      ['Assembly Lines', reportData.assembly_lines],
      ['ERCs', reportData.ercs.join(', ')]
    ];

    pdf.autoTable({
      startY: 45,
      head: [['Executive Summary', '']], // Empty header row
      body: headers,
      styles: { fillColor: [211, 211, 211] },
      headStyles: {
        fillColor: [4, 170, 109],
        cellPadding: 2, // Increase row height by setting cellPadding
        fontSize: 12, // Adjust font size if needed
      },
      theme: 'grid', // Add grid lines if desired
    });


    // Add "Findings" data table
    const findingsHeaders = [['Audit Findings', 'Count']];
    const findingsData = Object.entries(reportData.findings).map(([key, value]) => {
      let lowerKey = key.toLowerCase();

      if (lowerKey === 'high_issues') {
        lowerKey = 'CRITICAL';
      } else if (lowerKey === 'medium_issues') {
        lowerKey = 'MEDIUM';
      } else if (lowerKey === 'low_issues') {
        lowerKey = 'LOW';
      } else if (lowerKey === 'informational_issues') {
        lowerKey = 'INFORMATIONAL';
      } else if (lowerKey === 'optimization_issues') {
        lowerKey = 'OPTIMIZATIONS';
      }

      return [lowerKey, value];
    }).reverse();

    pdf.autoTable({
      startY: pdf.lastAutoTable.finalY + 30,
      head: findingsHeaders,
      body: findingsData,
      styles: { fillColor: [211, 211, 211] },
      // headStyles: { fillColor: [4, 170, 109] },
      headStyles: {
        fillColor: [4, 170, 109],
        cellPadding: 2, // Increase row height by setting cellPadding
        fontSize: 12, // Adjust font size if needed
      },
    });

    pdf.addImage(logo, 'JPEG', 10, 11, 10, 10);

    pdf.text(date, 180, 15);
    pdf.setDrawColor(0, 128, 0);
    pdf.line(10, linePositionY, 200, linePositionY);
    pdf.setDrawColor(0, 128, 0);
    pdf.line(10, 270, 200, 270);
    pdf.setFontSize(10);
    pdf.setFont("times", "bold");
    pdf.setTextColor(100, 100, 100);
    pdf.text(date, 180, 275);
    pdf.text('SecureDapp', 10, 275);
    pdf.setFont("times", "normal");
    pdf.text('235, 2nd & 3rd Floor, 13th Cross Rd, Indira Nagar II Stage,', 10, 280, null, null, 'left');
    pdf.text('Hoysala Nagar, Indiranagar, Bengaluru, Karnataka 560038', 10, 285, null, null, 'left');
    pdf.text('hello@securedapp.in', 10, 290, null, null, 'left');


    // Vulnerabilities Found

    if (reportData[1] != null) {

      pdf.addPage();
      pdf.setFontSize(18);
      pdf.setFont("times", "bold"); // Set font to bold
      pdf.text('Vulnerabilities Found', 78, 35);

      let startY = 40;
      [1, 2, 3, 4, 5].forEach((index) => {
        if (reportData[index] && Object.keys(reportData[index]).length > 0) {
          let headString = '';
          switch (index) {
            case 1:
              headString = 'CRITICAL';
              break;
            case 2:
              headString = 'MEDIUM';
              break;
            case 3:
              headString = 'LOW';
              break;
            case 4:
              headString = 'INFORMATIONAL';
              break;
            case 5:
              headString = 'OPTIMIZATIONS';
              break;
          }
          // const vulnerabilitiesData = Object.entries(reportData[index]).map(([type, locations]) => [type, locations.join(', ')]);
          const vulnerabilitiesData = Object.entries(reportData[index]).map(([type, locations]) => {
            // Remove "contracts/" prefix from each location string if present
            const cleanedLocations = locations.map(location => location.replace(/^contracts\//, ''));
            return [type, cleanedLocations.join(', ')];
          });

          pdf.autoTable({
            head: [[headString, 'Locations']],
            body: vulnerabilitiesData,
            startY: startY,
            styles: { fillColor: [211, 211, 211] },
            headStyles: { fillColor: [4, 170, 109] },
          });
          startY = pdf.previousAutoTable.finalY + 10;
        }
      });

      pdf.addImage(logo, 'JPEG', 10, 11, 10, 10);
      pdf.setFontSize(13);
      pdf.setFont("times", "bold");
      pdf.text("SecureDApp", 21, 19);
      pdf.text(date, 180, 15);


      pdf.text(date, 180, 15);
      pdf.setDrawColor(0, 128, 0);
      pdf.line(10, linePositionY, 200, linePositionY);
      pdf.setDrawColor(0, 128, 0);
      pdf.line(10, 270, 200, 270);
      pdf.setFontSize(10);
      pdf.setFont("times", "bold");
      pdf.setTextColor(100, 100, 100);
      pdf.text(date, 180, 275);
      pdf.text('SecureDapp', 10, 275);
      pdf.setFont("times", "normal");
      pdf.text('235, 2nd & 3rd Floor, 13th Cross Rd, Indira Nagar II Stage,', 10, 280, null, null, 'left');
      pdf.text('Hoysala Nagar, Indiranagar, Bengaluru, Karnataka 560038', 10, 285, null, null, 'left');
      pdf.text('hello@securedapp.in', 10, 290, null, null, 'left');

    }

    // Disclaimer and Contact Us
    pdf.addPage();
    // pdf.setFontSize(12);
    // pdf.text('Disclaimer', 10, 35);

    pdf.setFontSize(18);
    pdf.setFont("times", "bold"); // Set font to bold
    pdf.text('Disclaimer', 82, 35);


    const disclaimerData = [
      ['Purpose', 'This audit report is provided for informational purposes only'],
      ['Scope', 'The audit was performed based on the state of the software at the time of the audit and may not reflect its current state or any subsequent changes.'],
      ['Limitations', 'While every effort has been made to ensure the accuracy and completeness of this report, no guarantee is made that all vulnerabilities or issues have been identified. Security audits do not guarantee complete system security.'],
      ['Recommendations', "The recommendations provided in this report are based on the best judgment of SecureDApp's security professionals. Implementation of these recommendations is at the discretion of the software's maintainers."],
      ['Responsibility', "It remains the responsibility of the software's maintainers and users to ensure its security and proper functionality. SecureDApp does not accept any liability for any damage or loss caused due to overlooked vulnerabilities or misinterpretations in this report."],
    ];
    pdf.autoTable({
      head: [['Topic', 'Description']],
      body: disclaimerData,
      startY: 40,
      styles: { fillColor: [211, 211, 211] },
      headStyles: { fillColor: [4, 170, 109] },
    });

    // pdf.setFontSize(12);
    // pdf.text('Contact Us', 10, pdf.previousAutoTable.finalY + 20);

    pdf.setFontSize(18);
    pdf.setFont("times", "bold"); // Set font to bold
    pdf.text('Contact Us', 82, pdf.previousAutoTable.finalY + 20);

    const contactData = [
      ['Email', 'hello@securedapp.in'],
      ['Phone', '9606015868'],
      ['Address', 'SecureDApp Solutions Pvt. Ltd. 235, 2nd & 3rd Floor,13th Cross Rd, Indira Nagar II Stage,Hoysala Nagar, Indiranagar, Bengaluru, Karnataka 560038'],
      ['Website', 'securedapp.io'],
      ['Business Hours', 'Monday to Friday, 9 AM - 6 PM IST'],
    ];
    pdf.autoTable({
      head: [['', '']],
      body: contactData,
      startY: pdf.previousAutoTable.finalY + 25,
      styles: { fillColor: [211, 211, 211] },
      headStyles: { fillColor: [4, 170, 109] },
    });

    pdf.addImage(logo, 'JPEG', 10, 11, 10, 10);
    pdf.setFontSize(13);
    pdf.setFont("times", "bold");
    pdf.text("SecureDApp", 21, 19);
    pdf.text(date, 180, 15);
    pdf.setDrawColor(0, 128, 0);
    pdf.line(10, linePositionY, 200, linePositionY);
    pdf.setFontSize(10);
    pdf.line(10, 270, 200, 270);
    pdf.setFontSize(10);
    pdf.setFont("times", "bold");
    pdf.setTextColor(100, 100, 100);
    pdf.text(date, 180, 275);
    pdf.text('SecureDapp', 10, 275);
    pdf.setFont("times", "normal");
    pdf.text('235, 2nd & 3rd Floor, 13th Cross Rd, Indira Nagar II Stage,', 10, 280, null, null, 'left');
    pdf.text('Hoysala Nagar, Indiranagar, Bengaluru, Karnataka 560038', 10, 285, null, null, 'left');
    pdf.text('hello@securedapp.in', 10, 290, null, null, 'left');

    pdf.save('Securedapp_SolidityShield_Report.pdf');
    console.log(24);
  }catch(e){
    console.log("error: ", e);
  }
  };

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
        className="lg:pt-[110px] pt-[110px] py-[60px]    "
      >

        {showsendotp && (
          <>
            <div className="flex justify-start items-start mt-[50px]  px-[80px]">
              <SectionHeader
                content={
                  "Enter Email : Verify OTP : SCAN"
                }
              />
            </div>

            <form >
              <div className="flex md:flex-row flex-col gap-4 min-w-full justify-start mt-[30px] px-[80px]">

                <div className="md:w-2/6 w-full">
                  <input
                    type="email"
                    placeholder="Email"
                    className="md:w-5/6 w-full bg-transparent rounded-[20px] border placeholder-text-white placeholder-[16px] placeholder-font-sans p-3 placeholder-px-2 text-white"
                    onChange={handleEmailChange}
                  />
                </div>
                <div className="md:w-1/6">
                  <button
                    type="button"
                    onClick={() => {
                      sendOTP();
                    }}
                    className="md:w-4/6 bg-[#12D576] rounded-[20px] p-3 uppercase text-[#000000]"
                  >
                    Send OTP
                  </button>
                </div>
              </div>
            </form>
          </>
        )}


        {showverify && (
          <>
            <div className="flex justify-center items-center mt-[50px] lg:px-0 md:px-[50px] px-[20px]">
              <SectionHeader
                content={
                  "Enter Email : Verify OTP : SCAN"
                }
              />
            </div>

            <form >
              <div className="flex md:flex-row flex-col gap-4 min-w-full justify-start mt-[30px] px-[80px]">


                <div className="md:w-2/6 w-full">
                  <input
                    type="number"
                    placeholder="Enter 4 Digit OTP"
                    className="md:w-5/6 w-full bg-transparent rounded-[20px] border placeholder-text-white placeholder-[16px] placeholder-font-sans p-3 placeholder-px-2 text-white"
                    onChange={(e) => {
                      setenterotp(e.target.value);
                    }}
                  />
                </div>
                <div className="md:w-1/6">
                  <button
                    type="button"
                    onClick={() => {
                      verifyOTP();
                    }}
                    className="md:w-4/6 bg-[#12D576] rounded-[20px] p-3 uppercase text-[#000000]">
                    Verify OTP
                  </button>
                </div>
              </div>
            </form>
          </>
        )}

        {showFileUpload && (
          <>

            <div className="flex justify-center items-center mt-[50px] lg:px-0 md:px-[50px] px-[20px]">
              <SectionHeader
                content={
                  "Select Flatten Contract : Select Compiler : Scan"
                }
              />
            </div>

            <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
              <div className="flex md:flex-row flex-col gap-4 min-w-full justify-start mt-[30px] px-[80px]">

                <div className="md:w-3/6 w-full ">
                  <input
                    type="file"
                    className="md:w-11/12 w-full border rounded-[20px] p-3 placeholder:text-white file-input-info:text-white"
                    onChange={handleFileChange}
                  />
                </div>

                <div className="md:w-1/6 w-full">
                  <select
                    value={version}
                    onChange={(e) => { setVersion(e.target.value) }}
                    className="md:w-11/12 w-full border rounded-[20px] p-3 text-white"  
                    style={{ backgroundColor: 'black' }}
                  >
                    {versionOptions.map((version) => (
                      <option key={version} value={version}>
                        {version} Compiler Version
                      </option>
                    ))}
                  </select>
                </div>

                <div className="md:w-1/6">
                  <button
                    type="submit"
                    className="md:w-4/6 bg-[#12D576] rounded-[20px] p-3 uppercase text-[#000000]">
                    SCAN
                  </button>
                </div>

              </div>
            </form>

          </>

        )}

        {showScanResult && <ScanResult />}

        {showPlans && (<>
          <HistorySection /> <Plans />
        </>)}


      </div>

    </>
  );
};

export default FlatContractForm;
