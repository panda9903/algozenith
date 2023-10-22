import React from "react";
import { useState, useEffect } from "react";

const Image = () => {
  let classes;

  const size = useWindowSize().width;

  if (size > 768) {
    classes = "w-[786px] h-[783px]";
  } else {
    classes = "w-[500px] h-[600px] object-right-bottom mt-8";
  }

  return (
    <div className=" rcgn__Image m-[-8rem] md:flex end md:m-0 overflow-clip">
      <img
        className={classes}
        src={require("../AlgoZenith.png")}
        alt="Logo Of AlgoZenith md:flex flex-end"
      ></img>
    </div>
  );
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

export default Image;
