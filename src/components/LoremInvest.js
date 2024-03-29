import React, { useEffect, useState } from "react";

const LoremInvest = () => {
  const size = useWindowSize().width;

  let lorem;

  if (size > 768) {
    lorem =
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
  } else {
    lorem =
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua";
  }

  return (
    <div className="rcgn__LoremInvest md:mt-4">
      <p className="md:max-w-[500px] text-sm text-center md:text-left max-w-[30rem] md:text-base m-6">
        {lorem}
      </p>
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

export default LoremInvest;
