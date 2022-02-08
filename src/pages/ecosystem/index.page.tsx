import { Header } from '@components/commons/Header'
import { Container } from '@components/commons/Container'
import { SSRConfig, useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { PropsWithChildren } from 'react'
import Image from 'next/image'
import CakeDeFiLogo from '../../../public/assets/svg/ecosystem/cake_logo.svg'
import StakingRewardsLogo from '../../../public/assets/svg/ecosystem/stakingrewards_logo.svg'
import BlockspotLogo from '../../../public/assets/img/ecosystem/blockspot.png'
import Blockfolio from '../../../public/assets/svg/ecosystem/blockfolio_logo.svg'
import MessariLogo from '../../../public/assets/svg/ecosystem/messari_logo.svg'
import { ResourceCard } from '@components/commons/ResourceCard'

export default function EcosystemPage (): JSX.Element {
  const { t } = useTranslation(['ecosystem'])

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
        <EcosystemSection title={t('ContributeSection.title')} testId='EcosystemSection.Contribute'>
          <ResourceCard
            text={t('ContributeSection.Developer.desc')} buttonText={t('ContributeSection.Developer.button')}
            url='/developers' testid='EcosystemSection.Developer'
          >
            <h1 className='text-2xl lg:text-4xl font-medium'>{t('ContributeSection.Developer.title')}</h1>
          </ResourceCard>
          <ResourceCard
            text={t('ContributeSection.ServiceProvider.desc')}
            buttonText={t('ContributeSection.ServiceProvider.button')}
            url='/developers' testid='EcosystemSection.ServiceProvider'
          >
            <h1 className='text-2xl lg:text-4xl font-medium'>{t('ContributeSection.ServiceProvider.title')}</h1>
          </ResourceCard>
        </EcosystemSection>
        <EcosystemSection title={t('PartnersSection.title')} testId='EcosystemSection.Partners'>
          <ResourceCard
            text={t('PartnersSection.CakeDeFi.desc')} buttonText={t('PartnersSection.CakeDeFi.button')}
            url='https://cakedefi.com' external testid='EcosystemSection.CakeDeFi'
          >
            <Image alt='CakeDefi logo' src={CakeDeFiLogo} />
            <h1 className='text-2xl mt-5 font-medium'>{t('PartnersSection.CakeDeFi.title')}</h1>
          </ResourceCard>
          <ResourceCard
            text={t('PartnersSection.StakingRewards.desc')} buttonText={t('PartnersSection.StakingRewards.button')}
            url='https://www.stakingrewards.com/earn/defichain/' external testid='EcosystemSection.Staking'
          >
            <Image alt='staking rewards logo' src={StakingRewardsLogo} />
            <h1 className='text-2xl mt-5 font-medium'>{t('PartnersSection.StakingRewards.title')}</h1>
          </ResourceCard>
          <ResourceCard
            text={t('PartnersSection.Blockspot.desc')}
            buttonText={t('PartnersSection.Blockspot.button')} url='https://blockspot.io/coin/defichain/' external
            testid='EcosystemSection.Blockspot'
          >
            <Image alt='staking rewards logo' src={BlockspotLogo} />
            <h1 className='text-2xl mt-5 font-medium'>{t('PartnersSection.Blockspot.title')}</h1>
          </ResourceCard>
          <ResourceCard
            text={t('PartnersSection.Blockfolio.desc')} buttonText={t('PartnersSection.Blockfolio.button')}
            url='https://blockfolio.com/coin/DFI' external testid='EcosystemSection.Blockfolio'
          >
            <Image alt='CakeDefi Logo' src={Blockfolio} />
            <h1 className='text-2xl mt-5 font-medium'>{t('PartnersSection.Blockfolio.title')}</h1>
          </ResourceCard>
          <ResourceCard
            text={t('PartnersSection.Messari.desc')} buttonText={t('PartnersSection.Messari.button')}
            url='https://messari.io/asset/defichain' external testid='EcosystemSection.Messari'
          >
            <Image alt='CakeDefi Logo' src={MessariLogo} />
            <h1 className='text-2xl mt-5 font-medium'>{t('PartnersSection.Messari.title')}</h1>
          </ResourceCard>
        </EcosystemSection>
      </Container>
    </>
  )
}

function EcosystemSection (props: PropsWithChildren<{ title: string, testId: string }>): JSX.Element {
  return (
    <section className='my-16'>
      <h1 className='text-2xl lg:text-3xl font-semibold' data-testid={props.testId}>{props.title}</h1>
      <div className='flex flex-wrap -mx-1.5 my-10 pb-10'>
        {props.children}
      </div>
    </section>
  )
}

export async function getStaticProps ({ locale }): Promise<{ props: SSRConfig }> {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'layout', 'ecosystem']))
    }
  }
}
