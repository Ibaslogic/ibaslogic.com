import Link from "next/link";
import Image from "next/image";
import OriginallyWrittenFor from "./OriginallyWrittenFor";

const CustomLink = (props) => {
  const { href } = props;
  const isInternalLink = href && (href.startsWith("/") || href.startsWith("#"));

  if (isInternalLink) {
    return (
      <Link href={href}>
        <a {...props}>#</a>
      </Link>
    );
  }

  return <a target="_blank" rel="noopener noreferrer" {...props} />;
};

const CustomImage = (props) => {
  return <Image {...props} layout="responsive" loading="lazy" />;
};

const MDXComponents = {
  OriginallyWrittenFor,
  // Image,
  img: CustomImage,
  a: CustomLink,
};

export default MDXComponents;
