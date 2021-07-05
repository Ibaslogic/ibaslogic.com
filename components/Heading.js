const Heading = ({ title, desc }) => {
  return (
    <div className="custom_heading">
      <h2 className="text-black font-bold text-[2rem] tracking-tighter capitalize">
        {title}
      </h2>
      {desc && <p className="text-[#696969] mt-4">{desc}</p>}
    </div>
  );
};

export default Heading;
