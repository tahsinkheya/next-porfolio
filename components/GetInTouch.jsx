import React from "react";

function GetInTouch() {
  return (
    <div
      className="grid grid-cols-1  md:grid-cols-5 md:px-10 md:py-9 md:pt-20 md:gap-5 py-1 pt-3 px-6"
      id="contact"
    >
      <div className="col-span-1"> </div>
      <div className="bg-black-700 text-white font-poppins   md:grid col-span-3 py-7">
        <h1 className="sm:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 pb-5 to-pink-300 text-5xl ">
          Get In Touch
        </h1>{" "}
        <div className=" flex flex-col justify-center items-center">
          <p className="py-5 sm:text-2xl text-xl">
            My inbox is always open. If you have any questions or want to say
            hi, just email me 😊.
          </p>
          <button
            onClick={() => {
              document.location = "mailto:" + "tahsinkheya@gmail.com";
            }}
            className="bg-transparent text-center hover:bg-cyan-700 text-cyan-400 w-[200px] font-semibold hover:text-white py-2 px-4 border border-cyan-400 hover:border-transparent rounded"
          >
            Contact Me
          </button>
        </div>
        {/* <img src="https://s3.brilliant.com.bd/tahsin/kheyaPortfolio/WhatsApp%20Image%202023-05-25%20at%2010.20.11%20AM.jpeg" /> */}
      </div>
    </div>
  );
}

export default GetInTouch;
