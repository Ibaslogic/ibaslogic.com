import { useState } from "react";
import Link from "next/link";
import navLinks from "../data/navLinks";

import SocialItem from "./SocialItem";

// import icons from react-icons
import { FaTwitter, FaGithub } from "react-icons/fa";
import { MdClose } from "react-icons/md";
// import { BiStar } from "react-icons/bi";

const Header = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const openDrawer = () => {
    setNavbarOpen(true);
  };

  const closeDrawer = () => {
    setNavbarOpen(false);
  };

  return (
    <header className="fixed z-10 shadow bg-white h-[62px] w-full text-gray-800">
      {/* bg-[#20232a] */}
      <div className="flex justify-between items-center px-3 sm:px-4 max-w-5xl mx-auto h-[62px] flex-wrap">
        {/* w-full px-3 sm:px-5 mx-auto max-w-6xl sm:text-center */}
        <div className="flex items-center justify-start flex-row-reverse flex-nowrap ">
          <div className="ml-2 sm:ml-0 sm:mr-5">
            <Link href="/">
              <a className="flex">
                <img className="w-9 h-auto" src="/images/logo.png" alt="" />
              </a>
            </Link>
          </div>
          <button
            onClick={openDrawer}
            className="relative cursor-pointer w-[38px] h-[60px] bg-transparent border-none focus:outline-none mr-2 px-1 sm:hidden"
          >
            <div className="absolute block h-[2px] w-[22px] bg-gray-600 top-[25px]" />
            <div className="absolute block h-[2px] w-[22px] bg-gray-600 top-[33px]" />
          </button>
        </div>
        <nav className="w-full order-2 block sm:order-none sm:h-auto sm:w-auto">
          {/* <div className="flex justify-between items-center flex-wrap py-3 ">           */}
          {navbarOpen && (
            <div
              className="fixed top-0 left-0 w-full h-screen z-[99] opacity-[0.85] bg-black"
              role="button"
              tabIndex="0"
              onClick={closeDrawer}
            >
              <button className="absolute top-[15px] right-[15px] cursor-pointer text-white bg-transparent border-none focus:outline-none">
                <MdClose style={{ fontSize: "24px" }} />
              </button>
            </div>
          )}

          <ul
            className={`bg-white custom_transform invisible fixed right-14 bottom-0 left-0 top-0 max-w-[400px] min-w-[264px] z-[100] sm:static sm:flex sm:flex-row sm:max-w-full sm:w-auto sm:visible sm:bg-transparent sm:cust_translateZ  ${
              navbarOpen ? "show-nav" : ""
            }`}
          >
            {/* sm:flex whitespace-nowrap w-full space-x-4 sm:space-x-8 justify-between md:w-auto mt-3 md:mt-0 */}
            {/* order-2 md:order-none */}
            {navLinks.map(({ link, label }, index) => (
              <li
                className="first:mt-20 sm:first:mt-0"
                // last:pr-8 font-normal hover:text-white
                key={index}
              >
                <Link href={`${link}`}>
                  <a className="block leading-tight tracking-tight text-[#696969] hover:text-black capitalize px-6 py-[14px]">
                    {label}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex-1" />
        <div className="flex items-center justify-center">
          <SocialItem Icon={FaGithub} link="#" title="Star on Github" />
        </div>
        {/* </div> */}
        {/* <div className="absolute top-12 right-0 bg-gradient-to-l from-white h-10 w-1/12 md:w-0 md:h-0" /> */}
      </div>
    </header>
  );
};

export default Header;
