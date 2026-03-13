import { FaArrowRight } from "react-icons/fa";
import { TiTick } from "react-icons/ti";
import Container from '../Container';

export default function Priceplan() {
  return (
    <div className='lg:my-30 my-15  '>

<Container>
<div className="text-center  ">
    <p className='text-base font-rubik font-medium text-primary uppercase'>My Price plan</p>
    <h3 className='lg:text-[48px] md:text-[32px] text-[22px] text-black  font-bold font-rajdhani text-center lg:leading-15 lg:w-121 w-full dark:text-white mx-auto'>Enhancing Collaboration between Remote</h3>
</div>
<div className="lg:mt-12.5 mt-7.5  lg:flex items-center justify-between gap-7.5">
<div className="bg-secondariy rounded-2xl border-primary border-r-3 border-b-3 p-9.5 lg:w-[33%] w-full">
<p className=' text-[18px] font-rajdhani font-bold '>Starter</p>
<p className='text-[48px] font-rajdhani font-bold text-black   '>$ 5.00</p>
<p className='  text-[18px] font-rajdhani font-bold'>Per Month</p>
<div className="pt-11.75 space-y-4.5">
<div className="flex gap-x-2 items-center">
    <TiTick className='bg-primary inline-block rounded-full text-white' />
    <p className='text-base font-rubik font-normal text-[#5D6570]'>5 Social Media Account</p>
</div>
<div className="flex gap-x-2 items-center">
    <TiTick className='bg-primary  rounded-full text-white' />
    <p className='text-base font-rubik font-normal text-[#5D6570]'>Free Platform Access</p>
</div>
<div className="flex gap-x-2 items-center mt-4.25">
    <TiTick className='bg-primary  rounded-full text-white' />
    <p className='text-base font-rubik font-normal text-[#5D6570] '>24/7 Customer Support</p>
</div>
</div>
<div className="mt-10">
    <button className='border-2 border-[#D9DDE0] px-5.75 py-4 flex  items-center gap-x-1.5 rounded-full font-medium font-rubik text-4 text-black '> View Portfolio <FaArrowRight />
</button>
</div>


    </div>
<div className="bg-secondariy rounded-2xl border-primary border-r-3 border-b-3  p-9.5  lg:w-[33%] w-full lg:mt-0 my-7.5 ">
<p className='text-[18px] font-rajdhani font-bold '>Basic</p>
<p className='text-[48px] font-rajdhani font-bold text-black   '>$ 230.00</p>
<p className='   text-[18px] font-rajdhani font-bold'>Per Month</p>
<div className="mt-18 space-y-4.5">
<div className="flex gap-x-2 items-center">
    <TiTick className='bg-primary  rounded-full text-white' />
    <p className='text-base font-rubik font-normal text-[#5D6570]'>5 Social Media Account</p>
</div>
<div className="flex gap-x-2 items-center">
    <TiTick className='bg-primary  rounded-full text-white' />
    <p className='text-base font-rubik font-normal text-[#5D6570]'>Free Platform Access</p>
</div>
<div className="flex gap-x-2 items-center">
    <TiTick className='bg-primary  rounded-full text-white' />
    <p className='text-base font-rubik font-normal text-[#5D6570]'>Marketing Platform</p>
</div>
<div className="flex gap-x-2 items-center ">
    <TiTick className='bg-primary  rounded-full text-white' />
    <p className='text-base font-rubik font-normal text-[#5D6570] '>24/7 Customer Support</p>
</div>
<div className="flex gap-x-2 items-center">
    <TiTick className='bg-primary  rounded-full text-white' />
    <p className='text-base font-rubik font-normal text-[#5D6570] '>Life time support</p>
</div>
</div>
<div className="mt-10">
    <button className=' bg-primary px-5.75 py-4 flex  items-center gap-x-1.5 rounded-full font-medium font-rubik text-4 text-white  '> View Portfolio <FaArrowRight />
</button>
</div>


    </div>
<div className="bg-secondariy rounded-2xl border-primary border-r-3 border-b-3  p-9.5 lg:w-[33%] w-full  ">
<p className=' text-[18px] font-rajdhani font-bold '>Premium</p>
<p className='text-[48px] font-rajdhani font-bold text-black  '>$ 45.00
</p>
<p className='  pb-1 text-[18px] font-rajdhani font-bold'>Per Month</p>
<div className="mt-18 space-y-4.5">
<div className="flex gap-x-2 items-center">
    <TiTick className='bg-primary  rounded-full text-white' />
    <p className='text-base font-rubik font-normal text-[#5D6570]'>5 Social Media Account</p>
</div>
<div className="flex gap-x-2 items-center">
    <TiTick className='bg-primary  rounded-full text-white' />
    <p className='text-base font-rubik font-normal text-[#5D6570]'>Free Platform Access</p>
</div>
<div className="flex gap-x-2 items-center">
    <TiTick className='bg-primary  rounded-full text-white' />
    <p className='text-base font-rubik font-normal text-[#5D6570] '>24/7 Customer Support</p>
</div>
</div>
<div className="mt-10">
    <button className=' border-2 border-[#D9DDE0] px-5.75 py-4 flex  items-center gap-x-1.5 rounded-full font-medium font-rubik text-4 text-black  '> View Portfolio <FaArrowRight />
</button>
</div>


    </div>
</div>

</Container>

    </div>
  )
}



