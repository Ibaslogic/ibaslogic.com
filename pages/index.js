import Layout from "../components/Layout/Layout";
import Hero from "../components/Home/Hero";
import PopularPostSection from "../components/Home/PopularPostSection";
import Subscribe from "../components/Newsletter/Subscribe";

const Home = () => {
  return (
    <Layout>
      <Hero />
      <PopularPostSection homeStyle="featured__home" />
      <Subscribe />
    </Layout>
  );
};

export default Home;
