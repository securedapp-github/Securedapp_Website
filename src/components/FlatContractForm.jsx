import React from "react";
import Heading from "./Heading";
import Subheading from "./Subheading";
import SectionHeader from "./SectionHeader";

const FlatContractForm = () => {
  return (
    <div className="md:pt-[110px] py-[60px]  bg-gradient-to-tr from-neutral-900 via-stone-800 to-green-700  ">
      <div className="flex justify-center items-center mt-[50px]">
        <SectionHeader content={"Select a Flatten Contract"} />
      </div>

      <div className="flex min-w-full justify-between mt-[30px] px-[80px]">
        <div className="w-3/6 ">
          <input
            type="file"
            className="w-11/12 border rounded-[20px] p-3 placeholder:text-white file-input-info:text-white"
          />
        </div>
        <div className="w-2/6">
          <input
            type="email"
            placeholder="email"
            className="w-5/6 bg-transparent rounded-[20px] border placeholder:text-white placeholder:text-[16px] placeholder:font-sans p-3 placeholder:px-2"
          />
        </div>
        <div className="w-1/6">
          <button className="w-4/6 bg-[#12D576] rounded-[20px] p-3 uppercase">
            analyse
          </button>
        </div>
      </div>
    </div>
  );
};

export default FlatContractForm;
