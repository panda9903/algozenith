import React from "react";

const Image = () => {
  return (
    <div className=" rcgn__Image m-[-8rem] md:flex end md:m-0">
      <img
        className="w-[786px] h-[783px]"
        src={require("../AlgoZenith.png")}
        alt="Logo Of AlgoZenith md:flex flex-end"
      ></img>
    </div>
  );
};

export default Image;
