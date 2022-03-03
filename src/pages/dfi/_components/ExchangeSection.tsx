import { ExternalLink } from '@components/commons/link/ExternalLink'
import Image from 'next/image'
import { Container } from '@components/commons/Container'
import { BsFileEarmarkCodeFill, BsPieChartFill } from 'react-icons/bs'
import { Dex } from '@components/icons/assets/wallet-features/Dex'
import KucoinLogo from '../../../../public/assets/svg/dfi/logo-kucoin.svg'
import HotbitLogo from '../../../../public/assets/img/dfi/logo-hotbit.png'
import EasyCryptoAULogo from '../../../../public/assets/img/dfi/logo-easycrypto-au.png'
import EasyCryptoNZLogo from '../../../../public/assets/img/dfi/logo-easycrypto-nz.png'
import TransakLogo from '../../../../public/assets/img/dfi/logo-transak.png'
import CakeLogo from '../../../../public/assets/svg/dfi/logo-cake.svg'
import BittrexLogo from '../../../../public/assets/svg/dfi/logo-bittrex.svg'
import BittrueLogo from '../../../../public/assets/svg/dfi/logo-bittrue.svg'
import DFXLogo from '../../../../public/assets/svg/dfi/logo-dfx.svg'
import LaTokenLogo from '../../../../public/assets/svg/dfi/logo-latoken.svg'
import { useTranslation } from 'next-i18next'

export function ExchangeSection (): JSX.Element {
  const { t } = useTranslation(['dfi'])

  return (
    <section className='py-20'>
      <Container>
        <div className='flex flex-col w-full  md:w-1/3 lg:w-1/2 mb-16 space-y-10'>
          <h1 className='font-medium text-2xl md:text-5xl' data-testid='DfiPage.Acquiring.Heading'>
            {t('ExchangeSection.title')}
          </h1>
          <div className='text-xl md:text-2xl' data-testid='DfiPage.Acquiring.Text'>
            {t('ExchangeSection.desc')}
          </div>
        </div>
        <div className='flex flex-col md:flex-row md:space-x-10 mb-20'>
          <div className='flex flex-col w-full space-y-3'>
            <Dex className='fill-primary-500' fontSize={70} />
            <h1
              className='text-2xl font-semibold'
              data-testid='ExchangeSection.Heading'
            >{t('ExchangeSection.Exchanges.title')}
            </h1>
            <div className='text-xl font-light' data-testid='ExchangeSection.Text'>
              {t('ExchangeSection.Exchanges.desc')}
            </div>
          </div>
          <div className='flex flex-wrap justify-center md:justify-start'>
            <ExchangeCard
              url='https://global.bittrex.com/Market/Index?MarketName=BTC-DFI'
              image={BittrexLogo}
              testid='ExchangeSection.Bittrex'
              name='Bittrex'
            />
            <ExchangeCard
              url='https://www.bitrue.com/trade/dfi_btc'
              image={BittrueLogo}
              testid='ExchangeSection.Bittrue'
              name='Bittrue'
            />
            <ExchangeCard
              url='https://dfx.swiss/en/'
              image={DFXLogo}
              testid='ExchangeSection.Dfx'
              name='Dfx'
            />
            <ExchangeCard
              url='https://latoken.com/exchange/DFI_BTC'
              image={LaTokenLogo}
              testid='ExchangeSection.Latoken'
              name='Latoken'
            />
            <ExchangeCard
              url='https://trade.kucoin.com/DFI-BTC'
              image={KucoinLogo}
              testid='ExchangeSection.Kucoin'
              name='Kucoin'
            />
            <ExchangeCard
              url='https://global.transak.com/?apiKey=9cb22c33-f1fc-4ff0-9736-9159bb879568&cryptoCurrencyCode=DFI'
              image={TransakLogo}
              testid='ExchangeSection.Transak'
              name='Transak'
            />
            <ExchangeCard
              url='https://www.hotbit.io/exchange?symbol=DFI_USDT'
              image={HotbitLogo}
              testid='ExchangeSection.Hotbit'
              name='Hotbit'
            />
            <ExchangeCard
              url='https://hoo.com/innovation/dfi-usdt'
              image={KucoinLogo}
              testid='ExchangeSection.Hoo'
              name='Hoo'
            />
            <ExchangeCard
              url='https://easycrypto.com/au/buy-sell/dfi-defichain'
              image={EasyCryptoAULogo}
              testid='ExchangeSection.EasyAu'
              name='EasyCrypto AU'
            />
            <ExchangeCard
              url='https://easycrypto.com/nz/buy-sell/dfi-defichain'
              image={EasyCryptoNZLogo}
              testid='ExchangeSection.EasyNz'
              name='EasyCrypto NZ'
            />
          </div>
        </div>
        <div className='flex flex-col md:flex-row md:space-x-10 mb-20'>
          <div className='flex flex-col w-full md:w-1/3 space-y-3'>
            <BsPieChartFill className='fill-primary-500' fontSize={70} />
            <h1
              className='text-2xl font-semibold'
              data-testid='DfiPage.Staking.Heading'
            >{t('ExchangeSection.Staking.title')}
            </h1>
            <div className='text-xl font-light' data-testid='DfiPage.Staking.Text'>
              {t('ExchangeSection.Staking.desc')}
            </div>
          </div>
          <div className='flex flex-wrap justify-center md:justify-start'>
            <ExchangeCard
              url='https://www.kucoin.com/earn/finance/list'
              image={KucoinLogo}
              testid='DfiPage.Staking.Kucoin' name='Kucoin'
            />
            <ExchangeCard
              url='https://www.hotbit.io/invest/detail/304'
              image={HotbitLogo}
              testid='DfiPage.Staking.Hotbit' name='Hotbit'
            />
            <ExchangeCard
              url='https://cakedefi.com/'
              image={CakeLogo}
              testid='DfiPage.Staking.Cakedefi' name='CakeDefi'
            />
          </div>
        </div>
        <div className='flex flex-col w-full md:w-1/2 space-y-5'>
          <BsFileEarmarkCodeFill className='fill-primary-500' fontSize={70} />
          <h1
            className='text-2xl font-semibold'
            data-testid='DfiPage.Developers.Heading'
          >{t('ExchangeSection.Developers.title')}
          </h1>
          <div className='text-xl font-light' data-testid='DfiPage.Developers.Text'>
            {t('ExchangeSection.Developers.desc')}
          </div>
          <span data-testid='DfiPage.Developers.Desc'>
            {t('ExchangeSection.Developers.email')} <ExternalLink className='text-primary-500' url='mailto:partners@defichain.com'>partners@defichain.com</ExternalLink>
          </span>
        </div>
      </Container>
    </section>
  )
}

function ExchangeCard (props: { image: StaticImageData, url: string, name: string, testid: string }): JSX.Element {
  return (
    <ExternalLink url={props.url} testId={props.testid} className='m-5 w-1/2 md:w-1/3 lg:w-1/5'>
      <div className='flex justify-center p-5 bg-gray-50 rounder-sm'>
        <Image alt={props.name} src={props.image} title={props.name} />
      </div>
    </ExternalLink>
  )
}
