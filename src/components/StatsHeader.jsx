import React from "react";

const StatsHeader = ({ content }) => {
  return (
    <div
      style={{
        background: "linear-gradient(144deg, #12D576 0%, #2D5C8F 100%)",
        backgroundClip: "text",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
      }}
      className=" md:text-[40px] text-2xl text-left whitespace-break-spaces w-fit font-sans font-bold leading-[102%]  bg-custom-gradient bg-clip-text text-transparent"
    >
      {content}
    </div>
  );
};

export default StatsHeader;
