import { Header } from '@components/commons/Header'
import { ExternalLink } from '@components/commons/link/ExternalLink'
import { Container } from '@components/commons/Container'
import { SSRConfig, useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { DfiCoin } from './_components/Dfi'
import { UtilitySection } from './_components/UtilitySection'
import { DistributionSection } from './_components/DistributionSection'
import { ExchangeSection } from './_components/ExchangeSection'

export default function DFIPage (): JSX.Element {
  const { t } = useTranslation(['dfi'])

  return (
    <>
      <Header title={t('Header.title')}>
        <div className='mt-10 flex flex-wrap'>
          <div className='w-full text-2xl text-gray-900' data-testid='Header.desc.main'>
            {t('Header.desc')}
          </div>
        </div>
      </Header>

      <Container>
        <section
          className='flex flex-col lg:flex-row space-y-20 md:space-y-0 md:space-x-32 w-full py-20 lg:py-32 items-center'
        >
          <div className='flex flex-col space-y-10 w-full lg:w-1/3'>
            <h1
              className='text-2xl md:text-5xl font-medium'
              data-testid='DfiPage.Section.Heading'
            >{t('DFICoinSection.title')}
            </h1>
            <div className='text-lg md:text-2xl font-light md:!leading-[3rem]' data-testid='DfiPage.Section.Text'>
              {t('DFICoinSection.desc')} <ExternalLink url='https://defiscan.live'>DeFiScan</ExternalLink>.
            </div>
            <div className='italic' data-testid='DfiPage.Section.Note'>
              {t('DFICoinSection.disclaimer')}
            </div>
          </div>
          <div>
            <DfiCoin className='text-primary-500' />
          </div>
        </section>
      </Container>

      <UtilitySection />
      <DistributionSection />
      <ExchangeSection />
    </>
  )
}

export async function getStaticProps ({ locale }): Promise<{ props: SSRConfig }> {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'layout', 'dfi']))
    }
  }
}
