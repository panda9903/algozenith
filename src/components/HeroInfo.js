import React from "react";
import HeroList from "./HeroList";

const HeroInfo = () => {
  return (
    <div className="flex justify-center">
      <div className="text-white grid grid-cols-2 gap-16 p-5 text-xs">
        <HeroList />
      </div>
    </div>
  );
};

export default HeroInfo;
