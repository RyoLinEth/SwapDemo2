import Trans from 'components/Trans'
import styled from 'styled-components'
import { Link } from '@pancakeswap/uikit'

const InlineLink = styled(Link)`
  display: inline;
`

const config = [
  {
    title: <Trans>How many NFTs can I mint?</Trans>,
    description: [
      <Trans>
        You can mint 2 NFTs with an address.
      </Trans>,
      // <Trans>
      //   Incomes of the NFTs will be used to buyback BNBTiger.
      // </Trans>
    ]
  },
  {
    title: <Trans>What is the power of the BNBTiger NFT?</Trans>,
    description: [
      <Trans>Habitat of BNBTIGER</Trans>,
    ]
  },
  {
    title: <Trans>What is the price of the BNBTiger NFT?</Trans>,
    description: [
      <Trans>The price is 50,000,000,000,000,000,000 BNBTiger per NFT</Trans>,
    ]
  },
]
export default config
