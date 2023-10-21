import React from "react";
import HeroListItem from "./HeroListItem";

const HeroList = () => {
  return (
    <div className="rcgn__HeroList grid grid-cols-2 gap-8">
      <HeroListItem />
      <HeroListItem />
      <HeroListItem />
      <HeroListItem />
    </div>
  );
};

export default HeroList;
