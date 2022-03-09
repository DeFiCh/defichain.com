import { SSRConfig, useTranslation } from 'next-i18next'
import { Header } from '@components/commons/Header'
import { Container } from '@components/commons/Container'
import { LiquidityPoolsSection } from './_components/LiquidityPoolsSection'
import { WalletFeaturesSection } from './_components/WalletFeaturesSection'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { Head } from '@components/commons/Head'

export default function DexPage (): JSX.Element {
  const { t } = useTranslation('page-dex')

  return (
    <>
      <Head
        title='Decentralized Exchange'
        description='Swap on the DEX, mine liquidity and more, with the DeFiChain wallet app. Available for Windows, macOS and Linux.'
      />
      <Header title={t('Header.title')}>
        <div className='mt-10 flex flex-wrap'>
          <div className='w-full text-2xl text-gray-900' data-testid='Header.desc.main'>{t('Header.desc.main')}</div>
          <br />
          <div
            className='w-full mt-1.5 text-gray-600'
            data-testid='Header.desc.secondary'
          >{t('Header.desc.secondary')}
          </div>
        </div>
      </Header>
      <Container>
        <LiquidityPoolsSection />
        <WalletFeaturesSection />
      </Container>
    </>
  )
}

export async function getStaticProps ({ locale }): Promise<{ props: SSRConfig }> {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'layout', 'page-dex']))
    }
  }
}
