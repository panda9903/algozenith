import React from "react";
import Info from "./Info";
import Course from "./Course";

const Lower = () => {
  return (
    <div className="bg-white flex flex-col md:flex-row items-center justify-center">
      <Info />

      <Course />
    </div>
  );
};

export default Lower;
