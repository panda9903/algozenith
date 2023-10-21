import React from "react";

const Button = () => {
  return (
    <div className=" rcgn__Button flex flex-col gap-2 items-center justify-center">
      <button className="bg-white text-[#053e56] w-96">Join Now</button>
      <button className="bg-[#044f71] text-white w-96 mb-8">
        View Curriculum
      </button>
    </div>
  );
};

export default Button;
