import React from "react";
import { GrStatusPlaceholderSmall } from "react-icons/gr";

const ListItem = ({ data }) => {
  return (
    <div className="rcgn__ListItem text-sm md:text-base text-white my-[1.25rem] flex gap-2 mx-2">
      <GrStatusPlaceholderSmall className="w-6 mt-2" />
      <p className="mt-1 md:mt-0">{data}</p>
    </div>
  );
};

export default ListItem;
