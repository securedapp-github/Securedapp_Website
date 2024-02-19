import React from "react";
import SectionHeader from "./SectionHeader";
import Subheading from "./Subheading";
import StatsHeader from "./StatsHeader";
import StatsSubheading from "./StasSubHeading";

const Stats = () => {
  return (
    <section className="flex justify-around statsbg h-[160px]  py-5 font-gilroy">
      <div className="stats shadow w-full bg-transparent border-none lg:px-[100px] md:px-[50px] flex  ">
        <div className="stat">
          {/* <div className="stat-figure text-secondary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-8 h-8 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
          </div> */}
          <div className="stat-value">
            <StatsHeader content={"USD 30 Million +"} />
          </div>
          <StatsSubheading content={"Protected"} />
        </div>
        <div className="border-l"></div> {/* Vertical separation line */}
        <div className="stat">
          <div className="stat-value">
            <StatsHeader content={"600+"} />
          </div>
          <StatsSubheading content={"Contracts Built & Audited"} />
        </div>
        <div className="border-l"></div> {/* Vertical separation line */}
        <div className="stat">
          <div className="stat-value">
            <StatsHeader content={"115+"} />
          </div>
          <StatsSubheading content={"Smart Contract Scans"} />
        </div>
      </div>
    </section>
  );
};

export default Stats;
