import React from "react";
import Container from "../Container";
import { TfiQuoteLeft } from "react-icons/tfi";
export default function Testimonial() {
  return (
    <div className="my-30">
      <Container>
        <div className="text-center mb-13">
          <p className="text-base font-rubik font-medium text-primary uppercase leading-7">
            Our Testimonial
          </p>
          <h3 className="font-rajdhani font-bold lg:text-[48px] md:text-[32px] text-[22px]  text-black  lg:leading-15 lg:w-121 w-full mx-auto">
            Enhancing Collaboration <br />
            between Remote
          </h3>
        </div>
<div className=" lg:flex justify-between items-center  lg:mt-13 mt-7.5 gap-7.5 ">
     <div className="bg-secondariy rounded-2xl border-primary border-r-3 border-b-3   p-9.5  ">
       <div className="">
        <TfiQuoteLeft className="w-17.5 h-15.25 text-primary " />
       </div>

 <div className="mt-11">
                   
 <p className='text-[18px] font-rubik font-normal text-[#5D6570] leading-7.5 '>A personal portfolio is a curated collection of an individual's
professional work, showcasing their skilA personal portfolio is a
curated collection of an individual's professional work,
showcasing their skills,</p>
 <p className='text-[18px] font-rajdhani font-bold text-black leading-7.5 mt-9'>Cameron Williamson</p>
 <p className='text-[14px] font-rubik font-normal text-[#5D6570] leading-7.5'>Ui/Ux Designer</p>
</div>
</div>
     <div className="bg-secondariy rounded-2xl border-primary border-r-3 border-b-3 p-9.5 lg:mt-0 mt-4  ">
       <div className="">
        <TfiQuoteLeft className="w-17.5 h-15.25 text-primary " />
       </div>

 <div className="mt-11">
                   
 <p className='text-[18px] font-rubik font-normal text-[#5D6570] leading-7.5'>A personal portfolio is a curated collection of an individual's
professional work, showcasing their skilA personal portfolio is a
curated collection of an individual's professional work,
showcasing their skills,</p>
 <p className='text-[18px] font-rajdhani font-bold text-black leading-7.5 mt-9'>Leslie Alexander</p>
 <p className='text-[14px] font-rubik font-normal text-[#5D6570] leading-7.5'>Ui/Ux Designer</p>
</div>
</div>
</div>
        
      </Container>
    </div>
  );
}
