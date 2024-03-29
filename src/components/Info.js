import React from "react";
import Results from "./Results";
import Invest from "./Invest";
import LoremInvest from "./LoremInvest";

const Info = () => {
  return (
    <div className="rcgn__Info flex flex-col items-center mt-10 md:mt-0">
      <Invest />
      <LoremInvest />
      <Results />
    </div>
  );
};

export default Info;
