const Heading = ({ title, desc }) => {
  return (
    <div className="mt-8 md:mt-12 mb-7 custom_heading">
      <h2 className="text-black font-bold text-2xl md:text-3xl tracking-tight capitalize">
        {title}
      </h2>
      {desc && <p className="text-gray-600">{desc}</p>}
    </div>
  );
};

export default Heading;
