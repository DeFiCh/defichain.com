import { Container } from '@components/commons/Container'
import { FeatureCard } from '@components/commons/FeatureCard'
import { RiStackLine } from 'react-icons/ri'

import { Oracles } from '@components/icons/assets/home/Oracles'
import { Lending } from '@components/icons/assets/home/Lending'
import { WrappedToken } from '@components/icons/assets/home/WrappedTokens'
import { Transfer } from '@components/icons/assets/home/Transfer'
import { Tokens } from '@components/icons/assets/wallet-features/Tokens'
import { Dex } from '@components/icons/assets/wallet-features/Dex'
import { useTranslation } from 'next-i18next'

export function FunctionsSection (): JSX.Element {
  const { t } = useTranslation('page-index')

  return (
    <section className='bg-gray-50 py-20' data-testid='BenefitSection.Design'>
      <Container>
        <h1 className='font-medium text-2xl md:text-4xl w-full md:w-1/2 my-5' data-testid='Design.title'>
          {t('FunctionsSection.title')}
        </h1>
        <div className='flex flex-wrap -mx-6 lg:-mx-10'>
          <FeatureCard
            title={t('FunctionsSection.Lending.title')}
            desc={t('FunctionsSection.Lending.desc')}
            testid='Lending'
          >
            <Lending className='fill-primary-500' fontSize={50} />
          </FeatureCard>
          <FeatureCard
            title={t('FunctionsSection.WrappedToken.title')}
            desc={t('FunctionsSection.WrappedToken.desc')}
            testid='WrappedToken'
          >
            <WrappedToken className='fill-primary-500' fontSize={50} />
          </FeatureCard>

          <FeatureCard
            title={t('FunctionsSection.Oracles.title')}
            desc={t('FunctionsSection.Oracles.desc')}
            testid='Oracles'
          >
            <Oracles className='fill-primary-500' fontSize={50} />
          </FeatureCard>
          <FeatureCard
            title={t('FunctionsSection.Exchanges.title')}
            desc={t('FunctionsSection.Exchanges.desc')}
            testid='Exchanges'
          >
            <Dex className='fill-primary-500' fontSize={50} />
          </FeatureCard>
          <FeatureCard
            title={t('FunctionsSection.Transferable.title')}
            desc={t('FunctionsSection.Transferable.desc')}
            testid='Transferable'
          >
            <Transfer className='fill-primary-500' fontSize={50} />
          </FeatureCard>
          <FeatureCard
            title={t('FunctionsSection.Debt.title')}
            desc={t('FunctionsSection.Debt.desc')}
            testid='Debt'
          >
            <RiStackLine className='fill-primary-500' fontSize={50} />
          </FeatureCard>
          <FeatureCard
            title={t('FunctionsSection.Tokenization.title')}
            desc={t('FunctionsSection.Tokenization.desc')}
            testid='Tokenization'
          >
            <Tokens className='fill-primary-500' fontSize={50} />
          </FeatureCard>
          <FeatureCard
            title={t('FunctionsSection.Dividends.title')}
            desc={t('FunctionsSection.Dividends.desc')}
            testid='Dividends'
          >
            <Dex className='fill-primary-500' fontSize={50} />
          </FeatureCard>
        </div>
      </Container>
    </section>
  )
}
