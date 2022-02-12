import FooterList from "./FooterList";
import SocialFollow from "./socialFollow";
import FooterTitle from "./FooterTitle";

import config from "../../data/siteMetadata.js";

const { author } = config;

const Footer = () => {
  const learn = [
    { item: "blog", url: "#" },
    { item: "series", url: "#" },
    { item: "Open Source", url: "#" },
  ];
  const company = [
    { item: "home", url: "#" },
    { item: "about", url: "#" },
    { item: "contact", url: "#" },
  ];
  const legal = [
    { item: "privacy", url: "#" },
    { item: "Terms of Service", url: "#" },
  ];
  const more = [
    { item: "support me", url: "#" },
    { item: "Newsletter", url: "#" },
  ];

  return (
    <footer className="bg-gray-50 text-[#24292f] text-[0.9em] pt-12 pb-9 sm:pt-12 sm:pb-9 border border-solid border-[#eaeaea] segoe-font">
      <div className="px-6 md:px-5 mx-auto max-w-[68rem]">
        <div className="grid grid-cols-1 gap-y-6 sm:flex sm:flex-row sm:flex-wrap sm:justify-between">
          <div className="grid grid-cols-2 gap-6 sm:flex sm:flex-wrap sm:justify-between sm:flex-grow sm:mr-8 md:mr-20">
            <FooterList title="learn" list={learn} />
            <FooterList title="company" list={company} />
            <FooterList title="more" list={more} />
            <FooterList title="legal" list={legal} />
          </div>
          <div className="sm:w-[14%]">
            <FooterTitle title="connect" />
            <SocialFollow />
          </div>
        </div>
        <div className="mt-12">
          <p>
            Copyright &copy; {new Date().getFullYear().toString()}{" "}
            <a
              href="https://twitter.com/ibaslogic"
              target="_blank"
              rel="noopener noreferrer"
              title="twitter"
            >
              {author}
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
