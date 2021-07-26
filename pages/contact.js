import Layout from "../components/Layout/Layout";
import ContactContent from "../components/Contact/ContactContent";

const Contact = () => {
  return (
    <Layout
      title="Get in touch with Ibas"
      description="Want to talk about your project? Or have a question for me? Send me an email and I will get back to you shortly."
    >
      <div className="relative w-full px-4 pt-12 pb-12 md:px-5 mx-auto max-w-4xl">
        <figure className="absolute top-[-92px] left-[-32px] mb-0">
          <img
            className="w-[600px] h-auto max-w-full"
            // src url design from https://backlinko.com/about-backlinko
            src="https://mk0apibacklinkov1r5n.kinstacdn.com/app/uploads/2020/02/simple-hero-top.svg"
            alt="box design"
          />
        </figure>
        <ContactContent />
      </div>
    </Layout>
  );
};

export default Contact;
