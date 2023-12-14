import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import monkeyFrame from "../../public/monkey frame.png";
import playLine from "../../public/PlayLine.png";
import { Fade } from "react-awesome-reveal";
import { motion } from "framer-motion";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const Play = () => {
  let h1 = useRef(null);
  useEffect(() => {
    const text = "How to Play";
    let timeline = gsap.timeline();

    const characters = text.split("");

    h1.innerHTML = "";
    
    characters.forEach((char, index) => {
      const span = document.createElement("span");
      span.innerHTML = char;
      h1.appendChild(span);

      gsap.set(span, { opacity: 0, y: "100%", skewY: 1 });

      timeline.to(span, {
        duration: 0.2,
        opacity: 1,
        y: 0,
        skewY: 0,
        ease: "power4.out",
        onComplete: () => {
          if (index === characters.length - 1) {
          }
        },
      });
    });

    gsap.to(".e", {
      scrollTrigger: {
        trigger: ".d",
        scrub: 1,
        markers: false,
        x: -100,
      },
      x: -200,
      ease: "none",
      duration: 3
    });
  })
  return (
    <div className="flex max-xl:flex-col">
      <div className="e w-1/2 max-xl:w-full flex justify-center items-center relative left-40">
          <img
            src={monkeyFrame}
            alt=""
            className="h-[800px] max-md:h-[600px] max-sm:h-[400px]"
          />
      </div>
      <div className="w-1/2 max-xl:w-full flex-col justify-center items-center max-sm:p-10 max-md:p-20 max-lg:p-32 max-xl:p-40">
        <div>
          <h1 className="NotoSerif text-7xl" ref={(el) => (h1 = el)}>
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
