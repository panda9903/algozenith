import React from "react";
import CourseName from "./CourseName";
import OldPrice from "./OldPrice";
import NewPrice from "./NewPrice";
import CourseList from "./CourseList";

const Course = () => {
  return (
    <div className="rcgn__Course flex justify-center items-center rounded p-4 ">
      <div className="border-solid rounded-md border-[#c2d4da] border-2 w-96">
        <div className="flex">
          <div className="p-4">
            <CourseName />
            <OldPrice />
            <NewPrice />
          </div>
          <img
            src={require("../Screenshot from 2023-10-21 18-46-56.png")}
            alt="Course logo"
            className="h-[150px] w-[160px]"
          />
        </div>

        <CourseList />
      </div>
    </div>
  );
};

export default Course;
