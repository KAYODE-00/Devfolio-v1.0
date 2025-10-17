
import { useEffect, useState } from "react";
import Devfolio from "./compo/Devfolio";


function App() {

  const [darkM, setDarkM] = useState(true)

  useEffect(() => {
    darkM ? document.documentElement.classList.add('dark') : 
    document.documentElement.classList.remove('dark')
  })

  const bgTog = () => {
    setDarkM(p => !p)
  }
 
  return (
    <>
      <div className=" min-h-screen w-full bg-[#f5f5f5] dark:bg-[#1e1e1e] transition-colors duration-300 ease-in-out">
      <Devfolio bgTog={bgTog} darkM={darkM}/>
   
      </div>
   
    </>
  );
}

export default App;
