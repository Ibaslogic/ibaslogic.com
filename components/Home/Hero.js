import SocialButton from "../SocialButton";
import { FaTwitter } from "react-icons/fa";
import { BiStar } from "react-icons/bi";
import { TiLocationArrow } from "react-icons/ti";

const Hero = () => {
  return (
    <section className="py-12 md:pt-24">
      <div className="w-full px-3 sm:px-4 mx-auto max-w-5xl text-center">
        <div className="flex justify-center">
          <SocialButton
            Icon={FaTwitter}
            link="https://twitter.com/intent/follow?screen_name=ibaslogic&amp;region=follow_link"
            label="Follow @ibaslogic"
            className="flex items-center space-x-1 my-0 mx-1.5  py-2 px-2 text-xs rounded text-white bg-[#1b95e0] border-[#7490a7] hover:bg-[#066cbb]"
          />
          <SocialButton
            Icon={BiStar}
            link="https://github.com/Ibaslogic/Ibaslogic"
            label="Star on Github"
            className="flex items-center space-x-1 my-0 ml-1.5 py-1 px-2.5 text-xs rounded text-gray-800 bg-[#dfdfdf] border-[#dfdfdf] hover:bg-[#eff3f6]"
          />
        </div>
        <div className=" text-gray-500 py-[2rem] md:py-12">
          <h1 className="text-[54px] sm:text-[65px] lg:text-[90px] leading-[1.2em] sm:leading-[1.1em] lg:leading-none sm:text-6xl text-[#111] mb-6 md:mb-8 font-extrabold tracking-tighter">
            The Modern Dev Tutorial for Beginners
          </h1>
          <p className="text-base md:text-xl mb-12">
            Hey, I'm Ibas. I write actionable guides that help aspiring
            developers learn web development in a much quicker way. No fluff!
            Just practical guides that work.
          </p>
          <div className="flex justify-center">
            <button className="text-left py-3 px-4 bg-[#111827] hover:bg-[#202b42] text-white border-[#111827] tracking-widest rounded-md">
              Get Started
            </button>
            <div className="flex items-center group ml-3 flex-wrap">
              <a
                className="block text-lg"
                href="https://ibaslogic.substack.com/"
              >
                Join Newsletter
              </a>
              <span className="block transition duration-300 ease-in-out transform group-hover:translate-x-1 group-hover:-translate-y-1 mb-2 ml-1">
                <TiLocationArrow />
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;