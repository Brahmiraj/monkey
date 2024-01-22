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
                  Project T
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
            <h1 className="DMSans text-xl 4xl:text-5xl py-5 about-t">
              project T stands at the forefront of the crypto revolution,
              positioning itself as a beacon of innovation and excellence in the
              rapidly evolving blockchain landscape. At its core, Project T is
              more than just a crypto token; it's a visionary platform designed
              to reshape the future of decentralized finance. By seamlessly
              integrating cutting-edge technology and user-centric design,
              Project T offers a transformative experience for both seasoned
              enthusiasts and newcomers to the world of digital assets.
            </h1>
            <h1 className="DMSans text-xl 4xl:text-5xl py-5 about-t">
              Imagine a crypto ecosystem where transactions are not just secure
              and efficient, but also intuitive and accessible. Project T
              delivers on this vision by combining robust blockchain
              architecture with a commitment to user-friendly interfaces. As you
              explore the platform, you'll discover a diverse range of
              opportunities, from staking and yield farming to innovative
              governance models that empower the community.
            </h1>
            <h1 className="DMSans text-xl 4xl:text-5xl py-5 about-t">
              Project T is more than a digital asset; it's a community-driven
              initiative. Engage with like-minded individuals, participate in
              governance decisions, and contribute to the evolution of the
              Project T ecosystem. Whether you're a seasoned crypto veteran or
              just starting your journey, Project T invites you to be part of a
              movement that is shaping the next era of financial empowerment.
              Join us as we unlock the full potential of blockchain technology
              and usher in a new era of possibilities with Project T.
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
