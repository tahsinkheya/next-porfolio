import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { navLinks } from "../constants";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="sticky top-0 z-50">
      <nav
        id="home"
        className={
          "w-full flex py-2 justify-between items-center bg-black-500 px-6"
        }
      >
        <img
          src="https://s3.brilliant.com.bd/tahsin/kheyaPortfolio/tk.png"
          alt="Logo"
          width="50"
          height="50"
          style={{ cursor: "pointer" }}
          // className="cursor-pointer w-[100px] h-[100px] items-center hover:scale-105 ease-in duration-300"
        />
        <ul className="list-none sm:flex hidden justify-end items-center flex-1">
          {navLinks.map((nav, index) => (
            <li
              key={nav.id}
              className={`font-poppins font-normal cursor-pointer text-[16px] text-white hover:text-secondary ease-in duration-300 hover:text-lg ${
                index === navLinks.length - 1 ? "mr-0" : "mr-10"
              }`}
            >
              {nav.link === "" ? (
                // <a>{nav.title}</a>""

                ""
              ) : (
                <a href={`#${nav.id}`}>{nav.title}</a>
              )}
            </li>
          ))}
        </ul>
        <div className="sm:hidden flex flex-1 justify-end items-center">
          {" "}
          {!toggle ? (
            <AiOutlineMenu
              className="w-[28px] h-[28px] object-contain text-white"
              onClick={() => setToggle(!toggle)}
            />
          ) : (
            <AiOutlineClose
              className="w-[28px] h-[28px] object-contain text-white"
              onClick={() => setToggle(!toggle)}
            />
          )}
          <div
            className={`${
              toggle ? "flex" : "hidden"
            } p-6 absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl bg-orange-600`}
            style={{ backgroundColor: "black" }}
          >
            <ul className="list-none justify-end items-center flex-1">
              {navLinks.map((nav, index) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-normal cursor-pointer text-[16px] text-white hover:text-cyan ${
                    index === navLinks.length - 1 ? "mb-0" : "mb-4"
                  }`}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
