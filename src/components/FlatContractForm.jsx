import React, { useState } from "react";
import SectionHeader from "./SectionHeader";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Result from './Result';
import AuditStats from './AuditStats';

const FlatContractForm = () => {
  const [email, setEmail] = useState('');
  const [file, setFile] = useState(null);
  const [isResult, setisResult] = useState(false);
  const [isAuditStat, setAuditStat] = useState(false);
  const [resultData, setResultData] = useState(null);

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

    fetch('https://139-59-5-56.nip.io:3443/audits', {
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
        const processedData = JSON.parse(data);
        generateTable(processedData);
        setResultData(processedData);
        setisResult(true);
        setAuditStat(true);
        setEmail('');
        setFile(null);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  function generateTable(data) {
    let finding_names = ["high_issues", "medium_issues", "low_issues", "informational_issues", "optimization_issues"];
    var score = 5 - Number(data.findings[finding_names[0]] + data.findings[finding_names[0]] + data.findings[finding_names[0]] + 3) * 0.239;
    console.log(score);
    document.getElementById("4a").textContent = data.contracts;
    document.getElementById("2a").textContent = data.id;
    document.getElementById("a").textContent = data.lines;
    document.getElementById("b").textContent = data.assembly_lines;
    document.getElementById("b2").textContent = data.ercs.join("  |  ");
    document.getElementById("c").textContent = data.detectors;
    document.getElementById("2aaa").textContent = score.toFixed(1) + "/5";
    var link = document.getElementById('wrapper');
    link.style.display = 'block';
  }

  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={2000}
        theme="dark"
        pauseOnHover
      />
      <div className="lg:pt-[110px] pt-[110px] py-[60px] bg-gradient-to-r from-black via-green-1000 to-green-950">
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
            <div className="md:w-2/6 w-full ">
              <input
                type="email"
                placeholder="Email"
                className="md:w-5/6 w-full bg-transparent rounded-[20px] border placeholder:text-white placeholder:text-[16px] placeholder:font-sans p-3 placeholder:px-2"
                onChange={handleEmailChange}
              />
            </div>
            <div className="md:w-1/6">
              <button 
                type="submit" 
                className="md:w-4/6 bg-[#12D576] rounded-[20px] p-3 uppercase" 
                style={{ color: 'black' }}
                onClick={() => {
                  setisResult(true);
                  setAuditStat(true);
                }}
              >
                analyse
              </button>
            </div>
          </div>
        </form>
        </div>
      <div className="bg-gradient-to-r from-green-950 via-green-1000 to-black">
        {isResult && <Result file={resultData} />}
        {isAuditStat && <AuditStats file={resultData} />}
      </div>
    </>
  );
};

export default FlatContractForm;
