import React from "react";
import { GrStatusPlaceholderSmall } from "react-icons/gr";

const ResultItem = (props) => {
  return (
    <div className="flex gap-1 md:gap-2">
      <GrStatusPlaceholderSmall className=" text-[2rem] md:text-[3rem] mt-[0.05rem]" />
      <div>
        <p className="font-semibold text-md md:text-lg">{props.heading}</p>
        <p className="text-sm md:text-base">{props.text}</p>
      </div>
    </div>
  );
};

export default ResultItem;
