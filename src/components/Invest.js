import React from "react";
import MediumText from "./MediumText";
import SmallText from "./SmallText";
import { useState, useEffect } from "react";

const Invest = () => {
  const size = useWindowSize().width;
  if (size > 768) {
    return <MediumText />;
  } else {
    return <SmallText />;
  }
};

function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });
  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return windowSize;
}

export default Invest;
