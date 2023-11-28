import React from "react";
import Header from "./components/header";
import Body from "./components/Body";
import About from "./components/About";
import Play from "./components/Play";
import Logo from "./components/Logo";
import Footer from "./components/Footer";

import { Flip } from "react-awesome-reveal";

const App = () => {
  return (
    <div>
      <Flip direction="horizontal" triggerOnce>
        <Header />
      </Flip>
      <Body />
      <About />
      <Play />
      <Logo />
      <Footer />
    </div>
  );
};

export default App;
