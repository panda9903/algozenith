import React from "react";
import HeroListItem from "./HeroListItem";

const HeroList = () => {
  return (
    <div className="rcgn__HeroList grid grid-cols-2 gap-8 mt-8 mx-6 md:mx-0">
      <HeroListItem />
      <HeroListItem />
      <HeroListItem />
      <HeroListItem />
    </div>
  );
};

export default HeroList;
