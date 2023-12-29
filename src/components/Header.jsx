import React, { useRef, useState, useEffect } from "react";
import signinBG from "../../public/13986 1.png";
import dropdown from "../../public/Vector 2.svg";
import divider from "../../public/Vector 1.svg";

const CommonSVG = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="50"
    height="9"
    viewBox="0 0 50 9"
    fill="none"
  >
    <g filter="url(#filter0_f_83_899)">
      <path
        d="M47.0394 4.65502L2.75892 6.13112L2.77308 2.80996L47.0394 4.65502Z"
        fill="#9733BE"
      />
    </g>
    <defs>
      <filter
        id="filter0_f_83_899"
        x="0.759033"
        y="0.810059"
        width="48.2803"
        height="7.32104"
        filterUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB"
      >
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="BackgroundImageFix"
          result="shape"
        />
        <feGaussianBlur
          stdDeviation="1"
          result="effect1_foregroundBlur_83_899"
        />
      </filter>
    </defs>
  </svg>
);

const Header = ({ timeline, ease }) => {
  const [selectedMenuItem, setSelectedMenuItem] = useState("HOME");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  let logo = useRef(null);
  let menu_item1 = useRef(null);
  let menu_item2 = useRef(null);
  let menu_item3 = useRef(null);
  let menu_item4 = useRef(null);
  const hasAnimationPlayed = useRef(false);
  useEffect(() => {
    if (!hasAnimationPlayed.current) {
      timeline.from(logo, 1, {
        opacity: 0,
        y: "100",
      });
      timeline.from([menu_item1, menu_item2, menu_item3, menu_item4], 1, {
        opacity: 0,
        y: -200,
        stagger: {
          amount: 0.9,
        },
        ease: ease,
      });

      hasAnimationPlayed.current = true;
    }
  }, []);
  const handleMenuItemClick = (menuItem) => {
    setSelectedMenuItem(menuItem);
  };
  return (
    <div className="bg-black  p-10 px-60 max-2xl:px-40 max-xl:px-10 4xl:text-4xl">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-14 max-lg:gap-5 max-md:hidden cursor-pointer z-10">
          <h1
            className={`${
              selectedMenuItem === "HOME" ? "text-[#07BD97] pt-2" : "white"
            } DMSans`}
            ref={(el) => (logo = el)}
            onClick={() => handleMenuItemClick("HOME")}
          >
            HOME {selectedMenuItem === "HOME" && <CommonSVG />}
          </h1>
          <h1
            className={`${
              selectedMenuItem === "ABOUT" ? "text-[#07BD97] pt-2" : "white"
            } DMSans`}
            ref={(el) => (menu_item1 = el)}
            onClick={() => handleMenuItemClick("ABOUT")}
          >
            ABOUT
            {selectedMenuItem === "ABOUT" && <CommonSVG />}
          </h1>
          <h1
            className={`${
              selectedMenuItem === "MISSION" ? "text-[#07BD97] pt-2" : "white"
            } DMSans`}
            ref={(el) => (menu_item2 = el)}
            onClick={() => handleMenuItemClick("MISSION")}
          >
            MISSION
            {selectedMenuItem === "MISSION" && <CommonSVG />}
          </h1>
          <h1
            className={`${
              selectedMenuItem === "SUBSCRIBE" ? "text-[#07BD97] pt-2" : "white"
            } DMSans`}
            ref={(el) => (menu_item3 = el)}
            onClick={() => handleMenuItemClick("SUBSCRIBE")}
          >
            SUBSCRIBE {selectedMenuItem === "SUBSCRIBE" && <CommonSVG />}
          </h1>
          <h1
            className={`${
              selectedMenuItem === "COMMUNITY" ? "text-[#07BD97] pt-2" : "white"
            } DMSans`}
            ref={(el) => (menu_item4 = el)}
            onClick={() => handleMenuItemClick("COMMUNITY")}
          >
            COMMUNITY
            {selectedMenuItem === "COMMUNITY" && <CommonSVG />}
          </h1>
        </div>

        <div className="max-md:inline hidden z-10">
          <button onClick={toggleMenu}>
            <svg
              className="block h-4 w-4 fill-current"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Mobile menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
            </svg>
          </button>
        </div>
        <div className="flex gap-6 4xl:text-4xl 4xl:pr-40">
          <div>
            <h1>ENG</h1>
          </div>
          <div className="pt-2">
            <img src={dropdown} alt="" className="4xl:w-8"/>
          </div>
          <div>
            <img src={divider} alt="divider" className="h-8 4xl:w-10 4xl:h-14" />
          </div>
          <div className="z-0">
            <img src={signinBG} alt="signinBG" className="absolute h-8 4xl:h-24 4xl:w-96 4xl:top-4 4xl:right-52 -z-10" />
            <h1 className="pl-12 pt-1 text-sm 4xl:text-4xl relative 4xl:left-10">Sign In</h1>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="lg:hidden bg-black w-full h-screen">
          <ul className="flex flex-col gap-4">
            <li>
              <a
                href="#"
                className={`${
                  selectedMenuItem === "HOME" ? "text-[#07BD97] pt-2" : "white"
                } DMSans`}
                onClick={() => handleMenuItemClick("HOME")}
              >
                HOME
                {selectedMenuItem === "HOME" && <CommonSVG />}
              </a>
            </li>
            <li>
              <a
                href="#"
                className={`${
                  selectedMenuItem === "ABOUT" ? "text-[#07BD97] pt-2" : "white"
                } DMSans`}
                onClick={() => handleMenuItemClick("ABOUT")}
              >
                ABOUT
                {selectedMenuItem === "ABOUT" && <CommonSVG />}
              </a>
            </li>
            <li>
              <a
                href="#"
                className={`${
                  selectedMenuItem === "MISSION"
                    ? "text-[#07BD97] pt-2"
                    : "white"
                } DMSans`}
                onClick={() => handleMenuItemClick("MISSION")}
              >
                MISSION
                {selectedMenuItem === "MISSION" && <CommonSVG />}
              </a>
            </li>
            <li>
              <a
                href="#"
                className={`${
                  selectedMenuItem === "SUBSCRIBE"
                    ? "text-[#07BD97] pt-2"
                    : "white"
                } DMSans`}
                onClick={() => handleMenuItemClick("SUBSCRIBE")}
              >
                SUBSCRIBE
                {selectedMenuItem === "SUBSCRIBE" && <CommonSVG />}
              </a>
            </li>
            <li>
              <a
                href="#"
                className={`${
                  selectedMenuItem === "COMMUNITY"
                    ? "text-[#07BD97] pt-2"
                    : "white"
                } DMSans`}
                onClick={() => handleMenuItemClick("COMMUNITY")}
              >
                COMMUNITY
                {selectedMenuItem === "COMMUNITY" && <CommonSVG />}
              </a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Header;
