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
      <div>
        {!postsData.length && (
          <p className="flex text-4xl font-medium justify-center items-center min-h-screen">
            No post found
          </p>
        )}{" "}
        {postsData.map((frontmatter) => (
          <BlogItem key={frontmatter.slug} {...frontmatter} />
        ))}
      </div>
    </Layout>
  );
};

export default BlogPage;
