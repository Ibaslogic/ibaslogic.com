import Layout from "../components/Layout/Layout";
import Hero from "../components/Home/Hero";
import Summary from "../components/Home/Summary";
import PopularPosts from "../components/PopularPosts";
import Heading from "../components/Heading";

const Home = () => {
  return (
    <Layout>
      <Hero />
      {/* <Summary /> */}
      <section className="px-3 custom_heading_style sm:px-5 mx-auto max-w-screen-lg xl:max-w-screen-xl ">
        <Heading title="popular post" desc="Level up your Dev knowledge" />
        <div className="lg:flex">
          <PopularPosts />
        </div>
      </section>
    </Layout>
  );
};

export default Home;
