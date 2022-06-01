import Head from "next/head";
import { renderMetaTags, useQuerySubscription } from "react-datocms";
import Container from "../components/container";
import Header from "../components/header";
import Layout from "../components/layout";
import SectionZone from "../src/section-zone";
import { request } from "../lib/datocms";
import pageQuery from "../src/queries/page.query";

export async function getStaticPaths({ locales }) {
  const data = await request({ query: `{ allPages { slug } }` });
  const pathsArray = [];

  data.allPages.map((page) => {
    locales.map((language) => {
      pathsArray.push({ params: { slug: page.slug }, locale: language });
    });
  });

  return {
    paths: pathsArray,
    fallback: false,
  };
}

export async function getStaticProps({ params, preview = false, locale }) {
  const formattedLocale = locale.split("-")[0];
  const graphqlRequest = {
    query: pageQuery,
    preview,
    variables: {
      formattedLocale,
      slug: params.slug
    }
  }

  return {
    props: {
      subscription: preview
        ? {
            ...graphqlRequest,
            initialData: await request(graphqlRequest),
            token: process.env.NEXT_EXAMPLE_CMS_DATOCMS_API_TOKEN,
          }
        : {
            enabled: false,
            initialData: await request(graphqlRequest),
          },
    },
  };
}

export default function Page({ subscription, preview }) {
  const {
    data: { site, page },
  } = useQuerySubscription(subscription);

  const metaTags = page.seo.concat(site.favicon);

  return (
    <Layout preview={preview}>
      <Head>{renderMetaTags(metaTags)}</Head>
      <Container>
        <Header />
        <SectionZone page={page} />
      </Container>
    </Layout>
  );
}