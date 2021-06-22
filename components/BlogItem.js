import Link from "next/link";
import Image from "next/image";

import useSWR from "swr";
import fetcher from "../lib/fetcher";

const BlogItem = (props) => {
  const { title, description, slug, featured, draft } = props;

  const { data } = useSWR(`/api/views/${slug}`, fetcher);
  const views = data?.total;

  return (
    draft === false && (
      <li>
        <Link href={`/${slug}`}>
          <a className="block">
            <div className="grid grid-custom sm:grid-custom-col-sm">
              <div className="flex items-center sm:row-start-1 sm:row-end-4">
                {featured && (
                  <Image
                    width={50}
                    height={50}
                    src={featured}
                    className="rounded-full"
                    alt={title}
                  />
                )}
              </div>

              <div className="text-black sm:col-span-2 sm:col-end-4">
                {draft === false && (
                  <span className="text-xs text-gray-500">
                    {`${
                      views ? new Number(views).toLocaleString() : "–––"
                    } views`}
                  </span>
                )}
                <h2 className="font-bold text-lg md:text-xl">{title}</h2>
              </div>

              <p className="mt-1 col-start-1 col-end-4 sm:col-start-2 sm:col-end-4">
                {description}
              </p>
            </div>
          </a>
        </Link>
      </li>
    )
  );
};

export default BlogItem;
