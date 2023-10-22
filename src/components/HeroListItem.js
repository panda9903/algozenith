import React from "react";
import { GrStatusPlaceholderSmall } from "react-icons/gr";

const HeroListItem = () => {
  return (
    <div className="rcgn__HeroListItem text-md flex gap-2 text-white">
      <GrStatusPlaceholderSmall className=" mt-1 md:mt-0 text-2xl" />
      <p className="text-[0.8rem] md:text-base">Lorem ipsum dolor sit am</p>
    </div>
  );
};

export default HeroListItem;
