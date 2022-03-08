import { Container } from '@components/commons/Container'
import { FaGlobe, FaPercentage } from 'react-icons/fa'
import { RiAuctionFill, RiExchangeDollarLine } from 'react-icons/ri'
import { BsPieChartFill, BsVinylFill } from 'react-icons/bs'
import { FeatureCard } from '@components/commons/FeatureCard'
import { useTranslation } from 'next-i18next'

export function UtilitySection (): JSX.Element {
  const { t } = useTranslation(['page-dfi'])

  return (
    <section className='bg-gray-50 py-16 px-6'>
      <Container>
        <h1 className='font-medium text-2xl lg:text-3xl' data-testid='UtilitySection.Heading'>{t('CoinUtility.title')}</h1>
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
      </Container>
    </section>
  )
}
