import Image from "next/image";
import Layout from "./Layout";
import { parseISO, format } from "date-fns";
import ViewCounter from "../viewCounter";

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

  return (
    <Layout
      title={`${title} - Ibaslogic`}
      description={description}
      image={`${domain}${featured}`}
      date={new Date(updatedAt).toISOString()}
      type="article"
    >
      <div className="w-full px-3 sm:px-5 md:flex mx-auto max-w-6xl">
        <article className="md:order-2 md:max-w-[700px] md:mx-[20px]">
          <div className="space-y-5 mb-8">
            <h1 className="font-bold text-3xl md:text-5xl text-black tracking-tight">
              {title}
            </h1>
            <div className="sm:flex justify-between text-sm text-gray-500">
              <div className="flex flex-wrap">
                <Image
                  width={25}
                  height={25}
                  src={avatar}
                  className="rounded-full"
                  alt="Ibas Majid"
                />
                <p className="ml-2">
                  {`by Ibas • `}
                  {format(parseISO(date), "MMMM dd, yyyy")}
                </p>
              </div>
              <div>
                <ViewCounter slug={slug} />
                <p>{readingTime.text}</p>
              </div>
            </div>
          </div>

          <div className="prose max-w-none w-full">{children}</div>
        </article>

        <aside className="md:order-1 md:w-[200px]">LikeIcon/socialShare</aside>
        <div className="md:flex-grow md:order-3"></div>
      </div>
    </Layout>
  );
};

export default BlogLayout;
