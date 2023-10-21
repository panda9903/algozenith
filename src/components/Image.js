import React from "react";

const Image = () => {
  return (
    <div className=" rcgn__Image md:flex end">
      <img
        className="w-[786px] h-[783px]"
        src={require("../AlgoZenith.png")}
        alt="Logo Of AlgoZenith md:flex flex-end"
      ></img>
    </div>
  );
};

export default Image;
