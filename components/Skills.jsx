import React from "react";
import { skills } from "@component/constants";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.min.css";
function Skills() {
  return (
    <div>
      <ScrollAnimation animateIn="animate__fadeIn">
        {" "}
        <div
          className="grid grid-cols-1  md:grid-cols-5 md:px-10 md:py-9 md:pt-20 md:gap-5 py-3 pt-3 px-6"
          id="skill"
        >
          <div className="col-span-1"> </div>
          <div className="bg-black-700 text-white font-poppins   md:grid col-span-3 py-3">
            {" "}
            <h1 className="sm:text-6xl font-extrabold text-transparent pb-6 bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600 text-5xl ">
              Skills
            </h1>{" "}
            <div className="grid grid-cols-3 md:grid-cols-6 gap-5">
              {skills.map((item, i) => (
                <div className="flex flex-col justify-center items-center">
                  {item.logo}
                  <p className="text-lg">{item.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </ScrollAnimation>
    </div>
  );
}

export default Skills;
