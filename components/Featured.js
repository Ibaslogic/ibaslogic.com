import Link from "next/link";

import useSWR from "swr";
import fetcher from "../lib/fetcher";

const FeaturedPost = ({ title, description, slug }) => {
  const { data } = useSWR(`/api/views/${slug}`, fetcher);
  const views = data?.total;

  return (
    <div className="featuredCard">
      <Link href={`/${slug}/`}>
        <a className="block">
          <div className="">
            <div className="flex flex-wrap items-center justify-between text-[#1a1a1a] sm:col-span-2 sm:col-end-4">
              <h2 className="mr-2 font-bold text-lg md:text-xl">{title}</h2>
              <span className="text-sm block text-gray-500">
                {`${views ? new Number(views).toLocaleString() : "–––"} views`}
              </span>
            </div>
            <div className="mt-3 col-start-1 col-end-4 sm:col-start-2 sm:col-end-4">
              <p className="text-[15px]">{description}</p>
            </div>
          </div>
        </a>
      </Link>
    </div>
  );
};

export default FeaturedPost;
