import Link from "next/link";

const PostSeriesLink = ({ label, datas }) => {
  return (
    <div className="border border-solid border-[#dcdacb] bg-[#fbfbf8] rounded my-9 p-5">
      <p className="text-base leading-5 font-semibold mb-5 !mt-0">{label}</p>
      <ul className="flex flex-row flex-wrap justify-between list-none text-sm !mb-0">
        {datas.map((data, index) => (
          <li className="seriesLinkItem" key={index}>
            {data.prefix}
            {" –  "}
            <Link href={data.url}>
              <a>{data.label}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostSeriesLink;
