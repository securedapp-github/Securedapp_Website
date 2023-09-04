import React, { useState } from "react";
import SectionHeader from "./SectionHeader";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loader from "utils/loader";
import image1 from "../realestateperson.png";

const FlatContractForm = () => {
  const [showanalyse, setshowanalyse] = useState(false);
  const [otp, setotp] = useState(0);
  const [enterotp, setenterotp] = useState(0);
  const [loading, setLoading] = useState(false);
  const [showFileUpload, setshowFileUpload] = useState(false);

  const [showHistoryTable, setShowHisotryTable] = useState(false);
  const [showPlans, setshowPlans] = useState(false);
  const [showScanResult, setShowScanResult] = useState(false);
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

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const sendOTP = async () => {
    // if (!file) {
    //   toast("Please select a file.");
    //   return;
    // }

    setLoading(true);
    // await new Promise(resolve => setTimeout(resolve, 5000));
    // return;
    let otp = Math.floor(Math.random() * 9000) + 1000;
    console.log(otp);
    setotp(otp);
    setshowanalyse(true);
    // fetch('http://127.0.0.1:8000/sendOtp2', {
    // fetch("https://139-59-5-56.nip.io:3443/sendOtp2", {
    //   method: "POST",
    //   body: JSON.stringify({
    //     otp: otp,
    //     mail: email,
    //   }),
    //   headers: {
    //     "Content-type": "application/json",
    //   },
    // })
    //   .then((res) => {})
    //   .then((data) => {
    //     toast.success("OTP Send Successfully, Check Mail");
    //     setshowanalyse(true);
    //     setLoading(false);
    //     // setTimeout(function () { window.location.reload(true); }, 5000);
    //   })
    //   .catch((err) => {
    //     console.log(err.message);
    //     setLoading(false);
    //     toast("Error in sending OTP, Try again");
    //   });
    setLoading(false);
  };

  const verifyOTP = () => {

    if (enterotp != otp || otp == 0 || otp == "") {
      toast("Invalid OTP");
      return;
    }

    setLoading(true);
    setshowPlans(true);
    setshowanalyse(false);
    // check mail subscription details 
    // fetch('http://127.0.0.1:8000/audits', {
    // fetch("https://139-59-5-56.nip.io:3443/audits", {
    //   method: "POST",
    //   body: formData,
    // })
    //   .then((response) => {
    //     if (response.ok) {
    //       return response.json();
    //     }
    //     throw new Error("Network response was not ok.");
    //   })
    //   .then((data) => {
    //     setShowScanResult(true);
    //     generateTable(data);
    //     setEmail("");
    //     setFile(null);
    //     setotp("");
    //     setenterotp("");
    //     setshowanalyse(false);
    //   })
    //   .catch((error) => {
    //     console.error("Error:", error);
    //     setLoading(false);
    //   });

    setLoading(false);

  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!file) {
      toast("Please select a file.");
      return;
    }

    if (enterotp != otp || otp == 0 || otp == "") {
      toast("Invalid OTP");
      return;
    }

    setLoading(true);
    const formData = new FormData();
    formData.append("mail", email);
    formData.append("files", file);

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
        setEmail("");
        setFile(null);
        setotp("");
        setenterotp("");
        setshowanalyse(false);
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
          <SectionHeader content="Results" />
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

  const HistorySection = () => {
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
      { s_no: 10, name: 'e0F1g2H3i4J5k6L7m8N9o0P1', report_link: 'link10' }
    ];

    return (
      <section className=' pt-[0px] lg:px-[80px] md:px-[50px] px-[20px] pb-[70px] '>
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

        <div>

          <div>
            <button className='flex px-[22px] py-[11px] text-black justify-center items-center gap-3 rounded-[11px] bg-[#FFF] ' onClick={() => setShowHisotryTable(!showHistoryTable)}>
              {showHistoryTable ? 'Hide Scan History' : 'Show Scan History'}
            </button>
          </div>

          {showHistoryTable && ( // Render the table only if showTable is true
            <table className="w-full lg:mt-[50px] ">
              <tbody className='border-t-[0.5px] overflow-scroll '>
                {tableData.map((row, index) => (
                  <tr key={index} className={index % 2 === 0 ? 'bg-transparent' : 'bg-[#12D57612] bg-opacity-7'}>
                    <td className="px-4 py-2">{row.s_no}</td>
                    <td className="px-4 py-2">{row.name} </td>

                    <td className="px-4 py-2 flex gap-4"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M22 6C22 4.9 21.1 4 20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6ZM20 6L12 11L4 6H20ZM20 18H4V8L12 13L20 8V18Z" fill="#12D576" />
                    </svg>
                      <a href={row.report_link} target="_blank" rel="noopener noreferrer">
                        Receive the report via email
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

      <section className="lg:pt-[40px] md:pt-[160px] pt-[150px]  contacthero bg-fixed">
        <div className='lg:px-[80px] md:px-[50px] px-[20px] '>
          <h1 className="text-white font-sans md:text-[34px] text-[50px] font-bold
  leading-[72px]">SecureDApp Solidity Shield Scan

          </h1>
          <h1 className="text-[#12D577] font-sans text-[34px] font-bold
  leading-[72px]">Subscription Plans
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

        {!showPlans && (
          <div className="flex justify-center items-center mt-[50px] lg:px-0 md:px-[50px] px-[20px]">
            <SectionHeader
              content={
                "Enter Email : Verify OTP : SCAN"
              }
            />
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="flex md:flex-row flex-col gap-4 min-w-full justify-between mt-[30px] px-[80px]">

            {showFileUpload && (
              <div className="md:w-3/6 w-full ">
                <input
                  type="file"
                  className="md:w-11/12 w-full border rounded-[20px] p-3 placeholder:text-white file-input-info:text-white"
                  onChange={handleFileChange}
                />
              </div>
            )}

            {!showanalyse && !showPlans && (
              <>
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
              </>
            )}

            {showanalyse && (
              <>
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
              </>
            )}

          </div>
        </form>

        {showPlans && (<>
          <HistorySection /> <Plans />
        </>)}
      </div>

      {showScanResult && <ScanResult />}
    </>
  );
};

export default FlatContractForm;
