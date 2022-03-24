import Link from "next/link";

const ErrorPageContent = () => {
  return (
    <section className="py-48 sm:py-28">
      <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold !leading-[1.2] mb-6">
        404: Not found
      </h1>
      <p className="text-2xl max-w-md mb-10 !leading-[1.1]">
        Sorry 😔—the requested page could not be found...
      </p>
      <p>
        Visit the{" "}
        <Link href="/blog/">
          <a className="text-blue-600 underline font-bold">blog page</a>
        </Link>{" "}
        and level up your dev knowledge.
      </p>
    </section>
  );
};

export default ErrorPageContent;
