import { RoughNotation, RoughNotationGroup } from "react-rough-notation";
const About = () => {
  return (
    <div className="grid grid-cols-1  md:grid-cols-5 px-10 py-9 pt-20 gap-5">
      <div className="col-span-1"> </div>
      <div className="bg-black-700 text-white font-poppins  justify-center md:grid place-items-center col-span-2">
        <h1 className="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600 ">
          Hi there! My name is Kheya.
        </h1>
        <p className="py-5 text-3xl  ">
          <RoughNotationGroup show={window.innerWidth < 1060 ? false : true}>
            I take pleasure in crafting{" "}
            {/* <RoughNotation type="highlight" color="#a86561" order="1"> */}
            uncomplicated yet elegant
            {/* </RoughNotation>{" "} */}
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
            "https://s3.brilliant.com.bdh/tahsin/kheyaPortfolio/Screenshot_20230314_124420_Instagram.jpg"
          }
          className="h-[400px] w-[312px] rounded-lg"
        />
      </div>
    </div>
  );
};

export default About;
