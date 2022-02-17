import { Header } from '@components/commons/Header'
import { ExternalLink } from '@components/commons/link/ExternalLink'
import { Container } from '@components/commons/Container'
import { SSRConfig } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { DfiCoin } from './_components/Dfi'
import { UtilitySection } from './_components/UtilitySection'
import { DistributionSection } from './_components/DistributionSection'
import { ExchangeSection } from './_components/ExchangeSection'

export default function DfiPage (): JSX.Element {
  return (
    <>
      <Header title='$DFI'>
        <div className='mt-10 flex flex-wrap'>
          <div className='w-full text-2xl text-gray-900' data-testid='Header.desc.main'>
            Learn about and acquire the $DFI coin. Join the DeFiChain Insiders.
          </div>
        </div>
      </Header>
      <Container>
        <section className='flex flex-col md:flex-row space-y-20 md:space-y-0 md:space-x-32 w-full py-32 items-center'>
          <div className='flex flex-col space-y-10 w-full md:w-1/3'>
            <h1 className='text-2xl md:text-5xl font-medium' data-testid='DfiPage.Section.Heading'>$DFI coin</h1>
            <div className='text-lg md:text-2xl font-light md:!leading-[3rem]' data-testid='DfiPage.Section.Text'>
              The $DFI coin is an integral unit of account in DeFiChain. The DeFiChain Foundation issued roughly 600 million DFI on May 11th, 2020. The current circulating supply (with staking and liquidity mining) is available at <ExternalLink url='https://defiscan.live'>DeFiChain Explorer</ExternalLink>.
            </div>
            <div className='italic' data-testid='DfiPage.Section.Note'>
              Important: DeFi chain is a community project. There was/is no Initial Coin Offering, only free airdrops.
            </div>
          </div>
          <div>
            <DfiCoin className='text-primary-500' />
          </div>
        </section>
      </Container>
      <UtilitySection />
      <DistributionSection />
      <ExchangeSection />
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
