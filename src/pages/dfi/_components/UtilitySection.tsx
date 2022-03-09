import { Container } from '@components/commons/Container'
import { FaGlobe, FaPercentage } from 'react-icons/fa'
import { RiAuctionFill, RiExchangeDollarLine } from 'react-icons/ri'
import { BsPieChartFill, BsVinylFill } from 'react-icons/bs'
import { FeatureCard } from '@components/commons/FeatureCard'
import { useTranslation } from 'next-i18next'
import { Section } from '@components/commons/Section'

export function UtilitySection (): JSX.Element {
  const { t } = useTranslation(['page-dfi'])

  return (
    <Container bgClassName='bg-gray-100'>
      <Section title={t('CoinUtility.title')} testId='UtilitySection'>
        <div className='flex flex-wrap -mx-6 lg:-mx-10'>
          <FeatureCard
            title={t('CoinUtility.entries.Fees.title')}
            desc={t('CoinUtility.entries.Fees.desc')}
            testid='UtilitySection.Fees'
          >
            <FaPercentage className='fill-primary-500' fontSize={50} />
          </FeatureCard>
          <FeatureCard
            title={t('CoinUtility.entries.LoanCollaterals.title')}
            desc={t('CoinUtility.entries.LoanCollaterals.desc')}
            testid='UtilitySection.Collateral'
          >
            <RiExchangeDollarLine className='fill-primary-500' fontSize={50} />
          </FeatureCard>
          <FeatureCard
            title={t('CoinUtility.entries.StakingNodes.title')}
            desc={t('CoinUtility.entries.StakingNodes.desc')}
            testid='UtilitySection.Nodes'
          >
            <FaGlobe className='fill-primary-500' fontSize={50} />
          </FeatureCard>
          <FeatureCard
            title={t('CoinUtility.entries.DeFiCustomToken.title')}
            desc={t('CoinUtility.entries.DeFiCustomToken.desc')}
            testid='UtilitySection.Token'
          >
            <BsVinylFill className='fill-primary-500' fontSize={50} />
          </FeatureCard>
          <FeatureCard
            title={t('CoinUtility.entries.BudgetProposal.title')}
            desc={t('CoinUtility.entries.BudgetProposal.desc')}
            testid='UtilitySection.Proposal'
          >
            <RiAuctionFill className='fill-primary-500' fontSize={50} />
          </FeatureCard>
          <FeatureCard
            title={t('CoinUtility.entries.LiquidityPools.title')}
            desc={t('CoinUtility.entries.LiquidityPools.desc')}
            testid='UtilitySection.Pools'
          >
            <BsPieChartFill className='fill-primary-500' fontSize={50} />
          </FeatureCard>
        </div>
      </Section>
    </Container>
  )
}
