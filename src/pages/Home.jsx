import React from "react";

const Home = () => {
  return (
    <div className="w-full mx-auto flex justify-center items-center h-full px-2 mt-10">
      <div className="w-[1200px] md:h-[500px] md:flex mt-8  md:items-center md:justify-center">
        <div className="md:w-4/5 flex flex-col gap-4 justify-start items-start w-full md:px-5 text-3xl md:text-6xl font-bold text-white leading-12">
          <h1>Hi, I'm Honey</h1>
          <h1>a Front-End Developer</h1>

          <p className="text-sm pt-4 font-light leading-7">
            I am an expert in web-based enterprise solutions such as planning
            tools, calendars, task trackers, project management boards, data
            visualization, and so on. My area of expertise is frontend
            development, but I also have a good understanding of backend
            development with nodeJs. I have extensive experience working with
            both vanilla Javascript (ES6) and modern libraries frameworks such
            as React.js and Angular.
          </p>
          <button className="border-2 border-[#f8ce6d] text-white text-sm mt-5 animate-bounce px-4 py-2 rounded-2xl hover:bg-white hover:text-[#f8ce6d]">
            <a href="/about">About Me</a>
          </button>
        </div>

        <div className="invisible md:visible w-1/5 md:flex md:justify-center md:-center ">
          <div>
            <p className="h-4 w-4 rounded-full bg-white "></p>
          </div>
          <div className="border-l-4 border-white h-4">
            <p>.</p>
          </div>
          <div>
            <p className="h-4 w-4 rounded-full bg-white "></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
