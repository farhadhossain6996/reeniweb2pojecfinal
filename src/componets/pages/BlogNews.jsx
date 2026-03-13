import React from 'react'
import Container from '../Container'
import BlogNews1 from '/src/assets/BlogNews1.png'
import BlogNews2 from '/src/assets/BlogNews2.png'
import BlogNews3 from '/src/assets/BlogNews3.png'
import { IoIosArrowForward } from "react-icons/io";
import { motion } from 'framer-motion'

function BlogNews() {
  return (
  <motion.h1
 initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
>
  <div className='my-30 '>
<Container>
 <div className="text-center pb-13">
          <p className="text-base font-rubik font-medium text-primary uppercase ">
          Blog and news
          </p>
          <h3 className="font-rajdhani font-bold lg:text-[48px] md:text-[32px] text-[22px] lg:leading-15 lg:w-159 w-full mx-auto text-black dark:text-white ">
            Elevating Personal Branding the through Powerful Portfolios
          </h3>
        </div>
    <div className=" lg:flex justify-between items-center gap-7.5 lg:mt-13 mt-7.5">
        <div className=" border-3 border-[#D9DDE0] lg:w-[33%] w-full lg:mt-0 mt-7.5 rounded-3xl  ">
        <img src={BlogNews1} className='w-full' />
        <div className="p-7.5">
            <p className='text-[24px] font-bold font-rajdhani dark:text-white'>Let’s bring your ideas to life! Contact me, and let’s</p>
            <p className='font-rubik text-[#5D6570] text-[13px] flex gap-x-1 items-center '>Read More 
                <IoIosArrowForward /> </p>
        </div>
    </div>
        <div className=" border-3 border-[#D9DDE0] lg:w-[33%] w-full lg:mt-0 mt-7.5 rounded-3xl ">
        <img src={BlogNews2} className='w-full'  />
        <div className="p-7.5">
            <p className='text-[24px] font-bold font-rajdhani dark:text-white'>Inspiring the World, One Project at a Time for the man</p>
            <p className='font-rubik text-[#5D6570] text-[13px] flex gap-x-1 items-center '>Read More 
                <IoIosArrowForward /> </p>
        </div>
    </div>
        <div className="  border-3 border-[#D9DDE0] lg:w-[33%] w-full lg:mt-0 mt-7.5 rounded-3xl ">
        <img src={BlogNews3}  className='w-full' />
        <div className="p-7.5">
            <p className='text-[24px] font-bold font-rajdhani dark:text-white'>Each one showcases my approach and dedication man</p>
            <p className='font-rubik text-[#5D6570] text-[13px] flex gap-x-1 items-center '>Read More 
                <IoIosArrowForward /> </p>
        </div>
    </div>
    </div>
</Container>

    </div>



</motion.h1>
  )
}

export default BlogNews
