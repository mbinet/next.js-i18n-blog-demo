import {
  responsiveImageFragment,
  seoMetaTagsFragment,
  heroFragment,
  accordionFragment,
  bannerFragment,
  featuresListFragment,
  logosListFragment,
  sectionTitleFragment,
  spacerFragment,
  textImageFragment,
 } from './fragments'

const pageQuery = /* GraphQL */ `
  query PageBySlug($formattedLocale: SiteLocale!, $slug: String!) {
    site: _site {
      favicon: faviconMetaTags {
        ...seoMetaTagsFragment
      }
    }
    page(locale: $formattedLocale, filter: {slug: {eq: $slug}}) {
      seo: _seoMetaTags {
        ...seoMetaTagsFragment
      }
      hero {
        ...heroFragment
      }
      sections {
        ...accordionFragment
        ...bannerFragment
        ...featuresListFragment
        ...logosListFragment
        ...sectionTitleFragment
        ...spacerFragment
        ...textImageFragment
      }
    }
  }
  ${responsiveImageFragment},
  ${seoMetaTagsFragment},
  ${heroFragment},
  ${accordionFragment},
  ${bannerFragment},
  ${featuresListFragment},
  ${logosListFragment},
  ${sectionTitleFragment},
  ${spacerFragment},
  ${textImageFragment},
`

export default pageQuery
