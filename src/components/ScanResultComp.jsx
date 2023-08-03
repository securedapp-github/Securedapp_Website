import React, { useState, useEffect } from "react";
import FlatContractForm from "./FlatContractForm";
import { Scanner } from "./Scanner";
import ShieldCore from "./ShieldCore";
import BenefitsOfScan from "./BenefitsOfScan";
import Navbar from "./Navbar";
import Transmission from "./Transmission";
import FooterInScan from "./FooterInScan";
import ScanResult from "./ScanResult";
const ScanResultComp = () => {
  const [showScanResult, setShowScanResult] = useState(false);

  const handleAnalyzeButtonClick = () => {
    setShowScanResult(true);
  };
  return (
    <>
      <div className="navandflat">
        <Navbar />
        <FlatContractForm onScanButtonClick={handleAnalyzeButtonClick} />
      </div>

      <ScanResult />
      <BenefitsOfScan />
      <Transmission />
      <FooterInScan />
    </>
  );
};

export default ScanResultComp;
