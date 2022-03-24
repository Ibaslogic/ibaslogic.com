const SocialItem = ({ Icon, link, title, style }) => {
  return (
    <a
      className={`p-2 h-10 w-10 mt-[3px] text-black opacity-60 ${style}`}
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
