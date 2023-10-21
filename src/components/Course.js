import React from "react";
import CourseName from "./CourseName";
import OldPrice from "./OldPrice";
import NewPrice from "./NewPrice";
import CourseList from "./CourseList";

const Course = () => {
  return (
    <div className="rcgn__Course flex justify-center items-center rounded p-4">
      <div className=" border-solid rounded-md border-[#c2d4da] border-2 w-64 p-0.5">
        <CourseName />
        <OldPrice />
        <NewPrice />

        <CourseList />
      </div>
    </div>
  );
};

export default Course;
