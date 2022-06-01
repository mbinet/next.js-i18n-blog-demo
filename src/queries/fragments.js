// SMALL REPEATABLE FIELDS

export const responsiveImageFragment = /* GraphQL */ `
  fragment responsiveImageFragment on ResponsiveImage {
    srcSet
    webpSrcSet
    sizes
    src
    width
    height
    aspectRatio
    alt
    title
    base64
  }
`

export const seoMetaTagsFragment = /* GraphQL */ `
  fragment seoMetaTagsFragment on Tag {
    attributes
    content
    tag
  }
`

// HEROS

export const heroFragment = /* GraphQL */ `
  fragment heroFragment on HeroRecord {
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
`

// SECTIONS

export const accordionFragment = /* GraphQL */ `
  fragment accordionFragment on AccordionRecord {
    __typename
    id
    items {
      title
      description {
        value
      }
    }
  }
`

export const bannerFragment = /* GraphQL */ `
  fragment bannerFragment on BannerRecord {
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
`

export const featuresListFragment = /* GraphQL */ `
  fragment featuresListFragment on FeaturesListRecord {
    __typename
    id
    items {
      title
      description
      icon
    }
  }
`

export const logosListFragment = /* GraphQL */ `
  fragment logosListFragment on LogosListRecord {
    __typename
    id
    images {
      responsiveImage(imgixParams: { h: 48 }) {
        ...responsiveImageFragment
      }
    }
  }
`

export const sectionTitleFragment = /* GraphQL */ `
  fragment sectionTitleFragment on SectionTitleRecord {
    __typename
    id
    title
    subtitle
  }
`

export const spacerFragment = /* GraphQL */ `
  fragment spacerFragment on SpacerRecord {
    __typename
    id
    size
  }
`

export const textImageFragment = /* GraphQL */ `
  fragment textImageFragment on TextImageRecord {
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
`

