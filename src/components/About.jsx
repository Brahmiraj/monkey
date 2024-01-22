import React, { useEffect } from "react";
import aboutImg from "../../public/aboutImg.png";
import { Fade } from "react-awesome-reveal";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import dot from "../../public/dot.svg";
import astro from "../../public/astro.png";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  useEffect(() => {
    gsap.to(".d", {
      scrollTrigger: {
        trigger: ".d",
        scrub: 1,
        markers: false,
        x: -100,
      },
      x: 200,
      ease: "none",
      duration: 3,
    });
  }, []);
  return (
    <div className="max-w-[1600px] mx-auto">
      <div className="flex justify-between p-5 max-xl:flex-col overflow-hidden">
        <div className="w-1/2 p-10 pl-20 flex flex-col gap-4 max-xl:w-full max-xl:p-2 max-lg:pl-0">
          <div>
            <h1 className="DMSans text-3xl 4xl:text-7xl">
              <Fade cascade damping={0.1} triggerOnce>
                About the
              </Fade>
            </h1>
          </div>
          <div>
            <h1 className="NotoSerif text-7xl uppercase colorGradien">
              <span className="bg-gradient-to-r from-purple-600 to-teal-500 bg-[length:100%_6px] bg-no-repeat bg-bottom 4xl:text-9xl">
                <Fade cascade delay={1000} damping={0.2} triggerOnce>
                  Gangsta
                </Fade>
              </span>
            </h1>
          </div>
          <motion.div
            initial={{
              x: -200,
              opacity: 0,
            }}
            transition={{
              duration: 1.2,
              delay: 1.5,
            }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className={"text-xl"}
          >
            <h1 className="DMSans text-xl 4xl:text-5xl">
              Lorem ipsum dolor sit amet consectetur. Dolor aliquet amet
              pellentesque scelerisque velit arcu bibendum maecenas duis. Mauris
              arcu fermentum posuere vulputate eget ipsum faucibus a. A libero
              euismod adipiscing iaculis. A pretium et magnis maecenas pretium
              proin pellentesque urna. Et posuere diam proin enim at nisl ornare
              purus. Maecenas nullam molestie egestas a donec tincidunt
              consectetur urna. Feugiat hendrerit ac augue amet cursus sed.
              Tristique ultrices est convallis feugiat.
            </h1>
          </motion.div>
        </div>
        <div className=" w-2/3 max-xl:w-full flex justify-center items-center relative xl:right-20  right-30">
          <img
            src={aboutImg}
            alt=""
            className="h-[750px] max-xl:h-[800px] max-lg:h-[650px] max-md:h-[400px] 4xl:h-[1200px]"
          />
        </div>
        <div className="absolute bottom-[-630px] right-16">
          <img src={dot} alt="dot" className="w-4" />
        </div>
        <div className="absolute bottom-[-830px] right-16">
          <img src={dot} alt="dot" className="w-3" />
        </div>
        <div className="absolute bottom-[-730px] right-[700px]">
          <img src={dot} alt="dot" className="w-3" />
        </div>
        <div className="absolute bottom-[-400px] left-[600px]">
          <img src={astro} alt="astro" className="w-32" />
        </div>
      </div>
    </div>
  );
};

export default About;
