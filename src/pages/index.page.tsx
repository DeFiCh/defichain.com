import { SSRConfig } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { HomePageHeader } from '@components/home/HomePageHeader'
import { CardSection } from '@components/home/CardSection'
import { ComparisonSection } from '@components/home/ComparisonSection'
import { BenefitSection } from '@components/home/BenefitSection'
import { RoadmapSection } from '@components/home/RoadMap/RoadmapSection'
import { DistributionSection } from '@components/home/DistributionSection'

export default function HomePage (): JSX.Element {
  return (
    <>
      <HomePageHeader />
      <CardSection />
      <ComparisonSection />
      <BenefitSection />
      <DistributionSection />
      <RoadmapSection />
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
