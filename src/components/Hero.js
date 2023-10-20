import React from "react";
import HeroInfo from "./HeroInfo";
import Button from "./Button";

const Hero = () => {
  return (
    <>
      <div className="flex justify-center">
        <p className="text-white mx-auto mt-12 w-[88%] text-xs">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua
        </p>
      </div>
      <HeroInfo />
      <Button />
    </>
  );
};

export default Hero;
