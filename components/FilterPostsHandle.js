const FilterPostsHandle = ({ categories, handleItems, selectedItem }) => {
  return (
    <div className="mt-8 mx-0 mb-12">
      {categories.map((category, index) => {
        return (
          <button
            className={`py-1 px-2.5 mr-3 text-sm rounded hover:bg-[#eff3f6] capitalize${
              selectedItem === category ? " bg-[#eff3f6]" : ""
            }`}
            key={index}
            onClick={() => handleItems(category)}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
};
export default FilterPostsHandle;
