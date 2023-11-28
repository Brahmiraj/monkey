import React from "react";
import monkeyFrame from "../../public/monkey frame.png";
import playLine from "../../public/PlayLine.png";
import { Fade } from "react-awesome-reveal";
import { Roll } from "react-awesome-reveal";
import { motion } from "framer-motion";

const Play = () => {
  return (
    <div className="flex max-xl:flex-col">
      <div className="w-1/2 max-xl:w-full flex justify-center items-center">
        <Roll delay={1000} triggerOnce>
          <img
            src={monkeyFrame}
            alt=""
            className="h-[800px] max-md:h-[600px] max-sm:h-[400px]"
          />
        </Roll>
      </div>
      <div className="w-1/2 max-xl:w-full flex-col justify-center items-center max-sm:p-10 max-md:p-20 max-lg:p-32 max-xl:p-40">
        <div>
          <h1 className="NotoSerif text-7xl">
            <Fade cascade delay={1000} damping={0.2} triggerOnce>
              How to Play
            </Fade>
          </h1>
        </div>
        <div className="flex py-20">
          <div>
            <Fade delay={2000} triggerOnce>
              <img src={playLine} alt="" className="pt-4 h-96 w-16" />
            </Fade>
          </div>
          <div className="px-10 pr-80 flex flex-col gap-5 max-2xl:pr-60 max-xl:pr-40 max-sm:pr-0 max-sm:px-0">
            <motion.div
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
              className={"text-xl"}
            >
              <h1 className="text-[#07BD97] text-4xl DMSans">
                Discover a City
              </h1>
              <p className="DMSans text-lg">
                Lorem ipsum dolor sit amet consectetur. Habitasse ut sed enim in
                odio egestas platea viverra risus. Sed sodales vestibulum sed
                vulputate consequat feugiat amet convallis lacus.
              </p>
            </motion.div>
            <motion.div
              initial={{
                x: 200,
                opacity: 0,
              }}
              transition={{
                duration: 1.2,
                delay: 3.0,
              }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h1 className="text-[#07BD97] text-4xl DMSans">
                Meet the Gangster
              </h1>
              <p className="DMSans text-lg">
                Lorem ipsum dolor sit amet consectetur. Habitasse ut sed enim in
                odio egestas platea viverra risus.
              </p>
            </motion.div>
            <motion.div
              initial={{
                x: 200,
                opacity: 0,
              }}
              transition={{
                duration: 1.2,
                delay: 3.5,
              }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h1 className="text-[#07BD97] text-4xl DMSans">
                Discover a City
              </h1>
              <p className="DMSans text-lg">
                Lorem ipsum dolor sit amet consectetur. Habitasse ut sed enim in
                odio egestas platea viverra risus.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Play;
