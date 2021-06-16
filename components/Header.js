import Link from "next/link";
import navLinks from "../data/navLinks";

import SocialItem from "./SocialItem";
import SocialButton from "./SocialButton";

// import icons from react-icons
import { FaTwitter, FaGithub } from "react-icons/fa";
// import { BiStar } from "react-icons/bi";

const Header = () => {
  return (
    <header className="shadow">
      <div className="w-full px-3 sm:px-5 mx-auto max-w-6xl text-center">
        <nav className="relative">
          <div className="flex justify-between items-center flex-wrap py-3 ">
            <Link href="/">
              <a className="flex mr-4">
                <img className="w-9 h-auto" src="/images/logo.png" alt="" />
              </a>
            </Link>
            <ul className="flex whitespace-nowrap w-full space-x-4 sm:space-x-8 overflow-x-scroll justify-between scrollbar-hide md:w-auto order-2 md:order-none mt-3 md:mt-0">
              {/*  */}
              {navLinks.map(({ link, label }, index) => (
                <li
                  className="last:pr-8 text-gray-700 hover:text-black"
                  key={index}
                >
                  <Link href={`${link}`}>{label}</Link>
                </li>
              ))}
            </ul>

            <div className="flex-1" />
            <div className="flex items-center">
              {/* <SocialButton
                Icon={BiStar}
                link="#"
                label="Star on Github"
                className="flex items-center space-x-1 my-0 mx-1.5 py-2 px-2 text-xs rounded text-gray-800 bg-[#eff3f6] border-gray-300"
              /> */}
              <SocialButton
                Icon={FaTwitter}
                link="https://twitter.com/intent/follow?screen_name=ibaslogic&amp;region=follow_link"
                label="Follow @ibaslogic"
                className="flex items-center space-x-1 my-0 mx-1.5 py-2 px-2 text-xs rounded text-white bg-[#066cbb] border-[#066cbb]"
              />
              <SocialItem Icon={FaGithub} link="#" title="Star on Github" />
            </div>
          </div>
          <div className="absolute top-12 right-0 bg-gradient-to-l from-white h-10 w-1/12 md:w-0 md:h-0" />
        </nav>
      </div>
    </header>
  );
};

export default Header;
