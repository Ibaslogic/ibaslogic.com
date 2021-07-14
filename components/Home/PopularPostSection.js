import Heading from "../Heading";
import PopularPosts from "../PopularPosts";

const PopularPostSection = ({ homeStyle }) => {
  return (
    <section className="custom_heading_style py-12">
      <div className="px-4 md:px-5 mx-auto max-w-5xl">
        <Heading
          title="popular articles"
          desc="Level up your Dev knowledge with these actionable guides."
        />
        <div className="grid mt-12 grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <PopularPosts containerStyle="noFeatured" homeStyle={homeStyle} />
        </div>
      </div>
    </section>
  );
};

export default PopularPostSection;
