import React from "react";
import Typed from "react-typed";

const NewPrice = () => {
  return (
    <p className="rcgn__NewPrice text-[#20588c] text-[2.5rem]  font-extrabold">
      {/*       ₹13,999
       */}
      <Typed strings={["₹13,999"]} typeSpeed={90} backSpeed={50} loop={true} />
    </p>
  );
};

export default NewPrice;
