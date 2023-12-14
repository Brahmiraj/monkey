import React from "react";
import signinBG from "../../public/13986 1.png";
import footer from "../../public/footer.png";
import { Fade } from "react-awesome-reveal";
import { JackInTheBox } from "react-awesome-reveal";
import { motion } from "framer-motion";
import socialMedia from "../../public/Social media.svg";
import dot from '../../public/dot.svg'

const Contact = () => {
  return (
    <div>
      <div>
        <div className="flex gap-10 relative top-40">
          <div className="w-2/5 max-md:w-0"></div>
          <div className="w-2/5 flex flex-col gap-20 max-md:w-full">
            <div>
              <h1 className="NotoSerif text-4xl uppercase">
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
                className="DMSans text-lg"
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
                  className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-transparent"
                  id="username"
                  type="text"
                  placeholder="Your email address"
                />
              </div>
              </JackInTheBox>
              <JackInTheBox delay={3500} triggerOnce className="w-56">
              <div className="z-0 flex justify-center items-center">
                <img
                  src={signinBG}
                  alt="signinBG"
                  className="absolute h-20 -z-10"
                />
                <h1 className="pl-12 text-xl w-full NotoSerif">Register Now</h1>
              </div>
              </JackInTheBox>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between items-end px-40 relative top-[450px]">
        <img src={socialMedia} alt="socialMedia"/>
        <h1>All Rights Reserved - @Tharakadasun2023 </h1>
        <img src={dot} alt="dot" />
      </div>
      <div>
        <img src={footer} alt="monkeybg" />
      </div>
    </div>
  );
};

export default Contact;
