import React, {useRef, useState, useEffect} from "react";
import signinBG from '../../public/13986 1.png'
import dropdown from '../../public/Vector 2.svg'
import divider from '../../public/Vector 1.svg'

const Header = ({timeline, ease}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };


  let logo = useRef(null);
  let menu_item1 = useRef(null);
  let menu_item2 = useRef(null);
  let menu_item3 = useRef(null);
  let menu_item4 = useRef(null);
useEffect(() => {
  timeline.from(logo, 1, {
    opacity: 0,
    y: '100'
  });
  timeline.from([menu_item1, menu_item2, menu_item3, menu_item4], 1 ,{
    opacity: 0,
    y: -200,
    stagger: {
      amount: .9
    },
    ease: ease

  })
})

  return (
    <div className="bg-black  p-10 px-80 max-2xl:px-40 max-xl:px-20">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-4 max-md:hidden">
          <h1 className="text-[#07BD97]" ref = {el => logo = el}>HOME</h1>
          <h1 ref = {el => menu_item1 = el}>ABOUT</h1>
          <h1 ref = {el => menu_item2 = el}>MISSION</h1>
          <h1 ref = {el => menu_item3 = el}>SUBSCRIBE</h1>
          <h1 ref = {el => menu_item4 = el}>COMMUNITY</h1>
        </div>
        
        <div className="max-md:inline hidden">
          <button onClick={toggleMenu}>
          <svg className="block h-4 w-4 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
					<title>Mobile menu</title>
					<path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
				</svg>
          </button>
        </div>
        <div className="flex gap-6">
        <div>
          <h1>ENG</h1>
        </div>
        <div className="pt-2"><img src={dropdown} alt="" /></div>
        <div><img src={divider} alt="divider" className="h-8"/></div>
        <div className="z-0">
          <img src={signinBG} alt="signinBG" className="absolute h-8 -z-10"/>
          <h1 className="pl-12 pt-1 text-sm">Sign In</h1>
        </div>
      </div>
      </div>

      {isMenuOpen && (
        <div className="lg:hidden bg-black w-full h-screen">
          <ul className="flex flex-col gap-4">
            <li><a href="#" className="text-[#07BD97] hover:text-gray-500">HOME</a></li>
            <li><a href="#" className="text-gray-400 font-bold">ABOUT</a></li>
            <li><a href="#" className="text-gray-400 hover:text-gray-500">MISSION</a></li>
            <li><a href="#" className="text-gray-400 hover:text-gray-500">SUBSCRIBE</a></li>
            <li><a href="#" className="text-gray-400 hover:text-gray-500">COMMUNITY</a></li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Header;
