import { useState } from "react";
import Layout from "../components/Layout/Layout";
import { getSortedPostData } from "../lib/mdx";
import BlogItem from "../components/BlogItem";
import Heading from "../components/Heading";
import FeaturedPostSection from "../components/Blog/FeaturedPostSection";
import FilterPostsHandle from "../components/FilterPostsHandle";

export async function getStaticProps() {
  const postsData = await getSortedPostData("posts");
  return {
    props: {
      postsData,
    },
  };
}

const getCategories = (items) => {
  let tempItems = items.map((item) => {
    return item.category;
  });
  let tempCategories = new Set(tempItems);
  let categories = Array.from(tempCategories);
  categories = ["all posts", ...categories];
  return categories;
};

const BlogPage = ({ postsData }) => {
  const [postItems] = useState(postsData);
  const [blogPostItems, setBlogPostItems] = useState(postsData);
  const [categories] = useState(getCategories(postsData));

  const [selectedItem, setSelectedItem] = useState(
    getCategories(postsData) && getCategories(postsData)[0]
  );

  // const [searchPosts, setSearchPosts] = useState("");

  // const filteredPosts = postsData.filter((frontMatter) => {
  //   return frontMatter.title.toLowerCase().includes(searchPosts.toLowerCase());
  // });

  // handle filter posts
  const handleItems = (category) => {
    let tempItems = [...postItems];
    console.log(tempItems);
    if (category === "all posts") {
      setBlogPostItems(tempItems);
      setSelectedItem(category);
    } else {
      let items = tempItems.filter((item) => item.category === category);
      setBlogPostItems(items);
      setSelectedItem(category);
    }
  };

  return (
    <Layout
      title="Comprehensive Articles"
      description="Read up-to-date dev post"
    >
      <section className="segoe-font bg-[#fafafa]">
        <div className="w-full px-4 py-12 md:px-5 mx-auto max-w-4xl">
          {/* <div className="relative mb-6">
          <input
            aria-label="Search the blog"
            type="text"
            onChange={(e) => setSearchPosts(e.target.value)}
            placeholder="Search the blog..."
            className="px-4 py-2 border border-gray-300 outline-none focus:border-gray-700 block rounded-md bg-white text-gray-700 w-full"
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
        </div> */}
          {/* {!searchPosts && (
          
        )} */}

          <Heading title="Featured Posts" />
          <div className="mt-6 grid gap-5">
            <FeaturedPostSection />
            {/* grid mb-8 grid-custom sm:grid-custom-col-sm */}
          </div>
        </div>
      </section>
      <section>
        <div className="w-full px-4 py-12 md:px-5 mx-auto max-w-4xl">
          <FilterPostsHandle
            categories={categories}
            handleItems={handleItems}
            selectedItem={selectedItem}
          />
          <ul className="grid mt-6">
            {!postsData.length && <li className="">No posts detected</li>}{" "}
            {blogPostItems.map((frontmatter) => (
              <BlogItem key={frontmatter.slug} {...frontmatter} />
            ))}
          </ul>
        </div>
      </section>
    </Layout>
  );
};

export default BlogPage;
