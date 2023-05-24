import { RoughNotation, RoughNotationGroup } from "react-rough-notation";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.min.css";
const About = () => {
  return (
    <ScrollAnimation animateIn="animate__fadeIn">
      <div
        className="grid grid-cols-1  md:grid-cols-5 md:px-10 md:py-9 md:pt-20 md:gap-5 py-3 pt-3 px-6"
        id="about"
      >
        <div className="col-span-1"> </div>
        <div className="bg-black-700 text-white font-poppins  justify-center md:grid place-items-center col-span-2">
          <h1 className="sm:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-pink-300 text-5xl ">
            Hi there! My name is Kheya.
          </h1>
          <p className="py-5 sm:text-2xl text-xl ">
            <RoughNotationGroup show={window.innerWidth < 1060 ? false : true}>
              I take pleasure in crafting{" "}
              {/* <RoughNotation type="highlight" color="#a86561" order="1"> */}
              uncomplicated yet elegant {/* </RoughNotation>{" "} */}
              creations for both business and individual use. I'm constantly
              looking for opportunities to apply my expertise in{" "}
              <RoughNotation type="highlight" color="#c09591" order="2">
                web development
              </RoughNotation>{" "}
              to produce visually appealing and{" "}
              <RoughNotation type="highlight" color="#55BEC0" order="3">
                user-friendly
              </RoughNotation>
            </RoughNotationGroup>{" "}
            applications and websites. In my free time, I like to play Genshin
            Impact, watch movies, and doodle.
          </p>
        </div>
        <div className=" grid place-items-center md:grid place-items-left ">
          <img
            src={
              "https://s3.brilliant.com.bd/tahsin/kheyaPortfolio/458e13e8-d868-4e04-a592-1d789ad89e56.jpeg"
            }
            className="h-[450px] w-[330px] rounded-lg"
          />
        </div>
      </div>
    </ScrollAnimation>
  );
};

export default About;
