import Link from "next/link";
import ViewCounter from "../components/viewCounter";

const BlogItem = (props) => {
  const { title, slug } = props;

  return (
    <li>
      <Link href={`/${slug}/`}>
        <a className="block p-2 hover:bg-gray-100">
          <div className="flex flex-wrap items-center justify-between">
            <h2 className="mr-2 font-medium text-[16px] leading-[1.25]">
              {title}
            </h2>
            <span className="text-[13px] block mt-1 sm:mt-0 text-gray-500">
              <ViewCounter slug={slug} />
            </span>
          </div>
        </a>
      </Link>
    </li>
  );
};

export default BlogItem;
