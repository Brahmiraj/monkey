import React from "react";
import signinBG from "../../public/13986 1.png";
import footer from "../../public/footer.png";
import { Fade } from "react-awesome-reveal";
import { JackInTheBox } from "react-awesome-reveal";
import { motion } from "framer-motion";
import socialMedia from "../../public/Social media.svg";
import dot from '../../public/dot.svg'
// import greenLeft from "../../public/greenLeft.png";
// import astro from "../../public/astro.png";
// import greenround from "../../public/greenround.png";


const Contact = () => {
  return (
    <div className="max-w-[1600px] mx-auto">
      <div>
        <div className="flex gap-10 relative top-40 max-sm:top-20 pb-40">
          <div className="w-2/5 max-xl:w-0"></div>
          <div className="w-2/5 flex flex-col gap-20 max-sm:gap-10 max-xl:w-full pr-10">
            <div>
              <h1 className="NotoSerif text-4xl uppercase max-sm:text-[25px] ">
                <Fade cascade delay={100} damping={0.1} triggerOnce>
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
                className="DMSans text-lg "
              >
                Project T stands at the forefront of crypto innovation,
                seamlessly merging state-of-the-art blockchain technology with
                user-centric design. As a beacon of financial empowerment,
                Project T transcends traditional digital assets. Its intuitive
                interface caters to all, from seasoned enthusiasts to newcomers.
                Embrace a community-driven ecosystem where participation
                matters. Engage in governance decisions, contribute to growth,
                and explore a diverse range of opportunities. Project T invites
                you to be part of the evolution, shaping the future of
                decentralized finance
              </motion.p>
            </div>
            <div className="flex justify-between max-md:flex-col max-md:gap-10">
              <JackInTheBox delay={1500} triggerOnce>
                <div>
                  <input
                    className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-transparent w-80 "
                    id="username"
                    type="text"
                    placeholder="Your email address"
                  />
                </div>
              </JackInTheBox>
              <JackInTheBox delay={1500} triggerOnce className="w-96">
                <div className="z-0 flex justify-center items-center">
                  <img
                    src={signinBG}
                    alt="signinBG"
                    className="absolute h-20 -z-10 "
                  />
                  <h1 className="pl-12 text-xl w-full NotoSerif ">
                    Register Now
                  </h1>
                </div>
              </JackInTheBox>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between items-end px-40 relative top-[230px] max-sm:top-0 text-gray-400 max-md:hidden max-xl:px-10 max-xl:top-28">
        <img src={socialMedia} alt="socialMedia" className="" />
        <h1>All Rights Reserved - @Tharakadasun2023 </h1>
        <img src={dot} alt="dot" />
      </div>
      <div className="flex justify-between items-end px-4 relative top-14 text-gray-400 md:hidden">
        <img src={socialMedia} alt="socialMedia" className="w-20" />
        <h1 className="text-xs">All Rights Reserved - @Tharakadasun2023 </h1>
      </div>
      <div>
        <img
          src={footer}
          alt="monkeybg"
          className="2xl:w-[4250px] 4xl:h-[2100px]"
        />
      </div>
      {/* <div className="absolute bottom-[-3000px] max-sm:bottom-[-2730px] 4 left-0">
        <img
          src={greenLeft}
          alt="greenLeft"
          className="w-[500px] max-sm:w-[300px] "
        />
      </div> */}
      {/* <div className="absolute bottom-[-2800px] right-[500px]">
        <img src={astro} alt="astro" className="w-32" />
      </div>
      <div className="absolute bottom-[-2500px] right-[700px]">
        <img src={dot} alt="dot" className="w-3" />
      </div> */}
      {/* <div className="absolute bottom-[-3000px] max-sm:bottom-[-2600px] max-sm:right-0 right-96 ">
        {/* <img
          src={greenround}
          alt="greenround"
          className="w-[500px] "
        /> 
      </div> */}
    </div>
  );
};

export default Contact;
