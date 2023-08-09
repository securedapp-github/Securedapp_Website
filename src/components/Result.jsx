import React from 'react';
import SectionHeader from "./SectionHeader";

// const gradientBackground = "bg-gradient-to-tr from-neutral-900 via-stone-800 to-green-700";
// const gradientBackground = 'radial-gradient(50% 50.00% at 50% 50.00%, rgba(18, 213, 118, 0.70) 0%, rgba(0, 0, 0, 0.00) 100%)'
// const radialGradientBackground = "bg-[rgba(0, 0, 0, 0.20);, rgba(18, 213, 118, 0.31) 0%, rgba(0, 0, 0, 0.00) 100%)]"; // Added radial gradient background

const ProgressBar = (props) => {
  const { name, completed, max = 100 } = props;

  const percentage = (completed / max) * 100;

  const containerStyles = {
    height: '41px',
    width: '85%',
    backgroundColor: 'rgba(0, 0, 0, 0.20)', 
    boxShadow: '6px 4px 5px 0px rgba(0, 0, 0, 0.06) inset', 
    borderRadius: 50,
    margin: 50,
    marginLeft: '5.5%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    position: 'relative'
  };
  
  

  const fillerStyles = {
    height: '100%',
    width: `${percentage}%`,
    borderRadius: '20px',
    background: 'linear-gradient(90deg, #12D576 0%, #2D5C8F 100%)',
    boxShadow: '6px 4px 5px 0px rgba(0, 0, 0, 0.06) inset',
    zIndex: 1
  };

  const labelStyles = {
    color: 'white',
    fontWeight: 'bold',
    fontSize: '1rem',
    position: 'absolute',
    left: '5%',
    zIndex: 2
  };

  return (
    <div style={containerStyles}>
      <div style={fillerStyles}></div>
      <span style={labelStyles}>{`${name} : ${completed}`}</span> 
    </div>
  );
};


const testData = [
  { name: "Critical ", completed: 3, max: 20 },
  { name: "Medium ", completed: 4, max: 20 },
  { name: "Low ", completed: 21.2, max: 40 },
  { name: "Informational ", completed: 79.5, max: 150 },
  { name: "Gas Optimization ", completed: 0, max: 100 },
];

const Result = (props) => {
  const { file } = props;

  return (
    <div> {/* Applied the radial gradient background here */}
      {/* Render the Progress Bars */}
      <div >
        <div className="flex justify-center items-center ">
          <SectionHeader content={"Result"} />
        </div>

        {/* Display the result data */}
        <div className="mt-4 text-white">
          {file && (
            <div>
              {/* Display your result data here */}
              <p>{file.result}</p>
            </div>
          )}
        </div>
        {testData.map((item, idx) => (
          <ProgressBar key={idx} name={item.name} completed={item.completed} max={item.max} />
        ))}
      </div>
    </div>
  );
};

export default Result;
