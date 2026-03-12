import { document } from 'postcss';
import React, { useEffect, useState } from 'react'
import { MdLightMode } from "react-icons/md";


const DarkMode =()=> {
    const[ theme ,setTheme] = useState("light-theme");
    const toggleTheme = ()=>{

        if(theme ==="dark-theme"){
            setTheme("light-theme");

        } else{
            setTheme("dark-theme")
        }
    };
    useEffect(() => {
document.body.className = theme;

    },[theme]);

  return (
    <>
       <div onClick={() => toggleTheme() } className=" bg-hedicon/6 p-3 inline-block hover:bg-primary hover:text-white ease-in-out  duration-300 cursor-pointer rounded-full">
                 <MdLightMode />
               </div> 
    
    </>
  )
}

export default DarkMode
