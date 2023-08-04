import React from "react";

const AboutContent = ({ content }) => {
  return (
    <>
      <p className="text-white font-sans text-[16px] font-normal leading-[150%]">
        {content}
      </p>
      <br />
    </>
  );
};

export default AboutContent;
