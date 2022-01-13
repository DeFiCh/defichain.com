import { DeFiChainLogo } from '@components/icons/DeFiChainLogo'
import classNames from 'classnames'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { MdClose, MdMenu } from 'react-icons/md'
import { Container } from '@components/commons/Container'
import Link from 'next/link'
import { ExternalLink } from '@components/commons/link/ExternalLink'

export function Header (): JSX.Element {
  const [menu, setMenu] = useState(false)
  const [atTop, setAtTop] = useState(true)
  const router = useRouter()

  useEffect(() => {
    function routeChangeStart (): void {
      setMenu(false)
    }

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
                <a className='flex items-center cursor-pointer hover:text-primary-500'>
                  <DeFiChainLogo className='w-12 lg:block lg:w-16 h-full' />
                </a>
              </Link>
              <DesktopNavbar />
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
        {menu && (<MobileMenu />)}
      </div>
    </header>
  )
}

function DesktopNavbar (): JSX.Element {
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
        <ExternalLink
          className='ml-1 lg:ml-4' text='DeFiScan' url='https://defiscan.live/'
          testId='Desktop.HeaderLink.DeFiScan'
        />
      </div>
      <div className='hidden md:flex items-center mr-4 xl:mr-0 space-x-4'>
        <ExternalLink
          className='p-2 flex justify-center lg:hidden border-b border-gray-100' text='Github' url='https://github.com/defich/ain'
          testId='Desktop.HeaderLink.DeFiScan'
        />
        <HeaderLink text='Downloads' pathname='/downloads' className='ml-1 lg:ml-4 hidden lg:block' />
        <BuyDfiButton price='2.5' />
      </div>
    </div>
  )
}

function MobileMenu (): JSX.Element {
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
          <ExternalLink
            className='p-2 flex justify-center border-b border-gray-100' text='DeFiScan' url='https://defiscan.live/'
            testId='Desktop.HeaderLink.DeFiScan'
          />
          <ExternalLink
            className='p-2 md:hidden flex justify-center border-b border-gray-100' text='Github' url='https://github.com/defich/ain'
            testId='Desktop.HeaderLink.DeFiScan'
          />
          <BuyDfiButton price='2.5' classname='md:hidden' />
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

function BuyDfiButton ({ price, classname }: {price: string, classname?: string}): JSX.Element {
  return (
    <a className={classNames('text-white text-lg bg-primary-500 p-2 xl:px-4 rounded text-center mb-2 md:mb-0 ', classname)}>
      Buy $DFI <span className='text-gray-200'>${price}</span>
    </a>
  )
}
