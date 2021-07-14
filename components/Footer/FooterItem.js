const FooterItem = ({ list }) => {
  return (
    <ul>
      {list.map(({ item, url }) => (
        <li className="first:mt-0 mt-2" key={item}>
          <a className="capitalize hover:text-gray-700 transition" href={url}>
            {item}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default FooterItem;
