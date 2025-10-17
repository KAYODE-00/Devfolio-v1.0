function Test(props) {
  const tab = [
    {
      img: "HTML5.svg",
      title: "Home.html",
    },
    {
      img: "CSS3.svg",
      title: "About.css",
    },
    {
      img: "JavaScript.svg",
      title: "Projects.js",
    },
    {
      img: "React.svg",
      title: "Contacts.jsx",
    },
  ];

  const hover = () => {
    () => props.setCHpage(true);
    console.log(props.cHage);
  };
  return (
    <div className="">
      {" "}
      <div className="hidden md:block xl:block lg:block   ">
        {tab.map((item, index) => {
          return (
            <div key={index} className="flex flex-row  p-5 bg-red-700 mb-5 ">
              <div className="flex flex-row w-50 h-5">
              <button className="w-6 h-7 rounded-[8px] flex gap-3 ">
                <img src={item.img} alt="" />{" "}
                <span className="w-5 h-5">{item.title} </span>
              </button>
            </div>
            </div>
          );
        })}
        <div className="bg-[#171616] h-70px ">
          {<p className=" opacity-0">.</p>}{" "}
        </div>
      </div>{" "}
    </div>
  );
}

export default Test;
