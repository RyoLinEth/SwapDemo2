import { useMemo } from 'react'
import useGetPublicIfoV3Data from 'views/Ifos/hooks/v3/useGetPublicIfoData'
import {
  Box,
  Step,
  Stepper,
  Card,
  CardBody,
  CardFooter,
  Heading,
  IconButton,
  PageSection,
  Slider,
  Row,
  AddIcon,
  MinusIcon,
  Button,
  PageHeader,
  Image,
  Flex,
} from '@pancakeswap/uikit'
import useGetWalletIfoV3Data from 'views/Ifos/hooks/v3/useGetWalletIfoData'

import { Ifo } from 'config/constants/types'
import { useTranslation } from '@pancakeswap/localization'
import { IfoCurrentCard } from './components/IfoFoldableCard'
import IfoContainer from './components/IfoContainer'

interface TypeProps {
  activeIfo?: Ifo
}

const CurrentIfo: React.FC<React.PropsWithChildren<TypeProps>> = ({ activeIfo }) => {
  const { t } = useTranslation()

  return (
    <>
      <PageHeader>
        <Flex justifyContent="space-between" flexDirection={['column', null, null, 'row']}>
          <Flex flex="1" flexDirection="column" mr={['8px', 0]}>
            <Heading as="h1" scale="xxl" color="secondary" mb="24px">
              BNBTiger Ido
            </Heading>
            <Heading scale="md" color="text">
              {t("Just Ido.")}
            </Heading>
          </Flex>

          <Image
            mx="auto"
            mt="12px"
            src="/images/decorations/bnbtiger.png"
            alt="Pancake illustration"
            width={192}
            height={184.5}
          />
        </Flex>
      </PageHeader>
      <IfoContainer
        ifoSection={<IfoCurrentCard />}
      />
    </>
  )
}

export default CurrentIfo
