import Head from "next/head";
import { renderMetaTags, useQuerySubscription } from "react-datocms";
import Container from "../components/container";
import Header from "../components/header";
import Layout from "../components/layout";
import SectionZone from "../src/section-zone";
import { request } from "../lib/datocms";
import { metaTagsFragment, responsiveImageFragment } from "../lib/fragments";

export async function getStaticProps({preview, locale}) {
  const formattedLocale = locale.split("-")[0];
  const graphqlRequest = {
    query: `
      {
        site: _site {
          favicon: faviconMetaTags {
            ...metaTagsFragment
          }
        }
        home(locale: ${formattedLocale}) {
          seo: _seoMetaTags {
            ...metaTagsFragment
          }
          hero {
            title {
              value
              blocks
            }
            subtitle
            buttons {
              buttonType
              externalUrl
              id
              text
            }
            illustration {
              responsiveImage(imgixParams: { w: 644 }) {
                ...responsiveImageFragment
              }
            }
          }
          sections {
            ... on AccordionRecord {
              __typename
              id
              items {
                title
                description {
                  value
                }
              }
            }
            ... on BannerRecord {
              __typename
              id
              title
              buttons {
                buttonType
                externalUrl
                id
                text
              }
              illustration {
                responsiveImage(imgixParams: { h: 300 }) {
                  ...responsiveImageFragment
                }
              }
            }
            ... on FeaturesListRecord {
              __typename
              id
              items {
                title
                description
                icon
              }
            }
            ... on LogosListRecord {
              __typename
              id
              images {
                responsiveImage(imgixParams: { h: 48 }) {
                  ...responsiveImageFragment
                }
              }
            }
            ... on SectionTitleRecord {
              __typename
              id
              title
              subtitle
            }
            ... on SpacerRecord {
              __typename
              id
              size
            }
            ... on TextImageRecord {
              __typename
              id
              title
              description {
                value
                blocks
              }
              buttons {
                buttonType
                externalUrl
                id
                text
              }
              hasImageLeft
              illustration {
                responsiveImage(imgixParams: { w: 644 }) {
                  ...responsiveImageFragment
                }
              }
            }
          }
        }
      }

      ${responsiveImageFragment}
      ${metaTagsFragment}
    `,
    preview,
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
