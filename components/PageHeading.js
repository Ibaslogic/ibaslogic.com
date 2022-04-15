const PageHeading = ({ title }) => {
  return (
    <div className="mb-8">
      <h1 className="font-bold text-[35px] leading-[1.25] md:text-[38px] lg:text-[40px] text-black tracking-tight">
        {title}
      </h1>
    </div>
  );
};

export default PageHeading;
