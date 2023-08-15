import { ContextApi, useTranslation } from '@pancakeswap/localization'
import {
  Box,
  Card,
  CardBody,
  CardHeader,
  Flex,
  HelpIcon,
  Text,
  useTooltip,
  ExpandableLabel,
  CardFooter,
} from '@pancakeswap/uikit'
import { useAccount } from 'wagmi'
import { Ifo, PoolIds } from 'config/constants/types'
import { useMemo, useState } from 'react'
import { useProfile } from 'state/profile/hooks'
import styled from 'styled-components'
import useCriterias from 'views/Ifos/hooks/v3/useCriterias'
import { PublicIfoData, WalletIfoData } from 'views/Ifos/types'
import { CardConfigReturn, EnableStatus } from '../types'
import IfoCardActions from './IfoCardActions'
import IfoCardDetails from './IfoCardDetails'
import IfoCardTokens from './IfoCardTokens'
import IfoVestingCard from './IfoVestingCard'
import IfoTopInviteInfo from './IfoTopInviteInfo'

const StyledCard = styled(Card)`
  width: 100%;
  margin: 0 auto;
  padding: 0 0 3px 0;
  height: fit-content;
`
const StyledCardFooter = styled(CardFooter)`
  padding: 16px;
  margin: 0 -12px -12px;
  background: ${({ theme }) => theme.colors.background};
  text-align: center;
`

interface IfoCardProps {
  poolId?: PoolIds
  ifo?: Ifo
  publicIfoData?: PublicIfoData
  walletIfoData?: WalletIfoData
  onApprove?: () => Promise<any>
  enableStatus?: EnableStatus
}

// card的一些配置
export const cardConfig = (
  t: ContextApi['t'],
  poolId: PoolIds,
  meta: {
    version: number
    needQualifiedPoints?: boolean
    needQualifiedNFT?: boolean
  },
): CardConfigReturn => {
  switch (poolId) {
    case PoolIds.poolBasic:
      if (meta?.version >= 3.1) {
        const MSG_MAP = {
          needQualifiedNFT: t('Set PancakeSquad NFT as Pancake Profile avatar.'),
          needQualifiedPoints: t('Reach a certain Pancake Profile Points threshold.'),
        }

        const msgs = Object.keys(meta)
          .filter((criteria) => meta[criteria])
          .map((criteria) => MSG_MAP[criteria])
          .filter(Boolean)

        return {
          title: t('Private Sale'),
          variant: 'blue',
          tooltip: msgs?.length ? (
            <>
              <Text>
                {msgs.length > 1 // one or multiple
                  ? t('Meet any one of the requirements to join:')
                  : t('Meet the following requirement to join:')}
              </Text>
              {msgs.map((msg) => (
                <Text ml="16px" key={msg} as="li">
                  {msg}
                </Text>
              ))}
            </>
          ) : null,
        }
      }

      return {
        title: t('Basic Sale'),
        variant: 'blue',
        tooltip: t(
          'Every person can only commit a limited amount, but may expect a higher return per token committed.',
        ),
      }
    case PoolIds.poolUnlimited:
      return {
        title: meta?.version >= 3.1 ? t('Public Sale') : t('Unlimited Sale'),
        variant: 'violet',
        tooltip: t('No limits on the amount you can commit. Additional fee applies when claiming.'),
      }

    default:
      return { title: '', variant: 'blue', tooltip: '' }
  }
}

// active的ifo 右边的卡片公开销售和私人销售卡片
const SmallCard: React.FC<React.PropsWithChildren<IfoCardProps>> = ({
  poolId,
  ifo,
  publicIfoData,
  walletIfoData,
  onApprove,
  enableStatus,
}) => {
  // const { t } = useTranslation()
  // const { address: account } = useAccount()

  // const { admissionProfile, pointThreshold, vestingInformation } = publicIfoData[poolId]

  // const { needQualifiedNFT, needQualifiedPoints } = useMemo(() => {
  //   return ifo.version >= 3.1 && poolId === PoolIds.poolBasic
  //     ? {
  //         needQualifiedNFT: Boolean(admissionProfile),
  //         needQualifiedPoints: pointThreshold ? pointThreshold > 0 : false,
  //       }
  //     : {}
  // }, [ifo.version, admissionProfile, pointThreshold, poolId])

  // const config = cardConfig(t, poolId, {
  //   version: ifo.version,
  //   needQualifiedNFT,
  //   needQualifiedPoints,
  // })

  // const { hasActiveProfile, isLoading: isProfileLoading } = useProfile()
  // // const { targetRef, tooltip, tooltipVisible } = useTooltip(config.tooltip, { placement: 'bottom' })

  // const isLoading = isProfileLoading || publicIfoData.status === 'idle'

  // const { isEligible, criterias } = useCriterias(walletIfoData[poolId], {
  //   needQualifiedNFT,
  //   needQualifiedPoints,
  // })

  // const isVesting = useMemo(() => {
  //   return (
  //     account &&
  //     ifo.version >= 3.2 &&
  //     vestingInformation.percentage > 0 &&
  //     publicIfoData.status === 'finished' &&
  //     walletIfoData[poolId].amountTokenCommittedInLP.gt(0)
  //   )
  // }, [account, ifo, poolId, publicIfoData, vestingInformation, walletIfoData])

  const cardTitle = 'Public Sale'

  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <>
      {/* {tooltipVisible && tooltip} */}
      <StyledCard>
        {/* card的头部header */}
        <CardHeader p="16px 24px">
          <Flex justifyContent="space-between" alignItems="center">
            <Text bold fontSize="20px" lineHeight={1}>
              {cardTitle}
            </Text>
            {/* <div ref={targetRef}>
              <HelpIcon />
            </div> */}
          </Flex>
        </CardHeader>
        <CardBody p="12px">
        <IfoTopInviteInfo />
              <Box mt="24px">
                {/* 连接钱包按钮 */}
                <IfoCardActions
                  isEligible={false}
                  poolId={poolId}
                  ifo={ifo}
                  publicIfoData={publicIfoData}
                  walletIfoData={walletIfoData}
                  hasProfile={false}
                  isLoading={false}
                  enableStatus={enableStatus}
                  hideBtn
                />
              </Box>
        </CardBody>
      </StyledCard>
    </>
  )
}

export default SmallCard
