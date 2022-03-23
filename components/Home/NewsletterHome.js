import Subscribe from "../Newsletter/Subscribe";

const NewsletterHome = () => {
  return (
    <section className="py-24 sm:py-36">
      <div className="px-6 md:px-5 mx-auto max-w-5xl flex flex-col items-center md:flex-row md:justify-between">
        <div className="text-center mb-6 md:text-left md:mb-0 md:max-w-lg md:mt-[-15px]">
          <h3 className="text-[2rem] md:text-5xl tracking-[-1px] leading-tight mb-3 font-bold">
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
  );
};

export default NewsletterHome;
