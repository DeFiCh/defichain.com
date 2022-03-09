import classNames from 'classnames'
import { Container } from '@components/commons/Container'
import { DeFiChainLogo } from '@components/icons/DeFiChainLogo'
import Link from 'next/link'
import { MdClose, MdMenu } from 'react-icons/md'
import { useRouter } from 'next/router'
import { Fragment, useEffect, useState } from 'react'
import { useWhaleApiClient } from '../context/WhaleContext'
import { useTranslation } from 'next-i18next'
import { Listbox, Popover, Transition } from '@headlessui/react'
import { ExternalLink } from '@components/commons/link/ExternalLink'
import Image from 'next/image'

export function Header (): JSX.Element {
  const [menu, setMenu] = useState(false)
  const [atTop, setAtTop] = useState(true)
  const [dfiPrice, setDfiPrice] = useState<string>('0')
  const router = useRouter()
  const api = useWhaleApiClient()

  useEffect(() => {
    function routeChangeStart (): void {
      setMenu(false)
    }

    void api.prices.get('DFI', 'USD').then(priceTicker => {
      setDfiPrice(priceTicker.price.aggregated.amount)
    })

    router.events.on('routeChangeStart', routeChangeStart)
    return () => router.events.off('routeChangeStart', routeChangeStart)
  }, [])

  useEffect(() => {
    function scrollHandler (): void {
      window.pageYOffset > 30 ? setAtTop(false) : setAtTop(true)
    }

    window.addEventListener('scroll', scrollHandler)
    return () => {
      window.removeEventListener('scroll', scrollHandler)
    }
  }, [])

  return (
    <header className={classNames('bg-white z-50 sticky top-0 md:shadow-none md:static', { 'shadow-lg': !atTop })}>
      <div className='border-b border-gray-100'>
        <Container className='py-4 md:py-8'>
          <div className='flex items-center justify-between'>
            <div className='flex w-full'>
              <Link href={{ pathname: '/' }} passHref>
                <a className='flex items-center cursor-pointer hover:text-primary-500' data-testid='Header.SiteLogo'>
                  <DeFiChainLogo className='w-12 lg:block lg:w-16 h-full' />
                </a>
              </Link>
              <DesktopNavbar price={dfiPrice} />
            </div>
            <div className='md:hidden'>
              {menu ? (
                <MdClose
                  className='h-8 w-8 text-primary-500' onClick={() => setMenu(false)}
                  data-testid='Header.CloseMenu'
                />
              ) : (
                <MdMenu
                  className='h-8 w-8 text-primary-500' onClick={() => setMenu(true)}
                  data-testid='Header.OpenMenu'
                />
              )}
            </div>
          </div>
        </Container>
      </div>

      <div>
        {menu && (<MobileMenu price={dfiPrice} />)}
      </div>
    </header>
  )
}

function DesktopNavbar ({ price }: { price: string }): JSX.Element {
  const { t } = useTranslation('layout')

  return (
    <div className='hidden md:flex ml-2 lg:ml-8 md:w-full md:justify-end xl:justify-between items-center text-gray-600'>
      <div className='hidden lg:flex'>
        <HeaderLink
          className='ml-1 lg:ml-4' text={t('header.navbar.dfi')} pathname='/dfi'
          testId='Desktop.HeaderLink.DFI'
        />
        <HeaderLink
          className='ml-1 lg:ml-4' text={t('header.navbar.dex')} pathname='/dex'
          testId='Desktop.HeaderLink.DEX'
        />
        <HeaderLink
          className='ml-1 lg:ml-4' text={t('header.navbar.developers')} pathname='/developers'
          testId='Desktop.HeaderLink.Developers'
        />
        <HeaderLink
          className='ml-1 lg:ml-4' text={t('header.navbar.ecosystem')} pathname='/ecosystem'
          testId='Desktop.HeaderLink.Ecosystem'
        />
        <HeaderLink
          className='ml-1 lg:ml-4' text={t('header.navbar.learn')} pathname='/learn'
          testId='Desktop.HeaderLink.Learn'
        />
        <ExternalHeaderLink
          className='ml-1 lg:ml-4' text='DeFi Scan' url='https://defiscan.live/'
          testId='Desktop.HeaderLink.DeFiScan'
        />
      </div>
      <div className='hidden md:flex items-center mr-4 xl:mr-0 space-x-4'>
        <LanguageDropdown />
        <ExternalHeaderLink
          className='p-2 flex justify-center lg:hidden' text='Github' url='https://github.com/defich/ain'
          testId='Desktop.HeaderLink.DeFiScan'
        />
        <HeaderLink
          text={t('header.navbar.downloads')} pathname='/downloads' className='ml-1 lg:ml-4 hidden lg:block'
          testId='Desktop.HeaderLink.Downloads'
        />
        <BuyDfiButton price={price} />
      </div>
    </div>
  )
}

function MobileMenu ({ price }: { price: string }): JSX.Element {
  const { t } = useTranslation('layout')

  return (
    <div className='md:hidden absolute z-50 w-full bg-white shadow-lg'>
      <Container className='border-b border-gray-100 shadow-sm text-gray-600'>
        <div className='flex flex-col'>
          <HeaderLink
            className='flex justify-center border-b border-gray-100' text={t('header.navbar.dfi')} pathname='/dfi'
            testId='Mobile.HeaderLink.DFI'
          />
          <HeaderLink
            className='flex justify-center border-b border-gray-100' text={t('header.navbar.dex')} pathname='/dex'
            testId='Mobile.HeaderLink.DEX'
          />
          <HeaderLink
            className='flex justify-center border-b border-gray-100' text={t('header.navbar.developers')}
            pathname='/developers'
            testId='Mobile.HeaderLink.Developers'
          />
          <HeaderLink
            className='flex justify-center border-b border-gray-100' text={t('header.navbar.ecosystem')}
            pathname='/ecosystem'
            testId='Mobile.HeaderLink.Ecosystem'
          />
          <HeaderLink
            className='flex justify-center border-b border-gray-100' text={t('header.navbar.learn')} pathname='/learn'
            testId='Mobile.HeaderLink.Learn'
          />
          <ExternalHeaderLink
            className='p-2 flex justify-center border-b border-gray-100' text='DeFi Scan' url='https://defiscan.live/'
            testId='Mobile.HeaderLink.DeFiScan'
          />
          <div className='flex justify-center p-2'>
            <LanguageDropdown />
          </div>
        </div>
      </Container>
      <BuyDfiButton price={price} />
    </div>
  )
}

function HeaderLink (props: { text: string, pathname: string, className?: string, testId?: string }): JSX.Element {
  const router = useRouter()
  return (
    <Link href={{ pathname: props.pathname }}>
      <a
        className={classNames(props.className, {
          'text-primary-500': router.pathname === props.pathname
        })} data-testid={props.testId}
      >
        <div className={classNames('inline m-2 text-lg pb-0.5 hover:text-primary-500 cursor-pointer', {
          'border-b-2 border-primary-500': router.pathname === props.pathname
        })}
        >
          {props.text}
        </div>
      </a>
    </Link>
  )
}

export function ExternalHeaderLink (props: { text: string, url: string, className: string, testId?: string }): JSX.Element {
  return (
    <div className={classNames('text-lg hover:text-primary-500 cursor-pointer', props.className)}>
      <a href={props.url} target='_blank' rel='noreferrer' data-testid={props.testId}>
        {props.text}
      </a>
    </div>
  )
}

function BuyDfiButton ({ classname, price }: { classname?: string, price: string }): JSX.Element {
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

function LanguageDropdown (): JSX.Element {
  const router = useRouter()
  const languages = [
    { locale: 'en-US', name: 'English' },
    { locale: 'zh-Hans', name: '简体中文' },
    { locale: 'zh-Hant', name: '繁體中文' }
  ]
  const [selectedLanguage, setSelectedLanguage] = useState(languages.find(language => language.locale === router.locale) ?? languages[0])

  useEffect(() => {
    if (selectedLanguage.locale !== router.locale) {
      void router.push(router.pathname, undefined, { locale: selectedLanguage.locale })
    }
  }, [selectedLanguage])

  return (
    <div className='relative' data-testid='SiteLangDropdown'>
      <Listbox value={selectedLanguage} onChange={setSelectedLanguage}>
        <Listbox.Button className='text-lg hover:text-primary-500'>{selectedLanguage.name}</Listbox.Button>
        <Transition
          enter='transition duration-100 ease-out'
          enterFrom='transform scale-95 opacity-0'
          enterTo='transform scale-100 opacity-100'
          leave='transition duration-75 ease-out'
          leaveFrom='transform scale-100 opacity-100'
          leaveTo='transform scale-95 opacity-0'
        >
          <div
            className='mt-2 bg-white w-32 rounded absolute z-50 text-center text-gray-700 text-lg border shadow-lg border-gray-200'
          >
            <Listbox.Options>
              {languages.map((language) => (
                <div className='border-b' key={language.locale}>
                  <Listbox.Option
                    key={language.locale}
                    value={language}
                    className='p-2 hover:bg-gray-100 cursor-pointer'
                  >
                    {language.name}
                  </Listbox.Option>
                </div>
              ))}
            </Listbox.Options>
          </div>
        </Transition>
      </Listbox>
    </div>
  )
}
