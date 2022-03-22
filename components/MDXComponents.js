import Link from "next/link";
import Image from "next/image";
import OriginallyWrittenFor from "./OriginallyWrittenFor";
import PostNextUnit from "../components/Global/Custom/PostNextUnit";
import PostSeriesLink from "../components/Global/Custom/PostSeriesLink";

const CustomLink = (props) => {
  const { href } = props;
  const isInternalLink = href && href.startsWith("/");

  const isHeadingLink = href.startsWith("#");

  if (isInternalLink) {
    return (
      <Link href={href}>
        <a {...props} />
      </Link>
    );
  } else if (isHeadingLink) {
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
  PostNextUnit,
  PostSeriesLink,
  // Image,
  img: CustomImage,
  a: CustomLink,
};

export default MDXComponents;
