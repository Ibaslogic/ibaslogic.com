import Image from "next/image";
import Layout from "./Layout";
import { parseISO, format } from "date-fns";
import ViewCounter from "../viewCounter";
import LikeCount from "../LikeCount";
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import SocialItem from "../SocialItem";

const domain = `https://ibaslogic.com`;

const BlogLayout = ({ children, frontMatter }) => {
  const {
    publishedAt,
    updatedAt,
    title,
    description,
    featured,
    readingTime,
    author,
    slug,
  } = frontMatter;

  const date = publishedAt === updatedAt ? publishedAt : updatedAt;

  const avatar = author ? author : `/avatar.png`;

  const baseUrl = `https://ibaslogic.com/`;
  const twitterHandle = `ibaslogic`;

  return (
    <Layout
      title={`${title} - Ibaslogic`}
      description={description}
      image={`${domain}${featured}`}
      date={new Date(updatedAt).toISOString()}
      type="article"
    >
      <div className="w-full px-4 pt-12 pb-12 md:px-5 lg:flex mx-auto max-w-5xl">
        <article className="max-w-[700px] mx-auto lg:mx-5 lg:order-2">
          <div className="space-y-5 mb-8">
            <h1 className="font-bold text-3xl md:text-5xl text-black tracking-tight">
              {title}
            </h1>
            <div className="sm:flex justify-between text-sm text-gray-500">
              <div className="flex flex-wrap items-center">
                <Image
                  width={25}
                  height={25}
                  src={avatar}
                  className="rounded-full bg-gray-200"
                  alt="Ibas Majid"
                />
                <p className="ml-2">
                  {`by Ibas・`}
                  {format(parseISO(date), "MMMM dd, yyyy")}
                </p>
              </div>
              <div className="flex flex-wrap items-center">
                <p>
                  <span>
                    <ViewCounter slug={slug} />
                  </span>
                  <span>・</span>
                  <span>{readingTime.text}</span>
                </p>
              </div>
            </div>
          </div>

          <div className="prose max-w-none w-full">{children}</div>
        </article>

        <aside className="max-w-[700px] mx-auto mt-14 lg:mt-0 lg:order-1 lg:w-[160px]">
          <div className="lg:sticky lg:top-[120px] text-gray-400">
            <p className="capitalize text-base font-semibold mb-7 text-gray-800">
              share
            </p>
            <div className="flex flex-row items-center mb-8 lg:items-start lg:flex-col">
              <SocialItem
                Icon={FaTwitter}
                link={`https://twitter.com/share?url=${baseUrl}${slug}/&text=${title}&via=${twitterHandle}`}
                title="twitter"
                style="hover:text-gray-800 transition lg:mt-[10px] mr-7 mb-[10px]"
              />
              <SocialItem
                Icon={FaFacebookF}
                link={`https://www.facebook.com/sharer/sharer.php?u=${baseUrl}${slug}/`}
                title="facebook"
                style="hover:text-gray-800 transition lg:mt-[25px] mr-7 mb-[10px]"
              />
              <SocialItem
                Icon={FaLinkedinIn}
                link={`https://www.linkedin.com/shareArticle?url=${baseUrl}${slug}/`}
                title="linkedin"
                style="hover:text-gray-800 transition lg:mt-[25px] mr-7 mb-[10px]"
              />
            </div>
            <div>
              <p className="capitalize text-base mb-7 font-semibold text-gray-800 lg:hidden">
                Like this piece?
              </p>
              <LikeCount id={slug} />
            </div>
          </div>
        </aside>
        <div className="lg:flex-grow lg:order-3"></div>
      </div>
    </Layout>
  );
};

export default BlogLayout;
