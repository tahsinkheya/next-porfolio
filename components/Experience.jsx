import { experience } from "@component/constants";
import { Accordion } from "flowbite";
import React from "react";
const Experience = () => {
  const [show, setShow] = React.useState(
    new Array(experience.length).fill(false)
  );

  const handleClick = (e) => {
    let newList = [...show];
    newList[e] = !newList[e];
    setShow(newList);
  };
  return (
    <div className="grid grid-cols-1  md:grid-cols-5 md:px-10 md:py-9 md:pt-20 md:gap-5 py-3 pt-3 px-6" id="experience">
      <div className="col-span-1"> </div>
      <div className="bg-black-700 text-white font-poppins   md:grid col-span-3 py-3">
        {" "}
        <h1 className="sm:text-6xl font-extrabold text-transparent pb-6 bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600 text-5xl ">
          Places I have worked
        </h1>{" "}
        {experience.map((item, i) => (
          <div id="accordion-collapse" data-accordion="collapse">
            <h2 id="accordion-collapse-heading-3">
              <button
                type="button"
                class="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800"
                data-accordion-target="#accordion-collapse-body-3"
                aria-expanded="false"
                aria-controls="accordion-collapse-body-3"
                onClick={(e) => {
                  handleClick(i);
                }}
              >
                <span>
                  {item.name}
                  <p>{item.position}</p>
                  <p>{item.timeline}</p>
                </span>
                {!show[i] && (
                  <svg
                    data-accordion-icon
                    class="w-6 h-6 shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                )}
                {show[i] && (
                  <svg
                    data-accordion-icon
                    class="w-6 h-6 rotate-180 shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                )}
              </button>
            </h2>
            <div
              id="accordion-collapse-body-3"
              className={`${show[i] ? "block" : "hidden"}`}
              aria-labelledby="accordion-collapse-heading-3"
            >
              <div class="p-5 border border-t-0 border-gray-200 dark:border-gray-700">
                <p class="mb-2 text-gray-500 dark:text-gray-400">
                  {item.details}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
