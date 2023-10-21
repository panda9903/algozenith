import React from "react";
import HeroMedium from "./HeroMedium";
import HeroSmall from "./HeroSmall";
import HeroLorem from "./HeroLorem";
import { useState, useEffect } from "react";

const Hero = () => {
  const size = useWindowSize().width;

  let component;

  if (size > 768) {
    component = <HeroMedium />;
  } else {
    component = <HeroSmall />;
  }

  return (
    <div className="rcgn__Hero ">
      <HeroLorem />
      {component}
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

export default Hero;
