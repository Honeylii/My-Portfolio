import React from "react";
import FileSaver from "file-saver";

import {
  FaFacebook,
  FaTwitterSquare,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";
import { useState } from "react";

const Contact = () => {
  const [input, setInput] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInput = (e) => {
    const { name, value } = e.target;

    setInput((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(input);
    setInput({
      name: "",
      email: "",
      message: "",
    });
  };

  const saveFile = () => {
    FileSaver.saveAs(
      process.env.REACT_APP_CLIENT_URL + "/resources/cv.pdf",
      "MyCV.pdf"
    );
  };

  return (
    <div>
      <div className="w-full md:flex md:justify-center md:items-center px-2 ">
        <div className="md:w-[1200px] md:h-screen md:flex md:justify-center md:items-center my-10">
          <div className="flex justify-center md:items-start gap-7 flex-col md:w-1/4 px-3 mb-4 ">
            <h1 className="font-bold text-4xl text-white">
              <span className="p-2 bg-white text-black ">Contact</span> Me
            </h1>

            <p className="text-white text-lg">
              <span>📌</span> oriadeoxy@gmail.com
            </p>
            <p className="text-white text-lg">
              <span>📌</span> 08100308556
            </p>

            <div className="flex items-center justify-start text-3xl gap-3 ">
              <div className=" bg-white px-1 py-1 md:p-2 rounded-2xl">
                <FaFacebook />
              </div>

              <div className=" bg-white px-1 py-1 md:p-2 rounded-2xl">
                <FaTwitterSquare />
              </div>
              <div className=" bg-white px-1 py-1 md:p-2 rounded-2xl">
                <FaInstagram />
              </div>
              <div className=" bg-white px-1 py-1 md:p-2 rounded-2xl">
                <a
                  href={`https://inkedin.com/in/olamide-honey-oriade-550338227`}
                >
                  <FaLinkedin />
                </a>
              </div>
            </div>

            <button
              className="border-2 border-[#f8ce6d]  bg-white px-2 py-2 rounded-full"
              onClick={saveFile}
            >
              Download CV
            </button>
          </div>

          <div className="md:w-2/4 flex flex-col justify-center items-center">
            <form
              onSubmit={handleSubmit}
              className="w-full flex flex-col justify-center items-start gap-4"
            >
              <div className="w-full">
                <input
                  value={input.name}
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  className="w-full px-2 py-2"
                  onChange={handleInput}
                />
              </div>
              <div className="w-full">
                <input
                  value={input.email}
                  type="text"
                  name="email"
                  placeholder="Your Name"
                  className="w-full px-2 py-2"
                  onChange={handleInput}
                />
              </div>
              <div className="w-full">
                <textarea
                  name="message"
                  value={input.message}
                  cols="30"
                  rows="10"
                  className="px-2 py-3 w-full"
                  placeholder="Your Message"
                  onChange={handleInput}
                ></textarea>
              </div>

              <button
                type="submit"
                className="border-2 border-[#f8ce6d] text-xl bg-white px-5 py-2 rounded-full"
                onClick={handleSubmit}
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
