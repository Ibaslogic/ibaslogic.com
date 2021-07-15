import Link from "next/link";

import useSWR from "swr";
import fetcher from "../lib/fetcher";

const BlogItem = (props) => {
  const { title, slug } = props;

  const { data } = useSWR(`/api/views/${slug}`, fetcher);
  const views = data?.total;

  return (
    <li>
      <Link href={`/${slug}/`}>
        <a className="block p-2 hover:bg-gray-100">
          <div className="flex flex-wrap items-center justify-between">
            <h2 className="text-gray-900 mr-2 font-medium text-lg">{title}</h2>
            <span className="text-sm block mt-1 sm:mt-0 text-gray-500">
              {`${views ? new Number(views).toLocaleString() : "–––"} views`}
            </span>
          </div>
        </a>
      </Link>
    </li>
    // )
  );
};

export default BlogItem;
