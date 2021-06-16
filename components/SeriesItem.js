import Link from "next/link";

const SeriesItem = ({ title, href }) => {
  return (
    <li>
      <h2>
        <Link href={href}>{title}</Link>
      </h2>
    </li>
  );
};

export default SeriesItem;
