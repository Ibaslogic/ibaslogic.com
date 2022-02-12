import { FaGithub, FaLinkedin, FaTwitter, FaBullseye } from "react-icons/fa";

const SocialFollow = () => {
  const social = [
    { name: "twitter", link: "#" },
    { name: "linkedin", link: "#" },
    { name: "github", link: "#" },
  ];

  return (
    <ul className="flex flex-wrap">
      {social.map((element) => {
        const { name, link } = element;
        const socialIcon =
          name === "linkedin" ? (
            <FaLinkedin />
          ) : name === "twitter" ? (
            <FaTwitter />
          ) : name === "github" ? (
            <FaGithub />
          ) : (
            //generic icon
            <FaBullseye />
          );

        return (
          <li
            className="mr-6 mb-2 lg:mb-0 text-2xl last:mr-0 hover:opacity-75 transition"
            key={name}
          >
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              title={name}
            >
              {socialIcon}
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default SocialFollow;
