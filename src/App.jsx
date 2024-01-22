import React from "react";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Play from "./components/Play";
import Logo from "./components/Logo";
import { gsap, Power3 } from "gsap";
import Contact from "./components/Contact";

const App = () => {
  let tl = new gsap.timeline();
  let ease = Power3.easeOut();
  return (
    <div className="overflow-hidden">
      <Header timeline={tl} ease={ease} />
      <Body timeline={tl} />
      <About />
      <Play />
      <Logo />
      <Contact />
    </div>
  );
};
export default App;
