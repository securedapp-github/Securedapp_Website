import React, { useState, useEffect } from "react";
import FlatContractForm from "./FlatContractForm";
import { Scanner } from "./Scanner";
import ShieldCore from "./ShieldCore";
import BenefitsOfScan from "./BenefitsOfScan";
import Navbar from "./Navbar";
import Transmission from "./Transmission";
import FooterInScan from "./FooterInScan";
import {Helmet} from "react-helmet";

const ScanComp = () => {
  return (
    <>
     <Helmet>
            <title>Solidity Shield: AI-Powered Smart Contract Vulnerability Scanner</title>
            <meta name="description" content="Discover Solidity Shield, an AI-powered vulnerability detection engine for smart contracts. Offering comprehensive audit reports, it ensures security, reliability, and cost-effectiveness for developers." />
        </Helmet>
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
