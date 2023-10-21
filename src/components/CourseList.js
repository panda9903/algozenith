import React from "react";
import ListItem from "./ListItem";

const CourseList = () => {
  return (
    <div className="rcgn__CourseList bg-[#04425d] flex flex-col justify-center rounded-md">
      <ListItem data="100 Hrs+ Live Contents" />
      <ListItem data="50 Hrs+ Contest" />
      <ListItem data="500+ Problems" />
      <ListItem data="Includes interview bootcamp and access to a mentor network" />
      <ListItem data="Enjoy access to content for one year (paid extensions available)" />
      <ListItem data="Flexible payment options, including no-cost EMI, are available" />

      <button className="text-[#06445e] bg-white bg-center p-1 w-52 mb-4 mx-auto">
        Join Now!
      </button>
    </div>
  );
};

export default CourseList;
