import React from "react";

const MadeWithLove = () => {
  return (
    <div className="flex items-center justify-evenly bg-black text-white">
      <p className=" text-center">Made with ❤️ using React and TailwindCSS.</p>
      <a href="https://github.com/panda9903/algozenith" target="_blank">
        {" "}
        GitHub
      </a>
    </div>
  );
};

export default MadeWithLove;
