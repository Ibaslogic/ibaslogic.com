import Link from "next/link";

const BlogItem = (props) => {
  const { title, description, slug } = props;
  return (
    <Link href={`/${slug}`}>
      <a>
        <div>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
      </a>
    </Link>
  );
};

export default BlogItem;
