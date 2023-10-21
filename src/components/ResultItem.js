import React from "react";
import { TfiLayoutPlaceholder } from "react-icons/tfi";

const ResultItem = (props) => {
  return (
    <div className="flex gap-2">
      <TfiLayoutPlaceholder className=" text-[2.75rem]" />
      <div>
        <p className=" font-semibold text-lg">{props.heading}</p>
        <p>{props.text}</p>
      </div>
    </div>
  );
};

export default ResultItem;
