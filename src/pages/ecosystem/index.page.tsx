import { Header } from '@components/commons/Header'
import { Container } from '@components/commons/Container'
import { SSRConfig } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { ResourceCard } from '../developers/_components/DeveloperResourceSection'
import { PropsWithChildren } from 'react'
import Image from 'next/image'

export default function EcosystemPage (): JSX.Element {
  return (
    <>
      <Header title='Ecosystem'>
        <div className='mt-10 flex flex-wrap'>
          <div className='w-full text-2xl text-gray-900' data-testid='Header.desc.main'>Be part of the DefiChain Ecosystem
          </div>
        </div>
      </Header>
      <Container>
        <EcosystemSection title='Contribute to DefiChain' testId='EcosystemSection.Contribute'>
          <ResourceCard text='Learn how you can build on DeFiChain and use $DFI coin.' buttonText='Developers' url='/developers' testid='EcosystemSection.BDeveloper'>
            <h1 className='text-2xl lg:text-4xl font-medium'>Become a developer</h1>
          </ResourceCard>
          <ResourceCard text='Tell us how you would like to contribute to the ecosystem.' buttonText='Contact us' url='/developers' testid='EcosystemSection.BPartnering'>
            <h1 className='text-2xl lg:text-4xl font-medium'>Become a service provider</h1>
          </ResourceCard>
        </EcosystemSection>
        <EcosystemSection title='Partners' testId='EcosystemSection.Partners'>
          <ResourceCard text='Stake DFI and receive DFI as rewards when using Cake DeFi.' buttonText='Go to CakeDefi' url='https://cakedefi.com' external testid='EcosystemSection.Cakedefi'>
            <Image alt='CakeDefi logo' width='138px' height='32px' src='/assets/svg/ecosystem/cake_logo.svg' />
            <h1 className='text-2xl mt-5 font-medium'>Cake Defi</h1>
          </ResourceCard>
          <ResourceCard text='DeFiChain (DFI) interest calculator and current rates.' buttonText='Go to Staking rewards' url='https://www.stakingrewards.com/earn/defichain/' external testid='EcosystemSection.Staking'>
            <Image alt='staking rewards logo' width='138px' height='32px' src='/assets/svg/ecosystem/stakingrewards_logo.svg' />
            <h1 className='text-2xl mt-5 font-medium'>Staking Rewards</h1>
          </ResourceCard>
          <ResourceCard text='DeFiChain (DFI) price, graph, data and info on Blockspot.io' buttonText='Go to Blockspot.io' url='https://blockspot.io/coin/defichain/' external testid='EcosystemSection.Blockspot'>
            <Image alt='staking rewards logo' width='155px' height='32px' src='/assets/img/ecosystem/blockspot.png' />
            <h1 className='text-2xl mt-5 font-medium'>Blockspot.io</h1>
          </ResourceCard>
          <ResourceCard text='Watch DFI on the Blockfolio Signal platform.' buttonText='Go to Blockfolio' url='https://blockfolio.com/coin/DFI' external testid='EcosystemSection.Blockfolio'>
            <Image alt='CakeDefi Logo' width='138px' height='32px' src='/assets/svg/ecosystem/blockfolio_logo.svg' />
            <h1 className='text-2xl mt-5 font-medium'>BlockFolio</h1>
          </ResourceCard>
          <ResourceCard text='Crypto Agency for Information related to Decentralized World.' buttonText='Go to Coinpedia' url='https://app.coinpedia.org/company/defichain' external testid='EcosystemSection.Coinpedia'>
            <Image alt='CakeDefi Logo' width='138px' height='32px' src='/assets/img/ecosystem/coinpedia.png' />
            <h1 className='text-2xl mt-5 font-medium'>Coinpedia</h1>
          </ResourceCard>
          <ResourceCard text='Data tools that bring transparency to the cryptoeconomy.' buttonText='Go to Messari' url='https://messari.io/asset/defichain' external testid='EcosystemSection.Messari'>
            <Image alt='CakeDefi Logo' width='138px' height='32px' src='/assets/svg/ecosystem/messari_logo.svg' />
            <h1 className='text-2xl mt-5 font-medium'>Messari</h1>
          </ResourceCard>
        </EcosystemSection>
      </Container>
    </>
  )
}

function EcosystemSection (props: PropsWithChildren<{title: string, testId: string}>): JSX.Element {
  return (
    <section className='my-16'>
      <h1 className='text-2xl lg:text-3xl font-semibold' data-testid={props.testId}>{props.title}</h1>
      <div className='flex flex-wrap -mx-3 my-10 pb-10'>
        {props.children}
      </div>
    </section>
  )
}

export async function getStaticProps ({ locale }): Promise<{ props: SSRConfig }> {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'layout']))
    }
  }
}
