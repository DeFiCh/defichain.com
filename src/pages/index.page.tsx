import { SSRConfig, useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

export default function HomePage (): JSX.Element {
  const { t } = useTranslation('common')

  return (
    <>
      <div data-testid='Header.title' className='text-3xl'>{t('title')}</div>
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
