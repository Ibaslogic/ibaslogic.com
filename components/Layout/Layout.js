import Head from "next/head";

import Footer from "../Footer";
import Header from "../Header";

const Layout = ({ children, ...customMeta }) => {
  // const base_url = "https://ibaslogic.com";

  const meta = {
    title:
      "Ibaslogic | A compendium of the web development articles and guides",
    description: `Web dev Articles for the Self-Starters.`,
    // Please add image
    // image: `${base_url}/static/images/banner.png`,
    type: "website",
    ...customMeta,
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        <title>{meta.title}</title>
        <meta content={meta.description} name="description" />
        <meta name="robots" content="follow, index" />
        {/* <meta property="og:url" content={`${base_url}${router.asPath}`} /> */}
        {/* <link rel="canonical" href={`${base_url}${router.asPath}`} /> */}
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content="ibaslogic" />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@ibaslogic" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
        {meta.date && (
          <meta property="article:published_time" content={meta.date} />
        )}
      </Head>
      <div className="flex-grow">
        <Header />
        <main className="pt-16">{children}</main>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
