import React from 'react';
import SectionHeader from "./SectionHeader";

const AuditStats = (props) => {
  const { file } = props;

  const data = {
    "Audit Score": 3.6,
    "Audit Hash": "9264e8e1a0443eda049cb6ae6da2a0b903b45139bec2cb84b1af161bdf760d38",
    "Number of Fonts": 7,
    "Lines of Code Scanned": 2397,
    "Lines of Assembly Code": 0,
    "Total Vulnerability Fund": 121,
    "Total Vulnerability Fund Details": "Request Manual Audit For Detailed Report"
  };

  const tableCellStyle = {
    textAlign: 'left',
    padding: '8px',
  };

  const keyCellStyle = {
    ...tableCellStyle,
    width: 'auto'
  };

  const colonCellStyle = {
    ...tableCellStyle,
    width: '20px'
  };

  const responsiveStyle = {
    '@media (max-width: 768px)': {
      fontSize: '12px',
      padding: '4px',
    },
  };

  return (
    <div className="m-50">
      <div>
        <div className="md:text-3xl text-1xl whitespace-break-spaces w-fit font-sans font-bold leading-[110%] bg-gradient-to-r from-green-500 to-blue-800 bg-clip-text text-transparent" style={{ marginLeft:'5.5%' }}>
          <p>Audit Statistics:</p>
        </div>
        <div className="mt-4 text-white">
          {file && (
            <div>
              <p>{file.AuditStats}</p>
            </div>
          )}
        </div>
        <table className="striped" style={{ marginLeft:'5.4%', ...responsiveStyle }}>
          <tbody>
            {Object.entries(data).map(([key, value]) => (
              <tr key={key}>
                <td style={{ ...keyCellStyle, ...responsiveStyle }}>
                  <div className="md:text-.5xl text-1xl leading-[10%] text-white">
                    {key}
                  </div>
                </td>
                <td style={{ ...colonCellStyle, ...responsiveStyle }}>
                  <div className="md:text-.5xl text-1xl text-white">
                    :
                  </div>
                </td>
                <td style={{ ...tableCellStyle, ...responsiveStyle }}>
                  <div className="md:text-.5xl text-1xl text-left text-white leading:10%">
                    {key === "Total Vulnerability Fund Details" ? (
                      <a
                        href="https://www.figma.com/proto/LccfeJf6mJInO7l6gYje1i/SD-aboutus?page-id=0%3A1&type=design&node-id=773-28&viewport=1446%2C-984%2C0.5&scaling=scale-down-width&starting-point-node-id=23%3A2&t=dd12Qu7isyqVEEFc-1"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ textDecoration: 'underline' }} 
                      >
                        {value}
                      </a>
                    ) : (
                      typeof value === 'string' ? value : JSON.stringify(value)
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AuditStats;
