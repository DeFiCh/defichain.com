import { SSRConfig } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { HomePageHeader } from '@components/home/HomePageHeader'
import { CardSection } from '@components/home/CardSection'

export default function HomePage (): JSX.Element {
  return (
    <>
      <HomePageHeader />
      <CardSection />
    </>
  )
}

export async function getStaticProps ({ locale }): Promise<{ props: SSRConfig }> {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'layout']))
    }
  }
}
