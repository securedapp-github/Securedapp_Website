import React from "react";
import works from "../images/smartcontractworks.png";
import SectionHeader from "./SectionHeader";
const DappExp = () => {
  return (
    <div className="meetteam -mb-[0px] flex flex-col justify-center items-center py-[50px]">
      <div>
        <SectionHeader content={"Smart Contract Functioning"} />
      </div>
      <div>
        <img src={works} alt="works" />
      </div>
    </div>
  );
};

export default DappExp;
