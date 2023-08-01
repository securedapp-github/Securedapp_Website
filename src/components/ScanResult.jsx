import React from "react";
import SectionHeader from "./SectionHeader";

const ScanResult = () => {
  return (
    <div
      style={{
        background:
          "radial-gradient(50% 50.00% at 50% 50.00%, rgba(18, 213, 118, 0.31) 0%, rgba(0, 0, 0, 0.00) 100%)",
      }}
    >
      <div className="flex justify-center items-center py-[60px]">
        <SectionHeader content="Results" />
      </div>

      <div className="px-[80px]">
        <div
          className="w-full  dark:bg-neutral-600 rounded-full mb-[50px]"
          style={{
            boxShadow: "6px 4px 5px 0px rgba(0, 0, 0, 0.06) inset",
            background: "rgba(0, 0, 0, 0.20)",
          }}
        >
          <div
            style={{
              background: "linear-gradient(360deg, #12D576 0%, #2D5C8F 100%)",
              width: "20%",

              height: "50px",
            }}
            className="bg-primary text-center flex justify-start px-[50px] items-center align-middle rounded-full font-sans text-[20px] font-normal leading-[110%] text-black text-primary-100"
          >
            <span>Critical: 3</span>
          </div>
        </div>
        <div
          className="w-full  dark:bg-neutral-600 rounded-full mb-[50px]"
          style={{
            boxShadow: "6px 4px 5px 0px rgba(0, 0, 0, 0.06) inset",
            background: "rgba(0, 0, 0, 0.20)",
          }}
        >
          <div
            style={{
              background: "linear-gradient(360deg, #12D576 0%, #2D5C8F 100%)",
              width: "25%",

              height: "50px",
            }}
            className="bg-primary text-center flex justify-start px-[50px] items-center align-middle rounded-full font-sans text-[20px] font-normal leading-[110%] text-black text-primary-100"
          >
            <span>Medium: 4</span>
          </div>
        </div>
        <div
          className="w-full  dark:bg-neutral-600 rounded-full mb-[50px]"
          style={{
            boxShadow: "6px 4px 5px 0px rgba(0, 0, 0, 0.06) inset",
            background: "rgba(0, 0, 0, 0.20)",
          }}
        >
          <div
            style={{
              background: "linear-gradient(360deg, #12D576 0%, #2D5C8F 100%)",
              width: "35%",

              height: "50px",
            }}
            className="bg-primary text-center flex justify-start px-[50px] items-center align-middle rounded-full font-sans text-[20px] font-normal leading-[110%] text-black text-primary-100"
          >
            <span>Low: 11</span>
          </div>
        </div>

        <div
          className="w-full  dark:bg-neutral-600 rounded-full mb-[50px]"
          style={{
            boxShadow: "6px 4px 5px 0px rgba(0, 0, 0, 0.06) inset",
            background: "rgba(0, 0, 0, 0.20)",
          }}
        >
          <div
            style={{
              background: "linear-gradient(360deg, #12D576 0%, #2D5C8F 100%)",
              width: "70%",

              height: "50px",
            }}
            className="bg-primary text-left flex justify-start px-[50px] items-center align-middle rounded-full font-sans text-[20px] font-normal leading-[110%] text-black text-primary-100"
          >
            <span>Informational: 106</span>
          </div>
        </div>
        <div
          className="w-full  dark:bg-neutral-600 rounded-full mb-[50px]"
          style={{
            boxShadow: "6px 4px 5px 0px rgba(0, 0, 0, 0.06) inset",
            background: "rgba(0, 0, 0, 0.20)",
          }}
        >
          <div
            style={{
              background: "transparent",
              width: "20%",

              height: "50px",
            }}
            className="bg-primary text-left flex justify-start px-[50px] items-center align-middle rounded-full font-sans text-[20px] font-normal leading-[110%] text-white text-opacity-20"
          >
            <span className="">Gas Optimization</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScanResult;
