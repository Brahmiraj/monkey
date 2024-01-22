import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import monkeyFrame from "../../public/monkey frame.png";
import playLine from "../../public/PlayLine.png";
import { Fade } from "react-awesome-reveal";
import { motion } from "framer-motion";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import dot from "../../public/dot.svg";
import lightning from "../../public/lightning.png";
import astro from "../../public/astro.png";
import GreenRight from "../../public/GreenRight.png";

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
    <div className="max-w-[1600px] mx-auto">
      <div className="flex max-xl:flex-col">
        <div className="e w-1/2 max-xl:w-full flex justify-center items-center relative max-sm:left-52 left-60 ">
          <img
            src={monkeyFrame}
            alt=""
            className="h-[800px] max-md:h-[600px] max-sm:h-[400px] "
          />
        </div>
        <div className="w-1/2 max-xl:w-full flex-col justify-center items-center max-sm:p-10 max-md:p-20 max-lg:p-32 max-xl:p-40">
          <div>
            <h1 className="NotoSerif text-7xl " ref={(el) => (h1 = el)}></h1>
          </div>
          <div className="flex py-20">
            <div className="w-3.5 h-[388.43px] justify-end items-center gap-2.5 inline-flex">
              <div className="w-3.5 h-[358.43px] max-sm:h-[368px] relative max-sm:right-3">
                <div className="w-3.5 h-3.5 left-[14px] top-0 relative bg-white rounded-full border border-white " />
                <div className="w-1 h-[285px] max-sm:h-[181px] bg-gradient-to-b from-green-500 to-purple-700 relative left-[19px]" />
                <div className="w-3.5 h-3.5 left-[14px] relative rounded-full border border-white " />
                <div className="w-1 h-[230px] max-sm:h-[110px] bg-gradient-to-b from-green-500 to-purple-700 relative left-[19px] " />
                <div className="w-3.5 h-3.5 left-[14px] relative rounded-full border border-white " />
              </div>
            </div>
            <div className="px-10 pr-80 flex flex-col gap-5 max-2xl:pr-60 max-xl:pr-0 max-sm:pr-0 max-sm:px-0 relative max-sm:left-5">
              <motion.div
                initial={{
                  x: 200,
                  opacity: 0,
                }}
                transition={{
                  duration: 1.2,
                  delay: 1.2,
                }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className={"text-xl"}
              >
                <h1 className="text-[#07BD97] text-4xl DMSans max-sm:text-2xl ">
                  Innovative Technology:
                </h1>
                <p className="DMSans text-lg max-sm:text-base w-96 max-sm:w-72 max-xl:w-96 ">
                  Project T leverages cutting-edge blockchain technology,
                  ensuring secure and efficient transactions while pushing the
                  boundaries of what's possible in decentralized finance.
                </p>
              </motion.div>
              <motion.div
                initial={{
                  x: 200,
                  opacity: 0,
                }}
                transition={{
                  duration: 1.2,
                  delay: 1.2,
                }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h1 className="text-[#07BD97] text-4xl DMSans max-sm:text-2xl ">
                  User-Centric Design:
                </h1>
                <p className="DMSans text-lg max-sm:text-base w-96 max-sm:w-72 max-xl:w-96 ">
                  With a focus on simplicity and accessibility, Project T
                  provides a seamless user experience, making it easy for both
                  beginners and experienced users to navigate the crypto
                  landscape.
                </p>
              </motion.div>
              <motion.div
                initial={{
                  x: 200,
                  opacity: 0,
                }}
                transition={{
                  duration: 1.2,
                  delay: 1.2,
                }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h1 className="text-[#07BD97] text-4xl DMSans max-sm:text-2xl ">
                  Community Empowerment:
                </h1>
                <p className="DMSans text-lg max-sm:text-base w-96 max-sm:w-72 max-xl:w-96 ">
                  Project T is more than a token; it's a community-driven
                  initiative. Engage in governance decisions, contribute to the
                  ecosystem, and be part of shaping the future of decentralized
                  finance.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-[-1030px] right-[1000px]">
          <img src={dot} alt="dot" className="w-3" />
        </div>
        {/* <div className="absolute bottom-[-2350px]  right-[300px]">
          <img
            src={lightning}
            alt="lightning"
            className="w-[1000px]  opacity-70"
          />
        </div> */}
        {/* <div className="absolute bottom-[-1950px] left-[200px]">
          <img src={astro} alt="astro" className="w-32" />
        </div> */}
        {/* <div className="absolute bottom-[-2700px]  right-0">
          <img
            src={GreenRight}
            alt="GreenRight"
            className="w-[500px] "
          />
        </div> */}
      </div>
    </div>
  );
};

export default Play;
