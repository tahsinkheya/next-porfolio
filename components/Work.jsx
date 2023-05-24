import React from "react";
import { work } from "@component/constants";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.min.css";
function Work() {
  const [num, setNum] = React.useState(4);
  return (
    <div>
      {" "}
      <div
        className="grid grid-cols-1  md:grid-cols-5 md:px-10 md:py-9 md:pt-20 md:gap-5 py-3 pt-3 px-6"
        id="work"
      >
        <div className="col-span-1"> </div>
        <div className="bg-black-700 text-white font-poppins   md:grid col-span-3 py-3">
          {" "}
          <h1 className="sm:text-6xl font-extrabold text-transparent pb-6 bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600 text-5xl ">
            Some Things I have worked on
          </h1>
          {work.map((item, i) => (
            <>
              {i < num && (
                <ScrollAnimation
                  animateIn="animate__slideInLeft"
                  animatePreScroll={false}
                >
                  <div className="pb-5">
                    <h1 className="text-xl font-mono pb-3 md:text-2xl">
                      {item.title}
                    </h1>
                    <div className="p-3">
                      <div className="flex-col justify-center items-center flex">
                        <img src={item.imgLink} alt="imglink"></img>
                        <p className="text-lg md:text-2xl pt-3">
                          {item.subtitle}
                        </p>
                      </div>
                      <p
                        class="text-gray-500 dark:text-gray-400 text-left flex flex-row items-start justify-end
                    "
                      >
                        <a
                          href={item.webLink}
                          class="inline-flex items-center font-medium text-cyan-300  hover:underline pt-3"
                        >
                          View More
                          <svg
                            aria-hidden="true"
                            class="w-5 h-5 ml-1"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                              clip-rule="evenodd"
                            ></path>
                          </svg>
                        </a>
                      </p>
                    </div>
                  </div>
                </ScrollAnimation>
              )}
            </>
          ))}
          <div
            className={`flex justify-center items-center ${
              num === work.length ? "hidden" : "block"
            }`}
          >
            <button
              onClick={() => {
                setNum(work.length);
              }}
              className="bg-transparent text-center hover:bg-cyan-700 text-cyan-400 w-[200px] font-semibold hover:text-white py-2 px-4 border border-cyan-400 hover:border-transparent rounded"
            >
              Show More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Work;
