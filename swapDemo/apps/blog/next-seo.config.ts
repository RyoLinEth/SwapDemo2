import { DefaultSeoProps } from 'next-seo'

export const SEO: DefaultSeoProps = {
  titleTemplate: '%s | PancakeSwap',
  defaultTitle: 'Blog | PancakeSwap',
  description:
    'Cheaper and faster than Uniswap? Discover PancakeSwap, the leading DEX on BNB Smart Chain (BSC) with the best farms in DeFi and a lottery for CAKE.',
  twitter: {
    cardType: 'summary_large_image',
    handle: '@PancakeSwap',
    site: '@PancakeSwap',
  },
  openGraph: {
    title: '🥞 PancakeSwap - A next evolution DeFi exchange on BNB Smart Chain (BSC)',
    description:
      'BNBTiger is the king of beasts. They are the symbol of victory and strength. Powerful and tough.and our $BNBTIGER community is the same.BNBTigerSwap is your better choice',
    images: [{ url: 'https://swapdemo.pages.dev/images/decorations/bnbtiger.png' }],
  },
}
