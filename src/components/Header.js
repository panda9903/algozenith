import React from "react";
import Hero from "./Hero";
import BeBetter from "./BeBetter";

const Header = () => {
  return (
    <div
      className="rcgn__Header bg-gradient-to-br from-[#0b3756] to-[#034361]
    flex flex-col md:gap-6"
    >
      <BeBetter />
      <Hero />
    </div>
  );
};

export default Header;
