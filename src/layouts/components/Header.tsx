import classNames from 'classnames'
import { Container } from '@components/commons/Container'
import { DeFiChainLogo } from '@components/icons/DeFiChainLogo'
import Link from 'next/link'
import { MdClose, MdMenu } from 'react-icons/md'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { useWhaleApiClient } from '../context/WhaleContext'
import { useTranslation } from 'next-i18next'
import { BuyDFIButton } from './BuyDFIButton'
import { LanguageDropdown } from './LanguageDropdown'

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
        <Container className='py-4 lg:py-6'>
          <div className='flex items-center justify-between'>
            <div className='flex w-full'>
              <Link href={{ pathname: '/' }} passHref>
                <a className='flex items-center cursor-pointer hover:text-primary-500' data-testid='Header.SiteLogo'>
                  <DeFiChainLogo className='w-12 lg:block lg:w-16 h-full' />
                </a>
              </Link>
              <DesktopNavbar price={dfiPrice} />
            </div>
            <div className='lg:hidden'>
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
    <div
      className='hidden lg:flex ml-2 lg:ml-8 md:w-full md:justify-end xl:justify-between items-center text-gray-600'
      data-testid='DesktopNavbar'
    >
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
          className='ml-1 lg:ml-4' text={t('header.navbar.dfcblog')} url='https://blog.defichain.com/'
          testId='Desktop.HeaderLink.DFCBlog'
        />
        <ExternalHeaderLink
          className='ml-1 lg:ml-4' text='DeFi Scan' url='https://defiscan.live/'
          testId='Desktop.HeaderLink.DeFiScan'
        />
      </div>
      <div className='hidden lg:flex items-center mr-4 xl:mr-0 space-x-4'>
        <LanguageDropdown />
        <HeaderLink
          text={t('header.navbar.downloads')} pathname='/downloads' className='ml-1 lg:ml-4 hidden lg:block'
          testId='Desktop.HeaderLink.Downloads'
        />
        <BuyDFIButton price={price} />
      </div>
    </div>
  )
}

function MobileMenu ({ price }: { price: string }): JSX.Element {
  const { t } = useTranslation('layout')

  return (
    <div className='lg:hidden absolute z-50 w-full bg-white shadow-lg' data-testid='MobileMenu'>
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
            className='p-2 flex justify-center border-b border-gray-100' text='Blog' url='https://defiscan.live/'
            testId='Mobile.HeaderLink.DeFiScan'
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
      <BuyDFIButton price={price} />
    </div>
  )
}

function HeaderLink (props: { text: string, pathname: string, className?: string, testId?: string }): JSX.Element {
  const router = useRouter()
  return (
    <Link href={{ pathname: props.pathname }} passHref>
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
