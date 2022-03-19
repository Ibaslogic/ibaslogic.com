import Image from "next/image";
import Layout from "./Layout";
import Prism from "prismjs";
import "prismjs/components/prism-jsx";
import { useEffect } from "react";
import { parseISO, format } from "date-fns";
import ViewCounter from "../viewCounter";
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { FiEdit2 } from "react-icons/fi";
// FiFacebook, FiLinkedin, FiTwitter,
import SocialItem from "../SocialItem";
import Comment from "../Comments";
import config from "../../data/siteMetadata.js";

const { author_avatar, siteUrl, twitterShare, siteRepo } = config;

const editPost = (slug) => {
  return `${siteRepo}/edit/main/data/posts/${slug}.mdx`;
};

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
    external_post,
    external_url,
  } = frontMatter;

  const date = publishedAt === updatedAt ? publishedAt : updatedAt;
  const avatar = author ? author : author_avatar;

  useEffect(() => {
    setTimeout(Prism.highlightAll, 2000);
    // Prism.highlightAll();
  }, []);

  return (
    <Layout
      title={`${title}`}
      description={description}
      featured={featured}
      image={`${siteUrl}${featured}`}
      date={new Date(updatedAt).toISOString()}
      type="article"
      external_post={external_post}
      external_url={external_url}
    >
      <div className="w-full px-6 pt-12 pb-12 md:px-5 lg:flex mx-auto max-w-5xl">
        <article className="max-w-[700px] mx-auto lg:mx-5 lg:order-2">
          <div className="space-y-5 mb-8">
            <h1 className="font-bold text-[2rem] md:text-5xl leading-[1.3] text-black tracking-tight">
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
          <div className="text-sm text-gray-500 mt-8">
            <a
              className="inline-flex items-center"
              href={editPost(slug)}
              target="_blank"
              rel="noopener noreferrer"
            >
              {"Edit post on GitHub"}{" "}
              <span className="ml-2">
                <FiEdit2 />
              </span>
            </a>
          </div>
          <section className="mt-8 mb-7">
            <Comment />
          </section>
        </article>

        <aside className="max-w-[700px] mx-auto mt-14 lg:mt-0 lg:order-1 lg:w-[160px]">
          <div className="lg:sticky lg:top-[120px] text-gray-400">
            <p className="capitalize text-base font-semibold mb-7 text-gray-800">
              share
            </p>
            <div className="flex flex-row items-center mb-8 lg:items-start lg:flex-col">
              <SocialItem
                Icon={FaTwitter}
                link={`https://twitter.com/share?url=${siteUrl}/${slug}/&text=${title}&via=${twitterShare}`}
                title="twitter"
                style="shareIconStyle lg:mt-[10px]"
              />
              <SocialItem
                Icon={FaFacebookF}
                link={`https://www.facebook.com/sharer/sharer.php?u=${siteUrl}/${slug}/`}
                title="facebook"
                style="shareIconStyle lg:mt-[13px]"
              />

              <SocialItem
                Icon={FaLinkedinIn}
                link={`https://www.linkedin.com/shareArticle?url=${siteUrl}/${slug}/`}
                title="linkedin"
                style="shareIconStyle lg:mt-[13px]"
              />
            </div>
          </div>
        </aside>
        <div className="lg:flex-grow lg:order-3"></div>
      </div>
    </Layout>
  );
};

export default BlogLayout;
