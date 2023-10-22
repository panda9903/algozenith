import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";

const Button = () => {
  return (
    <div className=" rcgn__Button flex flex-col gap-8 md:flex-row items-center  m-4 justify-center font-semibold">
      <button className="bg-white text-[#053e56] w-96 md:w-44 rounded-md p-2 flex gap-1 items-center justify-center">
        Join Now
        <AiOutlineArrowRight />
      </button>
      <button className="bg-[#044f71] text-white w-96 md:w-44 rounded-md p-2">
        View Curriculum
      </button>
    </div>
  );
};

export default Button;
