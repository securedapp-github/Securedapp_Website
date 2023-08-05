import React, { useState } from "react";
import Heading from "./Heading";
import Subheading from "./Subheading";
import SectionHeader from "./SectionHeader";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import ScanResult from "./ScanResult";

const FlatContractForm = () => {
  const [showScanResult, setShowScanResult] = useState(false);
  const [email, setEmail] = useState('');
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

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!file) {
      toast('Please select a file.');
      return;
    }

    const formData = new FormData();
    formData.append('mail', email);
    formData.append('files', file);

    fetch('http://127.0.0.1:8000/audits', {
      // fetch('https://139-59-5-56.nip.io:3443/audits', {
      method: 'POST',
      body: formData,
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then((data) => {
        setShowScanResult(true);
        console.log(data);
        generateTable(data);
        setEmail('');
        setFile(null);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  function generateTable(data) {    

    let finding_names = ["high_issues", "medium_issues", "low_issues", "informational_issues", "optimization_issues"];

    var score = 5 - Number(data.findings[finding_names[0]] + data.findings[finding_names[1]] + data.findings[finding_names[2]] + 3) * 0.239;
    
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

  }

  const GradientBar = ({ label, value, width }) => (
    <div
      className="w-full dark:bg-neutral-600 rounded-full mb-[50px]"
      style={{
        boxShadow: "6px 4px 5px 0px rgba(0, 0, 0, 0.06) inset",
        background: "rgba(0, 0, 0, 0.20)",
      }}
    >
      <div
        style={{
          background: "linear-gradient(90deg, #12D576 0%, #2D5C8F 100%)",
          width: `${width}%`,
          height: "50px",
        }}
        className="bg-primary text-left flex justify-start  items-center align-middle rounded-full font-sans text-[20px] font-normal leading-[110%] text-black text-primary-100"
      >
        <span className="lg:px-[50px] pl-[10px] lg:text-[20px] text-[14px]">
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
      <div className="res">
        <div className="flex justify-center items-center py-[60px] pb-[30px]">
          <SectionHeader content="Results" />
        </div>
  
        <div className="lg:px-[80px] px-[60px] pb-[50px]">
          {stats.map((stat, index) => (
            <GradientBar key={index} {...stat} />
          ))}
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
                <a href="/"> Request Manual Audit For Detailed Report</a>
              </span>
            </p>
          </div>
        </div>
      </div>
    );
  };

  return (

    <>
      <ToastContainer
        position="top-center"
        autoClose={2000}
        theme="dark"
        pauseOnHover
      />


      <div className="lg:pt-[110px] pt-[110px] py-[60px]    ">
        <div className="flex justify-center items-center mt-[50px]">
          <SectionHeader content={"Select a Flatten Contract"} />
        </div>

        <form onSubmit={handleSubmit}>
          <div className="flex md:flex-row flex-col gap-4 min-w-full justify-between mt-[30px] px-[80px]">
            <div className="md:w-3/6 w-full ">
              <input
                type="file"
                className="md:w-11/12 w-full border rounded-[20px] p-3 placeholder:text-white file-input-info:text-white"
                onChange={handleFileChange}
              />
            </div>
            <div className="md:w-2/6 w-full">
              <input
                type="email"
                placeholder="Email"
                className="md:w-5/6 w-full bg-transparent rounded-[20px] border placeholder:text-white placeholder:text-[16px] placeholder:font-sans p-3 placeholder:px-2"
                onChange={handleEmailChange}
              />
            </div>
            <div className="md:w-1/6">
              <button type="submit"
                className="md:w-4/6 bg-[#12D576] rounded-[20px] p-3 uppercase"
              >
                Analyse
              </button>
            </div>
          </div>
        </form>

      </div>

      {showScanResult && (


        <ScanResult />

      )}
    </>
  );
};

export default FlatContractForm;
