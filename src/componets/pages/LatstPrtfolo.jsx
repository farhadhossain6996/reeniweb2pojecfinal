import { AiFillBank } from "react-icons/ai";
import { FiArrowUpRight } from "react-icons/fi";
import Container from "../Container";
import LatstPrtfolo1 from "/src/assets/LatstPrtfolo1.png";
import LatstPrtfolo2 from "/src/assets/LatstPrtfolo2.png";
import LatstPrtfolo3 from "/src/assets/LatstPrtfolo3.png";
import LatstPrtfolo4 from "/src/assets/LatstPrtfolo4.png";

import { BsVectorPen } from "react-icons/bs";
import { FaArrowRight } from "react-icons/fa";
import { IoCalendarClearOutline } from "react-icons/io5";

export default function LatstPrtfolo() {
  return (
    <div className="lg:py-25 py-10  bg-[#F4F4F4]">
      <Container>
        <div className="text-center">
          <p className="text-base text-primary font-medium font-rubik  uppercase ">
            Latest Portfolio
          </p>
          <h4 className="lg:text-[48px] text-[22px]  font-bold font-rajdhani leading-15 ">
            Transforming Ideas into Exceptional
          </h4>
          <h4 className="text-base font-normal  font-rubik text-[#5D6570] lg:w-156.75 mx-auto">
            Business consulting consultants provide expert advice and guida
            businesses to help them improve their performance, efficiency, and
            organizational
          </h4>
        </div>
        <div className="mt-15 lg:flex md:flex justify-between ">
          <div className="lg:w-1/2 md:w-1/2 w-full">
          <div className="px-6">
              <img
              src={LatstPrtfolo1}
              className="border border-[#D9DDE0] rounded-2xl p-5 "
            />
            <div className="flex  items-center justify-between mt-[33.24px]">
              <div className="">
                <p className="font-rajdhani font-bold text-[24px] leading-7.5">
                  My Journey as a Creator
                </p>
                <p className="font-rubik font-normal text-base text-[#5D6570] mt-2.5">
                  Development Coaches
                </p>
              </div>
              <div className=" border-2 border-[#D9DDE0]  p-4 inline-block rounded-xl">
                <FiArrowUpRight />
              </div>
            </div>
          </div>

         <div className="px-6">
               <img
              src={LatstPrtfolo2}
              className="border border-[#D9DDE0] rounded-2xl p-5 lg:mt-25 mt-15 "
            />
            <div className="flex  items-center justify-between mt-[33.24px]">
              <div className="">
                <p className="font-rajdhani font-bold text-[24px]">
                  My Journey as a Creator
                </p>
                <p className="font-rubik font-normal text-base text-[#5D6570] mt-2.5">
                  Development Coaches
                </p>
              </div>
              <div className=" border-2 border-[#D9DDE0] p-4 inline-block rounded-xl">
                <FiArrowUpRight />
              </div>
            </div>
         </div>
          </div>
          <div className="lg:mt-27 mt-15 lg:w-1/2 md:w-1/2 w-full">
       <div className="px-6">
             <img
              src={LatstPrtfolo3}
              className="border border-[#D9DDE0] rounded-2xl p-5 "
            />
            <div className="flex  items-center justify-between mt-[33.24px]">
              <div className="">
                <p className="font-rajdhani font-bold text-[24px] leading-7.5">
                  My Journey as a Creator
                </p>
                <p className="font-rubik font-normal text-base text-[#5D6570] mt-2.5">
                  Development Coaches
                </p>
              </div>
              <div className=" border-2 border-[#D9DDE0] p-4 inline-block rounded-xl">
                <FiArrowUpRight />
              </div>
            </div>
       </div>
<div className="px-6">
         <img
              src={LatstPrtfolo4}
              className="border border-[#D9DDE0] rounded-2xl p-5  lg:mt-25 mt-15 "
            />
            <div className="flex  items-center justify-between mt-[33.24px]">
              <div className="">
                <p className="font-rajdhani font-bold text-[24px] leading-7.5">
                  My Journey as a Creator
                </p>
                <p className="font-rubik font-normal text-base text-[#5D6570] mt-2.5">
                  Development Coaches
                </p>
              </div>
              <div className=" border-2 border-[#D9DDE0] p-4 inline-block rounded-xl">
                <FiArrowUpRight />
              </div>
            </div>
</div>
          </div>
        </div>

        {/* My Skill */}
        <div className="lg:mt-30 mt-15">
          <p className=" text-primary text-base font-rubik font-medium">
            My Skill
          </p>
          <h3 className="lg:text-[48px] md:text-[32px] text-[22px] text-black font-rajdhani font-bold lg:leading-15 lg:w-[50%]">
            Elevated Designs Personalized the best Experiences
          </h3>

          <div className="mt-15 pb-25 space-y-11 ">
            <div className="group">
              <div className="lg:flex md:flex items-center justify-between  group-hover:bg-primary transition-all duration-300  hover:py-8 px-5 hover:text-black">
                <div className=" lg:text-start  text-center lg:w-[15%] md:w-[15%] w-full ">
                  <div className="border-2 border-[#141414] p-4.5 inline-block rounded-full text-[30px] ">
                    <AiFillBank />
                  </div>
                </div>
                <div className="font-rajdhani lg:text-start  text-center lg:w-[25%] md:w-[25%] w-full">
                  <p className="text-[32px] font-bold leading-10.5 lg:text-start md:text-start">
                    Ui/visual Design
                  </p>
                  <p className="text-[18px] font-normal leading-7 text-center lg:text-start md:text-start">
                    21 Done
                  </p>
                </div>
              <div className="lg:w-[45%] md:w-[45%] w-full">
                  <p className="font-rubik text-base text-[#5D6570] group-hover:text-black leading-8 lg:w-[80%] md:w-[80%] w-full    ">
                  My work is driven by the belief that thoughtful design and
                  strategic planning can empowe brands strategic planning can
                  empower brands
                </p>
              </div>
                <p className="lg:w-[15%] md:w-[15%] w-full flex items-center gap-x-2 lg:justify-end md:justify-end justify-center font-rajdhani font-bold">
                  Read More <FaArrowRight />
                </p>
              </div>
            </div>
            <div className="group">

              <div className="lg:flex md:flex items-center justify-between  group-hover:bg-primary transition-all duration-300  hover:py-8 px-5 group-hover:text-black">
               <div className="lg:text-start  text-center lg:w-[15%] md:w-[15%] w-full">
                 <div className=" border-2 border-[#141414] p-4.5 inline-block rounded-full text-[30px] ">
                  <IoCalendarClearOutline  />
                </div>
               </div>
                <div className="font-rajdhani lg:text-start  text-center lg:w-[25%] md:w-[25%] w-full">
                  <p className="text-[32px] font-bold leading-10.5 lg:text-start md:text-start">Ui/visual Design</p>
                  <p className="text-[18px] font-normal leading-7 text-center lg:text-start md:text-start">21 Done</p>
                </div>
              <div className="lg:w-[45%] md:w-[45%] w-full">
                  <p className="font-rubik text-base text-[#5D6570] group-hover:text-black leading-8  lg:w-[80%] md:w-[80%] w-full  ">
                  In this portfolio, you’ll find a curated selection of projects
that highlight my skills in Main Areas, e.g., responsive web
design
                </p>
              </div>
                <p className="lg:w-[15%] md:w-[15%] w-full flex items-center gap-x-2 lg:justify-end md:justify-end justify-center font-rajdhani font-bold">
                  Read More <FaArrowRight />{" "}
                </p>
              </div>
            </div>
            <div className="group">
              <div className="lg:flex md:flex items-center justify-between  group-hover:bg-primary transition-all duration-300  hover:py-8 px-5 hover:text-black">
               <div className="lg:text-start  text-center lg:w-[15%] md:w-[15%] w-full">
                 <div className="border-2 border-[#141414] p-4.5 inline-block rounded-full text-[30px] ">
                  <BsVectorPen  />
                </div>
               </div>
                <div className="font-rajdhani lg:text-start  text-center lg:w-[25%] md:w-[25%] w-full">
                  <p className="text-[32px] font-bold leading-10.5 lg:text-start md:text-start">Motion Design</p>
                  <p className="text-[18px] font-normal leading-7 text-center lg:text-start md:text-start">20 Done</p>
                </div>
               <div className="lg:w-[45%] md:w-[45%] w-full">
                 <p className="font-rubik text-base text-[#5D6570] group-hover:text-black leading-8  lg:w-[80%] md:w-[80%] w-full">
                  My work is driven by the belief that thoughtful design and
                 strategic planning can empowe brands strategic planning  can empower brands
                </p>
               </div>
                <p className="lg:w-[15%] md:w-[15%] w-full flex items-center gap-x-2 lg:justify-end md:justify-end justify-center font-rajdhani font-bold">
                  Read More <FaArrowRight />
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
