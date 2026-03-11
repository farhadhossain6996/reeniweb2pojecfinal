import { FaInstagram ,FaLinkedinIn,FaTwitter,FaFacebookF} from "react-icons/fa";
import { HiMenu } from "react-icons/hi";
import { CiMenuFries } from "react-icons/ci";
import Container from '../Container';
import Logo from '/src/assets/Logo.png';
import { useState } from "react";
import { IoClose } from "react-icons/io5";


const Header =  () => {
    const[isOpen,setIsOpen] =useState(false);
const toggleMenu = () => {
    setIsOpen(!isOpen);
};
    
  return (
    <div className='bg-header py-5 fixed w-full z-50'> 
    <Container>
<div className="flex items-center justify-between">

    <div className="">
        <img src={Logo} />

    </div>
{/* //Mobile Device Start  */}
{!isOpen && (
    <div onClick={toggleMenu}  className="cursor-pointer  text-primary lg:hidden">
        <HiMenu  size={30}/>
    </div>
)}

{isOpen && (
    <div onClick={toggleMenu}  className="cursor-pointer  lg:hidden z-20 text-primary">
        <IoClose  size={30}/>
    </div>
)}
{isOpen ?(
       <div className=" w-full bg-header overflow-hidden fixed z-10 left-0 top-[10%] duration-300 ease-in-out ">
<ul className=' text-base font-bold font-rajdhani  flex justify-center items-center flex-col gap-x-10 my-4 '>
        <li className="hover:text-primary duration-300 ease-in-out cursor-pointer">Home</li>
        <li className="hover:text-primary duration-300 ease-in-out cursor-pointer">About</li>
        <li className="hover:text-primary duration-300 ease-in-out cursor-pointer">Services</li>
        <li className="hover:text-primary duration-300 ease-in-out cursor-pointer">Blog</li>
        <li className="hover:text-primary duration-300 ease-in-out cursor-pointer">Project</li>
        <li className="hover:text-primary duration-300 ease-in-out cursor-pointer">Contact</li>
    </ul>

</div>

):(
<div className="bg-gray-800 overflow-hidden fixed z-10 left-[-150%] top-0 duration-300 ease-in-out
text-base font-bold font-rajdhani  flex justify-center items-center flex-col gap-x-10"></div>
)}




{/* //Mobile Device END  */}


<div className="lg:block hidden">
    <ul className=' text-base font-bold font-rajdhani flex  items-center gap-x-8'>
        <li className="hover:text-primary duration-300 ease-in-out cursor-pointer">Home</li>
        <li className="hover:text-primary duration-300 ease-in-out cursor-pointer">About</li>
        <li className="hover:text-primary duration-300 ease-in-out cursor-pointer">Services</li>
        <li className="hover:text-primary duration-300 ease-in-out cursor-pointer">Blog</li>
        <li className="hover:text-primary duration-300 ease-in-out cursor-pointer">Project</li>
        <li className="hover:text-primary duration-300 ease-in-out cursor-pointer">Contact</li>
    </ul>
</div>
<div className=" lg:flex items-center gap-x-2  hidden ">
<div className="bg-hedicon/6 p-3 inline-block hover:bg-primary hover:text-white ease-in-out  duration-300 cursor-pointer rounded-full">
<FaInstagram  />
</div>
<div className="bg-hedicon/6 p-3 inline-block hover:bg-primary hover:text-white ease-in-out  duration-300 cursor-pointer rounded-full">
<FaLinkedinIn />
</div>
<div className="bg-hedicon/6 p-3 inline-block hover:bg-primary hover:text-white ease-in-out  duration-300 cursor-pointer rounded-full">
<FaTwitter />
</div>
<div className="bg-hedicon/6 p-3 inline-block hover:bg-primary hover:text-white ease-in-out  duration-300 cursor-pointer rounded-full">
<FaFacebookF  />
</div>
<div className="bg-primary p-[13.5px] rounded-full gap-x-6">
<CiMenuFries className='w-3.5 h-3.5 text-white font-bold'/>
</div>

</div>

</div>

    </Container>
    
    </div>
  )
}
export default Header;

