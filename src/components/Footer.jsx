import React from "react";
import footer from "../../public/footer.png";
import socialMedia from "../../public/Social media.svg";
import dot from '../../public/dot.svg'

const Footer = () => {
  return (
    <div className="overflow-hidden">
      <div className="flex justify-between items-end px-40 relative top-56 ">
        <img src={socialMedia} alt="socialMedia"/>
        <h1>All Rights Reserved - @Tharakadasun2023 </h1>
        <img src={dot} alt="dot" />
      </div>
      <div className="relative bottom-60">
        <img src={footer} alt="monkeybg" />
      </div>
    </div>
  );
};

export default Footer;
