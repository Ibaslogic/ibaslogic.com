const PageHeading = ({ title }) => {
  return (
    <div className="mb-8 md:mb-10">
      <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl text-black tracking-tight">
        {title}
      </h1>
    </div>
  );
};

export default PageHeading;
