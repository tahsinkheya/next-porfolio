import { experience } from "@component/constants";
const Experience = () => {
  return (
    <div className="grid grid-cols-1  md:grid-cols-5 px-10 py-2 pt-10 gap-5">
      <div className="col-span-1"> </div>
      <div className="bg-black-700 text-white font-poppins   md:grid col-span-3 py-5">
        <h1 className="text-6xl place-items-left font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600 ">
          Places I have worked
        </h1>{" "}
        <ol class="items sm:flex py-10">
          {experience.map((item, i) => (
            <li class="relative mb-6 sm:mb-0">
              <div class="flex items-center">
                <div class="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                  <svg
                    aria-hidden="true"
                    class="w-3 h-3 text-blue-800 dark:text-blue-300"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </div>
                <div class="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
              </div>
              <div class="mt-3 sm:pr-8">
                <h3
                  class="text-lg font-semibold text-white-900 cursor-pointer"
                  onClick={() => {
                    window.open(item.link, "_blank");
                  }}
                >
                  {item.name}
                </h3>
                <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                  {item.position}
                  <p>{item.timeline}</p>
                </time>
                <p class="text-base font-normal text-gray-500 dark:text-gray-400">
                  {item.details}
                </p>
              </div>
            </li>
          ))}
          {/* <li class="relative mb-6 sm:mb-0">
            <div class="flex items-center">
              <div class="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                <svg
                  aria-hidden="true"
                  class="w-3 h-3 text-blue-800 dark:text-blue-300"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </div>
              <div class="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
            </div>
            <div class="mt-3 sm:pr-8">
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                Flowbite Library v1.2.0
              </h3>
              <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                Released on December 23, 2021
              </time>
              <p class="text-base font-normal text-gray-500 dark:text-gray-400">
                Get started with dozens of web components and interactive
                elements.
              </p>
            </div>
          </li>
          <li class="relative mb-6 sm:mb-0">
            <div class="flex items-center">
              <div class="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                <svg
                  aria-hidden="true"
                  class="w-3 h-3 text-blue-800 dark:text-blue-300"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </div>
              <div class="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
            </div>
            <div class="mt-3 sm:pr-8">
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                Flowbite Library v1.3.0
              </h3>
              <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                Released on January 5, 2022
              </time>
              <p class="text-base font-normal text-gray-500 dark:text-gray-400">
                Get started with dozens of web components and interactive
                elements.
              </p>
            </div> */}
          {/* </li> */}
        </ol>
      </div>
    </div>
  );
};

export default Experience;
