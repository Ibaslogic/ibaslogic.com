const SocialItem = ({ Icon, link, title, style }) => {
  return (
    <a
      className={`text-[21px] ${style}`}
      href={link}
      title={title}
      target="_blank"
      rel="noopener noreferrer"
    >
      <Icon />
    </a>
  );
};

export default SocialItem;
