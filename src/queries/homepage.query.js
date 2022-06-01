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

const homepageQuery = /* GraphQL */ `
  query Homepage($formattedLocale: SiteLocale!) {
    site: _site {
      favicon: faviconMetaTags {
        ...seoMetaTagsFragment
      }
    }
    home(locale: $formattedLocale) {
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

export default homepageQuery
