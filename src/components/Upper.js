import React from "react";
import Header from "./Header";
import Image from "./Image";

const Upper = () => {
  return (
    <div
      className="rcgn__Upper bg-gradient-to-b from-[#053e56] to-[#193669] p-1
      flex flex-col justify-center items-center md:flex-row"
    >
      <Header className="" />
      <Image />
    </div>
  );
};

export default Upper;