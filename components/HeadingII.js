import Link from "next/link";
const HeadingII = ({ title }) => {
  return (
    <div className="flex flex-row flex-wrap justify-between items-center border-b border-solid border-[#f0f0f2] pb-3 mx-[6px]">
      <h2 className="text-black font-semibold text-2xl md:text-[2rem] lg:text-[27px] tracking-tight capitalize">
        {title}
      </h2>
      <Link href="/blog/">
        <a className="text-blue-800 opacity-75 hover:opacity-100">All posts</a>
      </Link>
    </div>
  );
};

export default HeadingII;
