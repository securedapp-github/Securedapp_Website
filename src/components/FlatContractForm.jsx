import React, { useState } from "react";
import Heading from "./Heading";
import Subheading from "./Subheading";
import SectionHeader from "./SectionHeader";

const FlatContractForm = ({ onScanButtonClick }) => {
  const [showScanResult, setShowScanResult] = useState(false);

  const OnclickHandler = () => {
    onScanButtonClick(); // Notify the parent component that the "Analyze" button is clicked
    setShowScanResult(true); // Set the state to show the "ScanResult" component
  };

  return (
    <div
      className="lg:pt-[110px] pt-[110px] py-[60px]    "
      style={{ background: "rgba(0, 0, 0, 0.20)" }}
    >
      <div className="flex justify-center items-center mt-[50px]">
        <SectionHeader content={"Select a Flatten Contract"} />
      </div>

      <div className="flex md:flex-row flex-col gap-4 min-w-full justify-between mt-[30px] px-[80px]">
        <div className="md:w-3/6 w-full ">
          <input
            type="file"
            className="md:w-11/12 w-full border rounded-[20px] p-3 placeholder:text-white file-input-info:text-white"
          />
        </div>
        <div className="md:w-2/6 w-full">
          <input
            type="email"
            placeholder="email"
            className="md:w-5/6 w-full bg-transparent rounded-[20px] border placeholder:text-white placeholder:text-[16px] placeholder:font-sans p-3 placeholder:px-2"
          />
        </div>
        <div className="md:w-1/6">
          <button
            className="md:w-4/6 bg-[#12D576] rounded-[20px] p-3 uppercase"
            onClick={OnclickHandler}
          >
            analyse
          </button>
        </div>
      </div>
    </div>
  );
};

export default FlatContractForm;
