import Layout from "../components/Layout/Layout";
import reactSeries from "../data/allSeriesPost/react-series";
import gatsbySeries from "../data/allSeriesPost/gatsby-series";
import BlogItem from "../components/BlogItem";
import Heading from "../components/Heading";

const SeriesPage = () => {
  return (
    <Layout
      title="Series Posts - Ibaslogic"
      description="Read up-to-date dev post"
    >
      <div>
        <div className="w-full px-4 pt-12 pb-12 md:px-5 mx-auto max-w-4xl">
          <section>
            <Heading title="React series." />
            <ol className="mt-6 mb-6">
              {reactSeries.map(({ title, href }) => (
                <BlogItem key={title} title={title} slug={href} />
              ))}
            </ol>
          </section>
          <section>
            <Heading title="Gatsby series." />
            <ol className="mt-6">
              {gatsbySeries.map(({ title, href }) => (
                <BlogItem key={title} title={title} slug={href} />
              ))}
            </ol>
          </section>
        </div>
      </div>
    </Layout>
  );
};

export default SeriesPage;

{
  /* <section id="featured" className={`bg_dtl ${featuredStyles.featuredGuides}`}>
  <div className={featuredStyles.inner}>
    <p>
      Level up your Dev knowledge with our series of in-depth and easy to follow
      guides.
    </p>
    <div className={`dm_brder ${featuredStyles.subHeading}`}>
      <SubHeading title="React tutorial series" />
    </div>

    <ol className={featuredStyles.list}>
      {reactSeriesPosts.map(({ node }) => {
        const { id, frontmatter, fields } = node;
        const { title } = frontmatter;
        return (
          <li className={featuredStyles.listItem} key={id}>
            <Link
              className={featuredStyles.subTitle}
              to={`/${fields.slug.name}/`}
            >
              {title}
            </Link>
          </li>
        );
      })}
    </ol>
  </div>
  <div className={featuredStyles.inner}>
    <div className={`dm_brder ${featuredStyles.subHeading}`}>
      <SubHeading title="Gatsby tutorial" />
    </div>

    <ol className={featuredStyles.list}>
      {gatsbySeriesPosts.map(({ node }) => {
        const { id, frontmatter, fields } = node;
        const { title } = frontmatter;
        return (
          <li className={featuredStyles.listItem} key={id}>
            <Link
              className={featuredStyles.subTitle}
              to={`/${fields.slug.name}/`}
            >
              {title}
            </Link>
          </li>
        );
      })}
    </ol>
  </div>
</section>; */
}
