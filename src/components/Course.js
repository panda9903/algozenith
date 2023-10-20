import React from "react";
import ListItem from "./ListItem";

const Course = () => {
  return (
    <div className="flex justify-center">
      <div className=" border-solid rounded-md border-[#c2d4da] border-2 w-64">
        <p className=" text-xs">Premium Victory Batch</p>
        <p className=" line-through  text-[#818181] text-base">₹19,999</p>
        <p className="  text-[#20588c] text-xl">₹16,999</p>

        <div className="bg-[#04425d]">
          <ListItem data="100 Hrs+ Live Contents" />
          <ListItem data="50 Hrs+ Contest" />
          <ListItem data="500+ Problems" />
          <ListItem data="Includes interview bootcamp and access to a mentor network" />
          <ListItem data="Enjoy access to content for one year (paid extensions available)" />
          <ListItem data="Flexible payment options, including no-cost EMI, are available" />
        </div>
      </div>
    </div>
  );
};

export default Course;
