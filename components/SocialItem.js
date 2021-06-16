const SocialItem = ({ Icon, link, title }) => {
  return (
    <a href={link} title={title} target="_blank" rel="noopener noreferrer">
      <Icon />
    </a>
  )
}

export default SocialItem

