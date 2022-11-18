import React from "react";
// import { useState } from "react";

const Projects = () => {
  //   const [show, setShow] = useState({
  //     firstProject: false,
  //     secondProject: false,
  //   });

  //   const handleOverlay = (name) => {
  //     setShow((prev) => {
  //       return { ...prev, [name]: !show[name] };
  //     });
  //     console.log(show);
  //   };

  const data = [
    {
      year: "Oct 2022 - Present",
      role: "Front-End Developer - ReactJS",
      team: "Sport-Go",
      details:
        "As an Integration System engineer, I successfully worked on the platform performance through thorough analysis, quality assurance checks and extensive testing. Also, documented project status, reports, and delays. Bridged the gap between developers and business advisors and clients to provide better products that matter. I also provided technical support to vendors and customers, ensuring I escalate platform related issues using tools like trello to allocate tasks and monitor the progress.As an Integration System engineer, I successfully worked on the platform performance through thorough analysis, quality assurance checks and extensive testing. Also, documented project status, reports, and delays. Bridged the gap between developers and business advisors and clients to provide better products that matter. I also provided technical support to vendors and customers, ensuring I escalate platform related issues using tools like trello to allocate tasks and monitor the progress.",
    },

    {
      year: "Sep 2021 - Feb 2022",
      role: "Junior Software Engineer / JavaScript Developer",
      team: "Alpha Team Hackgon",
      details:
        "Created and supported administrative web applications using JavaScript. Analyze code for system testing and debugging, create test transactions to find, isolate, and resolve issues. Implemented best practices to JavaScript codebase, developed new functionality",
    },
    {
      year: "Jan 2021 - Apr 2021",
      role: "Internship / web Developer",
      team: "Side- Hustle",
      details:
        "Completed internship concurrent with education in software engineering and architectural design. Sharing ideas and identifying new platform features and fixes that needed to be implemented, while engaging and supporting the development team in the implementation of such features or fixes. ",
    },
  ];
  let exp = data.map((exp, i) => {
    return (
      <div
        key={i}
        className="flex justify-start gap-5 items-start p-2 text-white text-sm"
      >
        <div className="w-1/4">
          <p>{exp.year}</p>
        </div>

        <div className="w-3/4 flex flex-col justify-center items-start gap-3">
          <h1>
            <span className="pr-3 text-[#f8ce6d]"> ☀</span>
            {exp.role}
          </h1>
          <h2 className="px-1 pl-4 border-l-4 border-white">{exp.team}</h2>
          <p className=" px-1 pl-4 border-l-4 border-white">{exp.details}</p>
        </div>
      </div>
    );
  });

  return (
    <div className="w-full md:flex md:justify-center md:items-center px-2 ">
      <div className="md:w-[1200px] mt-5">
        <div>
          <h1 className=" md:px-7 text-2xl text-white hover:text-[#f8ce6d]  font-semibold italic">
            Experience
          </h1>
          <div className="w-full flex-col flex justify-center items-center mt-8">
            <div className="md:w-[800px]">
              <section className="flex flex-col justify-start items-start gap-8">
                {exp}
              </section>
            </div>
          </div>
        </div>

        {/* PortFolio */}

        <div className="mb-6 mt-9 p-2">
          <h1 className=" md:px-7 text-2xl text-white hover:text-[#f8ce6d]  font-semibold italic mb-4">
            Portfolio
          </h1>

          {/* SECTION */}
          <section className="w-full md:justify-center md:items-center md:flex flex justify-center items-center flex-col h-auto mb-5 gap-4">
            <div className="w-2/4 h-full relative ">
              <img
                alt="first-site"
                src="/img/Capture.PNG"
                className={`object-cover `}
              />
            </div>

            <div className="w-2/4 h-full border-l-2 border-[#f8ce6d] mt-3 pl-4 flex flex-col gap-3 text-white">
              <h1 className="text-xl text-[#f8ce6d]"> ☀ WorkOut Buddy 🌟</h1>
              <p></p>
              <p>
                Framework used : <span>HTML , JavaScript</span>{" "}
              </p>
              <p className="flex flex-col justify-start items-start">
                <span>
                  I successfully designed a web banking app platform to factor
                  in well-integrated banking transactions, bridge the gap, and
                  improve transaction speed
                </span>
                <span>
                  Implementing proper logic chart for proper functionality and
                  interaction.
                </span>
                <span>Designed with object orientation concept</span>
              </p>
            </div>
          </section>

          {/* 2 */}
          <section className="w-full md:justify-center md:items-center md:flex flex justify-center items-center flex-col h-auto mt-10 mb-5 gap-4 ">
            <div className="w-2/4 h-full relative ">
              <img
                src="/img/website.JPG"
                alt="first-site"
                className={`object-cover `}
              />
            </div>

            <div className="w-2/4 h-full border-l-2 border-[#f8ce6d] mt-3 pl-4 flex flex-col gap-3 text-white">
              <h1 className="text-xl text-[#f8ce6d] "> ☀ WorkOut Buddy 🌟</h1>
              <p>
                This is a website that keep tract of your workout activities.
              </p>
              <p>
                Framework used : <span>ReactJS & NodeJs</span>{" "}
              </p>
            </div>
          </section>

          {/* 3 */}
          <section className="w-full md:justify-center md:items-center md:flex flex justify-center items-center flex-col h-auto mt-10 mb-5 gap-4 ">
            <div className="w-2/4 h-full relative ">
              <img
                src="/img/Maptie.JPG"
                alt="first-site"
                className={`object-cover `}
              />
            </div>

            <div className="w-2/4 h-full border-l-2 border-[#f8ce6d] mt-3 pl-4 flex flex-col gap-3 text-white">
              <h1 className="text-xl text-[#f8ce6d] ">
                {" "}
                ☀ Matify Web Application 🌟
              </h1>
              <div>
                <p> Integrating API application to track user coordinate.</p>

                <p>
                  Executing the programming activities and product design
                  consisting of multiple modules and subsystems.
                </p>

                <p>
                  Developed with a concept of object orientation programming.{" "}
                </p>
                <p>Implemented with software development standards in mind.</p>
              </div>
              <p>
                Framework used : <span>Vanila JavaScript</span>{" "}
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Projects;
