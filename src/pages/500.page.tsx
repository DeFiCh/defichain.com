import { SSRConfig, useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { PageError } from '@components/commons/error/PageError'

export default function InternalError (): JSX.Element {
  const { t } = useTranslation(['page-error'])

  return (
    <PageError title={t('500.title')} errorDesc={t('500.error')} text={t('common.back')} />
  )
}

export async function getStaticProps ({ locale }): Promise<{ props: SSRConfig }> {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'layout', 'page-error']))
    }
  }
}
