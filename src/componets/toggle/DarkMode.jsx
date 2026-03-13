import { useEffect, useState } from "react"
import { IoSunny } from "react-icons/io5";
import { MdDarkMode } from "react-icons/md";



const DarkMode = () => {
    const [darkMode, setDarkMode] = useState(() =>
        localStorage.getItem("theme") === "dark"
    )

    useEffect(() => {
        const root = document.documentElement;
        if (darkMode) {
            root.classList.add("dark")
            localStorage.setItem("theme", "dark")
        } else {
            root.classList.remove("dark")
            localStorage.setItem("theme", "light")
        }
    }, [darkMode])


    return (
        <>
            <div className=" cursor-pointer" onClick={() => setDarkMode((prev) => !prev)}>
                {darkMode ? <div className="p-3.25 bg-[#e6e6e6] text-primary rounded-full duration-300 ease-in-out hover:bg-secondary hover:text-white  ">
                    <MdDarkMode />
                </div> : <div className="p-3.25 bg-[#e6e6e6] text-primary rounded-full duration-300 ease-in-out hover:bg-secondary hover:text-white  ">
                    <IoSunny />
                </div>}

            </div>
        </>
    )
}

export default DarkMode