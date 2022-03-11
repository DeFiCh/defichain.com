import classNames from 'classnames'
import { Fragment } from 'react'
import { useTranslation } from 'next-i18next'
import { Popover } from '@headlessui/react'
import { ExternalLink } from '@components/commons/link/ExternalLink'
import Image from 'next/image'

export function BuyDFIButton ({ classname, price }: { classname?: string, price: string }): JSX.Element {
  const { t } = useTranslation('layout')

  const exchanges = [
    { name: 'DFX', image: '/assets/svg/exchanges/logo-dfx.svg', url: 'https://dfx.swiss/en/' },
    { name: 'KuCoin', image: '/assets/svg/exchanges/logo-kucoin.svg', url: 'https://trade.kucoin.com/DFI-BTC' },
    {
      name: 'Bittrex',
      image: '/assets/svg/exchanges/logo-bittrex.svg',
      url: 'https://global.bittrex.com/Market/Index?MarketName=BTC-DFI'
    },
    { name: 'LATOKEN', image: '/assets/svg/exchanges/logo-latoken.svg', url: 'https://go.latoken.com/1gd' },
    {
      name: 'Hotbit',
      image: '/assets/img/exchanges/logo-hotbit.png',
      url: 'https://www.hotbit.io/exchange?symbol=DFI_USDT'
    },
    { name: 'Bittrue', image: '/assets/svg/exchanges/logo-bittrue.svg', url: 'https://www.bitrue.com/trade/dfi_btc' },
    {
      name: 'EasyCrypto (AU)',
      image: '/assets/img/exchanges/logo-easycrypto-au.png',
      url: 'https://easycrypto.ai/au/buy-sell/dfi-defichain'
    },
    {
      name: 'EasyCrypto (NZ)',
      image: '/assets/img/exchanges/logo-easycrypto-nz.png',
      url: 'https://easycrypto.ai/nz/buy-sell/dfi-defichain'
    },
    {
      name: 'Transak',
      image: '/assets/img/exchanges/logo-transak.png',
      url: 'https://global.transak.com/?apiKey=9cb22c33-f1fc-4ff0-9736-9159bb879568&cryptoCurrencyCode=DFI'
    },
    { name: 'Hoo', image: '/assets/img/exchanges/logo-hoo.png', url: 'https://hoo.com/innovation/dfi-usdt' }
  ]

  return (
    <Popover className='relative'>
      <Popover.Button as={Fragment}>
        <div
          className={classNames('flex justify-center items-center text-white bg-primary-500 hover:bg-primary-600 p-2.5 xl:px-4 lg:rounded md:mb-0 cursor-pointer', classname)}
        >
          {t('header.navbar.buy')}
          <span className='font-medium ml-1'>$DFI</span>
          {
            price !== '0' && (
              <span className='ml-1.5 text-gray-100 font-medium text-sm'>${Number(price).toFixed(2)}</span>
            )
          }
        </div>
      </Popover.Button>

      <Popover.Panel
        className='mt-2 bg-white w-48 rounded absolute z-50 text-center text-gray-700 text-lg border shadow-lg border-gray-200'
      >
        {
          exchanges.map(exchange => (
            <div key={exchange.name}>
              <ExternalLink url={exchange.url}>
                <div className='flex justify-center p-3 hover:bg-gray-100 border-b'>
                  <Image
                    src={exchange.image ?? ''}
                    width={140}
                    height={32}
                    layout='fixed'
                    objectFit='contain'
                    alt={exchange.name}
                  />
                </div>
              </ExternalLink>
            </div>
          ))
        }
      </Popover.Panel>
    </Popover>
  )
}
