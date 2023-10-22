import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";

const Button = () => {
  return (
    <div className="rcgn__Button flex flex-col gap-8 md:flex-row items-center md:items-start mt-10 justify-start font-semibold">
      <button className="shadow bg-white bg-gradient-to-r from-[#FFFFFF] to-[#DFF6FF] text-[#053e56] w-[30rem] md:w-44 rounded-md p-2 flex gap-1 items-center justify-center">
        Join Now
        <AiOutlineArrowRight />
      </button>
      <button className=" bg-[#1F4482] bg-gradient-to-r from-[#012b3b] to-[#005C83] text-white w-[30rem] md:w-44 rounded-md p-2">
        View Curriculum
      </button>
    </div>
  );
};

export default Button;
