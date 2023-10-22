import React from "react";
import { TfiLayoutPlaceholder } from "react-icons/tfi";

const HeroListItem = () => {
  return (
    <div className="rcgn__HeroListItem text-md flex gap-2 text-white">
      <TfiLayoutPlaceholder className=" text-2xl" />
      <p className="text-[0.8rem] md:text-base">Lorem ipsum dolor sit am</p>
    </div>
  );
};

export default HeroListItem;
