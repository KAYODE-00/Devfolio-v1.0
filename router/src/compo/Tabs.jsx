import { Link } from "react-router-dom";

function Tabs(props) {
  return (
    <div className="">
      {" "}
      <div className="hidden md:block xl:block lg:block ">
        <div className=" flex items-center ">
          <Link to="/">
            <div
              className={`hover:text-gray-100 transition-all duration-200  h-[100%] text-gray-100/30 border-r-[0.5px] border-[#141313] pl-4 cursor-pointer flex  items-center justify-center gap-3   px-10 py-[9px]`}
            >
              <button  >
                <i className="devicon-html5-plain colored mr-2 "></i>
                Home.html
              </button>
            </div>
          </Link>

          <Link to="/About">
            <button className="h-[100%] hover:text-gray-100 transition-all duration-200  border-r-[0.5px] border-[#141313] pl-4 cursor-pointer text-gray-100/30 px-10 py-[9px]">
              <i className="devicon-css3-plain colored mr-2 "></i>
              About.css
            </button>
          </Link>
          <Link to="/Contacts">
            <button className="h-[100%] hover:text-gray-100 transition-all duration-200  border-r-[0.5px] border-[#141313] pl-4 cursor-pointer text-gray-100/30 px-10 py-[9px]">
              <i className="devicon-react-original colored text-1xl pr-2"></i>{" "}
              Contact.jsx
            </button>
          </Link>
          <Link to="/Projects">
            <button className="h-[100%]  border-r-[0.5px] border-[#141313] pl-4 cursor-pointer hover:text-gray-100 transition-all duration-200  text-gray-100/30 px-10 py-[9px]">
              <i className="devicon-javascript-plain colored mr-2 "></i>
              Projects.js
            </button>
          </Link>
        </div>
        <div className="bg-[#171616] h-70px ">
          {<p className=" opacity-0">.</p>}{" "}
        </div>
      </div>{" "}
    </div>
  );
}

export default Tabs;
