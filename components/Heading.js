const Heading = ({ title, desc }) => {
  return (
    <div className="custom_heading">
      <h2 className="text-black leading-[1.25] font-semibold text-3xl md:text-[2rem] lg:text-[2.3rem] tracking-tight capitalize">
        {title}
      </h2>
      {desc && <p className="text-[#696969] mt-4">{desc}</p>}
    </div>
  );
};

export default Heading;
