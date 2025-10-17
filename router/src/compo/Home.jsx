import { Link } from "react-router-dom";

function Home(props) {
  return (
    <>
      <div className="flex flex-col items-center  place-self-center md:mb-40 px-5 md:px-35 lg:px-29 xl:px-39 md:mt-10 2xl:px-2  mb-20 max-h-full w-full">
        <div className={` m-15 mb-7 md:mb-17 `}>
          <div
            className={`w-full flex flex-col sm:flex-row md:flex-row  mb-3 items-center gap-3 sm:w-auto `}
          >
            <div className="flex items-center  ">
              <img
                src="profile.jpg"
                className={` rounded-2xl  w-100  md:pb-10  lg:pb-5 xl:pb-3 2xl:pb-1 h-auto`}
                alt=""
              />
            </div>

            <div className="flex items-center gap-2  ">
              <div
                className="flex flex-col   gap-3  items-center 
             text-gray-800 dark:text-gray-100"
              >
                <span
                  className="text-yellow-200  
               text-base md:text-xl lg:text-2xl xl:text-3xl text-center  flex items-center justify-center "
                >
                  <span className="dark:text-gray-100">&lt;</span>
                  <p className="text-red-500">p</p>
                  <span className="dark:text-gray-100">&gt;</span>
                  <span className="">Hi, i'm Kayode a frontend developer</span>
                  <span className="dark:text-gray-100 flex">&lt;/</span>
                  <p className="text-red-500">p</p>
                  <span className="dark:text-gray-100">&gt;</span>
                </span>

                <div className="flex items-center text-center  justify-between gap-1">
                  <p className="text-yellow-200  text-xs md:text-sm lg:text-base xl:text-lg break-words">
                    I build responsive, interactive websites with HTML, CSS,
                    JavaScript, React & Tailwind. I also design with Figma and
                    create functional sites using WordPress templates.
                  </p>
                </div>
                <div className="flex items-center  justify-between gap-1">
                  <div className="bg-green-700 w-1.5 h-1.5 sm:w-2 sm:h-2 md:w-2 md:h-2 rounded-full"></div>
                  <p className="text-yellow-200  text-xs md:text-sm lg:text-base xl:text-lg ">
                    Available for work
                  </p>
                </div>
                <Link to="/Contacts">
                  {" "}
                  <button className="bg-[#1e1e1e] border-[1px] ] px-3 py-1 rounded-4xl  text-[0.5rem] md:text-[1rem] cursor-pointer shadow-gray-800/80 shadow">
                    Get In Touch
                  </button>
                </Link>
              </div>
            </div>
          </div>{" "}
          <div className=" flex flex-row gap-5 place-self-center">
            <a href="https://www.linkedin.com/in/abdulwahab-kayode-b99a10337/">
              <button className="cursor-pointer  w-4 h-4 mr-2 md:w-10 md:h-10">
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
              <button className="cursor-pointer  w-4 h-4 mr-2 md:w-10 md:h-10 ">
                <img src="xicon.png" alt="" />
              </button>
            </a>
            <a href="http://github.com/KAYODE-00">
              {" "}
              <button className="cursor-pointer   w-5 h-5 mr-2 md:w-10 md:h-10">
                <img src="github-6980894.svg" alt="" />{" "}
              </button>{" "}
            </a>

            <a href="https://www.instagram.com/ka_yode_00/">
              {" "}
              <button className="cursor-pointer  w-4 h-4 mr-2 md:w-10 md:h-10">
                <img src="pngegg.png" alt="" />
              </button>{" "}
            </a>
          </div>
        </div>

        <div className={`md:ml-38 flex flex-col  gap-7.5 `}>
          <div className={` md:ml-[-750px] flex flex-col  float-left`}>
            <span
              className={` md:ml-[550px]  text-[0.7rem] md:text-[1rem] mb-1 md:mb-2 cursor-pointer w-19 md:w-26  text-gray-300`}
            >
              <Link to="About">
                {" "}
                <button> /*About*/</button>{" "}
              </Link>
            </span>

            <p
              className={`md:mb-5  md:ml-[550px] text-xs md:text-sm lg:text-base xl:text-lg text-[#706c6cb3] `}
            >
              Hi, I'm Kayode,a passionate Frontend Developer who loves turning
              ideas into interactive user interfaces.....
            </p>
          </div>{" "}
          <div
            className={` md:ml-[-750px] flex flex-col  md:gap-8 gap-5 float-left`}
          >
            <span
              className={`md:ml-[550px]  text-[0.7rem] md:text-[1rem] mb-1 md:mb-2 cursor-pointer w-19 md:w-26 text-gray-300`}
            >
              <Link to="Projects"> /*Projects*/ </Link>
            </span>

            <div
              className={`md:mb-5  md:ml-[550px] flex items-center justify-center gap-5 text-xs md:text-sm lg:text-base xl:text-lg text-[#706c6cb3] `}
            >
              {" "}
              <div className=" place-self-center h-50 w-55  flex flex-col  gap-3">
                <img src="phone.png" alt="" className="h-45" />
                <button
                  className="bg-[#1a1a1a] border-[1px] text-[0.9rem] px-3 py-1 rounded-4xl 
            md:text-[1rem] cursor-pointer shadow-gray-800  w-55"
                >
                  preview
                </button>
              </div>
            </div>
          </div>{" "}
        </div>
      </div>
    </>
  );
}

export default Home;

//  <span className=" text-[0.7rem] md:text-[1rem] mb-1 md:mb-2 cursor-pointer w-19 md:w-26 ">
//       <Link to="About">   /*About*/  </Link>
//       </span>

// <i class='bx bxl-github'></i>       <!-- GitHub -->
// <i class='bx bxl-linkedin'></i>     <!-- LinkedIn -->
// <i class='bx bxl-twitter'></i>      <!-- Twitter / X -->
// <i class='bx bxl-instagram'></i>    <!-- Instagram -->
// <i class='bx bxl-gmail'></i>        <!-- Email -->
