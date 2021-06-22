import Layout from "../components/Layout/Layout";
import { getSortedPostData } from "../lib/mdx";
import BlogItem from "../components/BlogItem";

export async function getStaticProps() {
  const postsData = await getSortedPostData("posts");
  return {
    props: {
      postsData,
    },
  };
}

const BlogPage = ({ postsData }) => {
  return (
    <Layout
      title="Comprehensive Articles - Ibaslogic"
      description="Read up-to-date dev post"
    >
      <ul className="w-full px-3 sm:px-5 mx-auto max-w-4xl grid gap-y-6">
        {!postsData.length && (
          <li className="flex text-4xl font-medium justify-center items-center min-h-screen">
            No post found
          </li>
        )}{" "}
        {postsData.map((frontmatter) => (
          <BlogItem key={frontmatter.slug} {...frontmatter} />
        ))}
      </ul>
    </Layout>
  );
};

export default BlogPage;
