import { SSRConfig } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { HomePageHeader } from '@components/home/HomePageHeader'
import { CardSection } from '@components/home/CardSection'
import { ComparisonSection } from '@components/home/ComparisonSection'

export default function HomePage (): JSX.Element {
  return (
    <>
      <HomePageHeader />
      <CardSection />
      <ComparisonSection />
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
