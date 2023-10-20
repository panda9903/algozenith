import React from "react";
import Results from "./Results";

const Info = () => {
  return (
    <div className="flex flex-col items-center">
      <p className="w-32 text-xl font-bold">
        Invest in skills,
        <span className=" text-[#235b92]">earn 10x </span>
        of what you pay
      </p>
      <p className=" w-[22rem]  text-xs">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua
      </p>

      <Results />
    </div>
  );
};

export default Info;
