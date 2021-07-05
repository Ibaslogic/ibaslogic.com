import Layout from "../components/Layout/Layout";
import Hero from "../components/Home/Hero";
import PopularPostSection from "../components/Home/PopularPostSection";

const Home = () => {
  return (
    <Layout>
      <Hero />
      <PopularPostSection homeStyle="featured__home" />
    </Layout>
  );
};

export default Home;
