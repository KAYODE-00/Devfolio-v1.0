import React, { useState } from "react";
import { ContactUs } from "./ContactUs";

export default function Contact() {
  return (
    <>
      <div className="flex flex-col items-center md:mt-20 mt-10  mb-10 md:mb-10 px-5 md:px-35 lg:px-29 xl:px-39  2xl:px-2 max-h-screen w-full">
        <div className="text-[#706c6cb3] flex flex-col gap-4">
          // I'm currently open to freelance projects, collaborations, or job
          opportunities.{" "}
          <span>// Feel free to reach out if you have something in mind.</span>
        </div>

        <div className="md:w-150 w-55 md:h-95 h-80 pt-10 pb-3 mt-5 gap-4 bg-[#00000067] rounded-xl text-gray-200 flex flex-col  px-20 items-center justify-center ">
          <span className=" text-base md:-mt-15 -mt-5  md:text-xl flex items-center justify-center lg:text-2xl xl:text-3xl md:w-50 w-30">
            Contact Dev
          </span>
          <div className="flex md:flex-row flex-col items-center justify-center md:gap-15 gap-3.5">
            <section className="flex flex-col   items-center ">
              <ContactUs />
            </section>

            <div className="md:-mt-10 flex md:flex-col gap-5 place-self-center">
              <a href="https://www.linkedin.com/in/abdulwahab-kayode-b99a10337/">
                <button className="cursor-pointer  w-4 h-4 mr-2 md:w-5 md:h-5">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128">
                    <path
                      fill="#0076b2"
                      d="M116 3H12a8.91 8.91 0 00-9 8.8v104.42a8.91 8.91 0 009 8.78h104a8.93 8.93 0 009-8.81V11.77A8.93 8.93 0 00116 3z"
                    />
                    <path
                      fill="#fff"
                      d="M21.06 48.73h18.11V107H21.06zm9.06-29a10.5 10.5 0 11-10.5 10.49 10.5 10.5 0 0110.5-10.49M50.53 48.73h17.36v8h.24c2.42-4.58 8.32-9.41 17.13-9.41C103.6 47.28 107 59.35 107 75v32H88.89V78.65c0-6.75-.12-15.44-9.41-15.44s-10.87 7.36-10.87 15V107H50.53z"
                    />
                  </svg>
                </button>
              </a>
              <a href="https://x.com/Liw_Kay">
                <button className="cursor-pointer  w-4 h-4 mr-2 md:w-5 md:h-5 ">
                  <img src="xicon.png" alt="" />
                </button>
              </a>
              <a href="http://github.com/KAYODE-00">
                {" "}
                <button className="cursor-pointer flex items-center justify-center md:text-xl ">
                  <i className="devicon-github-original hover:text-gray-100"></i>
                </button>{" "}
              </a>

              <a href="https://www.instagram.com/ka_yode_00/">
                {" "}
                <button className="cursor-pointer  w-4 h-4 mr-2 md:w-5 md:h-5">
                  <img src="pngegg.png" alt="" />
                </button>{" "}
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
