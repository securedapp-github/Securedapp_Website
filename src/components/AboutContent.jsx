import React from "react";

const AboutContent = ({ content }) => {
  return (
    <>
      <p className={`text-white font-sans ${check ? 'text-20' : 'text-16'} ${check ? 'font-medium' : 'font-normal'} leading-[150%]`}>
  {content}
</p>

      <br />
    </>
  );
};

export default AboutContent;
