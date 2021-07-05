import { useState } from "react";
import Layout from "../components/Layout/Layout";
import { getSortedPostData } from "../lib/mdx";
import BlogItem from "../components/BlogItem";
import Heading from "../components/Heading";
import PageHeading from "../components/PageHeading";
import PopularPosts from "../components/PopularPosts";

export async function getStaticProps() {
  const postsData = await getSortedPostData("posts");
  return {
    props: {
      postsData,
    },
  };
}

const BlogPage = ({ postsData }) => {
  const [searchPosts, setSearchPosts] = useState("");

  const filteredPosts = postsData.filter((frontMatter) => {
    return frontMatter.title.toLowerCase().includes(searchPosts.toLowerCase());
  });

  return (
    <Layout
      title="Comprehensive Articles - Ibaslogic"
      description="Read up-to-date dev post"
    >
      <div className="w-full px-3 sm:px-5 mx-auto max-w-4xl">
        <PageHeading title="Blog." />
        <div className="relative mb-3">
          <input
            aria-label="Search the blog"
            type="text"
            onChange={(e) => setSearchPosts(e.target.value)}
            placeholder="Search the blog..."
            className="px-4 py-2 border border-gray-300 outline-none focus:border-blue-300  block rounded-md bg-white text-gray-700 w-full"
          />
          <svg
            className="absolute right-3 top-3 h-5 w-5 text-gray-400 dark:text-gray-300"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
        {!searchPosts && (
          <section>
            <Heading title="Featured Posts" />
            <div>
              <PopularPosts containerStyle="grid mb-8 grid-custom sm:grid-custom-col-sm" />
            </div>
          </section>
        )}

        <section>
          <Heading title="All Stories" />
          <ul className="grid">
            {!filteredPosts.length && <li className="">No posts detected</li>}{" "}
            {filteredPosts.map((frontmatter) => (
              <BlogItem key={frontmatter.slug} {...frontmatter} />
            ))}
          </ul>
        </section>
      </div>
    </Layout>
  );
};

export default BlogPage;
