"use client";
import React, { useState } from "react";
import ThemeSwitcher from "../utils/ThemeSwitcher";
import Link from "next/link";
import { motion } from "framer-motion";
import "./Layout.css";
import { usePathname } from "next/navigation";
import { greeting } from "../data";

const Header = () => {
  const [open, setOpen] = useState<boolean>(false);

  const toggleHandler = () => {
    setOpen(!open);
  };

  const path = usePathname();

  return (
    <motion.div
      whileInView={{ y: 0, opacity: 1 }}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      // className='sticky top-0'
    >
      <header className="w-full lg:h-20 md:h-20 block ">
        <div className="lg:flex md:flex items-center justify-between h-full max-w-[90%] md:max-w-[95%] mx-auto mt-2 lg:mt-1">
          <div className="flex items-center h-full justify-between">
            {/* Logo */}
            <Link
              href={"/"}
              className="px-2 text-[1.5rem] lg:text-[1.75rem] font-bold text-light-text dark:text-dark-text select-none"
            >
              {greeting.logo_name}
            </Link>

            {/* <input className='hidden menu-btn' type="checkbox" id='menu-btn' /> */}
            {/* Menu Button Mobile Screen */}

            <label
              onClick={toggleHandler}
              className="menu-icon lg:hidden md:hidden sm:block"
              htmlFor="menu-btn"
            >
              <span
                className={`navicon ${
                  open
                    ? "after:rotate-45 before:-rotate-45 bg-transparent after:top-0 before:top-0"
                    : "bg-[#fb1056] after:top-[-5px] before:top-[5px]"
                }`}
              ></span>
            </label>
          </div>

          <div
            className={`lg:flex md:flex  ${
              open
                ? "sm:h-[370px] ease-in-out duration-200 transition-all"
                : "sm:h-0 hidden"
            }`}
          >
            <ul
              className={`flex items-center ${
                open && "flex-col"
              } md:flex-row lg:flex-row`}
            >
              <li className="text-lg text-light-text dark:text-dark-text select-none font-medium">
                <Link
                  href={"/"}
                  className={`transition-all duration-200 ease-in-out 
                                            mx-1 my-2 px-5 py-2 rounded-[5px] block hover:shadow-md hover:text-white hover:bg-[#2ab0ee] hover:shadow-[#2ab0ee]
                                            ${path === "/" ? "font-bold" : ""}`}
                >
                  {"Home"}
                </Link>
              </li>

              <li className="text-lg text-light-text dark:text-dark-text select-none font-medium">
                <Link
                  href={"/education"}
                  className={`transition-all duration-200 ease-in-out mx-1 my-2 px-5 py-2 rounded-[5px] block hover:shadow-md hover:text-white hover:bg-[#d946ef] hover:shadow-[#d946ef] ${
                    path === "/education" ? "font-bold" : ""
                  }`}
                >
                  {"Education"}
                </Link>
              </li>

              <li className="text-lg text-light-text dark:text-dark-text select-none font-medium">
                <Link
                  href={"/experience"}
                  className={`transition-all duration-200 ease-in-out mx-1 my-2 px-5 py-2 rounded-[5px] block hover:shadow-md hover:text-white hover:bg-[#f7b908] hover:shadow-[#f7b908] ${
                    path === "/experience" ? "font-bold" : ""
                  }`}
                >
                  {"Experience"}
                </Link>
              </li>

              <li className="text-lg text-light-text dark:text-dark-text select-none font-medium">
                <Link
                  href={"/projects"}
                  className={`transition-all duration-200 ease-in-out mx-1 my-2 px-5 py-2 rounded-[5px] block hover:shadow-md hover:text-white hover:bg-[#e44160] hover:shadow-[#e44160] ${
                    path === "/projects" ? "font-bold" : ""
                  }`}
                >
                  {"Projects"}
                </Link>
              </li>

              <li className="text-lg text-light-text dark:text-dark-text select-none font-medium">
                <Link
                  href={"/contact"}
                  className={`transition-all duration-200 ease-in-out mx-1 my-2 px-5 py-2 rounded-[5px] block hover:shadow-md hover:text-white hover:bg-[#47a148] hover:shadow-[#47a148] ${
                    path === "/contact" ? "font-bold" : ""
                  }`}
                >
                  {"Contact"}
                </Link>
              </li>

              {/* Button Theme Toggle */}
              <div className="h-[45px] min-w-[45px] ml-4 md:ml1 rounded-[50%] border-none justify-center flex items-center transition-all duration-200 ease-in-out bg-[#7CD1F7] dark:bg-[#292C3F] hover:shadow-md dark:hover:shadow-[#646464] hover:shadow-[#F7D774] cursor-pointer float-right">
                <ThemeSwitcher />
              </div>
            </ul>
          </div>
        </div>
      </header>
    </motion.div>
  );
};

export default Header;
