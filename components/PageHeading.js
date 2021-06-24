const PageHeading = ({ title }) => {
  return (
    <div className="mb-10 md:mb-12">
      <h1 className="font-bold text-3xl md:text-5xl text-black tracking-tight">
        {title}
      </h1>
    </div>
  );
};

export default PageHeading;
