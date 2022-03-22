import Link from "next/link";
import { FaAngleRight } from "react-icons/fa";

const PostNextUnit = ({ heading, btnLabel, url }) => {
  return (
    <div className="mt-8 border-t text-2xl sm:text-[1.65rem] border-solid border-[#f0f0f0]">
      <p className="font-semibold text-lg mb-6">{heading}</p>

      <Link href={url}>
        <a className="inline-flex !no-underline items-center font-semibold px-4 py-3 bg-[#0065b3] hover:opacity-80 !text-white rounded-sm text-sm capitalize">
          {btnLabel}{" "}
          <span>
            <FaAngleRight />
          </span>
        </a>
      </Link>
    </div>
  );
};

export default PostNextUnit;
