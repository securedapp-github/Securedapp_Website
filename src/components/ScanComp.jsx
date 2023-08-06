import React, { useState, useEffect } from "react";
import FlatContractForm from "./FlatContractForm";
import { Scanner } from "./Scanner";
import ShieldCore from "./ShieldCore";
import BenefitsOfScan from "./BenefitsOfScan";
import Navbar from "./Navbar";
import Transmission from "./Transmission";
import FooterInScan from "./FooterInScan";

const ScanComp = () => {
  return (
    <>
      <div className="navandflat">
        <Navbar />
        <FlatContractForm />
      </div>

      {/* <>
          <Scanner />
          <ShieldCore />
        </> */}

      <BenefitsOfScan />
      <Transmission />
      <FooterInScan />
    </>
  );
};

export default ScanComp;
