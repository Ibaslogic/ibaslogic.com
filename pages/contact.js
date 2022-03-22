import Layout from "../components/Layout/Layout";
import ContactContent from "../components/Contact/ContactContent";
import customSVG from "../components/Contact/dots.svg";

const Contact = () => {
  return (
    <Layout
      title="Get in touch with Ibas"
      description="Want to talk about your project? Or have a question for me? Send me an email and I will get back to you shortly."
    >
      <main className="relative w-full px-6 md:px-5 pt-12 pb-12 mx-auto max-w-5xl">
        <figure className="absolute top-[-30px] left-[-30px] mb-0">
          <img
            className="w-[600px] h-auto max-w-full"
            // src url design from https://backlinko.com/about-backlinko
            src={customSVG.src}
            alt="box design"
          />
        </figure>
        <ContactContent />
      </main>
    </Layout>
  );
};

export default Contact;
