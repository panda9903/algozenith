import React from "react";
import Hero from "./Hero";

const Header = () => {
  return (
    <div
      className="bg-gradient-to-br
     from-[#0b3756] to-[#034361]"
    >
      <div className="flex justify-center">
        <p className="text-white text-4xl mt-40 font-bold md:text-5xl">
          Be better at DSA & CP
        </p>
      </div>
      <Hero />
    </div>
  );
};

export default Header;
