import PageHeading from "../PageHeading";
import ContactForm from "./ContactForm";

const ContactContent = () => {
  return (
    <>
      <div className="mb-8">
        <PageHeading title="Let's talk" />
        <div className="prose max-w-full text-gray-600">
          <p>
            Do you have a question or want to talk about your project? Fill the
            form below and I'll get back to you as soon as possible. You can
            also send a direct mail to:{" "}
            <a href={`mailto:ibas@ibaslogic.com`}>ibas@ibaslogic.com</a> or
            connect with{" "}
            <a
              href={`https://twitter.com/ibaslogic`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Ibas on Twitter
            </a>
            .
          </p>
        </div>
      </div>
      <ContactForm />
    </>
  );
};

export default ContactContent;
