import "./App.css";

import { useEffect, useState } from "react";

import { Route, Routes } from "react-router-dom";
import HomeComp from "./components/HomeComp";
import ScanComp from "./components/ScanComp";
import ScanResultComp from "./components/ScanResultComp";

function App() {
  const [selectedMenuItem, setSelectedMenuItem] = useState(1);
  const [showScanResult, setShowScanResult] = useState(false);

  const handleMenuItemClick = (index) => {
    setSelectedMenuItem(index);
  };
  const handleAnalyzeButtonClick = () => {
    setShowScanResult(true);
  };
  useEffect(() => {
    console.log(selectedMenuItem);
    setShowScanResult(false);
  }, [selectedMenuItem]);
  return (
    <Routes>
      <Route exact path="/" element={<HomeComp />} />
      <Route exact path="/scan" element={<ScanComp />} />
      <Route exact path="/scanResult" element={<ScanResultComp />} />
    </Routes>
  );
}

export default App;
