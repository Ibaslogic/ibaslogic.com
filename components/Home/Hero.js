import SocialButton from "../SocialButton";
import { FaTwitter } from "react-icons/fa";
import { BiStar } from "react-icons/bi";
import { TiLocationArrow } from "react-icons/ti";

const Hero = () => {
  return (
    <section className="bg-[#282c34] py-8 md:py-12">
      <div className="w-full px-3 sm:px-5 mx-auto max-w-6xl">
        <div className="flex justify-end">
          <SocialButton
            Icon={FaTwitter}
            link="https://twitter.com/intent/follow?screen_name=ibaslogic&amp;region=follow_link"
            label="Follow @ibaslogic"
            className="flex items-center space-x-1 my-0 mx-1.5  py-2 px-2 text-xs rounded text-white bg-[#066cbb] border-[#066cbb]"
          />
          <SocialButton
            Icon={BiStar}
            link="https://github.com/Ibaslogic/Ibaslogic"
            label="Star on Github"
            className="flex items-center space-x-1 my-0 ml-1.5 py-1 px-2.5 text-xs rounded text-gray-800 bg-gray-300 border-gray-300"
          />
        </div>
        <div className="mx-auto max-w-4xl text-white py-12">
          <h1 className="text-3xl md:text-[43px] mb-6 md:mb-8 font-normal tracking-tight">
            Dev Articles for the Self-Starters.
          </h1>
          <p className="text-lg md:text-xl mb-6 md:mb-8">
            No fluff! Just practical guides that work.
          </p>
          <p className="text-lg md:text-xl mb-9">
            Learn to Build a real-world project.
          </p>
          <div className="flex">
            <button className="text-left py-3 px-4 bg-[#00b8ff] font-semibold text-gray-900 border-[#00b8ff] tracking-widest">
              Get Started
            </button>
            <div className="flex items-center group text-[#00b8ff] ml-3 flex-wrap">
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
