import { DefaultSeoProps } from 'next-seo'

export const SEO: DefaultSeoProps = {
  titleTemplate: '%s | PancakeSwap',
  defaultTitle: 'PancakeSwap',
  description:
    'BNBTiger is the king of beasts. They are the symbol of victory and strength. Powerful and tough.and our $BNBTIGER community is the same.BNBTigerSwap is your better choice',
  twitter: {
    cardType: 'summary_large_image',
    handle: '@PancakeSwap',
    site: '@PancakeSwap',
  },
  openGraph: {
    title: '🥞 PancakeSwap - The most popular DeFi exchange on BSC, now on Aptos',
    description:
      'BNBTiger is the king of beasts. They are the symbol of victory and strength. Powerful and tough.and our $BNBTIGER community is the same.BNBTigerSwap is your better choice',
    images: [{ url: 'https://aptos.pancakeswap.finance/images/hero.jpeg' }],
  },
}
