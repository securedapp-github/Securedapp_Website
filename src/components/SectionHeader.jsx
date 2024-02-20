import React from "react";

const SectionHeader = ({ content }) => {
  return (
    <div className=" md:text-4xl text-2xl text-left whitespace-break-spaces w-fit font-sans font-bold leading-[110%]  bg-custom-gradient bg-clip-text text-transparent">
      {content}
    </div>
  );
};

export default SectionHeader;
