import React from "react";
import monkey from "../../public/monkey.png";
import monkeybg from "../../public/monkeybg.png";
import signinBG from "../../public/13986 1.png";
import { JackInTheBox } from "react-awesome-reveal";
import { Zoom } from "react-awesome-reveal";
import { Fade } from "react-awesome-reveal";

const Body = () => {
  return (
    <div >
      <div className="absolute top-[1em] max-sm:top-48 max-md:top-32 -z-10 overflow-hidden">
        <img src={monkeybg} alt="monkeybg" className="object-none"/>
      </div>
      <JackInTheBox direction="down" delay={500} triggerOnce>
        <div className="flex justify-center items-center w-full overflow-hidden">
          <img src={monkey} alt="monkey" className="h-96" />
        </div>
      </JackInTheBox>
      <div className="flex flex-col gap-3 -top-40">
        <div className="flex justify-center items-center BokorText text-9xl max-2xl:text-8xl max-xl:text-7xl max-lg:text-6xl max-md:text-5xl max-sm:text-4xl uppercase w-full">
          <h1>
            <Zoom cascade direction="right" delay={1000} damping={0.1} triggerOnce>
              welcome the crime gangsta
            </Zoom>
          </h1>
        </div>
        <div className="flex justify-center items-center">
          <h1 className="DMSerifText text-xl">
            <Fade direction="left" delay={3500} cascade damping={0.2} triggerOnce>
              crime is Always crime
            </Fade>
          </h1>
        </div>
        <JackInTheBox delay={500} triggerOnce>
          <div className="z-0 flex justify-center items-start">
            <img
              src={signinBG}
              alt="signinBG"
              className="absolute h-16 -z-10"
            />
            <h1 className="pl-1 pt-4 text-xl NotoSerif">Register Now</h1>
          </div>
        </JackInTheBox>
      </div>
    </div>
  );
};

export default Body;
