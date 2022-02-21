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

export default function LearnPage (): JSX.Element {
  const { t } = useTranslation(['learn'])

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

      </Container>
    </>
  )
}

function VideoSection (props: PropsWithChildren<{ title: string, testId: string }>): JSX.Element {
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
