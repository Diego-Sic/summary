import React from "react";
import { TypeAnimation } from "react-type-animation";

const Hero: React.FC = () => {
  return (
    <div
      id="Home"
      className="mx-auto max-w-[1200px] md:h-[80vh] p-8 overflow-hidden"
    >
      <div className="glass px-5 mx-auto my-auto py-4 h-[100%] flex flex-col justify-center items-center">
        <h1 className="text-4xl sm:text-4xl lg:text-8xl font-extrabold flex flex-col items-center text-white">
          <div className="bg-gradient-to-r from-[#ff6b6b] to-[#ffa500] bg-clip-text text-transparent">
            <p className="mb-10">Welcome</p>
          </div>
          <TypeAnimation
            sequence={["Summarize", 1000, "Faster life?", 1000]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </h1>
        <p className="mt-10 text-white flex text-center">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam aliquam
          voluptatibus praesentium, magnam incidunt eum exercitationem
          voluptatum expedita dolore id hic quidem saepe optio quos nemo
          distinctio modi necessitatibus perferendis?
        </p>
      </div>
    </div>
  );
};

export default Hero;
