import { headerItems } from "../../../data/headerItems";
import HeaderItem from "./HeaderItem";

const HeaderItemsRender = () => {
  return (
    <div>
      <ul className="flex">
        {headerItems.map((items, index) => {
          return <HeaderItem items={items} key={index} />;
        })}
      </ul>
    </div>
  );
};

export default HeaderItemsRender;
