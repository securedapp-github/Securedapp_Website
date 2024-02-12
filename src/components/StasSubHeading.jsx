import React from "react";

const StatsSubheading = ({ content }) => {
  const textStyles = {
    background: "linear-gradient(144deg, #FFF 0%, #2D5C8F 100%)",
    backgroundClip: "text",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  };
  return (
    <div
      className="text-white pt-1 text-[24px] font-bold  font-gilroy leading-[110%] "
      style={textStyles}
    >
      {content}
    </div>
  );
};

export default StatsSubheading;
