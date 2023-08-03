import React from "react";

const InfoList = ({ data }) => {
  return (
    <div className="w-full">
      <ul>
        {data.map((item, index) => (
          <li key={index} className="mb-4">
            <div className="flex justify-around w-1/2">
              <div className=" text-left  text-white font-sans text-[20px] font-normal leading-[230%] flex justify-start">
                {item.label}
              </div>
              <div className="font-semibold text-white font-sans text-[20px] font-normal leading-[230%] ">
                :
              </div>
              <div className="ml-2  flex justify-start  text-white text-left font-sans text-[20px] font-normal leading-[230%]">
                {item.value}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default InfoList;
