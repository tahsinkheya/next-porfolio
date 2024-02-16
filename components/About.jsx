import { RoughNotation, RoughNotationGroup } from "react-rough-notation";
// import ScrollAnimation from "react-animate-on-scroll";
// import newimagek from "../assets/newimagek.jpeg"ßßß
// import newimagek from '../assets/newimagek.jpeg'
// import newimagek from '../../next-porfolio/assets/newimagek.jpeg'
import "animate.css/animate.min.css";
// import TahsibRes from "../assets/TahsinResume"
const About = () => {
  return (
    // <ScrollAnimation animateIn="animate__fadeIn">
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
          {/* <RoughNotationGroup show={window.innerWidth < 1060 ? false : true}> */}
            {/* I take pleasure in crafting{" "} */}
            {/* <RoughNotation type="highlight" color="#a86561" order="1"> */}
            {/* uncomplicated yet elegant */}
             {/* </RoughNotation>{" "} */}
            {/* creations for both business and individual use. */}
            I am a researcher, currently working on AI/ML bias. My goal is to develop tools to detect and mitigate bias in real-world applications.
            From my standpoint, technology should be equitable and inclusive. I'm enthusiatic about contributing in this area to make it a reality.
             Moreover I am a passionate front-end engineer who is constantly
            looking for opportunities to apply my expertise in{" "}
            {/* <RoughNotation type="highlight" color="#c09591" order="2"> */}
              web development
            {/* </RoughNotation>{" "} */}
            to produce visually appealing and{" "}
            {/* <RoughNotation type="highlight" color="#55BEC0" order="3"> */}
              user-friendly
            {/* </RoughNotation> */}
          {/* </RoughNotationGroup>{" "} */}
          applications and websites. In my free time, I like to play Genshin
          Impact, watch movies, and doodle .
        </p>
        <a
          href=""
          download="TahsinAlamgirKheya.pdf"
          target="_blank"
          className="bg-transparent text-center hover:bg-cyan-700 text-cyan-400 w-[200px] font-semibold hover:text-white py-2 px-4 border border-cyan-400 hover:border-transparent rounded"
        >
          Resume
        </a>
      </div>
      <div className=" grid place-items-center md:grid place-items-left ">
        <div className="bg-transparent">

      <iframe src="https://drive.google.com/file/d/1xTxEwdaWWwrCWbgh3imWOnCQWaH-g0ke/preview" width="300" height="325" className="rounded-full bg-transparent" ></iframe>

        </div>
      {/* <img src="https://drive.google.com/uc?id=1xTxEwdaWWwrCWbgh3imWOnCQWaH-g0ke" alt="Description of the image"/> */}
      {/* // "https://s3.brilliant.com.bd/tahsin/kheyaPortfolio/WhatsApp%20Image%202023-05-28%20at%209.46.19%20AM.jpeg"

          // className="h-[370px] w-[400px] rounded-full" */}
          {/* /> */}

      
       
            
        
      </div>
    </div>
    // </ScrollAnimation>
  );
};

export default About;
