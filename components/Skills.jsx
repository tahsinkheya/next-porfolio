import React from "react";
import { skills } from "@component/constants";
function Skills() {
  return (
    <div>
      {" "}
      <div className="grid grid-cols-1  md:grid-cols-5 px-10 py-2 pt-5 gap-5">
        <div className="col-span-1"> </div>
        <div className="bg-black-700 text-white font-poppins   md:grid col-span-3 py-3">
          {" "}
          <h1 className="sm:text-6xl font-extrabold text-transparent pb-6 bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600 text-5xl ">
            Skills
          </h1>{" "}
          <div className="grid grid-cols-4 md:grid-cols-7">
            {skills.map((item, i) => (
              <div className="flex flex-col justify-center items-center">
                {item.logo}
                <p className="text-lg">{item.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
