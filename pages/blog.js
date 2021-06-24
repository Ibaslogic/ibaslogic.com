import { useState } from "react";
import Layout from "../components/Layout/Layout";
import { getSortedPostData } from "../lib/mdx";
import BlogItem from "../components/BlogItem";
import Featured from "../components/Featured";
import Heading from "../components/Heading";
import PageHeading from "../components/PageHeading";

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
            aria-label="Begin search"
            type="text"
            onChange={(e) => setSearchPosts(e.target.value)}
            placeholder="Begin search..."
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
              <Featured
                title="React Tutorial From Scratch: A Step-by-Step Guide (2021)"
                description="In this React tutorial for beginners, you will learn every step by step to build a React project. Besides, you will be able to deploy on the web."
                slug="react-tutorial-for-beginners"
              />
              <Featured
                title="Working with React Form and Handling Event"
                description="Form handling in React works a bit different compared to the regular HTML form. In this step-by-step guide, you will learn this in a simple way."
                slug="react-form-handling"
              />
              <Featured
                title="How to implement Hamburger Menu in React"
                description="In this part of the series, you’ll learn how to implement the functionality that allows you to toggle sidebar navigation."
                slug="how-to-add-hamburger-menu-in-react"
              />
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
