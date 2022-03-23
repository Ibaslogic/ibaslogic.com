const Dropdown = ({ submenus, dropdown }) => {
  return (
    <ul
      className={`absolute hidden right-0 left-auto text-sm z-[9999] min-w-[10rem] py-2 px-0 bg-white rounded-lg custom_shadow ${
        dropdown ? "!block" : ""
      }`}
    >
      {submenus.map((submenu, index) => (
        <li key={index}>
          <a
            className="hover:bg-[#f2f2f2] capitalize block text-left py-[0.7rem] px-4"
            href="/#"
          >
            {submenu.label}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Dropdown;
