import { testimonials } from "@component/constants";
import { Swiper, SwiperSlide } from "swiper/react";
import { useState } from "react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";
// import "./common/testimonial.css";
import { EffectCoverflow, Pagination } from "swiper/modules";
const Testimonial = () => {
  const [swiper, setSwiper] = useState(null);

  return (
    <div
      className="grid grid-cols-1  md:grid-cols-5 md:px-10 md:py-9 md:pt-20 md:gap-5 py-3 pt-3 px-6 "
      id="testimonial"
    >
      <div className="col-span-1"> </div>
      <div className="bg-black-700 text-white font-poppins   md:grid col-span-3 py-7 relative z-10">
        <h1 className="sm:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 pb-5 to-pink-300 text-5xl ">
          Testimonials
        </h1>{" "}
        <div className="absolute top-1/2 left-0 transform -translate-y-1 z-20 ">
          <div className="">
            <div
              className="bg-cyan-400 p-5 w-[50px] cursor-pointer"
              onClick={() => {
                try {
                  swiper.slidePrev();
                } catch (err) {}
              }}
            >
              <svg
                data-accordion-icon
                class="w-6 h-6 rotate-90 shrink-0"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M14.707 12.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L10 14.586l3.293-3.293a1 1 0 011.414 0z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </div>
          </div>
        </div>
        <div className="absolute top-1/2 right-0 transform -translate-y-1 z-20">
          <div className="">
            <div
              className="bg-cyan-400 p-5 w-[50px] cursor-pointer"
              onClick={() => {
                if (!swiper.slideNext()) {
                  swiper.slideTo(0);
                } else {
                  //   swiper.slideNext();
                }
              }}
            >
              <svg
                data-accordion-icon
                className="w-6 h-6 rotate-90 transform transition-transform duration-300 ease-in-out scale-y-[-1]"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </div>
          </div>
        </div>
        <Swiper
          initialSlide={0}
          onSwiper={(swiperInstance) => setSwiper(swiperInstance)} // Set swiper when it's initialized
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          modules={[Pagination]}
          className="mySwiper"
        >
          {" "}
          {testimonials.map((item, key) => (
            <SwiperSlide>
              <div className="p-3">
                <div className="testimonial">
                  <div className=" flex justify-center items-center">
                    <div className="bg-inherit border-[4px] rounded-br-3xl p-10 justify-center items-center flex flex-col align-stretch">
                      <img
                        src="https://s3.brilliant.com.bd/tahsin/kheyaPortfolio/quote.png"
                        className="w-[100px]"
                      />
                      <div className="pt-4">
                        <p className="text-white text-xl p-4">{item.text}</p>
                        <div className="flex flex-col justify-center items-center pt-5">
                          {" "}
                          <a
                            href={item.linkedIn}
                            target="_blank"
                            className="text-white text-xl font-extrabold  hover:text-cyan-400 hover:underline"
                          >
                            {item.name}
                          </a>
                          <p className="text-white italic">{item.position}</p>
                          <a
                            href={item.workLink}
                            target="_blank"
                            className="text-white font-bold hover:text-cyan-400 hover:underline"
                          >
                            {" "}
                            {item.company}
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <img
                    src={allProducDets[item].imgLink}
                    style={{
                      width: "60vw",
                      height: "45vh",
                    }}
                  /> */}
                </div>
                {/* <Typography variant="overline" style={{ fontSize: "2rem" }}>
                  {allProducDets[item].name}
                </Typography>

                <Typography
                  variant="subtitle1"
                  style={{
                    color: current == key ? colors.base : colors.grayBanner,
                  }}
                >
                  {allProducDets[1].subtitle}
                </Typography> */}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonial;
