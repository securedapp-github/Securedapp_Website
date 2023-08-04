import React from "react";
import SectionHeader from "./SectionHeader";
import InfoList from "./InfoList";

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
  const data = [
    { label: "Name", value: "Thiru" },
    { label: "Age", value: "18" },
    // Add more items to the array as needed
  ];

  const stats = [
    { label: "Critical", value: 3, width: 20 },
    { label: "Medium", value: 4, width: 25 },
    { label: "Low", value: 11, width: 35 },
    { label: "Informational", value: 106, width: 70 },
    { label: "Gas Optimization", value: null, width: 0 },
  ];

  const AuditStat = [
    {
      label: "Audit Score",
      value: "3.6/5",
    },
    {
      label: "Audit Hash",
      value: "9264e8e1a0443eda049cb6ae6da2a0b903b45139bec2cb84b1af161bdf760d38",
    },
    {
      label: "Number of Contracts",
      value: "7",
    },
    {
      label: " Lines of code scanned",
      value: "20",
    },
    {
      label: " Lines of assembly code",
      value: "20",
    },
    {
      label: "ERCs Standard Used",
      value: "ERC165 | ERC721",
    },
    {
      label: "Total Vulnerabilities Found ",
      value: "120",
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

      {/* <div className="flex justify-center">
        <InfoList data={data} />
      </div> */}

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

export default ScanResult;
