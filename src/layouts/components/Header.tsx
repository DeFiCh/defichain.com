import classNames from 'classnames'
import { Container } from '@components/commons/Container'
import { DeFiChainLogo } from '@components/icons/DeFiChainLogo'
import Link from 'next/link'
import { MdArrowDropDown, MdArrowDropUp, MdClose, MdMenu } from 'react-icons/md'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

const API_URL = 'https://ocean.defichain.com/v0/mainnet/prices/DFI-USD'

export function Header (): JSX.Element {
  const [menu, setMenu] = useState(false)
  const [atTop, setAtTop] = useState(true)
  const [dfiPrice, setDfiPrice] = useState<string>('0')
  const router = useRouter()

  useEffect(() => {
    function routeChangeStart (): void {
      setMenu(false)
    }

    function fetchPrice (): void {
      void fetch(API_URL)
        .then(async res => await res.json())
        .then(data => {
          setDfiPrice(data.data.price.aggregated.amount)
        })
    }

    fetchPrice()

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
        <Container className='py-4'>
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

function DesktopNavbar ({ price }: {price: string}): JSX.Element {
  return (
    <div className='hidden md:flex ml-2 lg:ml-8 md:w-full md:justify-end xl:justify-between items-center text-gray-600'>
      <div className='hidden lg:flex'>
        <HeaderLink
          className='ml-1 lg:ml-4' text='$DFI' pathname='/dfi'
          testId='Desktop.HeaderLink.DFI'
        />
        <HeaderLink
          className='ml-1 lg:ml-4' text='DEX' pathname='/dex'
          testId='Desktop.HeaderLink.DEX'
        />
        <HeaderLink
          className='ml-1 lg:ml-4' text='Developers' pathname='/developers'
          testId='Desktop.HeaderLink.Developers'
        />
        <HeaderLink
          className='ml-1 lg:ml-4' text='Ecosystem' pathname='/ecosystem'
          testId='Desktop.HeaderLink.Ecosystem'
        />
        <HeaderLink
          className='ml-1 lg:ml-4' text='Learn' pathname='/learn'
          testId='Desktop.HeaderLink.Learn'
        />
        <ExternalHeaderLink
          className='ml-1 lg:ml-4' text='DeFiScan' url='https://defiscan.live/'
          testId='Desktop.HeaderLink.DeFiScan'
        />
      </div>
      <div className='hidden md:flex items-center mr-4 xl:mr-0 space-x-4'>
        <LanguageDropdown />
        <ExternalHeaderLink
          className='p-2 flex justify-center lg:hidden' text='Github' url='https://github.com/defich/ain'
          testId='Desktop.HeaderLink.DeFiScan'
        />
        <HeaderLink text='Downloads' pathname='/downloads' className='ml-1 lg:ml-4 hidden lg:block' testId='Desktop.HeaderLink.Downloads' />
        <BuyDfiButton price={price} />
      </div>
    </div>
  )
}

function MobileMenu ({ price }: {price: string}): JSX.Element {
  return (
    <div className='lg:hidden'>
      <Container className='border-b border-gray-100 shadow-sm text-gray-600'>
        <div className='flex flex-col'>
          <HeaderLink
            className='flex justify-center border-b border-gray-100' text='$DFI' pathname='/dfi'
            testId='Mobile.HeaderLink.DFI'
          />
          <HeaderLink
            className='flex justify-center border-b border-gray-100' text='DEX' pathname='/dex'
            testId='Mobile.HeaderLink.DEX'
          />
          <HeaderLink
            className='flex justify-center border-b border-gray-100' text='Developers' pathname='/developers'
            testId='Mobile.HeaderLink.Developers'
          />
          <HeaderLink
            className='flex justify-center border-b border-gray-100' text='Ecosystem' pathname='/ecosystem'
            testId='Mobile.HeaderLink.Ecosystem'
          />
          <HeaderLink
            className='flex justify-center border-b border-gray-100' text='Learn' pathname='/learn'
            testId='Mobile.HeaderLink.Learn'
          />
          <ExternalHeaderLink
            className='p-2 flex justify-center border-b border-gray-100' text='DeFiScan' url='https://defiscan.live/'
            testId='Mobile.HeaderLink.DeFiScan'
          />
          <ExternalHeaderLink
            className='p-2 md:hidden flex justify-center border-b border-gray-100' text='Github' url='https://github.com/defich/ain'
            testId='Mobile.HeaderLink.Github'
          />
          <BuyDfiButton classname='md:hidden' price={price} />
        </div>
      </Container>
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

function BuyDfiButton ({ classname, price }: {classname?: string, price: string}): JSX.Element {
  return (
    <a className={classNames('text-white  bg-primary-500 p-2 xl:px-4 rounded text-center mb-2 md:mb-0 ', classname)}>
      Buy $DFI <span className='text-gray-200'>${Number(price).toFixed(2)}</span>
    </a>
  )
}

function LanguageDropdown (): JSX.Element {
  const [dropdown, dropDownToggle] = useState<boolean>(false)
  return (
    <div className='relative' data-testid='SiteLangDropdown'>
      <div className='flex items-center cursor-pointer justify-between w-22 p-3' onClick={() => dropDownToggle(prev => !prev)}>
        <span>English</span>
        {dropdown ? (
          <MdArrowDropUp className='h-6 w-6' />
        ) : (
          <MdArrowDropDown className='h-6 w-6' />
        )}
      </div>
      {dropdown && (
        <div className='bg-white p-4 w-32 rounded absolute z-50 text-center text-gray-700 flex space-y-4 flex-col text-lg border-2 shadow border-gray-200'>
          <a className='cursor-pointer hover:text-gray-500'>简体中文</a>
          <a className='cursor-pointer hover:text-gray-500'>繁體中文</a>
        </div>
      )}
    </div>
  )
}
