import React from "react";
import lightBase from "../../public/lightbase.png";
import logo1 from "../../public/logo1.png";
import logo2 from "../../public/logo2.png";
import logo3 from "../../public/logo3.png";
import { Fade } from "react-awesome-reveal";
import { motion } from "framer-motion";

const bounceTransition = {
  y: {
    duration: 3,
    repeat: Infinity,
    repeatType: "mirror",
    ease: "easeInOut",
  },
};

const Logo = () => {
  return (
    <div>
      <div className="flex justify-center items-center">
        <h1 className="NotoSerif text-7xl max-xl:text-6xl max-md:text-5xl max-sm:text-4xl 4xl:text-9xl">
          <Fade cascade delay={1000} damping={0.2} triggerOnce>
            Details of Gangster
          </Fade>
        </h1>
      </div>
      <div className="flex justify-center items-center relative top-20">
        <div>
          <motion.img
            transition={bounceTransition}
            animate={{
              y: ["25%", "-25%"],
            }}
            src={logo3}
            alt="logo1"
            className="pl-20 h-20 max-md:h-14 max-md:pl-10 4xl:h-80"
          />
          <img src={lightBase} alt="lightBase" className="w-60 max-md:w-40 4xl:w-[500px]" />
        </div>
        <div>
          <motion.img
            transition={bounceTransition}
            animate={{
              y: ["15%", "-15%"],
            }}
            src={logo2}
            alt="logo1"
            className="pl-14 h-60 max-md:h-24 max-md:pl-10 4xl:h-[600px]"
          />
          <img src={lightBase} alt="lightBase" className="w-96 max-md:w-60 4xl:w-[800px]" />
        </div>
        <div>
          <motion.img
            transition={bounceTransition}
            animate={{
              y: ["25%", "-25%"],
            }}
            src={logo1}
            alt="logo1"
            className="pl-20 h-20 max-md:h-14 max-md:pl-10 4xl:h-80"
          />
          <img src={lightBase} alt="lightBase" className="w-60 max-md:w-40 4xl:w-[500px]" />
        </div>
      </div>
    </div>
  );
};

export default Logo;
