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
      <div className="w-full px-6 py-12 md:px-5 lg:grid mx-auto max-w-5xl post_wrap">
        <main className="max-w-[700px] mx-auto lg:mx-5 post_main">
          <article>
            <div className="space-y-5 mb-8">
              <h1 className="font-bold text-[2.2rem] md:text-5xl !leading-[1.3] text-black tracking-tight">
                {title}
              </h1>
              <div className="sm:flex justify-between text-sm text-gray-500">
                <div className="flex flex-wrap items-center">
                  <Image
                    width={32}
                    height={32}
                    src={avatar}
                    className="rounded-full h-8 w-8 object-cover bg-gray-200"
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
          </article>
        </main>

        <aside className="max-w-[700px] mx-auto mt-12 lg:mt-0 lg:w-[100px] post_aside">
          <div className="lg:sticky lg:top-[200px] text-gray-400 flex flex-col items-start lg:items-center justify-center">
            <p className="uppercase text-xs mb-3 text-gray-800">share</p>
            <div className="flex flex-row items-center lg:items-start lg:flex-col">
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
                style="shareIconStyle lg:mt-[8px]"
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
        <section className="max-w-[700px] mx-auto lg:mx-5 mt-8 post_additonal_section">
          <Comment />
        </section>
        {/* <div className="lg:flex-grow lg:order-3"></div> */}
      </div>
    </Layout>
  );
};

export default BlogLayout;
