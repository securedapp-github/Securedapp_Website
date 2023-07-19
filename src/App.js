import "./App.css";
import AboutUsHero from "./components/AboutUsHero";
import Audit from "./components/Audit";
import Benefits from "./components/Benefits";
import Clients from "./components/Clients";
import Core from "./components/Core";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import Launch from "./components/Launch";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import Request from "./components/Request";
import Stats from "./components/Stats";
import Transmission from "./components/Transmission";
import { useEffect, useState } from "react";
import WhySecureDapp from "./components/WhySecureDapp";
import FounderSection from "./components/MeettheTeam";
import FlatContractForm from "./components/FlatContractForm";
import { Scanner } from "./components/Scanner";
import ShieldCore from "./components/ShieldCore";
import BenefitsOfScan from "./components/BenefitsOfScan";
import ProductHero from "./components/ProductHero";
function App() {
  const [selectedMenuItem, setSelectedMenuItem] = useState(0);

  const handleMenuItemClick = (index) => {
    setSelectedMenuItem(index);
  };

  useEffect(() => {
    console.log(selectedMenuItem);
  }, [selectedMenuItem]);
  return (
    <section className="bg-black mt-[00px]">
      <div className="hero1 h-screen">
        <Navbar onItemClick={handleMenuItemClick} />
        <div>
          {selectedMenuItem === 2 ? (
            <>
              <AboutUsHero />
              <WhySecureDapp />
              <FounderSection />
            </>
          ) : selectedMenuItem === 0 ? (
            <>
              <FlatContractForm />
              <Scanner />
              <ShieldCore />
              <BenefitsOfScan />
            </>
          ) : selectedMenuItem === 3 ? (
            <>
              <ProductHero />
            </>
          ) : (
            <>
              <Launch />
              <Request />
              <Clients />
              <Benefits />
              <Products />
              <Stats />
              <Core />
              <Audit />
              <FAQ />
            </>
          )}
          <Transmission />
          <Footer />
        </div>
      </div>
    </section>
  );
}

export default App;
