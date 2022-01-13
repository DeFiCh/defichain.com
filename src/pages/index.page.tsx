import { SSRConfig, useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

export default function HomePage (): JSX.Element {
  const { t } = useTranslation('common')

  return (
    <>
      <h1 data-testid='Header.title'>{t('title')}</h1>
    </>
  )
}

export async function getStaticProps ({ locale }): Promise<{ props: SSRConfig }> {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common']))
    }
  }
}
