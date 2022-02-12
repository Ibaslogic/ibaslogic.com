import Layout from "../components/Layout/Layout";
import Hero from "../components/Home/Hero";
import PopularPostSection from "../components/Home/PopularPostSection";
import NewsletterHome from "../components/Home/NewsletterHome";

const Home = () => {
  return (
    <Layout
      title="Helping You Improving Your Web Dev Knowledge!"
      description="Web dev Articles for the Self-Starters."
    >
      <Hero />
      <PopularPostSection />
      <NewsletterHome />
    </Layout>
  );
};

export default Home;
