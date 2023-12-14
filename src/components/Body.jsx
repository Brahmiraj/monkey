import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import monkey from "../../public/monkey.png";
import monkeybg from "../../public/monkeybg.png";
import signinBG from "../../public/13986 1.png";


const Body = () => {
  let h1 = useRef(null);
  let monkeyImage = useRef(null);
  let signinImage = useRef(null);

  useEffect(() => {
    const text = "welcome the crime gaNgsta";
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
        // delay:2,
        ease: "power4.out",
        onComplete: () => {
          if (index === characters.length - 1) {
          }
        },
      });
    });

    gsap.from(monkeyImage, {
      scrollTrigger: {
        trigger: monkeyImage,
        markers: false,
        toggleActions: "restart none none reset",
      },
      duration: 1,
      scale: 1.4,
      opacity: 0,
      delay: 2,
      ease: "Power2.easeInOut",
    });

    gsap.from(signinImage, {
      scrollTrigger: {
        trigger: signinImage,
        markers: false,
        toggleActions: "restart none none reset",
      },
      duration: 1,
      scale: 1.4,
      opacity: 0,
      delay: 5,
      ease: "Power2.easeInOut",
    });
    gsap.from(".a" ,{
      y:400,
      duration: 1,
      delay:4
    })
    gsap.from(".b" ,{
      y:400,
      duration: 1,
      delay:5
    })
    
  });

  return (
    <div>
      <div className="absolute top-[1em] max-sm:top-48 max-md:top-32 -z-10 overflow-hidden">
        <img src={monkeybg} alt="monkeybg" className="object-none" />
      </div>
      <div className="flex justify-center items-center w-full overflow-hidden">
        <img
          ref={(el) => (monkeyImage = el)}
          src={monkey}
          alt="monkey"
          className="h-96"
        />
      </div>
      <div className="flex flex-col gap-3 -top-40">
        <div className="flex justify-center items-center BokorText text-9xl max-2xl:text-8xl max-xl:text-7xl max-lg:text-6xl max-md:text-5xl max-sm:text-4xl uppercase w-full">
          <h1 ref={(el) => (h1 = el)}></h1>
        </div>
        <div className="flex justify-center items-center">
          <h1 className="DMSerifText text-xl a">crime is Always crime</h1>
        </div>
        <div className="z-0 flex justify-center items-start">
          <img ref={(el) => (signinImage = el)} src={signinBG} alt="signinBG" className="absolute h-16 -z-10" />
          <h1 className="pl-1 pt-4 text-xl NotoSerif b">Register Now</h1>
        </div>
      </div>
    </div>
  );
};

export default Body;
