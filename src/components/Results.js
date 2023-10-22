import React from "react";
import ResultItem from "./ResultItem";

const Results = () => {
  return (
    <div className="rcgn__Results text-black grid grid-cols-2  gap-x-6 gap-y-2 md:gap-14 md:ml-14">
      <ResultItem heading="1.2Cr/Year" text="highest fresher package" />
      <ResultItem heading="Multiple <100 ranks" text="in kickstart last year" />
      <ResultItem heading="1000+ offers" text="from top companies" />
      <ResultItem heading="Trusted by IITians" text="for career prep" />
    </div>
  );
};

export default Results;
