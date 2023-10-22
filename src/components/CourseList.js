import React from "react";
import ListItem from "./ListItem";
import { AiOutlineArrowRight } from "react-icons/ai";

const CourseList = () => {
  return (
    <div className="rcgn__CourseList bg-[#04425d] flex flex-col  p-4 justify-center rounded-md">
      <ListItem data="100 Hrs+ Live Contents" />
      <ListItem data="50 Hrs+ Contest" />
      <ListItem data="500+ Problems" />
      <ListItem data="Includes interview bootcamp and access to a mentor network" />
      <ListItem data="Enjoy access to content for one year (paid extensions available)" />
      <ListItem data="Flexible payment options, including no-cost EMI, are available" />

      <button className="bg-white text-[#053e56] w-80 rounded-md p-2 flex gap-1 items-center justify-center mx-auto">
        Join Now
        <AiOutlineArrowRight />
      </button>
    </div>
  );
};

export default CourseList;
