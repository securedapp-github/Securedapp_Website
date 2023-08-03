import React from "react";
import SectionHeader from "./SectionHeader";
import InfoList from "./InfoList";

const ScanResult = () => {
  const data = [
    { label: "Name", value: "Thiru" },
    { label: "Age", value: "18" },
    // Add more items to the array as needed
  ];

  return (
    <div className="res">
      <div className="flex justify-center items-center py-[60px] pb-[30px]">
        <SectionHeader content="Results" />
      </div>

      <div className="lg:px-[80px] px-[60px] pb-[50px]">
        <div
          className="w-full  dark:bg-neutral-600 rounded-full mb-[50px]"
          style={{
            boxShadow: "6px 4px 5px 0px rgba(0, 0, 0, 0.06) inset",
            background: "rgba(0, 0, 0, 0.20)",
          }}
        >
          <div
            style={{
              background: "linear-gradient(90deg, #12D576 0%, #2D5C8F 100%)",

              height: "50px",
            }}
            className="bg-primary lg:text-center flex w-2/12 justify-start px-[50px] lg:items-center lg:align-middle rounded-full font-sans lg:text-[20px] lg:font-normal  lg:leading-[110%] text-black text-primary-100"
          >
            <span className="lg:mr-0 mr-[80px]">Critical: 3</span>
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
              background: "linear-gradient(90deg, #12D576 0%, #2D5C8F 100%)",
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
              background: "linear-gradient(90deg, #12D576 0%, #2D5C8F 100%)",
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
              background: "linear-gradient(90deg, #12D576 0%, #2D5C8F 100%)",
              width: "70%",

              height: "50px",
            }}
            className="bg-primary text-left flex justify-start px-[50px] items-center align-middle rounded-full font-sans text-[20px] font-normal leading-[110%] text-black text-primary-100"
          >
            <span>Informational: 106</span>
          </div>
        </div>
        <div
          className="w-full  dark:bg-neutral-600 rounded-full mb-[0px]"
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

      {/* <div className="flex justify-center">
        <InfoList data={data} />
      </div> */}
    </div>
  );
};

export default ScanResult;
