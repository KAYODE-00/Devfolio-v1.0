import { useState } from "react";
import { data } from "../compo/data";

export default function Projects(props) {
  const [ind, setInd] = useState(0);
  const [proj, setProj] = useState(data[ind]);

  const handNextProj = () => {
    if (ind > 6) {
      setInd(0);
    } else {
      setInd((p) => p + 1);
      setProj(data[ind]);
    }
  };
  const handPrevProj = () => {
    if (ind < 1) {
      setInd(7);
    } else {
      setInd((p) => p - 1);
      setProj(data[ind]);
    }
  };
  return (
    <> 
      <div
        className={`flex flex-col  place-self-center  md:mt-20 mt-20 w-full mb-20 text-gray-400/50 px-5 md:px-23`}
      >
        <span className="md:mb-10 mb-5 flex flex-col gap-3">
          <h2 className="text-gray-400/50 break-words">
            //Here is collection of projects i've built using
            HTML,CSS,JAVASCRIPT,REACT,TAILWIND,FIGMA and WORDPRESS.
          </h2>
          <h2 className="text-gray-400/50">
            //Each projects focuses on solving real-world problems,enhancing
            user experience, or improving workflow efficiency.
          </h2>
        </span>
        <h1 className="  text-3xl md:-mb-15 mb-8  place-self-center text-gray-300 border-b-3 w-30">{proj.title}</h1>
        
        <div className="flex md:flex-row flex-col items-center gap-5">
          
          <div className=" flex flex-col gap-3">

            <div className="md:hidden place-self-center h-50 w-55  flex flex-col justify-end gap-3">
              <img src={proj.img} alt="" className="h-45" />
              <button className="bg-[#1a1a1a] border-[1px] text-[0.9rem] px-3 py-1 rounded-4xl 
            md:text-[1rem] cursor-pointer shadow-gray-800 place-self-center w-55">preview</button>
            </div>

            <h2 className="md:-mt-30 ">{proj.text} </h2>
          </div>

          <img
            src={proj.img}
            alt=""
            className="hidden md:block  -mr-15 md:h-95"
          />
        </div>
        <button
          className="hidden md:block bg-[#1a1a1a] border-[1px] text-[0.9rem] px-3 py-1 rounded-4xl 
            md:text-[1rem] cursor-pointer shadow-gray-800 place-self-center w-55"
        >
          Preview
        </button>
        <div className="flex flex-col items-center justify-center md:gap-3 mt-5 mb-3">
          <p className="text-gray-300 ">
            {ind + 1} of {data.length}
          </p>
          <div className=" flex flex-row items-center gap-5 md:gap-15">
            <button onClick={handPrevProj} className="bg-[#131313] flex items-center justify-center h-8 w-8  md:h-10 md:w-10 shadow-gray-800 shadow px-2 rounded-full">
          <i className='bx bx-chevron-left text-3xl'></i>

            </button>{" "}
            <button onClick={handNextProj} className="bg-[#131313] flex items-center justify-center h-8 w-8  md:h-10 md:w-10 shadow-gray-800 shadow px-2 rounded-full">
    <i className='bx bx-chevron-right text-3xl'></i>

            </button>
          </div>
        </div>
      </div>

      {/* {imh} */}
    </>
  );
}
