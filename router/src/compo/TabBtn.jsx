function TabBtn() {

  const hover = () => {
    () => props.setCHpage(true); console.log(props.cHage  )

  return (
          <div className="hidden md:block xl:block lg:block ">
        <div className=" flex items-center ">
          <div onMouseEnter={hover}
            className={` ${
              props.hPage ? "text-gray-100" : "text-gray-100/30"
            } h-[100%]  border-r-[0.5px] border-[#141313] pl-4 cursor-pointer flex  items-center justify-center gap-3   px-10 py-[9px]`}
          >
            <button
              onClick={() => props.setHpage(true)} className="cursor-pointer "
             
            >
              <i className="devicon-html5-plain colored mr-2 "></i>
              Home.html
            </button>
{props.cHage ? 
<button className="bg-[#ff0707] w-6 h-7 flex items-center  justify-center rounded-[8px]">


          <i onClick={() => set} className="bx bx-x">.
          </i> </button> : null}
          </div>

          <button className="h-[100%]  border-r-[0.5px] border-[#141313] pl-4 cursor-pointer text-gray-100/30 px-10 py-[9px]">
            <i className="devicon-css3-plain colored mr-2 "></i>
            About.css
          </button>

          <button className="h-[100%]  border-r-[0.5px] border-[#141313] pl-4 cursor-pointer text-gray-100/30 px-10 py-[9px]">
            <i className="devicon-react-original colored text-1xl pr-2"></i>{" "}
            Contact.jsx
          </button>

          <button className="h-[100%]  border-r-[0.5px] border-[#141313] pl-4 cursor-pointer text-gray-100/30 px-10 py-[9px]">
            <i className="devicon-javascript-plain colored mr-2 "></i>
            Projects.js
          </button>
        </div>
        <div className="bg-[#171616] h-70px ">
          {<p className=" opacity-0">.</p>}{" "}
        </div>
      </div>
  );
}}

export default TabBtn;
