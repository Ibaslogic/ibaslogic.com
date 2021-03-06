import { useState } from "react";
import Link from "next/link";
import navLinks from "../data/navLinks";

import SocialItem from "./SocialItem";

import { FaGithub, FaTwitter } from "react-icons/fa";
import { MdClose } from "react-icons/md";
import HeaderItemsRender from "./Global/Dropdown/HeaderItemsRender";

const Header = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const openDrawer = () => {
    setNavbarOpen(true);
  };

  const closeDrawer = () => {
    setNavbarOpen(false);
  };

  return (
    <header className="z-[1000] sticky top-0 md:right-0 md:left-0 bg-white h-[62px] w-full text-[#24292f]">
      {/*fixed shadow */}
      <div className="flex justify-between items-center content-center px-6 md:px-5 max-w-[68rem] mx-auto h-[62px] flex-wrap">
        <div className="flex items-center justify-start flex-row-reverse flex-nowrap ">
          <div className="ml-2 sm:ml-0 sm:mr-5">
            <Link href="/">
              <a className="flex">
                <img className="w-9 h-9" src="/static/logo.png" alt="" />
              </a>
            </Link>
          </div>
          <button
            onClick={openDrawer}
            className="relative cursor-pointer w-10 h-10 bg-transparent border-none focus:outline-none mr-2 ml-[-6px] rounded-[50%] flex items-center justify-center sm:hidden"
          >
            <div className="absolute block h-[1px] w-[22px] bg-black top-[15px]" />
            <div className="absolute block h-[1px] w-[22px] bg-black top-[23px]" />
          </button>
        </div>
        <nav className="w-full order-2 block sm:order-none sm:h-auto sm:w-auto">
          {navbarOpen && (
            <div
              className="fixed top-0 left-0 w-full h-screen z-[99] opacity-[0.85] bg-black"
              role="button"
              tabIndex="0"
              onClick={closeDrawer}
            >
              <button className="absolute top-[16px] right-[15px] cursor-pointer text-white bg-transparent border-none focus:outline-none">
                <MdClose style={{ fontSize: "24px" }} />
              </button>
            </div>
          )}

          <ul
            className={`bg-white custom_transform invisible fixed right-14 bottom-0 left-0 top-0 max-w-[300px] min-w-[264px] z-[100] sm:static sm:flex sm:flex-row sm:max-w-full sm:w-auto sm:visible sm:bg-transparent px-4 sm:px-0 sm:cust_translateZ  ${
              navbarOpen ? "show-nav" : ""
            }`}
          >
            {navLinks.map(({ link, label }, index) => (
              <li className="first:mt-20 sm:first:mt-0" key={index}>
                <Link href={`${link}`}>
                  <a className="block border-b border-solid border-[#cfd6dd] sm:border-none text-base leading-[24px] tracking-tight sm:opacity-75 sm:hover:opacity-100 capitalize sm:px-4 py-4">
                    {label}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex-1" />
        <div className="flex items-center justify-center gap-2">
          <SocialItem
            Icon={FaGithub}
            link="#"
            title="Star on Github"
            style="text-[21px]"
          />
          <SocialItem
            Icon={FaTwitter}
            link="#"
            title="Follow on Twitter"
            style="text-[21px]"
          />
          <HeaderItemsRender />
        </div>
      </div>
    </header>
  );
};

export default Header;
