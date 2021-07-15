import Link from "next/link";
import Image from "next/image";

import useSWR from "swr";
import fetcher from "../lib/fetcher";

const FeaturedPost = ({
  title,
  description,
  slug,
  featured,
  containerStyle,
  homeStyle,
}) => {
  const { data } = useSWR(`/api/views/${slug}`, fetcher);
  const views = data?.total;

  return (
    <div className={homeStyle}>
      <Link href={`/${slug}/`}>
        <a className="block">
          <div className={containerStyle}>
            <div className="flex items-center sm:row-start-1 sm:row-end-4 removeFeatured">
              {featured ? (
                <Image
                  width={50}
                  height={50}
                  src={featured}
                  className="rounded-full bg-gray-200"
                  alt={title}
                />
              ) : (
                <div className="rounded-full bg-gray-400 w-[50px] h-[50px]" />
              )}
            </div>

            <div className="flex flex-wrap items-center justify-between text-gray-900 sm:col-span-2 sm:col-end-4">
              <h2 className="mr-2 font-medium text-lg md:text-xl">{title}</h2>
              <span className="text-sm block text-gray-500">
                {`${views ? new Number(views).toLocaleString() : "–––"} views`}
              </span>
            </div>
            <div className="mt-3 col-start-1 col-end-4 sm:col-start-2 sm:col-end-4">
              <p className=" text-gray-600 ">{description}</p>
            </div>
          </div>
        </a>
      </Link>
    </div>
  );
};

export default FeaturedPost;
