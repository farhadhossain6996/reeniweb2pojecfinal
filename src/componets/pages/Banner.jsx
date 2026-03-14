import { FaArrowRight, FaFacebookF, FaFacebookMessenger, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import Container from '../Container';
import BanrImg from '/src/assets/banrImg.png';
import Heading from '/src/assets/Heading 2.png';
import logo from '/src/assets/Logo.png'
import phn from '/src/assets/phn.png'
import msg from '/src/assets/msg.png'
import location from '/src/assets/location.png'
import cardbanner from '/src/assets/cardbanner.png'
import WebDesign from '/src/assets/WEB DESIGN.png';
import preBuilt from '/src/assets/preBuilt.png';
import { useState } from "react";
import { motion } from "framer-motion";

const  Banner = () => {
const[isShow ,setShow] = useState(false);
 const toggleMenu = ()=> {
  setShow(!isShow);
 }         

  return (
<motion.h1
 initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
>
  
<div className='lg:pb-22.5 pb-7.5 '>
<Container>
<div className="lg:flex justify-between items-center relative">


<div className="lg:w-159.25 w-90 lg:h-201.25 h-113.75 md:w-120 md:h-140 left-1/2 lg:top-0 -top-125 md:-top-150   -translate-x-1/2 absolute z-10    ">
      <img src={BanrImg} />
</div>   
        <div className="font-bold font-rajdhani lg:w-[25%] w-full lg:mt-52.75  mt-150  md:mt-150 ">
        <h4 className=' text-[28px] dark:text-white '>Hello i’m</h4>
        <h1 className='lg:text-[90px] md:text-[45px] text-[38px] lg:leading-25.75 dark:text-white  '>Brooklyn Simmons
</h1>
<button className=' bg-primary px-7.5 py-5.5 flex  items-center gap-x-1.5 rounded-full font-medium font-rubik text-base text-white '> View Portfolio <FaArrowRight />
</button>
    </div>


<div className=" lg:w-[25%] w-full lg:mt-52.75 mt-7.5 ">
<div className="font-rubik font-normal text-4 ">
<p className=' text-black dark:text-white my-5'>About Me</p>
<p className='text-tertiary dark:text-white'>A personal <span className='text-primary'>portfolio</span> is a collection of to your work, that is achievements, and a skills that <span className='text-primary'>web design</span> highlights in your</p>
</div>
<div className="mt-10">
    <p className='font-rubik font-normal text-4 pb-2.5 text-black dark:text-white'>Find me on</p>
<div className="flex items-center gap-x-2 dark:text-white">
    <div className="bg-hedicon/6 p-3 inline-block hover:bg-primary hover:text-white ease-in-out  duration-300 cursor-pointer rounded-full">
<FaInstagram  />
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


         <div className=" relative">
                          <h2 className=" text-center mt-11 ml-10 text-[213px] font-bold font-rajdhani leading-61 text-transparent [--stroke-color:var(--color-secondary)] dark:[--stroke-color:var(--color-white)]  [-webkit-text-stroke:1px_var(--stroke-color)] hidden lg:block ">
                    WEB DESIGN
                </h2>
                <h3 className="  absolute left-63 -bottom-12 text-[150px] font-bold font-rajdhani leading-43 text-transparent [--stroke-color:var(--color-primary)] [-webkit-text-stroke:1px_var(--stroke-color)] z-40 hidden lg:block">
                    WEB DESIGN
                </h3>
                    </div>






    

</Container>


{/* CardPart */}

<div className="fixed z-40  lg:top-71 top-63 right-0 bottom-10">
  <img src={preBuilt} />
</div>



 {!isShow && (
<div onClick={toggleMenu} className="fixed z-40  lg:top-169.5 top-152 right-5 bottom-10 cursor-pointer">
    <div className="bg-primary p-3 rounded-full inline-block text-white ">
<FaFacebookMessenger size={30} />
</div>
</div>


 )}
 
{isShow && (
<div className="w-100 bg-[#F4F4F4]  top-20 right-0 z-30 fixed ">
          <div className=" flex items-center justify-between px-7.5  py-5.5  bg-[#EDEDED] ">

     <img src={logo}  />

          
<div onClick={toggleMenu}  className="text-primary cursor-pointer rounded-full  hover:bg-primary ease-in-out duration-300 hover:text-white ">
<IoClose  size={30}/>
</div>
    


          </div>


          <div className=" px-7.5  py-7.5">
            <img src={cardbanner} alt="cardbanner" />

            <div>
              <h5 className=" font-secondary font-bold text-[20px] text-[#141414] mt-7.5 mb-4">
                Freelancer delivering exceptional Webflow, and Next.js
                solutions.
              </h5>
              <p className=" font-secondary font-normal text-[16px] text-[#5D6570]">
                I am a skilled freelancer specializing in Webflow development,
                Figma design, and Next.js projects. I deliver creative, dynamic,
                and user-centric web solutions.
              </p>
            </div>

            <div className="mt-9.75 mb-5.5">
              <div className=" flex items-center gap-x-5 mb-5">
                <div>
                  <img src={phn} alt="phone" />
                </div>
                <div>
                  <h6 className=" font-primary font-semibold text-[15px] text-primary">
                    Call Now
                  </h6>
                  <p
                    className=" font-secondary font-normal text-[16px] text-[#141414]"
                  >+92 (8800) - 98670
                  </p>
                </div>
              </div>

              <div className=" flex items-center gap-x-5 mb-5">
                <div>
                  <img src={msg} alt="msg" />
                </div>
                <div>
                  <h6 className=" font-primary font-semibold text-[15px] text-primary">
                    Mail Us
                  </h6>
                  <p
                    className=" font-secondary font-normal text-[16px] text-[#141414]"
                  >
                    example@info.com
                  </p>
                </div>
              </div>

              <div className=" flex items-center gap-x-5">
                <div>
                  <img src={location} alt="location" />
                </div>
                <div>
                  <h6 className=" font-primary font-semibold text-[15px] text-primary">
                    My Address
                  </h6>
                  <p
                    className=" font-secondary font-normal text-[16px] text-[#141414]"
                  > 66 Broklyant, New York 3269
                  </p>
                </div>
              </div>
            </div>

            <div>
              <p className=" font-primary font-medium text-[16px] text-[#141414] mb-3.75">
                find with me
              </p>
</div>






    </div>
    </div>



 )}


{/* Card */}

  
    </div>






</motion.h1>

  )
}


export default Banner;




// https://github.com/Dipokdas347250/reeni/blob/main/src/components/Service.jsx