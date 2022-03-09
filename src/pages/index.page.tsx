import { SSRConfig } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { HomePageHeader } from '@components/index/HomePageHeader'
import { CardSection } from '@components/index/CardSection'
import { SolutionSection } from '@components/index/SolutionSection'
import { BenefitsSection } from '@components/index/BenefitsSection'
import { FunctionsSection } from '@components/index/FunctionsSection'
import { RoadmapSection } from '@components/index/roadmap/RoadmapSection'
import { BuiltOnBitcoinSection } from '@components/index/BuiltOnBitcoinSection'
import { DistributionSection } from '@components/index/DistributionSection'
import { Head } from '@components/commons/Head'

export default function HomePage (): JSX.Element {
  return (
    <>
      <Head
        title='DeFiChain – Native Decentralized Finance for Bitcoin'
        description='A blockchain dedicated to fast, intelligent and transparent decentralized financial services, accessible by everyone.'
      />
      <HomePageHeader />
      <CardSection />
      <SolutionSection />
      <BenefitsSection />
      <FunctionsSection />
      <BuiltOnBitcoinSection />
      <DistributionSection />
      <RoadmapSection />
    </>
  )
}

export async function getStaticProps ({ locale }): Promise<{ props: SSRConfig }> {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'layout', 'page-index']))
    }
  }
}
