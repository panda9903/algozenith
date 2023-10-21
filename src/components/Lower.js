import React from "react";
import Info from "./Info";
import Course from "./Course";

const Lower = () => {
  return (
    <div className="rcgn__Lower bg-white flex flex-col md:flex-row items-center justify-center gap-32 mt-6">
      <Info />

      <Course />
    </div>
  );
};

export default Lower;
