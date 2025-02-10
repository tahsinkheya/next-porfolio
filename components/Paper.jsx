import React from "react";
import { papers } from "@component/constants";
// import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.min.css";
function Work() {
  const [num, setNum] = React.useState(3);
  return (
    <div>
      {" "}
      <div
        className="grid grid-cols-1  md:grid-cols-5 md:px-10 md:py-9 md:pt-20 md:gap-5 py-3 pt-3 px-6"
        id="paper"
      >
        <div className="col-span-1"> </div>
        <div className="bg-black-700 text-white font-poppins   md:grid col-span-3 py-3">
          {" "}
          <h1 className="sm:text-6xl font-extrabold text-transparent pb-6 bg-clip-text bg-gradient-to-r from-cyan-400 to-pink-300 text-5xl ">
            My Research Journey
          </h1>
          {papers.map((item, i) => (
            <>
              <ul class="space-y-4 text-white text-2xl list-disc list-inside dark:text-white">
                <li>
                  {item.name}
                  <ol class="">
                    <li class="text-lg">{item.conf}</li>
                    <li>
                      <p
                        class="text-gray-500 dark:text-white text-right flex flex-row items-start justify-end pb-1
                    "
                      >
                        <a
                          onClick={() => {
                            window.open(item.link, "_blank");
                          }}
                          class="inline-flex items-center font-medium text-cyan-300  hover:underline pt-3 cursor-pointer"
                        >
                          View
                          {/* <svg
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
                          </svg> */}
                        </a>
                      </p>
                    </li>
                  </ol>
                </li>
              </ul>
            </>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Work;
