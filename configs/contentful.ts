const CONTENTFUL_SPACE_ID = process.env.CONTENTFUL_SPACE_ID || ''
const CONTENTFUL_ACCESS_TOKEN = process.env.CONTENTFUL_ACCESS_TOKEN || ''
const CONTENTFUL_PREVIEW_ACCESS_TOKEN =
  process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN || ''
const NEXT_PUBLIC_BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || ''

export const contentfulConfigs = {
  cms: {
    space_id: CONTENTFUL_SPACE_ID,
    cda_token: CONTENTFUL_ACCESS_TOKEN,
    cpa_token: CONTENTFUL_PREVIEW_ACCESS_TOKEN
  },
  meta: {
    title: 'Digital banking for the new generation | Colorful Coin',
    description: `Enjoy premium banking services wherever you go: instant transfers and best exchange rates, exclusive offers and priority customer support. Apply online at ${process.env.NEXT_PUBLIC_BASE_URL?.replace(
      'https://',
      ''
    ).replace('http://', '')}`,
    url: NEXT_PUBLIC_BASE_URL,
    image:
      'https://images.ctfassets.net/w8vf7dk7f259/4bucno7z1xAyVI5MOkU6Pu/ded83d0ec1eb732ae3a81ddab7a18877/fallback-image-03.jpg'
  },
  icon: {
    light:
      'https://images.ctfassets.net/w8vf7dk7f259/llZXwDCnl9NqdyuVvjn1n/d20cea90225e7f53dfbf8a18a46e972d/gocoin-icon-light.svg',
    dark: 'https://images.ctfassets.net/w8vf7dk7f259/i9iu6GU6dFWQJJwJzwxCT/952cc3bab415e28f521c22933072a09c/gocoin-icon.svg',
    width: 66,
    height: 64
  }
}
