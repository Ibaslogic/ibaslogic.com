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
      <main>
        <section className="bg-[#fff]">
          <div className="w-full px-6 py-12 md:px-5 mx-auto max-w-4xl">
            <Heading title="Featured Posts" />
            <div className="mt-6 grid gap-5">
              <FeaturedPostSection />
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
      </main>
    </Layout>
  );
};

export default BlogPage;
