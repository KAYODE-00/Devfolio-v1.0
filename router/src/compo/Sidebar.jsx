import { useState } from "react";
import { Link } from "react-router-dom";


export default function Sidebar(props) {
  const [menu2, setMenu2] = useState(false);
  const [menu, setMenu] = useState(true);
  const [menu3, setMenu3] = useState(false);

  const togPages = () => {
    setMenu3((p) => !p);
  };

  const open = () => {
    props.setIsOpen((p) => !p);
    setMenu2(!menu2);
  };
  const togDevfolio = () => {
    setMenu2((p) => !p);
  };

  const toggleMenu = () => {
    setMenu((p) => !p);
  };

  return (
    <div className="">
      <div className="fixed  mt-5 pl-5 md:hidden xl:hidden lg:hidden 2xl:hidden sm:block">
        <button onClick={toggleMenu} className="cursor-pointer">
          <i className="bx bx-menu text-3xl text-gray-200 hover:text-gray-400"></i>
        </button>
      </div>

      <div className="fixed  md:hidden xl:hidden lg:hidden 2xl:hidden sm:block">
        {menu ? (
          <div className=" fixed  flex-row w-[250px] min-h-screen ">
            <div
              className={`absolute -z-50 dark:bg-black w-[60px] flex  flex-col items-center  text-gray-100/50 py-[10px]`}
            >
              <div className="flex flex-col items-center gap-[600px] h-[100vh]">
                <div>
                  <button>
                    <i className="bx bx-sun text-4xl transition-colors text-gray-200 hover:text-gray-400"></i>
                  </button>
                </div>
              </div>
            </div>
            <div
              className={` ml-[-30px] absolute -z-50 flex-row w-[250px] min-h-screen border 
                bg-[#171616]  border-black  
                  `}
            >
              <div className=" mt-5 pl-13 ">
                <button onClick={toggleMenu}>
                  <i className="bx bx-x text-3xl text-gray-200 hover:text-gray-400"></i>
                </button>
              </div>
              <div className="flex flex-col items-center  ml-[-25px] mt-15">
                <div className="flex flex-col items-center ml-[7px] mt-[3px] justify-center">
                  <span className=" text-[0.8rem]  text-gray-100 mt-[-10px] mb-[10px] ml-[-20px]">
                    HEllO WORLD
                  </span>
                  <div
                    onClick={togDevfolio}
                    className="flex items-center justify-center ml-[-45px] h-[30px] cursor-pointer
                 bg-[#1e1e1e] w-[310px] text-[0.9rem] text-gray-100 transition-all duration-300 ease-in-out"
                  >
                    <i
                      className={`codicon codicon-chevron-${
                        menu2 ? `right` : `down`
                      } : text-gray-100/50`}
                      style={{ fontSize: "1.3rem" }}
                    ></i>{" "}
                    <button className="cursor-pointer">DEVFOLIO</button>
                  </div>{" "}
                  <div
                    className={` transition-all duration-100 ${
                      menu2 ? `h-[200px]` : `h-0`
                    } overflow-hidden ease-in-out`}
                  >
                    {" "}
                    {menu2 ? (
                      <div
                        className="text-gray-100  pl-[80px] w-[265px] 
           "
                      >
                        <div
                          onClick={togPages}
                          className="ml-[-33px] pl-[35px] w-[270px]  flex items-center hover:bg-[#1e1e1eba]"
                        >
                          <i
                            className={`codicon codicon-chevron-${
                              !menu3 || menu2 ? `right` : `down`
                            }  text-gray-100/50`}
                            style={{ fontSize: "1.3rem" }}
                          ></i>{" "}
                          <button className="cursor-pointer ">Pages</button>
                        </div>
                        <div className="ml-[-80px]">
                          <div
                            className={` transition-all duration-100 ${
                              !menu3 ? `h-[100px]` : `h-0`
                            } overflow-hidden ease-in-out`}
                          >
                            <div
                              className={` transition-all duration-100 ${
                                !menu3 ? `h-[100px]` : `h-0`
                              } overflow-hidden ease-in-out`}
                            >
                              <div
                                className="flex items-center w-[265px] cursor-pointer  text-1xl pl-[100px] pr-2 
                   text-[#ffffffc9] hover:bg-[#1e1e1eba] "
                              >
                                <i className="devicon-html5-plain colored mr-2 "></i>
                                <button onClick={() => props.setHpage(true)} className=" cursor-pointer  ">
                                  <Link to="/">Home.html</Link>
                                </button>
                              </div>
                              <div
                                className="flex items-center w-[265px] cursor-pointer  text-1xl pl-[100px] pr-2 
                   text-[#ffffffc9] hover:bg-[#1e1e1eba]"
                              >
                                <i className="devicon-css3-plain colored mr-2 "></i>
                                <button onClick={() => props.setApage(true)}  className="cursor-pointer   ">
                                  <Link to="/About">About.css</Link>
                                </button>
                              </div>{" "}
                              <div
                                className="flex items-center w-[265px] text-1xl pl-[100px] pr-2 
                   text-[#ffffffc9] hover:bg-[#1e1e1eba]"
                              >
                                <i className="devicon-javascript-plain colored mr-2 "></i>
                                <button onClick={() => props.setPpage(true)}  className=" cursor-pointer  ">
                                  <Link to="/Projects">Projects.js</Link>
                                </button>
                              </div>
                              <div
                                className="flex items-center w-[265px] text-1xl pl-[100px] cursor-pointer pr-2 
                                     text-[#ffffffc9] hover:bg-[#1e1e1eba]"
                              >
                                <i className="devicon-react-original colored mr-2 "></i>
                                <button onClick={() => props.setCpage(true)}  className=" cursor-pointer  ">
                                  <Link to="/contacts">contacts.jsx</Link>
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ) : null}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : null}
      </div>

      <div
        className={` ${
          props.isOpen ? `md:w-[270px] ` : `md:w-[60px]`
        } hidden md:block  fixed    min-h-screen  dark:bg-[#171616]  dark:border-black  border-2  `}
      >
        <div className="flex ">
          <div
            className={` ${
              props.isOpen ? `w-[270px] ` : `w-[60px]`
            }  z-1 min-h-screen `}
          >
            {" "}
            <div className="min-h-screen w-[60px]   dark:border-black  border-2 dark:bg-black text-gray-100/50">
              {" "}
              <div className="flex flex-col items-center mt-5 gap-[600px] h-[100vh]">
                <div className="flex flex-col items-center">
                  <button
                    className="mt-1 cursor-pointer flex flex-col items-center "
                    onClick={open}
                  >
                    <i
                      className="codicon codicon-files hover:text-gray-100"
                      style={{ fontSize: "1.8rem" }}
                    ></i>
                  </button>
                  <Link to="/About">
                    {" "}
                    <button className="cursor-pointer mt-7">
                      <i
                        className="bx bx-info-circle hover:text-gray-100"
                        style={{ fontSize: "1.9rem" }}
                      ></i>
                    </button>
                  </Link>{" "}
                  <a
                    href="http://github.com/KAYODE-00

"
                  >
                    {" "}
                    <button className="cursor-pointer mt-7">
                      <i
                        className="devicon-github-original hover:text-gray-100"
                        style={{ fontSize: "1.9rem" }}
                      ></i>
                    </button>{" "}
                  </a>
                  <Link to="/Projects">
                    <button className="cursor-pointer mt-7">
                      <i
                        className="bx bx-code-alt hover:text-gray-100"
                        style={{ fontSize: "1.9rem" }}
                      ></i>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div
            className={` ${props.isOpen ? `  mt-11 -ml-20  ` : `hidden`}
        `}
          >
            <div className="flex  flex-col items-center ml-[3px] mt-[3px] justify-center">
              <span className=" text-[0.8rem]  text-gray-100 mt-[-10px] mb-[10px] ml-[-20px]">
                HEllO WORLD
              </span>
              <div
                onClick={togDevfolio}
                className="flex items-center justify-center ml-[-45px] h-[30px] cursor-pointer
               bg-[#1e1e1e] w-[310px] text-[0.9rem] text-gray-100 transition-all duration-300 ease-in-out"
              >
                <i
                  className={`codicon codicon-chevron-${
                    menu2 ? `right` : `down`
                  } : text-gray-100/50`}
                  style={{ fontSize: "1.3rem" }}
                ></i>{" "}
                <button className="cursor-pointer">DEVFOLIO</button>
              </div>{" "}
              <div
                className={` transition-all duration-100 ${
                  !menu2 ? `h-[200px]` : `h-0`
                } overflow-hidden ease-in-out`}
              >
                {" "}
                {!menu2 ? (
                  <div
                    className="text-gray-100  pl-[80px] w-[265px]
         "
                  >
                    <div
                      onClick={togPages}
                      className="ml-[-25px] pl-[20px] w-[270px]  flex items-center hover:bg-[#1e1e1eba]"
                    >
                      <i
                        className={`codicon codicon-chevron-${
                          !menu3 || menu2 ? `right` : `down`
                        }  text-gray-100/50`}
                        style={{ fontSize: "1.3rem" }}
                      ></i>{" "}
                      <button className="cursor-pointer ">Pages</button>
                    </div>
                    <div className="ml-[-80px]">
                      <div
                        className={` transition-all duration-100 ${
                          !menu3 ? `h-[100px]` : `h-0`
                        } overflow-hidden ease-in-out`}
                      >
                        <div
                          className={` transition-all duration-100 ${
                            !menu3 ? `h-[100px]` : `h-0`
                          } overflow-hidden ease-in-out`}
                        >
                          <div
                            className="flex items-center w-[265px] cursor-pointer  text-1xl pl-[100px] pr-2
                 text-[#ffffffc9] hover:bg-[#1e1e1eba] "
                          >
                            <i className="devicon-html5-plain colored mr-2 "></i>
                            <button onClick={() => props.setHpage(!props.hPage)}  className=" cursor-pointer  ">
                              <Link to="/">Home.html</Link>
                            </button>
                          </div>
                          <div
                            className="flex items-center w-[265px] cursor-pointer  text-1xl pl-[100px] pr-2
                 text-[#ffffffc9] hover:bg-[#1e1e1eba]"
                          >
                            <i className="devicon-css3-plain colored mr-2 "></i>
                            <button onClick={() => props.setApage(!props.aPage)}  className="cursor-pointer   ">
                              <Link to="/About">About.css</Link>
                            </button>
                          </div>{" "}
                          <div
                            className="flex items-center w-[265px] text-1xl pl-[100px] pr-2
                 text-[#ffffffc9] hover:bg-[#1e1e1eba]"
                          >
                            <i className="devicon-javascript-plain colored mr-2 "></i>
                            <button onClick={() => props.setPpage(!props.pPage)}  className=" cursor-pointer  ">
                              <Link to="/Projects">Projects.js</Link>
                            </button>
                          </div>
                          <div
                            className="flex items-center w-[265px] text-1xl pl-[100px] cursor-pointer pr-2
                                   text-[#ffffffc9] hover:bg-[#1e1e1eba]"
                          >
                            <i className="devicon-react-original colored mr-2 "></i>
                            <button onClick={() => props.setCpage(!props.cPage)}  className=" cursor-pointer  ">
                              <Link to="/contacts">contacts.jsx</Link>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

//  <div className="hidden md:block  fixed  flex-row  w-[250px] min-h-screen ">
//       <div
//         className={`absolute  bg-black w-[60px] flex  flex-row items-center justify-between text-gray-100/50 py-[10px]`}
//       >
// <div className="flex flex-col items-center gap-[600px] h-[100vh]">
//   <div className="flex flex-col items-center">
//     <button
//       className="mt-1  flex flex-col items-center "
//       onClick={open}
//     >
//       <i
//         className="codicon codicon-files hover:text-gray-100"
//         style={{ fontSize: "1.8rem" }}
//       ></i>
//     </button>
//     <button className="cursor-pointer mt-7">
//       <i
//         className="bx bx-info-circle hover:text-gray-100"
//         style={{ fontSize: "1.9rem" }}
//       ></i>
//     </button>
//     <button className="cursor-pointer mt-7">
//       <i
//         className="devicon-github-original hover:text-gray-100"
//         style={{ fontSize: "1.9rem" }}
//       ></i>
//     </button>
//     <button className="cursor-pointer mt-7">
//       <i
//         className="bx bx-code-alt hover:text-gray-100"
//         style={{ fontSize: "1.9rem" }}
//       ></i>
//     </button>
//   </div>

//   <div className=" " onClick={props.bgTog}>
//     <button className="cursor-pointer">
//       <i
//         className={
//           props.darkM ? `bx bx-sun text-4xl` : `bx bx-moon text-4xl`
//         }
//       ></i>
//     </button>
//   </div>
// </div>
//       </div>
//       <div
//         className={`  absolute -z-1  flex-row min-h-screen border ml-[20px]
//               dark:bg-[#171616]  dark:border-black    ${
//                 props.isOpen
//                   ? `   w-[250px] `
//                   : ` -ml-100`
//               }    `}
//       >
//         <div
//           className={
//             props.isOpen
//               ? `flex flex-col items-center ml-[-25px] mt-5`
//               : `hidden`
//           }
//         >
//           <div className="flex  flex-col items-center ml-[7px] mt-[3px] justify-center">
//             <span className=" text-[0.8rem]  text-gray-100 mt-[-10px] mb-[10px] ml-[-20px]">
//               HEllO WORLD
//             </span>
//             <div
//               onClick={togDevfolio}
//               className="flex items-center justify-center ml-[-45px] h-[30px] cursor-pointer
//                bg-[#1e1e1e] w-[310px] text-[0.9rem] text-gray-100 transition-all duration-300 ease-in-out"
//             >
//               <i
//                 className={`codicon codicon-chevron-${
//                   menu2 ? `right` : `down`
//                 } : text-gray-100/50`}
//                 style={{ fontSize: "1.3rem" }}
//               ></i>{" "}
//               <button className="cursor-pointer">DEVFOLIO</button>
//             </div>{" "}
//             <div
//               className={` transition-all duration-100 ${
//                 !menu2 ? `h-[200px]` : `h-0`
//               } overflow-hidden ease-in-out`}
//             >
//               {" "}
//               {!menu2 ? (
//                 <div
//                   className="text-gray-100  pl-[80px] w-[265px]
//          "
//                 >
//                   <div
//                     onClick={togPages}
//                     className="ml-[-25px] pl-[20px] w-[270px]  flex items-center hover:bg-[#1e1e1eba]"
//                   >
//                     <i
//                       className={`codicon codicon-chevron-${
//                         !menu3 || menu2 ? `right` : `down`
//                       }  text-gray-100/50`}
//                       style={{ fontSize: "1.3rem" }}
//                     ></i>{" "}
//                     <button className="cursor-pointer ">Pages</button>
//                   </div>
//                   <div className="ml-[-80px]">
//                     <div
//                       className={` transition-all duration-100 ${
//                         !menu3 ? `h-[100px]` : `h-0`
//                       } overflow-hidden ease-in-out`}
//                     >
//                       <div
//                         className={` transition-all duration-100 ${
//                           !menu3 ? `h-[100px]` : `h-0`
//                         } overflow-hidden ease-in-out`}
//                       >
//                         <div
//                           className="flex items-center w-[265px] cursor-pointer  text-1xl pl-[100px] pr-2
//                  text-[#ffffffc9] hover:bg-[#1e1e1eba] "
//                         >
//                           <i className="devicon-html5-plain colored mr-2 "></i>
//                           <button className=" cursor-pointer  ">
//                             <Link to="/">Home.html</Link>
//                           </button>
//                         </div>
//                         <div
//                           className="flex items-center w-[265px] cursor-pointer  text-1xl pl-[100px] pr-2
//                  text-[#ffffffc9] hover:bg-[#1e1e1eba]"
//                         >
//                           <i className="devicon-css3-plain colored mr-2 "></i>
//                           <button className="cursor-pointer   ">
//                             <Link to="/About">About.css</Link>
//                           </button>
//                         </div>{" "}
//                         <div
//                           className="flex items-center w-[265px] text-1xl pl-[100px] pr-2
//                  text-[#ffffffc9] hover:bg-[#1e1e1eba]"
//                         >
//                           <i className="devicon-javascript-plain colored mr-2 "></i>
//                           <button className=" cursor-pointer  ">
//                             <Link to="/Projects">Projects.js</Link>
//                           </button>
//                         </div>
//                         <div
//                           className="flex items-center w-[265px] text-1xl pl-[100px] cursor-pointer pr-2
//                                    text-[#ffffffc9] hover:bg-[#1e1e1eba]"
//                         >
//                           <i className="devicon-react-original colored mr-2 "></i>
//                           <button className=" cursor-pointer  ">
//                             <Link to="/contacts">contacts.jsx</Link>
//                           </button>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               ) : null}
//             </div>
//           </div>
//         </div>
//         <Menu />
//       </div>
//     </div>
