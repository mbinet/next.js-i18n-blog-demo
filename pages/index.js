import Head from "next/head";
import { renderMetaTags, useQuerySubscription } from "react-datocms";
import Container from "../components/container";
import Header from "../components/header";
import Layout from "../components/layout";
import SectionZone from "../src/section-zone";
import { request } from "../lib/datocms";
import homepageQuery from "../src/queries/homepage.query";

export async function getStaticProps({preview, locale}) {
  const formattedLocale = locale.split("-")[0];
  const graphqlRequest = {
    query: homepageQuery,
    preview,
    variables: {
      formattedLocale,
    }
  };

  return {
    props: {
      subscription: preview
        ? {
            ...graphqlRequest,
            initialData: await request(graphqlRequest),
            token: process.env.NEXT_EXAMPLE_CMS_DATOCMS_API_TOKEN,
            environment: process.env.NEXT_DATOCMS_ENVIRONMENT || null,
          }
        : {
            enabled: false,
            initialData: await request(graphqlRequest),
          },
    },
  };
}

export default function Index({ subscription }) {
  const {
    data: { site, home },
  } = useQuerySubscription(subscription);

  const metaTags = home.seo.concat(site.favicon);

  return (
    <>
      <Layout preview={subscription.preview}>
        <Head>{renderMetaTags(metaTags)}</Head>
        <Container>
          <Header />
          <SectionZone page={home} />
        </Container>
      </Layout>
    </>
  );
}
