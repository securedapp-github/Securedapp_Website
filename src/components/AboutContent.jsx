import React from "react";

const AboutContent = ({ content,check }) => {
  return (
    <>
      <p className={`text-white font-sans text-[${check?'20px':'16px'}] font-${check?'medium':'normal'} leading-[150%] `}>
        {content}
      </p>
      <br />
    </>
  );
};

export default AboutContent;
