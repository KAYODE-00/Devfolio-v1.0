import React from "react";

function About(props) {
  return (
    <>
      <div className="place-self-center  w-full break-word text-xs md:text-sm lg:text-base xl:text-lg px-5 md:px-23 ">
        <div
          className={`  text-[#706c6cb3] ml-3 mt-10 md:mt-25 flex flex-col gap-5  `}
        >
          <div className="">
            <div className="mb-4 text-[0.7rem] md:text-[1rem] md:mb-2 text-gray-300  md:w-55">
              &#123;/* About Me*/&#125;
            </div>

            <div className="-ml-1   flex flex-col items-center ">
              <p className=" text-xs md:text-sm lg:text-base xl:text-lg flex flex-col mb-2">
                Hi, I'm Kayode a pasionate Frontend Developer who loves turning
                ideas into interactive user interfaces. I craft seamless and
                responsive web experiences, interactive websites with HTML, CSS,
                JavaScript, React & Tailwind. I also design with Figma and
                create functional sites using WordPress templates.
                <span className="md:mt-3 mt-1">
                  {" "}
                  My code might not win beauty contest yet - but it works, and
                  it keeps getting better.{" "}
                </span>
              </p>
            </div>
          </div>{" "}
          <div className="">
            <div className="mb-4 text-[0.7rem] md:text-[1rem] md:mb-2 text-gray-300  md:w-55">
              &#123;/* Personality */&#125;
            </div>

            <div className="-ml-1   flex flex-col  ">
              <p className=" text-xs md:text-sm lg:text-base xl:text-lg  mb-2">
                When I'm not coding, i enjoy exploring new UI inspirations,
                learning web3 trends, or thinking about side projects tht could
                become startups.
              </p>
            </div>
          </div>
          <div className="">
            <div className="mb-4 text-[0.7rem] md:text-[1rem] md:mb-2 text-gray-300  md:w-45">
              &#123;/* What i do */&#125;
            </div>

            <div className="-ml-1   flex flex-col ">
              <p
                className={` text-xs md:text-sm lg:text-base xl:text-lg  mb-2 flex flex-col `}
              >
                <span>-Build responsive and accessible websites</span>
                <span>-Turn Figma designs into functional pages</span>
                <span>-Use Wordpress to create dynamic websites.</span>
              </p>
            </div>
          </div>{" "}
          <div className="flex md: flex-col md:flex-row justify-center gap-5 md:gap-30">
            <div className="">
              <div className="mb-4 text-[0.7rem] md:text-[1rem] md:mb-2 text-gray-300  md:w-55">
                &#123;/* SKILLS */&#125;
              </div>
              <div className="flex  flex-col  text-xs md:text-sm lg:text-base xl:text-lg">
                <p className="">
                  {" "}
                  <i className="devicon-html5-plain colored mr-2 "></i>HTML
                </p>
                <p className="">
                  {" "}
                  <i className="devicon-css3-plain colored mr-2 "></i>CSS
                </p>
                <p className="">
                  {" "}
                  <i className="devicon-javascript-plain colored mr-2 "></i>
                  JAVASCRIPT
                </p>
                <p className="">
                  {" "}
                  <i className="devicon-react-original colored mr-2 "></i>
                  REACT
                </p>
                <p className="">
                  {" "}
                  <i className="devicon-tailwindcss-original colored mr-2 "></i>
                  TAILWIND
                </p>
              
                  {" "}
                  <p className=" flex items-center">
                    {" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-4 h-4 mr-2"
                      viewBox="0 0 128 128"
                    >
                      <path
                        fill="#0acf83"
                        d="M45.5 129c11.9 0 21.5-9.6 21.5-21.5V86H45.5C33.6 86 24 95.6 24 107.5S33.6 129 45.5 129zm0 0"
                      />
                      <path
                        fill="#a259ff"
                        d="M24 64.5C24 52.6 33.6 43 45.5 43H67v43H45.5C33.6 86 24 76.4 24 64.5zm0 0"
                      />
                      <path
                        fill="#f24e1e"
                        d="M24 21.5C24 9.6 33.6 0 45.5 0H67v43H45.5C33.6 43 24 33.4 24 21.5zm0 0"
                      />
                      <path
                        fill="#ff7262"
                        d="M67 0h21.5C100.4 0 110 9.6 110 21.5S100.4 43 88.5 43H67zm0 0"
                      />
                      <path
                        fill="#1abcfe"
                        d="M110 64.5c0 11.9-9.6 21.5-21.5 21.5S67 76.4 67 64.5 76.6 43 88.5 43 110 52.6 110 64.5zm0 0"
                      />
                    </svg>
                   
              
                  UI/UX
                </p>
                <p className="">
                  {" "}
                  <i className="devicon-wordpress-plain text-blue-300 mr-2 "></i>
                  NO CODE WEB DEVELOPMENT
                </p>
              </div>
            </div>
            <div className="">
              <div className="mb-4 text-[0.7rem] md:text-[1rem] md:mb-2 text-gray-300  md:w-55">
                &#123;/* Tools */&#125;
              </div>{" "}
              <div className="flex  flex-col  text-xs md:text-sm lg:text-base xl:text-lg">
                <p className="">
                  {" "}
                  <i className="devicon-git-plain mr-2  text-orange-600"></i>
                  GIT
                </p>
                <p className="">
                  {" "}
                  <i className="devicon-github-plain mr-2 text-white"></i>
                  GITHUB
                </p>
                <p className="">
                  {" "}
                  <i className="devicon-visualstudio-plain  mr-2 text-blue-400 "></i>
                  VSCODE
                </p>
                <p className=" flex items-center">
                  {" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4 h-4 mr-2"
                    viewBox="0 0 128 128"
                  >
                    <path
                      fill="#0acf83"
                      d="M45.5 129c11.9 0 21.5-9.6 21.5-21.5V86H45.5C33.6 86 24 95.6 24 107.5S33.6 129 45.5 129zm0 0"
                    />
                    <path
                      fill="#a259ff"
                      d="M24 64.5C24 52.6 33.6 43 45.5 43H67v43H45.5C33.6 86 24 76.4 24 64.5zm0 0"
                    />
                    <path
                      fill="#f24e1e"
                      d="M24 21.5C24 9.6 33.6 0 45.5 0H67v43H45.5C33.6 43 24 33.4 24 21.5zm0 0"
                    />
                    <path
                      fill="#ff7262"
                      d="M67 0h21.5C100.4 0 110 9.6 110 21.5S100.4 43 88.5 43H67zm0 0"
                    />
                    <path
                      fill="#1abcfe"
                      d="M110 64.5c0 11.9-9.6 21.5-21.5 21.5S67 76.4 67 64.5 76.6 43 88.5 43 110 52.6 110 64.5zm0 0"
                    />
                  </svg>
                  FIGMA
                </p>
                <p className="">
                  {" "}
                  <i className="devicon-wordpress-plain text-blue-300 mr-2 "></i>
                  WORDPRESS
                </p>
                <p className="">
                  {" "}
                  <i className="devicon-vercel-original colored mr-2 "></i>
                  VERCEL
                </p>
              </div>
            </div>
            <div className="-ml-1  md:-mb-3 flex flex-col  "></div>
          </div>{" "}
          <div className="">
            <div className="mb-4 text-[0.7rem] md:text-[1rem] md:mb-2 text-gray-300  md:w-55">
              &#123;/* My approach */&#125;
            </div>{" "}
            <div className="-ml-1  md:-mb-3 flex flex-col  ">
              <p className=" text-xs md:text-sm lg:text-base xl:text-lg md:w-[750px] flex flex-col md:  md:gap-2 mb-2">
                <span className="">-Functional Ui </span>
                <span className="">-Mobile-first </span>{" "}
                <span className="">-Constatntly learning </span>{" "}
                <span className="">-Always exploring </span>{" "}
              </p>
            </div>
          </div>{" "}
        </div>
      </div>

      {/* {imh} */}
    </>
  );
}

export default About;

//      <div
//        className="flex  flex-row-reverse bg-green-400 -ml-1   w-35
//  md:w-80 rounded-3xl md:h-[12px]  h-[5px]"
//      >
//        <div className="bg-[#1e1e1ee4]   float-right text-[0.3rem] md:text-[0.7rem] text-white pl-1">
//          {" "}
//          96%{" "}
//        </div>
//      </div>
