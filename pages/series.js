import Layout from "../components/Layout/Layout";
import SeriesItem from "../components/SeriesItem";
import reactSeries from "../data/allSeriesPost/react-series";
import gatsbySeries from "../data/allSeriesPost/gatsby-series";

const SeriesPage = () => {
  return (
    <Layout
      title="Series Posts - Ibaslogic"
      description="Read up-to-date dev post"
    >
      <section>
        <div>
          <div>React Section</div>
          <ol>
            {reactSeries.map(({ title, href }) => (
              <SeriesItem key={title} title={title} href={href} />
            ))}
          </ol>
        </div>
        <div>
          <div>Gatsby Section</div>
          <ol>
            {gatsbySeries.map(({ title, href }) => (
              <SeriesItem key={title} title={title} href={href} />
            ))}
          </ol>
        </div>
      </section>
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
