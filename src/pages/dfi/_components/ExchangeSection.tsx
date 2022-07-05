import { ExternalLink } from '@components/commons/link/ExternalLink'
import Image from 'next/image'
import { Container } from '@components/commons/Container'
import { BsPieChartFill } from 'react-icons/bs'
import { Dex } from '@components/icons/assets/wallet-features/Dex'
import KucoinLogo from '../../../../public/assets/svg/exchanges/logo-kucoin.svg'
import HotbitLogo from '../../../../public/assets/img/exchanges/logo-hotbit.png'
import EasyCryptoAULogo from '../../../../public/assets/img/exchanges/logo-easycrypto-au.png'
import EasyCryptoNZLogo from '../../../../public/assets/img/exchanges/logo-easycrypto-nz.png'
import TransakLogo from '../../../../public/assets/img/exchanges/logo-transak.png'
import CakeLogo from '../../../../public/assets/svg/exchanges/logo-cake.svg'
import BittrexLogo from '../../../../public/assets/svg/exchanges/logo-bittrex.svg'
import BittrueLogo from '../../../../public/assets/svg/exchanges/logo-bittrue.svg'
import DFXLogo from '../../../../public/assets/svg/exchanges/logo-dfx.svg'
import LaTokenLogo from '../../../../public/assets/svg/exchanges/logo-latoken.svg'
import HooLogo from '../../../../public/assets/img/exchanges/logo-hoo.png'
import BybitLogo from '../../../../public/assets/svg/exchanges/logo-bybit.svg'
import SwyftxLogo from '../../../../public/assets/svg/exchanges/logo-swyftx.svg'
import { useTranslation } from 'next-i18next'
import { Section } from '@components/commons/Section'

export function ExchangeSection (): JSX.Element {
  const { t } = useTranslation(['page-dfi'])

  return (
    <Container bgClassName='bg-gray-50'>
      <Section title={t('ExchangeSection.title')} testId='ExchangeSection'>
        <div className='flex flex-col w-full md:w-1/3 lg:w-1/2 mb-16 space-y-10'>
          <div className='text-xl' data-testid='ExchangeSection.Desc'>
            {t('ExchangeSection.desc')}
          </div>
        </div>
        <div className='flex flex-col md:flex-row md:space-x-10 mb-20'>
          <div className='w-full md:w-2/5 space-y-3'>
            <Dex className='fill-primary-500' fontSize={70} />
            <h3
              className='text-2xl font-medium'
              data-testid='ExchangeSection.Heading'
            >{t('ExchangeSection.Exchanges.title')}
            </h3>
            <div className='text-xl' data-testid='ExchangeSection.Text'>
              {t('ExchangeSection.Exchanges.desc')}
            </div>
          </div>
          <div className='flex flex-wrap w-full md:w-3/5'>
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
              url='https://global.transak.com'
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
              image={HooLogo}
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
            <ExchangeCard
              url='https://www.bybit.com/en-US/trade/spot/DFI/USDT'
              image={BybitLogo}
              testid='ExchangeSection.Bybit'
              name='Bybit'
            />
            <ExchangeCard
              url='https://swyftx.com/au/buy/defichain'
              image={SwyftxLogo}
              testid='ExchangeSection.Swyftx'
              name='Swyftx'
            />
          </div>
        </div>
        <div className='flex flex-col md:flex-row md:space-x-5'>
          <div className='flex flex-col w-full md:w-2/5 space-y-3'>
            <BsPieChartFill className='fill-primary-500' fontSize={70} />
            <h3
              className='text-2xl font-medium'
              data-testid='DfiPage.Staking.Heading'
            >{t('ExchangeSection.Staking.title')}
            </h3>
            <div className='text-xl' data-testid='DfiPage.Staking.Text'>
              {t('ExchangeSection.Staking.desc')}
            </div>
          </div>
          <div className='flex flex-wrap w-full md:w-3/5'>
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
              testid='DfiPage.Staking.Cakedefi' name='Cake DeFi'
            />
            <ExchangeCard
              url='https://dfx.swiss/en/'
              image={DFXLogo}
              testid='DfiPage.Staking.Dfx' name='Dfx'
            />
          </div>
        </div>
      </Section>
    </Container>
  )
}

function ExchangeCard (props: { image: StaticImageData, url: string, name: string, testid: string }): JSX.Element {
  return (
    <ExternalLink url={props.url} testId={props.testid} className='w-1/2 md:w-1/3 lg:w-1/5 p-1'>
      <div className='flex justify-center p-4 bg-white rounded flex max-h-16'>
        <Image alt={props.name} src={props.image} title={props.name} objectFit='contain' />
      </div>
    </ExternalLink>
  )
}
