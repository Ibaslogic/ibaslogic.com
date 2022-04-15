import Link from "next/link";
import ViewCounter from "./viewCounter";

const FeaturedPost = ({ title, description, slug }) => {
  return (
    <div className="fence fenceTransition p-7">
      <Link href={`/${slug}/`}>
        <a className="block">
          <div>
            <div className="flex flex-wrap items-center justify-between text-[#1a1a1a] sm:col-span-2 sm:col-end-4">
              <h2 className="mr-2 font-bold text-xl mb-1">{title}</h2>
              <span className="text-sm block text-gray-500">
                <ViewCounter slug={slug} />
              </span>
              {/* <span className="text-sm block text-gray-500">
                {`${views ? new Number(views).toLocaleString() : "–––"} views`}
              </span> */}
            </div>
            <div className="mt-3 col-start-1 col-end-4 sm:col-start-2 sm:col-end-4">
              <p className="text-[14px] leading-[1.65]">{description}</p>
            </div>
          </div>
        </a>
      </Link>
    </div>
  );
};

export default FeaturedPost;
