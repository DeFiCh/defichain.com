import { ExternalLink } from '@components/commons/link/ExternalLink'
import Image from 'next/image'
import { Container } from '@components/commons/Container'
import { BsFileEarmarkCodeFill, BsPieChartFill } from 'react-icons/bs'
import { Dex } from '@components/icons/assets/wallet-features/Dex'

export function ExchangeSection (): JSX.Element {
  return (
    <section className='py-20'>
      <Container>
        <div className='flex flex-col w-full  md:w-1/3 lg:w-1/2 mb-16 space-y-10'>
          <h1 className='font-medium text-2xl md:text-5xl' data-testid='DfiPage.Acquiring.Heading'>
            Acquiring $DFI coins
          </h1>
          <div className='text-xl md:text-2xl' data-testid='DfiPage.Acquiring.Text'>
            $DFI coins will be issued to users and partners with an interest in utilizing and participating in the ecosystem.
          </div>
        </div>
        <div className='flex flex-col md:flex-row md:space-x-10 mb-20'>
          <div className='flex flex-col w-full space-y-3'>
            <Dex className='fill-primary-500' fontSize={70} />
            <h1 className='text-2xl font-semibold' data-testid='ExchangeSection.Heading'>Exchanges</h1>
            <div className='text-xl font-light' data-testid='ExchangeSection.Text'>
              You can now purchase DFI at these select exchanges, with more exchanges to follow.
            </div>
          </div>
          <div className='flex flex-wrap justify-center md:justify-start'>
            <ExchangeCard
              url='https://global.bittrex.com/Market/Index?MarketName=BTC-DFI'
              imageSrc='/assets/svg/dfi/logo-bittrex.svg'
              testid='ExchangeSection.Bittrex'
              name='Bittrex'
            />
            <ExchangeCard
              url='https://www.bitrue.com/trade/dfi_btc'
              imageSrc='/assets/svg/dfi/logo-bittrue.svg'
              testid='ExchangeSection.Bittrue'
              name='Bittrue'
            />
            <ExchangeCard
              url='https://dfx.swiss/en/'
              imageSrc='/assets/svg/dfi/logo-dfx.svg'
              testid='ExchangeSection.Dfx'
              name='Dfx'
            />
            <ExchangeCard
              url=''
              imageSrc='/assets/svg/dfi/logo-latoken.svg'
              testid='ExchangeSection.Latoken'
              name='Latoken'
            />
            <ExchangeCard
              url='https://trade.kucoin.com/DFI-BTC'
              imageSrc='/assets/svg/dfi/logo-kucoin.svg'
              testid='ExchangeSection.Kucoin'
              name='Kucoin'
            />
            <ExchangeCard
              url='https://global.transak.com/?apiKey=9cb22c33-f1fc-4ff0-9736-9159bb879568&cryptoCurrencyCode=DFI'
              imageSrc='/assets/img/dfi/logo-transak.png'
              testid='ExchangeSection.Transak'
              name='Transak'
            />
            <ExchangeCard
              url='https://www.hotbit.io/exchange?symbol=DFI_USDT'
              imageSrc='/assets/img/dfi/logo-hotbit.png'
              testid='ExchangeSection.Hotbit'
              name='Hotbit'
            />
            <ExchangeCard
              url='https://hoo.com/innovation/dfi-usdt'
              imageSrc='/assets/img/dfi/logo-hoo.png'
              testid='ExchangeSection.Hoo'
              name='Hoo'
            />
            <ExchangeCard
              url='https://easycrypto.com/au/buy-sell/dfi-defichain'
              imageSrc='/assets/img/dfi/logo-easycrypto-au.png'
              testid='ExchangeSection.EasyAu'
              name='EasyCrypto AU'
            />
            <ExchangeCard
              url='https://easycrypto.com/nz/buy-sell/dfi-defichain'
              imageSrc='/assets/img/dfi/logo-easycrypto-nz.png'
              testid='ExchangeSection.EasyNz'
              name='EasyCrypto NZ'
            />
          </div>
        </div>
        <div className='flex flex-col md:flex-row md:space-x-10 mb-20'>
          <div className='flex flex-col w-full md:w-1/3 space-y-3'>
            <BsPieChartFill className='fill-primary-500' fontSize={70} />
            <h1 className='text-2xl font-semibold' data-testid='DfiPage.Staking.Heading'>Staking</h1>
            <div className='text-xl font-light' data-testid='DfiPage.Staking.Text'>
              DFI is now available at these select staking platforms.
            </div>
          </div>
          <div className='flex flex-wrap justify-center md:justify-start'>
            <ExchangeCard
              url='https://www.kucoin.com/earn/finance/list'
              imageSrc='/assets/svg/dfi/logo-kucoin.svg'
              testid='DfiPage.Staking.Kucoin' name='Kucoin'
            />
            <ExchangeCard
              url='https://www.hotbit.io/invest/detail/304'
              imageSrc='/assets/img/dfi/logo-hotbit.png'
              testid='DfiPage.Staking.Hotbit' name='Hotbit'
            />
            <ExchangeCard
              url='https://cakedefi.com/'
              imageSrc='/assets/svg/dfi/logo-cake.svg'
              testid='DfiPage.Staking.Cakedefi' name='CakeDefi'
            />
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
  )
}

function ExchangeCard (props: {imageSrc: string, url: string, name: string, testid: string}): JSX.Element {
  return (
    <ExternalLink url={props.url} testId={props.testid} classname='m-5 w-1/2 md:w-1/3 lg:w-1/5'>
      <div className='flex justify-center p-5 bg-gray-50 rounder-sm'>
        <Image alt={props.name} src={props.imageSrc} width='134px' height='28px' title={props.name} />
      </div>
    </ExternalLink>

  )
}
