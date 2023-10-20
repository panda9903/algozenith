import React from "react";
import ListItem from "./ListItem";

const HeroInfo = () => {
  return (
    <div className="flex justify-center">
      <div className="text-white grid grid-cols-2 gap-16 p-5 text-xs">
        {/* <div>Lorem Ipsum dolor sit amet</div>
        <div>Lorem Ipsum dolor sit amet</div>
        <div>Lorem Ipsum dolor sit amet</div>
        <div>Lorem Ipsum dolor sit amet</div> */}
        <ListItem data="Lorem Ipsum dolor sit amet" />
        <ListItem data="Lorem Ipsum dolor sit amet" />
        <ListItem data="Lorem Ipsum dolor sit amet" />
        <ListItem data="Lorem Ipsum dolor sit amet" />
      </div>
    </div>
  );
};

export default HeroInfo;
