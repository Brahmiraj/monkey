import React from "react";
import aboutImg from "../../public/aboutImg.png";
import { Fade } from "react-awesome-reveal";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="flex justify-between p-5 max-xl:flex-col overflow-hidden">
      <div className="w-1/2 p-10 pl-20 flex flex-col gap-4 max-xl:w-full max-xl:p-2 max-lg:pl-0">
        <div>
          <h1 className="DMSans text-3xl">
            <Fade cascade damping={0.1} triggerOnce>
              About the
            </Fade>
          </h1>
        </div>
        <div>
          <h1 className="NotoSerif text-7xl uppercase colorGradien">
            <span className="bg-gradient-to-r from-purple-600 to-teal-500 bg-[length:100%_6px] bg-no-repeat bg-bottom">
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
          <h1 className="DMSans text-xl">
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
      <motion.div
        initial={{
          x: 200,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
          delay: 1.5,
        }}
        viewport={{ once: true }}
        whileInView={{ opacity: 1, x: 0 }}
        className="w-1/2 max-xl:w-full flex justify-center items-center"
      >
        <img
          src={aboutImg}
          alt=""
          className="h-[650px] max-xl:h-[800px] max-lg:h-[650px] max-md:h-[400px]"
        />
      </motion.div>
    </div>
  );
};

export default About;
