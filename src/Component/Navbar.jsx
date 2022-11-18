import React, { useState } from "react";

import { MenuIcon } from "../utils/MenuIcon";
import { FaHome } from "react-icons/fa";
import { FcAbout, FcContacts } from "react-icons/fc";
import { GrProjects } from "react-icons/gr";

const Navbar = () => {
  // Toggle Menu
  const [menu, setMenu] = useState(false);

  const handleToggleMenu = () => {
    return setMenu(!menu);
  };

  return (
    <div className="relative w-full flex justify-center h-16 px-2">
      <div className="flex justify-between items-center text-white w-full md:w-[1200px]  border-b-2 border-white">
        <div className=" md:ml-8 font-semibold text-[#f8ce6d] text-2xl w-1/3">
          <span></span> Honey's
        </div>

        <div className=" invisible md:visible md:flex  md:justify-around items-center md:gap-5  w-2/5 font-medium">
          <a href="/" className="flex items-center justify-center gap-1">
            <span className="text-[#f8ce6d] ">
              <FaHome />
            </span>
            <p className=" hover:text-[#f8ce6d]">Home</p>
          </a>

          <a href="/about" className="flex items-center justify-center gap-1">
            <span className="text-[#f8ce6d]">
              <FcAbout />
            </span>
            <p className=" hover:text-[#f8ce6d]">About</p>
          </a>

          <a
            href="/projects"
            className="flex items-center justify-center gap-1"
          >
            <span className="text-[#f8ce6d]">
              <GrProjects />
            </span>
            <p className=" hover:text-[#f8ce6d]">Projects</p>
          </a>

          <a href="/contact" className="flex items-center justify-center gap-1">
            <span className="text-[#f8ce6d]">
              <FcContacts />
            </span>
            <p className=" hover:text-[#f8ce6d]">Contact</p>
          </a>
        </div>

        <div
          className="visible md:invisible md:hidden w-1/3 flex justify-end items-end"
          onClick={handleToggleMenu}
        >
          <MenuIcon />
          {menu ? (
            <div className="absolute w-full  bg-white text-[#34353a] top-12 left-0 flex flex-col z-10">
              <div className="divide-y">
                <a href="/">
                  <p className="p-2 hover:text-[#f8ce6d] hover:bg-black">
                    Home
                  </p>
                </a>

                <a href="/about">
                  <p className="p-2 hover:text-[#f8ce6d]  hover:bg-black">
                    About
                  </p>
                </a>

                <a href="/projects">
                  <p className="p-2 hover:text-[#f8ce6d]  hover:bg-black">
                    Project
                  </p>
                </a>

                <a href="/contact">
                  <p className="p-2 hover:text-[#f8ce6d]  hover:bg-black">
                    Contact
                  </p>
                </a>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
