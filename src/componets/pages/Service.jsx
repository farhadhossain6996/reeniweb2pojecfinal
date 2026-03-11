import Container from "../Container";
import srvcmn from "/src/assets/srvcmn.png";
import expertimg from "/src/assets/expert-img.png";
import linear from "/src/assets/linear.png";
import medium from "/src/assets/medium.png";
import framer from "/src/assets/framer.png";
import notion from "/src/assets/notion.png";
import slack from "/src/assets/slack.png";
import upwork from "/src/assets/upwork.png";
import amazon from "/src/assets/amazon.png";
import asana from "/src/assets/asana.png";

function Service() {
  return (
    <div className="my-22.5 " >
      <Container>
        <div className="text-center">
          <p className="text-base font-rubik font-normal text-primary uppercase">
            Latest Service
          </p>
          <h2 className="text-black dark:text-white lg:text-[48px] text-[22px] font-rajdhani font-bold">
            Inspiring The World One Project
          </h2>
          <p className="text-[#5D6570] font-rubik font-normal text-base">
            Business consulting consultants provide expert advice and guida
            businesses to help <br className="hidden lg:block" />
            them improve their performance, efficiency, and organizational
          </p>
        </div>

        <div className="lg:flex  items-center justify-between lg:mt-15 mt-7.5 gap-7.5">
          {/* LeftSide */}

          <div className="lg:w-1/2 w-full  space-y-5 ">
            <div className="">
              <div className="bg-secondariy lg:py-8.5 lg:px-9.5 px-3.25 py-7 rounded-2xl border-primary border-r-3 border-b-3 ">
                <p className=" text-[24px] font-rajdhani font-bold leading-15">
                  01.A Portfolio of Creativity
                </p>
                <p className="text-base font-rubik font-normal text-[#5D6570] leading-6.5 mt-1">
                  Business consulting consultants provide expert advice and
                  guida the a businesses to help theme their performance
                  efficiency
                </p>
              </div>
            </div>
            <div className="">
       <div className="bg-secondariy lg:py-8.5 lg:px-9.5 px-3.25 py-7 rounded-2xl  border-primary border-r-3 border-b-3  ">
                <p className=" text-[24px] font-rajdhani font-bold leading-15">
                  02.My Portfolio of Innovation
                </p>
                <p className="text-base font-rubik font-normal text-[#5D6570] leading-6.5 mt-1">
                  My work is driven by the belief that thoughtful design and
                  strategic planning can empower brands, transform businesses
                </p>
              </div>
            </div>
            <div className="">
              <div className="bg-secondariy lg:py-8.5 lg:px-9.5 px-3.25 py-7 rounded-2xl border-primary border-r-3 border-b-3  ">
                <p className=" text-[24px] font-rajdhani font-bold leading-15">
                  03.A Showcase of My Projects
                </p>
                <p className="text-base font-rubik font-normal text-[#5D6570] leading-6.5 mt-1">
                  In this portfolio, you’ll find a curated selection of projects
                  that highlight my skills in Main Areas, e.g., responsive web
                  design
                </p>
              </div>
            </div>
          </div>

          {/* RightSide */}
          <div className="lg:w-1/2 w-full">
            <div className="lg:mt-0 mt-7.5">
              <img src={srvcmn} />
            </div>
          </div>
        </div>

        {/* ....................... */}

        <div class="mt-22.5 lg:flex items-center justify-between gap-x-7.5  ">
          {/* Design Skill  */}
          <div className="lg:w-1/2 w-full">
            <h2 class="text-[32px] font-bold font-rajdhani mb-7.5 tracking-tight">
              Design Skill
            </h2>
            <div class="space-y-7.5 ">
              <div class="group ">
                <div class="flex justify-between text-[14px] font-normal font-rubik  mb-3.5 uppercase tracking-[0.2em] group-hover:text-primary transition-colors">
                  <span>Photoshop</span>
                  <span>100%</span>
                </div>
                <div class="w-full bg-secondariy rounded-full overflow-hidden">
                  <div class="bg-primary p-1 w-full animate-fill origin-left"></div>
                </div>
              </div>

              <div class="group">
                <div class="flex justify-between text-[14px] font-normal font-rubik  mb-3.5 uppercase tracking-[0.2em] group-hover:text-primary transition-colors">
                  <span>Figma</span>
                  <span>95%</span>
                </div>
                <div class="w-full bg-secondariy  rounded-full overflow-hidden">
                  <div class="bg-primary p-1  w-[95%] animate-fill origin-left"></div>
                </div>
              </div>

              <div class="group">
                <div class="flex justify-between text-[14px] font-normal font-rubik  mb-3.5 uppercase tracking-[0.2em] group-hover:text-primary transition-colors">
                  <span>Adobe XD</span>
                  <span>60%</span>
                </div>
                <div class="w-full bg-secondariy rounded-full overflow-hidden">
                  <div class=" bg-primary p-1 w-[60%] animate-fill origin-left"></div>
                </div>
              </div>

              <div class="group">
                <div class="flex justify-between text-[14px] font-normal font-rubik  mb-3.5 uppercase tracking-[0.2em] group-hover:text-primary transition-colors">
                  <span>Adobe Illustrator</span>
                  <span>70%</span>
                </div>
                <div class="w-full bg-secondariy rounded-full overflow-hidden">
                  <div class="bg-primary p-1 w-[70%] animate-fill origin-left"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Development Skill */}

          <div className="lg:w-1/2 w-full lg:mt-0 mt-7.5">
            <h2 class="text-[32px] font-bold font-rajdhani mb-7.5 tracking-tight">
              Development Skill
            </h2>
            <div class="space-y-7.5 ">
              <div class="group ">
                <div class="flex justify-between text-[14px] font-normal font-rubik  mb-3.5 uppercase tracking-[0.2em] group-hover:text-primary transition-colors">
                  <span>React / Tailwind</span>
                  <span>100%</span>
                </div>
                <div class="w-full bg-secondariy rounded-full overflow-hidden">
                  <div class="bg-primary p-1  w-full animate-fill origin-left"></div>
                </div>
              </div>

              <div class="group">
                <div class="flex justify-between text-[14px] font-normal font-rubik  mb-3.5 uppercase tracking-[0.2em] group-hover:text-primary transition-colors">
                  <span>JavaScript</span>
                  <span>95%</span>
                </div>
                <div class="w-full bg-secondariy rounded-full overflow-hidden">
                  <div class="bg-primary p-1 w-[95%] animate-fill origin-left"></div>
                </div>
              </div>

              <div class="group">
                <div class="flex justify-between text-[14px] font-normal font-rubik  mb-3.5 uppercase tracking-[0.2em] group-hover:text-primary transition-colors">
                  <span>Node.js</span>
                  <span>60%</span>
                </div>
                <div class="w-full bg-secondariy rounded-full overflow-hidden">
                  <div class="bg-primary p-1 w-[60%] animate-fill origin-left"></div>
                </div>
              </div>

              <div class="group">
                <div class="flex justify-between text-[14px] font-normal font-rubik  mb-3.5 uppercase tracking-[0.2em] group-hover:text-primary transition-colors">
                  <span>Python</span>
                  <span>70%</span>
                </div>
                <div class="w-full bg-secondariy rounded-full overflow-hidden">
                  <div class="bg-primary p-1 w-[70%] animate-fill origin-left"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Education  */}
        <div className="mt-18.75">
          <h3 className="text-[32px] font-rajdhani font-bold  mb-8">
            Education
          </h3>
          <div className="lg:flex items-center justify-between gap-7.5">
            <div className=" lg:w-1/2 w-full">
              <div className="bg-secondariy rounded-2xl border-primary border-r-3 border-b-3 lg:px-9.5 px-3 lg:py-12 py-7">
                <p className="text-[#141414 dark:text-white]  text-base  font-rubik font-normal leading-6 ">
                  Trainer Marketing
                </p>
                <p className="text-[18px] font-rajdhani font-bold text-black leading-7">
                  2005-2009
                </p>
                <p className="text-base font-rubik font-normal text-[#5D6570] leading-7 ">
                  A personal portfolio is a curated collection of an individual's professional work, showcasing their skills, experience A personal portfolio.
                </p>
              </div>
              <div className="bg-secondariy rounded-2xl border-primary border-r-3 border-b-3 lg:px-9.5 px-3 lg:py-12 py-7  mt-7.5 ">
                <p className="text-[#141414]  text-base  font-rubik font-normal leading-6">
                  Design Assistant
                </p>
                <p className="text-[18px] font-rajdhani font-bold text-black dark:text-white leading-7 ">
                  2008-2012
                </p>
                <p className="text-base font-rubik font-normal text-[#5D6570] leading-7 ">
                  I’ve had the privilege of working with various clients, from
                  startups to  established companies, helping bring their visions to life.
                </p>
              </div>
            </div>
            <div className=" lg:w-1/2 w-full ">
              <div className="bg-secondariy rounded-2xl border-primary border-r-3 border-b-3 lg:px-9.5 px-3 lg:py-12 py-7 lg:mt-0  mt-7.5 ">
                <p className="text-[#141414]  text-base  font-rubik font-normal leading-6 ">
                  Assistant Director
                </p>
                <p className="text-[18px] font-rajdhani font-bold text-black dark:text-white leading-7 ">
                  2010-2014
                </p>
                <p className="text-base font-rubik font-normal text-[#5D6570] leading-7 ">
                  Each project here showcases my commitment to excellence and
                  adaptability, tailored to meet each client’s unique needs.
                </p>
              </div>
              <div className="bg-secondariy rounded-2xl border-primary border-r-3 border-b-3 lg:px-9.5 px-3 lg:py-12 py-7    mt-7.5 ">
                <p className="text-[#141414]  text-base  font-rubik font-normal leading-6">
                  Design Assistant
                </p>
                <p className="text-[18px] font-rajdhani font-bold text-black dark:text-white leading-7">
                  2008-2012
                </p>
                <p className="text-base font-rubik font-normal text-[#5D6570] leading-7">
                  Each project here showcases my commitment to excellence and
                  <br />
                  adaptability, tailored to meet each client’s unique needs a
                  personal.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:flex justify-between items-start gap-x-13.75 mt-15">
          {/* LeftSide */}
          <img src={expertimg} className="lg:w-1/2 w-full" />

          {/* RightSide */}

          <div className="space-y-3 lg:w-1/2 w-full lg:mt-0 mt-7.5">
            <h3 className="font-rajdhani font-bold text-[32px]">
              Experiences
            </h3>
            <div className="">
              <p className="text-primary text-base font-rubik font-bold leading-10.5">
                experience
              </p>
              <p className="text-[24px] font-rajdhani font-bold text-black dark:text-white  leading-7.5 ">
                Fatima Asrafy
              </p>
              <p className="text-[18px] font-rajdhani font-medium text-[#141414] leading-6.75">
                UI/UX Designer
              </p>
              <p className="text-base font-rubik font-normal text-[#5D6570] leading-7.5 mt-4 lg:w-111 w-full ">
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum desi dolore eu fugiat nulla pariatu Duis aute irure
              </p>
            </div>
            <div className="pt-8">
              <p className="text-primary text-base font-rubik font-bold leading-10.5">
                experience
              </p>
              <p className="text-[24px] font-rajdhani font-bold text-black dark:text-white leading-7.5 ">
                Fatima Asrafy
              </p>
              <p className="text-[18px] font-rajdhani font-medium text-[#141414] dark:text-white leading-6.75 ">
                UI/UX Designer
              </p>
              <p className="text-base font-rubik font-normal text-[#5D6570] leading-7.5 mt-4 lg:w-111 w-full ">
                Interested in working together? Let’s bring your ideas to 
                life! Contact me, and let’s start building something.
              </p>
            </div>
          </div>
        </div>

        <div className=" border border-[#9F9F9F] lg:mt-30.5 mt-15">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1">
           <div className="border border-[#9F9F9F] flex items-center justify-center h-28">
             <img  src={linear} />
           </div>
           <div className="border border-[#9F9F9F] flex items-center justify-center h-28">
             <img  src={framer} />
           </div>
           <div className="border border-[#9F9F9F] flex items-center justify-center h-28">
             <img  src={notion} />
           </div>
           <div className="border border-[#9F9F9F] flex items-center justify-center h-28">
             <img  src={slack} />
           </div>
           
          </div>
          <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1">
             <div className="border border-[#9F9F9F] flex items-center justify-center h-28">
             <img  src={medium} />
           </div>
             <div className="border border-[#9F9F9F] flex items-center justify-center h-28">
             <img  src={upwork} />
           </div>
             <div className="border border-[#9F9F9F] flex items-center justify-center h-28">
             <img  src={amazon} />
           </div>
             <div className="border border-[#9F9F9F] flex items-center justify-center h-28">
             <img  src={asana} />
           </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Service;
