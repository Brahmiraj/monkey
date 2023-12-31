import React from "react";
import signinBG from "../../public/13986 1.png";
import footer from "../../public/footer.png";
import { Fade } from "react-awesome-reveal";
import { JackInTheBox } from "react-awesome-reveal";
import { motion } from "framer-motion";
import socialMedia from "../../public/Social media.svg";
import dot from '../../public/dot.svg'
import greenLeft from "../../public/greenLeft.png";
import astro from "../../public/astro.png";
import greenround from "../../public/greenround.png";


const Contact = () => {
  return (
    <div>
      <div>
        <div className="flex gap-10 relative top-40 max-sm:top-20 pb-40">
          <div className="w-2/5 max-xl:w-0"></div>
          <div className="w-2/5 flex flex-col gap-20 max-sm:gap-10 max-xl:w-full pr-10">
            <div>
              <h1 className="NotoSerif text-4xl uppercase max-sm:text-[25px] 4xl:text-7xl">
                <Fade cascade delay={1000} damping={0.1} triggerOnce>
                  newsletter SUBSCRIBE
                </Fade>
              </h1>
            </div>
            <div>
              <motion.p
                initial={{
                  x: 200,
                  opacity: 0,
                }}
                transition={{
                  duration: 1.2,
                  delay: 2.5,
                }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="DMSans text-lg 4xl:text-3xl"
              >
                Lorem ipsum dolor sit amet consectetur. Tristique quis dictumst
                tellus aliquam ullamcorper augue arcu mattis. Ut et morbi magna
                aliquet aliquet quis vestibulum. Vel ipsum sagittis aliquet mi.
              </motion.p>
            </div>
            <div className="flex justify-between max-md:flex-col max-md:gap-10">
            <JackInTheBox delay={3500} triggerOnce>
              <div>
                <input
                  className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-transparent w-80 4xl:w-[700px] 4xl:h-16 4xl:placeholder:text-3xl"
                  id="username"
                  type="text"
                  placeholder="Your email address"
                />
              </div>
              </JackInTheBox>
              <JackInTheBox delay={3500} triggerOnce className="w-96">
              <div className="z-0 flex justify-center items-center">
                <img
                  src={signinBG}
                  alt="signinBG"
                  className="absolute h-20 -z-10 4xl:h-40"
                />
                <h1 className="pl-12 text-xl w-full NotoSerif 4xl:text-3xl 4xl:pl-24">Register Now</h1>
              </div>
              </JackInTheBox>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between items-end px-40 relative top-[230px] max-sm:top-0 text-gray-400 max-md:hidden max-xl:px-10 max-xl:top-28">
        <img src={socialMedia} alt="socialMedia" className="4xl:w-80"/>
        <h1 className="4xl:text-3xl">All Rights Reserved - @Tharakadasun2023 </h1>
        <img src={dot} alt="dot"/>
      </div>
      <div className="flex justify-between items-end px-4 relative top-14 text-gray-400 md:hidden">
        <img src={socialMedia} alt="socialMedia" className="w-20"/>
        <h1 className="text-xs">All Rights Reserved - @Tharakadasun2023 </h1>
      </div>
      <div>
        <img src={footer} alt="monkeybg" />
      </div>
      <div className="absolute bottom-[-3000px] max-sm:bottom-[-2730px] 4xl:bottom-[-5500px] left-0">
        <img src={greenLeft} alt="greenLeft" className="w-[500px] max-sm:w-[300px] 4xl:w-[1000px]"/>
      </div>
      <div className="absolute bottom-[-2800px] right-[500px]">
        <img src={astro} alt="astro"className="w-32"/>
      </div>
      <div className="absolute bottom-[-2500px] right-[700px]">
        <img src={dot} alt="dot"className="w-3"/>
      </div>
      <div className="absolute bottom-[-3000px] max-sm:bottom-[-2600px] max-sm:right-0 right-96 4xl:bottom-[-5500px] 4xl:right-[1000px]">
        <img src={greenround} alt="greenround" className="w-[500px] 4xl:w-[1000px]"/>
      </div>
    </div>
  );
};

export default Contact;
