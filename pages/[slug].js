import { MDXRemote } from "next-mdx-remote";

import MDXComponents from "../components/MDXComponents";
import BlogLayout from "../components/Layout/BlogLayout";
import { getPostDir, getFileBySlug } from "../lib/mdx";
import Link from "next/link";

const SinglePost = ({ mdxSource, frontMatter }) => {
  return (
    <>
      {frontMatter.draft !== true ? (
        <BlogLayout frontMatter={frontMatter}>
          <MDXRemote {...mdxSource} components={{ ...MDXComponents }} />
        </BlogLayout> 
      ) : (
        <div className="flex justify-center items-center min-h-screen">
          <h1 className="text-4xl font-medium">Post still in draft</h1>
          <p>
            <Link href="/blog">Back to blog page</Link>
          </p>
        </div>
      )}
    </>
  );
};

export default SinglePost;

export async function getStaticPaths() {
  const posts = await getPostDir("posts");

  return {
    paths: posts.map((post) => ({
      params: {
        slug: post.replace(/\.mdx/, ""),
      },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const post = await getFileBySlug("posts", params.slug);
  return {
    props: {
      ...post,
    },
  };
}
