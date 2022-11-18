import React from "react";
import { DiJavascript1 } from "react-icons/di";
import { FaReact, FaGithub, FaAngular } from "react-icons/fa";
import { BsBootstrap } from "react-icons/bs";
import {
  SiRedux,
  SiMobx,
  SiTailwindcss,
  SiCss3,
  SiTypescript,
} from "react-icons/si";

const About = () => {
  return (
    <div className=" flex justify-center items-center  flex-col">
      <div className="md:w-[1200px] md:flex md:justify-center md:gap-4 px-2  mt-5">
        {/* //////////////// */}
        <div className="md:flex gap-4 flex-grow">
          {/* Left Image */}
          <div className=" md:w-2/5 overflow-hidden rounded-2xl">
            <img
              className="object-cover h-full"
              alt="profile_Image"
              src="/img/img.jpg"
              // src="https://media-exp1.licdn.com/dms/image/C4E03AQEH0Rv3Zilk5Q/profile-displayphoto-shrink_800_800/0/1638623897267?e=1674086400&v=beta&t=pED78KiStBa7rgIaddNAo7ODrZXux0jNy947Lww-Dko"
            />
          </div>

          {/* Right side */}
          <div className="md:w-3/5 flex  flex-col text-white gap-3  px-2 mt-4">
            <h1 className="font-bold text-4xl">About Me</h1>
            <p>
              I'm <span className="text-2xl">Oriade Olamide Ayobami</span> ,
              mostly known as <span className="text-2xl">Honey</span>...
            </p>
            <p className="text-sm">
              I am a front-end developer experienced in developing web
              applications. With excellent design and coding skills, I enjoy
              solving problems and bringing ideas to life. I am a quick learner
              who is always on the lookout for new trends and is eager to learn
              new technologies. I am an excellent communicator, a great team
              player, and have some experience working with small businesses. I
              take the time to thoroughly understand my clients' needs and
              always complete projects on time. I strive to provide affordable,
              high-quality web applications that use best practices and
              cutting-edge technology.
            </p>

            {/* Skill */}
            <div className="mt-5 text-2xl text-[#f8ce6d]">
              <p>SKILL:</p>
            </div>
            <div className="grid grid-cols-5 justify-center items-center gap-3 flex-col w-full md:text-xl text-sm mb-9">
              <div className="w-full flex justify-center items-center flex-col ">
                <DiJavascript1 className="text-2xl bg-white w-12 h-12 rounded-2xl px-2  text-yellow-400" />
                <p>JavaScript</p>
              </div>

              <div className="w-full flex justify-center items-center flex-col ">
                <FaReact className=" bg-white text-blue-700 w-12 h-12 text-2xl rounded-xl px-2" />
                <p>ReactJs</p>
              </div>

              <div className="w-full flex justify-center items-center flex-col  ">
                <SiRedux className=" bg-white text-blue-700 w-12 h-12 text-2xl rounded-xl px-2" />
                <p>Redux</p>
              </div>

              <div className="w-full flex justify-center items-center flex-col ">
                <SiMobx className=" bg-white text-blue-700 w-12 h-12 text-2xl rounded-xl px-2" />
                <p>Mobx</p>
              </div>

              <div className="w-full flex justify-center items-center  flex-col">
                <SiTailwindcss className=" bg-white text-blue-700 w-12 h-12 text-2xl rounded-xl px-2" />
                <p>Tailwind</p>
              </div>

              <div className="w-full flex justify-center items-center flex-col ">
                <SiCss3 className=" bg-white text-blue-700 w-12 h-12 text-2xl rounded-xl px-2" />
                <p>CSS 3</p>
              </div>

              <div className="w-full flex justify-center items-center flex-col ">
                <SiTypescript className=" bg-white text-blue-700 w-12 h-12 text-2xl rounded-xl px-2" />
                <p>TypeScript</p>
              </div>

              <div className="w-full flex justify-center items-center flex-col ">
                <FaGithub className=" bg-white text-blue-700 w-12 h-12 text-2xl rounded-xl px-2" />
                <p>GitHub</p>
              </div>

              <div className="w-full flex justify-center items-center flex-col ">
                <BsBootstrap className=" bg-white text-blue-700 w-12 h-12 text-2xl rounded-xl px-2" />
                <p>Bootstrap</p>
              </div>

              <div className="w-full flex justify-center items-center flex-col ">
                <FaAngular className=" bg-white text-blue-700 w-12 h-12 text-2xl rounded-xl px-2" />
                <p>Angular</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Exprerience */}
    </div>
  );
};

export default About;
