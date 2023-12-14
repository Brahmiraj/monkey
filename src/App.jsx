import React from "react";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Play from "./components/Play";
import Logo from "./components/Logo";
import {gsap, Power3} from 'gsap';
import Contact from "./components/Contact";
 
const App = () => {

  let tl = new gsap.timeline();
  let ease = Power3.easeOut();
  return (
    <div className="overflow-hidden">
        <Header timeline = {tl} ease = {ease}/>
      <Body timeline={tl} />
      <About />
      <Play />
      <Logo />
      <Contact />
    </div>
  );
};
export default App;


// import React, { useEffect } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { MotionPathPlugin } from "gsap/MotionPathPlugin";
// import Header from "./components/Header";
// import Body from "./components/Body";
// import About from "./components/About";
// import Play from "./components/Play";
// import Logo from "./components/Logo";
// import Footer from "./components/Footer";
// import Contact from "./components/Contact";

// // Register plugins
// gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

// const App = () => {
//   useEffect(() => {
//     mountainPara();
//     snowboardPara();
//   }, []);

//   return (
//     <div className="overflow-hidden">
//       <Header />
//       <Body />
//       <About />
//       <Play />
//       <Logo />
//       <Contact />
//     </div>
//   );
// };

// export default App;

// function mountainPara() {
//   gsap.timeline({
//     scrollTrigger: {
//       trigger: "#Mountain-Scroll",
//       start: "top top",
//       end: "bottom bottom",
//       scrub: true,
//     },
//   })
//     .from("#Sky", { y: 0 }, 0)
//     .fromTo("#Mountain-Top", { y: 150 }, { y: -300 }, 0)
//     .fromTo("#Mountain-Middle", { y: 350 }, { y: -300 }, 0)
//     .fromTo("#Mountain-Bottom", { y: 500 }, { y: -300 }, 0);
// }

// function snowboardPara() {
//   let direction = 1,
//     isRefreshing = false,
//     hero = document.getElementById("hero"),
//     heroSetter = gsap.quickSetter(hero, "rotation", "deg"),
//     rotation = { base: heroSetter("rotation"), extra: -180 },
//     addRotation = () => {
//       rotation.base = heroSetter("rotation");
//       heroSetter(rotation.base + rotation.extra);
//     };

//   gsap.set(hero, { scale: 0.7, autoAlpha: 1, transformOrigin: "50% 50%" });

//   gsap.to(hero, {
//     motionPath: {
//       path: "#trail",
//       align: "#trail",
//       autoRotate: 90,
//       alignOrigin: [0.5, 0.5],
//     },
//     onUpdate: addRotation,
//     immediateRender: true,
//     ease: "none",
//     scrollTrigger: {
//       trigger: "#Boarder-Scroll",
//       start: "top 100",
//       end: "bottom bottom",
//       scrub: true,
//       invalidateOnRefresh: true,
//       onUpdate: (self) => {
//         if (isRefreshing) {
//           direction = self.direction;
//         } else if (direction !== self.direction) {
//           direction = self.direction;
//           gsap.to(rotation, {
//             extra: direction === 1 ? -180 : 0,
//             ease: "power1.inOut",
//             onUpdate: () => heroSetter(rotation.base + rotation.extra),
//             overwrite: true,
//           });
//         }
//       },
//       onRefresh: () => {
//         isRefreshing = false;
//         if (heroSetter("rotation") === rotation.base) {
//           addRotation();
//         }
//       },
//     },
//   });
// }

