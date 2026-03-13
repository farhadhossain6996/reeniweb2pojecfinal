import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import { MdEmail, MdOutlineEmail } from "react-icons/md";
import Container from '../Container';
import Logo from '/src/assets/Logo.png';

export default function Footer() {
  return (
    <div className=' bg-[#F4F4F4] mt-30 dark:bg-[#141414] '>
<Container>
<div className="py-22.5 lg:flex justify-between items-start">
<div className="lg:w-1/2 w-full">
<div className="">
        <img src={Logo} className='w-30' />
 <h2 className='text-[50px] text-black   font-bold font-rajdhani leading-15 lg:w-[50%] w-full dark:text-white mt-5.5'>Get Ready <span className='font-normal'>To Create Great</span></h2>
<div className=" relative dark:text-white ">
  <input className=' z-20 outline-none border-b border-[#D9DDE0] pb-2.5 w-1/2 mt-10 text-tertiary  ' type="email" placeholder='Email Adress' />
  <MdOutlineEmail className='absolute  right-1/2absolute bottom-4 right-1/2 ' />
</div>

    </div>

</div>
<div className="lg:w-1/2 w-full lg:mt-0 mt-7.5">
    <div className="lg:flex md:flex justify-between items-start">
<div className=" lg:w-1/2 md:w-1/2 w-full">
    <p className=' font-bold font-rajdhani text-[24px] text-black dark:text-white pb-10'> Quick Link</p>
    <ul className=' text-base font-normal font-rubik dark:text-white  space-y-2'>
        <li>About Me</li>
        <li>Services</li>
        <li>Contact Us</li>
        <li>Blog Post</li>
        <li>Pricing</li>
    </ul>
</div>

<div className="lg:w-1/2 md:w-1/2 w-full lg:mt-0 md:mt-0 mt-7.5">
    <div className="space-y-4">

  <div className=" flex items-center gap-x-2 ">
    <div className="text-[20px] p-3 rounded-full  border-3  border-[#D9DDE0] duration-300 hover:scale-110  ease-in-out bg-secondary inline-block cursor-pointer dark:text-white">
        <MdEmail/>
    </div>
        <p className='text-base font-rubik font-normal text-black dark:text-white '> nafiz125@gmail.com</p>
  </div>
  <div className=" flex items-center gap-x-2 ">
    <div className="text-[20px] p-3 rounded-full  border-3  border-[#D9DDE0] duration-300 hover:scale-110  ease-in-out bg-secondary inline-block cursor-pointer dark:text-white">
        <FaLocationDot/>
    </div>
        <p className='text-base font-rubik font-normal text-black  dark:text-white '>3891 Ranchview Dr. Richardson</p>
  </div>
  <div className=" flex items-center gap-x-2 ">
    <div className="text-[20px] p-3 rounded-full  border-3 dark:text-white border-[#D9DDE0] duration-300 hover:scale-110  ease-in-out bg-secondary inline-block cursor-pointer">
        <IoCall/>
    </div>
        <p className='text-base font-rubik font-normal text-black  dark:text-white '>01245789321</p>
  </div>
<div className="flex items-center gap-x-2 pt-7.5 dark:text-white">
    <div className="bg-hedicon/6 p-3 inline-block hover:bg-primary hover:text-white ease-in-out  duration-300 cursor-pointer rounded-full">
<FaInstagram />
</div>
<div className="bg-hedicon/6 p-3 inline-block hover:bg-primary hover:text-white ease-in-out  duration-300 cursor-pointer rounded-full">
<FaLinkedinIn />
</div>
<div className="bg-hedicon/6 p-3 inline-block hover:bg-primary hover:text-white ease-in-out  duration-300 cursor-pointer rounded-full">
<FaTwitter  />
</div>
<div className="bg-hedicon/6 p-3 inline-block hover:bg-primary hover:text-white ease-in-out  duration-300 cursor-pointer rounded-full">
<FaFacebookF  />
</div>
</div>
</div>
</div>



</div>
</div>

</div>


   <div className=" lg:flex md:flex justify-between items-center py-7 border-t border-[#D9DDE0] lg:mt-31.75 mt-15">
                        <p className='text-[14px] text-tertiary dark:text-white font-normal font-rubik leading-7.5 lg:text-start md:text-start text-center '>© InversWeb 2026 | All Rights Reserved</p>
                        <p className='text-[14px] text-primary dark:text-white font-normal font-rubik leading-7.5 lg:text-start md:text-start text-center '>Trams & Condition Privacy Policy Contact Us</p>
                    </div>

</Container>

    </div>
  )
}
