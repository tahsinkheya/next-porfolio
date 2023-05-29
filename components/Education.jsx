import { education } from "@component/constants";
const Education = () => {
  return (
    <div
      className="grid grid-cols-1  md:grid-cols-5 md:px-10 md:py-9 md:pt-20 md:gap-5 py-3 pt-3 px-6"
      id="education"
    >
      <div className="col-span-1"> </div>
      <div className="bg-black-700 text-white font-poppins   md:grid col-span-3 py-7">
        <h1 className="sm:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 pb-5 to-pink-300 text-5xl ">
          Education
        </h1>{" "}
        <ol class="relative border-l border-gray-200 dark:border-gray-700">
          {education.map((item, i) => (
            <li class="mb-10 ml-6" key={i}>
              <span class="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                <img
                  // class="rounded-full shadow-lg"
                  // alt="Thomas Lean image"
                  src={item.imgLink}
                />
              </span>
              <div class="p-4 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-700 dark:border-gray-600">
                <div class="items-center justify-between mb-3 sm:flex">
                  <div class="text-sm font-normal text-gray-500 lex dark:text-gray-300">
                    <a
                      href={item.link}
                      class="font-semibold text-gray-900 dark:text-white hover:underline"
                    >
                      {item.name}
                    </a>
                    <p>{item.timeline}</p>
                    <p className="p-2 font-bold text-blue-900">
                      {" "}
                      {item.results}
                    </p>
                  </div>
                </div>
                <div class="p-3 text-xs italic font-normal text-gray-500 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-600 dark:border-gray-500 dark:text-gray-300">
                  {item.details}{" "}
                </div>
              </div>
            </li>
          ))}
          {/* <li class="ml-6">
            <span class="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
              <img
                class="rounded-full shadow-lg"
                src="/docs/images/people/profile-picture-1.jpg"
                alt="Jese Leos image"
              />
            </span>
            <div class="items-center justify-between p-4 bg-white border border-gray-200 rounded-lg shadow-sm sm:flex dark:bg-gray-700 dark:border-gray-600">
              <time class="mb-1 text-xs font-normal text-gray-400 sm:order-last sm:mb-0">
                1 day ago
              </time>
              <div class="text-sm font-normal text-gray-500 lex dark:text-gray-300">
                Jese Leos has changed{" "}
                <a
                  href="#"
                  class="font-semibold text-blue-600 dark:text-blue-500 hover:underline"
                >
                  Pricing page
                </a>{" "}
                task status to{" "}
                <span class="font-semibold text-gray-900 dark:text-white">
                  Finished
                </span>
              </div>
            </div>
          </li> */}
        </ol>
      </div>
    </div>
  );
};

export default Education;
