import topSection from "../../data/aboutPage/topSection.json";
import secondSection from "../../data/aboutPage/secondSection.json";
import thirdSection from "../../data/aboutPage/thirdSection.json";
import AuthorInfo from "./AuthorInfo";
import Subscribe from "../Newsletter/Subscribe";
import PageHeading from "../PageHeading";
import Heading from "../Heading";
import AboutSection from "./AboutSection";

const AboutContent = () => {
  return (
    <div className="text-gray-600 max-w-full">
      <section className="mb-8">
        <PageHeading title="What Ibaslogic is all about" />
        <AboutSection section={topSection} />
      </section>
      <section className="mb-8">
        <Heading title="Open Source" />
        <AboutSection section={secondSection} />
      </section>
      <section className="pt-16 pb-20">
        <div className="mx-auto max-w-4xl flex flex-col items-center md:flex-row md:justify-between">
          <div className="text-center mb-6 md:text-left md:mb-0 md:max-w-lg md:mt-[-15px]">
            <h3 className="text-[2rem] text-[#111] md:text-5xl tracking-[-1px] leading-tight mb-3 font-bold">
              Get Exclusive Dev Knowledge
            </h3>
            <p>
              Keep up to date with the latest web development tips, tricks and
              actionable guides.
            </p>
          </div>
          <Subscribe />
        </div>
      </section>
      <section className="mb-8">
        <Heading title="Who is Ibas?" />
        <AboutSection section={thirdSection} />
      </section>
      <section>
        <div className="p-4 bg-[#f5f8fa] border border-solid border-[#e7eef2] authorInfoWrap grid items-center gap-y-2 gap-x-4">
          <AuthorInfo />
        </div>
      </section>
    </div>
  );
};

export default AboutContent;
