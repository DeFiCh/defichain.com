import { Header } from '@components/commons/Header'
import { SSRConfig, useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { DFICoinSection } from './_components/DFICoinSection'
import { UtilitySection } from './_components/UtilitySection'
import { DistributionSection } from './_components/DistributionSection'
import { ExchangeSection } from './_components/ExchangeSection'
import { Head } from '@components/commons/Head'

export default function DFIPage (): JSX.Element {
  const { t } = useTranslation(['page-dfi'])

  return (
    <>
      <Head
        title={t('Head.title')}
        description={t('Head.desc')}
      />
      <Header title={t('Header.title')}>
        <div className='mt-10 flex flex-wrap'>
          <div className='w-full text-2xl text-gray-900' data-testid='Header.desc.main'>
            {t('Header.desc')}
          </div>
        </div>
      </Header>

      <DFICoinSection />
      <UtilitySection />
      <DistributionSection />
      <ExchangeSection />
    </>
  )
}

export async function getStaticProps ({ locale }): Promise<{ props: SSRConfig }> {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'layout', 'page-dfi']))
    }
  }
}
