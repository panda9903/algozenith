import React from "react";
import HeroInfo from "./HeroInfo";
import Button from "./Button";
import HeroLorem from "./HeroLorem";

const Hero = () => {
  return (
    <div className="rcgn__Hero ">
      <HeroLorem />
      <Button />
      <HeroInfo />
    </div>
  );
};

export default Hero;
