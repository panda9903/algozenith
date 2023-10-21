import React from "react";
import MediumText from "./MediumText";
import SmallText from "./SmallText";

const Invest = () => {
  if (window.innerWidth > 768) {
    return <MediumText />;
  } else {
    return <SmallText />;
  }
};

window.addEventListener("resize", () => {
  console.log("resize" + window.innerWidth);
  Invest();
});

export default Invest;
