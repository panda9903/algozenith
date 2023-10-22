import React from "react";
import { TfiLayoutPlaceholder } from "react-icons/tfi";

const ResultItem = (props) => {
  return (
    <div className="flex gap-1 md:gap-2">
      <TfiLayoutPlaceholder className=" text-[2rem] md:text-[3rem] mt-[0.05rem]" />
      <div>
        <p className="font-semibold text-sm md:text-lg">{props.heading}</p>
        <p className="text-xs md:text-base">{props.text}</p>
      </div>
    </div>
  );
};

export default ResultItem;
