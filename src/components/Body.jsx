import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import monkey from "../../public/monkey.png";
import monkeybg from "../../public/monkeybg.png";
import signinBG from "../../public/13986 1.png";
import dot from "../../public/dot.svg";

const Body = () => {
  let h1 = useRef(null);
  let monkeyImage = useRef(null);
  let signinImage = useRef(null);

  useEffect(() => {
    const text = "Power of  Crypto Ecosystem";
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
    gsap.from(".a", {
      y: 400,
      duration: 1,
      delay: 4,
    });
    gsap.from(".b", {
      y: 400,
      duration: 1,
      delay: 5,
    });
  });

  return (
    <div className="">
      <div className="absolute top-5 max-sm:top-20  -z-10 overflow-hidden ">
        <img
          src={monkeybg}
          alt="monkeybg"
          className="2xl:w-[4250px] 4xl:h-[2100px]"
        />
      </div>
      <div className="absolute bottom-[-180px] right-40">
        <img src={dot} alt="dot" />
      </div>
      <div className="relative bottom-24 max-sm:bottom-16">
        <div className="flex justify-center items-center w-full overflow-hidden">
          <img
            ref={(el) => (monkeyImage = el)}
            src={monkey}
            alt="monkey"
            className="w-[500px] h-[500px] max-sm:w-[300px] max-sm:h-[300px] 4xl:w-[1000px] 4xl:h-[1000px]"
          />
        </div>
        <div className="flex flex-col gap-16 max-sm:gap-6 4xl:gap-36 relative bottom-16 max-sm:bottom-6 4xl:bottom-36">
          <div className="flex justify-center items-center BokorText 4xl:text-[300px] text-9xl max-2xl:text-8xl max-xl:text-7xl max-lg:text-6xl max-md:text-5xl max-sm:text-4xl uppercase w-full">
            <h1 ref={(el) => (h1 = el)}></h1>
          </div>
          <div className="text-center ">
            <p className="mx-10">
              Welcome to Project T, where innovation meets blockchain
              excellence. Embark on a journey into the future of decentralized
              finance and digital assets. Our cutting-edge crypto
            </p>
            <p className="mx-10">
              token is poised to redefine the landscape, offering unparalleled
              opportunities and a seamless user experience. Join us as we shape
              the next era of financial empowerment.
            </p>
          </div>
          <div className="z-0 flex justify-center items-start cursor-pointer	">
            <img
              ref={(el) => (signinImage = el)}
              src={signinBG}
              alt="signinBG"
              className="absolute h-16 4xl:w-[800px] 4xl:h-60 4xl:bottom-[-100px] -z-10"
            />
            <h1 className="pl-1 pt-4 text-xl NotoSerif 4xl:text-6xl">
              Buy Now
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
