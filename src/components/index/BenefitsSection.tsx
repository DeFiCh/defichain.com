import { Container } from '@components/commons/Container'
import { FeatureCard } from '@components/commons/FeatureCard'
import { RiExchangeFundsFill } from 'react-icons/ri'
import { FaScroll, FaShapes } from 'react-icons/fa'
import { MdOutlineDoNotDisturbOn } from 'react-icons/md'
import { IoMdConstruct } from 'react-icons/io'
import { useTranslation } from 'next-i18next'

export function BenefitsSection (): JSX.Element {
  const { t } = useTranslation('page-index')

  return (
    <section className='py-20' data-testid='BenefitSection'>
      <Container>
        <h1
          className='font-medium text-2xl md:text-3xl my-5'
          data-testid='Benefits.title'
        >{t('BenefitsSection.title')}
        </h1>
        <div className='flex flex-wrap -mx-6 lg:-mx-10'>
          <FeatureCard
            title={t('BenefitsSection.Variety.title')}
            desc={t('BenefitsSection.Variety.desc')}
            testid='Variety'
          >
            <FaShapes className='fill-primary-500' fontSize={50} />
          </FeatureCard>
          <FeatureCard
            title={t('BenefitsSection.Throughput.title')}
            desc={t('BenefitsSection.Throughput.desc')}
            testid='Throughput'
          >
            <RiExchangeFundsFill className='fill-primary-500' fontSize={50} />
          </FeatureCard>
          <FeatureCard
            title={t('BenefitsSection.Security.title')}
            desc={t('BenefitsSection.Security.desc')}
            testid='Security'
          >
            <MdOutlineDoNotDisturbOn className='fill-primary-500' fontSize={50} />
          </FeatureCard>
          <FeatureCard
            title={t('BenefitsSection.Development.title')}
            desc={t('BenefitsSection.Development.desc')}
            testid='Development'
          >
            <IoMdConstruct className='fill-primary-500' fontSize={50} />
          </FeatureCard>
          <FeatureCard
            title={t('BenefitsSection.Governance.title')}
            desc={t('BenefitsSection.Governance.desc')}
            testid='Governance'
          >
            <FaScroll className='fill-primary-500' fontSize={50} />
          </FeatureCard>
          <FeatureCard
            title={t('BenefitsSection.Immutability.title')}
            desc={t('BenefitsSection.Immutability.desc')}
            testid='Immutability'
          >
            <FaScroll className='fill-primary-500' fontSize={50} />
          </FeatureCard>
        </div>
      </Container>
    </section>
  )
}
