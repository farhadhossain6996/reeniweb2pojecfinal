import React from 'react'
import { FaArrowRight, FaFacebookF, FaFacebookMessenger, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import Container from '../Container';


import Marketing from '/src/assets/Marketing.png';
import UiDesign from '/src/assets/UiDesign.png';

import webdesign from '/src/assets/webdesign.png';
import WebResearch from '/src/assets/WebResearch.png';
export default function 
() {
  return (
    <div>
     <div className="mt-[109.5px] ">
    <Container>
<div class="  lg:flex  justify-between items-center gap-7.5  ">
  <div className="border-3 border-primary/16 rounded-2xl lg:w-[25%] w-full lg:mt-0 mt-7.5 py-10.25">
  <div className="text-center">
    <img src={webdesign} className='mx-auto '  />
    <div className="">
      <p className='text-[24px] font-bold font-rajdhani text-black  leading-8.5 text-center mt-7.5 dark:text-white'>Web Design</p>
    <p className='text-[#5D6570] font-rubik font-normal text-base leading-6.5 text-center mt-2.5  '>120 Projects</p>
    </div>
  </div>
  
  </div>
  <div className="border-3 border-primary/16 rounded-2xl lg:w-[25%] w-full lg:mt-0 mt-7.5 py-10.25">
 <div className="text-center">
    <img src={UiDesign} className='mx-auto '  />
    <p className='text-[24px] font-bold font-rajdhani text-black  leading-8.5 text-center mt-7.5 dark:text-white'>Ui/Ux Design</p>
    <p className='text-[#5D6570] font-rubik font-normal text-base leading-6.5 text-center mt-2.5 '>241 Projects</p>
  </div>


  </div>
  <div className="border-3 border-primary/16 rounded-2xl lg:w-[25%] w-full lg:mt-0 mt-7.5 py-10.25">
  <div className="text-center">
    <img src={WebResearch} className='mx-auto '  />
    <p className='text-[24px] font-bold font-rajdhani text-black  leading-8.5 text-center mt-7.5 dark:text-white'>Web Research</p>
    <p className='text-[#5D6570] font-rubik font-normal text-base leading-6.5 text-center mt-2.5 '>240 Projects</p>
  </div>
  </div>
  <div className="border-3 border-primary/16 rounded-2xl lg:w-[25%] w-full lg:mt-0 mt-7.5 py-10.25">
  <div className="text-center">
    <img src={Marketing} className='mx-auto '  />
    <p className='text-[24px] font-bold font-rajdhani text-black  leading-8.5 text-center mt-7.5 dark:text-white'>Marketing</p>
    <p className='text-[#5D6570] font-rubik font-normal text-base leading-6.5 text-center mt-2.5 '>331 Prodect</p>
  </div>
  </div>
</div>

    </Container>
</div>


{/* //// experiencepart */}
<div className="mt-22.5">
<Container>
<div className="lg:flex items-center justify-between">
   <div className="bg-secondariy    lg:px-13 px-5 lg:pt-9 pt-7.5 lg:pb-13 pb-7.5 rounded-2xl ">
     <div className="flex items-center gap-x-11 ">
        <p className='lg:text-[167px] text-[100px] font-bold text-primary font-inte lg:leading-45.75 leading-25 '>25</p>
        <p className='lg:text-[48px] text-[26px] font-bold font-rajdhani lg:leading-15.5 leading-9'>Years Of <br />experience</p>
    </div>
        <p className='text-[#141414] lg:text-base text-[14px] font-rubik font-normal leading-6.5 lg:mt-10 mt-3 lg:w-[518.5px]'>Business consulting consultants provide expert advice and guida the a businesses to help theme their performance efficiency</p>
   </div>
   <div className=" lg:mt-0 mt-5">
        <div className="bg-secondariy rounded-2xl border-b-3 border-r-3 border-primary  text-center">
<p className='pt-[37.58px] pb-1 text-[45.9px] font-inter font-bold'>20k+</p>
<p className='text-base font-rubik font-normal text-[#5D6570] pb-8 px-17'>Our Project Complete</p>
    </div>
    
        <div className="bg-secondariy rounded-2xl border-b-3 border-r-3 border-primary  text-center mt-7.5">
<p className='pt-8 pb-1 text-[45.9px] font-inter font-bold'>200+</p>
<p className='text-base font-rubik font-normal text-[#5D6570] pb-8 px-17'>Clients Reviews</p>
        </div>

   </div>
   <div className="lg:mt-0 mt-5">
        <div className="bg-secondariy rounded-2xl border-b-3 border-r-3 border-primary  text-center">
<p className='pt-8 pb-1 text-[45.9px] font-inter font-bold'>10k+</p>
<p className='text-base font-rubik font-normal text-[#5D6570] pb-8 px-17'>Our Natural Products</p>
    </div>
    
        <div className="bg-secondariy rounded-2xl border-b-3 border-r-3 border-primary text-center mt-7.5">
<p className='pt-8 pb-1 text-[45.9px] font-inter font-bold'>1,000+</p>
<p className='text-base font-rubik font-normal text-[#5D6570] pb-8 px-17 '>our Satisfied Clientd</p>
        </div>

   </div>
   
</div>

</Container>

</div>   




    </div>
  )
}
