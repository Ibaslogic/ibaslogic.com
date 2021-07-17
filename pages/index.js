import Layout from "../components/Layout/Layout";
import Hero from "../components/Home/Hero";
import PopularPostSection from "../components/Home/PopularPostSection";
import NewsletterHome from "../components/Home/NewsletterHome";

const Home = () => {
  return (
    <Layout>
      <Hero />
      <PopularPostSection homeStyle="featured__home" />
      <NewsletterHome />
    </Layout>
  );
};

export default Home;
