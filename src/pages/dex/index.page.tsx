import { SSRConfig, useTranslation } from 'next-i18next'
import { Header } from '@components/commons/Header'
import { Container } from '@components/commons/Container'
import { LiquidityPoolsSection } from './_components/LiquidityPoolsSection'
import Image from 'next/image'
import liquidityImage from '../../../public/assets/img/dex/liquidity.png'
import { WalletFeaturesSection } from './_components/WalletFeaturesSection'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

export default function DexPage (): JSX.Element {
  const { t } = useTranslation('dex')

  return (
    <>
      <Header title={t('Header.title')}>
        <div className='mt-10 flex flex-wrap'>
          <div className='w-full text-2xl text-gray-900' data-testid='Header.desc.main'>{t('Header.desc.main')}
          </div>
          <br />
          <div className='w-full mt-1.5 text-gray-600' data-testid='Header.desc.secondary'>{t('Header.desc.secondary')}</div>
        </div>
      </Header>
      <Container>
        <LiquidityPoolsSection />

        <div className='flex flex-wrap items-start p-10'>
          <div className='w-full lg:w-1/2 lg:px-8'>
            <Image src={liquidityImage} layout='responsive' objectFit='cover' alt={t('LiquidityMining.title')} data-testid='LiquidityMiningSection.image' />
          </div>
          <div className='w-full lg:w-1/2 flex flex-wrap lg:mt-2 xl:mt-4 lg:px-10 xl:px-14'>
            <div className='text-center lg:text-left text-gray-900'>
              <div className='text-4xl font-medium' data-testid='LiquidityMiningSection.title'>{t('LiquidityMining.title')}</div>
              <div className='text-xl mt-8' data-testid='LiquidityMiningSection.desc'>{t('LiquidityMining.desc')}</div>
            </div>
          </div>
        </div>

        <WalletFeaturesSection />
      </Container>
    </>
  )
}

export async function getStaticProps ({ locale }): Promise<{ props: SSRConfig }> {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'layout', 'dex']))
    }
  }
}
