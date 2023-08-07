import React from 'react';
import { ThreeCircles } from 'react-loader-spinner'

const Loader = () => {
    
  return (
    <div style={{
        position: "fixed",
        width: "200px",
        height: "200px",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        zIndex: "10000009"
      }}>
        <ThreeCircles
          height="150"
          width="150"
          color="#4fa94d"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
          ariaLabel="three-circles-rotating"
          outerCircleColor=""
          innerCircleColor=""
          middleCircleColor=""
        />
      </div>
  );
};

export default Loader;
