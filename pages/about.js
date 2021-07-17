import Layout from "../components/Layout/Layout";
import AboutContent from "../components/About/AboutContent";

const About = () => {
  return (
    <Layout
      title="About Ibas"
      description="Ibas Majid is a web developer, teacher and a writer. He specializes in developing realistic websites and web applications using the latest tools and tech. He also writes technical contents around this subject."
    >
      <div className="w-full px-4 pt-12 pb-12 md:px-5 mx-auto max-w-4xl">
        <AboutContent />
      </div>
    </Layout>
  );
};

export default About;
