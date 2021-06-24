import fs from "fs";
import path from "path";
import matter from "gray-matter";

import { serialize } from "next-mdx-remote/serialize";
import readingTime from "reading-time";

const rootDir = process.cwd();

// get sorted post type data
export async function getSortedPostData(folder) {
  const postDirectory = path.join(rootDir, "data", folder);

  const fileNames = fs.readdirSync(postDirectory);

  const pubData = [];

  fileNames.forEach((fileName) => {
    const filePath = path.join(postDirectory, fileName);
    const content = fs.readFileSync(filePath, "utf8");
    const { data } = matter(content);

    // only display published posts
    if (data.draft !== true) {
      pubData.push({ ...data, slug: fileName.replace(".mdx", "") });
    }
  });

  // Sort posts by date
  return pubData.sort((a, b) => {
    if (a.updatedAt < b.updatedAt) return 1;
    if (a.updatedAt > b.updatedAt) return -1;
    return 0;
  });
}

// get post type dir
export async function getPostDir(folder) {
  return fs.readdirSync(path.join(rootDir, "data", folder));
}

// get file by slug
export async function getFileBySlug(folder, slug) {
  //get the file content (but check if path/ slug exist)
  const fileContent = slug
    ? fs.readFileSync(path.join(rootDir, "data", folder, `${slug}.mdx`), "utf8")
    : fs.readFileSync(path.join(rootDir, "data", `${folder}.mdx`), "utf8");

  const { data, content } = matter(fileContent);
  const mdxSource = await serialize(content, {
    mdxOptions: {
      rehypePlugins: [
        require("rehype-slug"),
        [
          require("rehype-autolink-headings"),
          {
            properties: {
              className: ["anchor"],
            },
          },
        ],
      ],
    },
  });

  return {
    mdxSource,
    frontMatter: {
      // wordCount: content.split(/\s+/gu).length,
      readingTime: readingTime(content),
      slug: slug || null,
      ...data,
    },
  };
}
