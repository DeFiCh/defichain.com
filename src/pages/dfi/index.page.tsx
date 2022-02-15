import { Header } from '@components/commons/Header'
import { ExternalLink } from '@components/commons/link/ExternalLink'
import { Container } from '@components/commons/Container'
import { SSRConfig } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { DfiCoin } from './_components/Dfi'
import { ExchangeCard, UtilityCard } from './_components/UtilityCard'
import { FaPercentage, FaGlobe } from 'react-icons/fa'
import { BsPieChartFill, BsVinylFill, BsFileEarmarkCodeFill } from 'react-icons/bs'
import { RiAuctionFill, RiExchangeDollarLine } from 'react-icons/ri'
import { SupplyChart } from './_components/SupplyChart'

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
            <div className='text-lg md:text-2xl font-light' data-testid='DfiPage.Section.Text'>
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
      <section className='bg-gray-50 py-20'>
        <Container>
          <h1 className='font-medium text-3xl' data-testid='DfiPage.Utilities.Heading'>$DFI coin utility</h1>
          <div className='flex flex-wrap'>
            <UtilityCard classname='lg:-ml-12' title='Fees' desc='Pay for transactions, smart contracts and other DeFi activities.' testId='DfiPage.Utilities.Fees'>
              <FaPercentage className='fill-primary-500' fontSize={50} />
            </UtilityCard>
            <UtilityCard title='Loan collaterals' desc='Lend or borrow using crypto assets as collateral.' testId='DfiPage.Utilities.Collateral'>
              <RiExchangeDollarLine className='fill-primary-500' fontSize={50} />
            </UtilityCard>
            <UtilityCard title='Staking nodes' desc='Fund a new staking node for just 20,000 DFI.' testId='DfiPage.Utilities.Nodes'>
              <FaGlobe className='fill-primary-500' fontSize={50} />
            </UtilityCard>
            <UtilityCard classname='lg:-ml-12' title='DeFi Custom Token' desc='Create a non-refundable personalised DCT (DeFi Custom Token).' testId='DfiPage.Utilities.Token'>
              <BsVinylFill className='fill-primary-500' fontSize={50} />
            </UtilityCard>
            <UtilityCard title='Budget proposal' desc='Submit a community budget proposal for 500 DFI (non-refundable).' testId='DfiPage.Utilities.Proposal'>
              <RiAuctionFill className='fill-primary-500' fontSize={50} />
            </UtilityCard>
            <UtilityCard title='Liquidity pools' desc='Provide liquidity for the decentralized exchange between crypto assets.' testId='DfiPage.Utilities.Pools'>
              <BsPieChartFill className='fill-primary-500' fontSize={50} />
            </UtilityCard>
          </div>
        </Container>
      </section>
      <section className='py-20'>
        <Container>
          <div className='flex flex-col w-full  md:w-1/3 lg:w-1/2 mb-16 space-y-10'>
            <h1 className='font-medium text-2xl md:text-5xl' data-testid='DfiPage.Distribution.Heading'>Initial Token Distribution</h1>
            <div className='text-xl md:text-2xl' data-testid='DfiPage.Distribution.Text'> Of the 1.2 billion $DFI coins, 49% will be in the initial supply, with the rest issued to masternode holders over time.</div>
          </div>
          <div className='mx-auto w-full md:w-[60%] space-y-16' data-testid='DfiPage.Distribution.Chart'>
            <SupplyChart labelA='Initial supply' labelB='To masternodes over time' />
            <div>
              Of the initial supply, 49% will be kept by the DeFiChain Foundation. The rest may be distributed to external partners, to fund the initial development.
            </div>
            <SupplyChart labelA='DeFiChain Foundation' labelB='External partners' fill />
          </div>
        </Container>
      </section>
      <section className='py-20'>
        <Container>
          <div className='flex flex-col w-full  md:w-1/3 lg:w-1/2 mb-16 space-y-10'>
            <h1 className='font-medium text-2xl md:text-5xl'>Acquiring $DFI coins</h1>
            <div className='text-xl md:text-2xl'>$DFI coins will be issued to users and partners with an interest in utilizing and participating in the ecosystem.</div>
          </div>
          <div className='flex flex-col md:flex-row md:space-x-10 mb-20'>
            <div className='flex items-center flex-col w-full space-y-3'>
              <RiExchangeDollarLine className='fill-primary-500' fontSize={70} />
              <h1 className='text-2xl font-semibold' data-testid='DfiPage.Exchange.Heading'>Exchanges</h1>
              <div className='text-xl font-light md:ml-5' data-testid='DfiPage.Exchange.Text'>
                You can now purchase DFI at these select exchanges, with more exchanges to follow.
              </div>
            </div>
            <div className='flex flex-wrap justify-center md:justify-start'>
              <ExchangeCard url='https://global.bittrex.com/Market/Index?MarketName=BTC-DFI' imageSrc='/assets/svg/dfi/logo-bittrex.svg' testid='DfiPage.Exchange.Bittrex' name='Bittrex' />
              <ExchangeCard url='https://www.bitrue.com/trade/dfi_btc' imageSrc='/assets/svg/dfi/logo-bittrue.svg' testid='DfiPage.Exchange.Bittrue' name='Bittrue' />
              <ExchangeCard url='https://dfx.swiss/en/' imageSrc='/assets/svg/dfi/logo-dfx.svg' testid='DfiPage.Exchange.Dfx' name='Dfx' />
              <ExchangeCard url='' imageSrc='/assets/svg/dfi/logo-latoken.svg' testid='DfiPage.Exchange.Latoken' name='Latoken' />
              <ExchangeCard url='https://trade.kucoin.com/DFI-BTC' imageSrc='/assets/svg/dfi/logo-kucoin.svg' testid='DfiPage.Exchange.Kucoin' name='Kucoin' />
              <ExchangeCard url='https://global.transak.com/?apiKey=9cb22c33-f1fc-4ff0-9736-9159bb879568&cryptoCurrencyCode=DFI' imageSrc='/assets/img/dfi/logo-transak.png' testid='DfiPage.Exchange.Transak' name='Transak' />
              <ExchangeCard url='https://www.hotbit.io/exchange?symbol=DFI_USDT' imageSrc='/assets/img/dfi/logo-hotbit.png' testid='DfiPage.Exchange.Hotbit' name='Hotbit' />
              <ExchangeCard url='https://hoo.com/innovation/dfi-usdt' imageSrc='/assets/img/dfi/logo-hoo.png' testid='DfiPage.Exchange.Hoo' name='Hoo' />
              <ExchangeCard url='https://easycrypto.com/au/buy-sell/dfi-defichain' imageSrc='/assets/img/dfi/logo-easycrypto-au.png' testid='DfiPage.Exchange.EasyAu' name='EasyCrypto AU' />
              <ExchangeCard url='https://easycrypto.com/nz/buy-sell/dfi-defichain' imageSrc='/assets/img/dfi/logo-easycrypto-nz.png' testid='DfiPage.Exchange.EasyNz' name='EasyCrypto NZ' />
            </div>
          </div>
          <div className='flex flex-col md:flex-row md:space-x-10 mb-20'>
            <div className='flex items-center flex-col w-1/3 space-y-3'>
              <BsPieChartFill className='fill-primary-500' fontSize={70} />
              <h1 className='text-2xl font-semibold' data-testid='DfiPage.Staking.Heading'>Staking</h1>
              <div className='text-xl font-light md:ml-5' data-testid='DfiPage.Staking.Text'>
                DFI is now available at these select staking platforms.
              </div>
            </div>
            <div className='flex flex-wrap justify-center md:justify-start'>
              <ExchangeCard url='https://www.kucoin.com/earn/finance/list' imageSrc='/assets/svg/dfi/logo-kucoin.svg' testid='DfiPage.Staking.Kucoin' name='Kucoin' />
              <ExchangeCard url='https://www.hotbit.io/invest/detail/304' imageSrc='/assets/img/dfi/logo-hotbit.png' testid='DfiPage.Staking.Hotbit' name='Hotbit' />
              <ExchangeCard url='https://cakedefi.com/' imageSrc='/assets/svg/dfi/logo-cake.svg' testid='DfiPage.Staking.Cakedefi' name='CakeDefi' />
            </div>
          </div>
          <div className='flex flex-col w-full md:w-1/2 space-y-5'>
            <BsFileEarmarkCodeFill className='fill-primary-500' fontSize={70} />
            <h1 className='text-2xl font-semibold' data-testid='DfiPage.Developers.Heading'>Developers</h1>
            <div className='text-xl font-light' data-testid='DfiPage.Developers.Text'>The DeFiChain Foundation gives grants to developers building functionality and dApps on DeFiChain.
            </div>
            <span data-testid='DfiPage.Developers.Desc'>
              For further information, contact us at <ExternalLink classname='text-primary-500' url='mailto:partners@defichain.com'>partners@defichain.com</ExternalLink>
            </span>
          </div>
        </Container>
      </section>
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
