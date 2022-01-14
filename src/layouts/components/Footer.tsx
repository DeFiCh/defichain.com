import { Container } from '@components/commons/Container'
import { DeFiChainLogo } from '@components/icons/DeFiChainLogo'
import Link from 'next/link'
import { PropsWithChildren } from 'react'
import classNames from 'classnames'

export function Footer (): JSX.Element {
  return (
    <footer className='bg-white py-48'>
      <Container>
        <div className='flex flex-col space-y-12'>
          <Link href={{ pathname: '/' }} passHref>
            <a className='flex items-center cursor-pointer hover:text-primary-500' data-testid='Footer.Logo'>
              <DeFiChainLogo className='w-12 lg:block lg:w-32 h-full text-black' />
            </a>
          </Link>
          <h3 className='text-2xl lg:text-5xl font-semibold' data-testid='Footer.Heading'>Native Decentralized Finance for Bitcoin.</h3>
        </div>
        <div className='mt-10 flex flex-wrap lg:flex-nowrap lg:space-x-6'>
          <div className='py-4 flex-grow max-w-sm'>
            <FooterSectionSitemap />
          </div>
          <div className='py-4 flex-grow max-w-sm'>
            <FooterSectionSocial />
          </div>
          <div className='flex-grow' />
          <div className='py-4' />
        </div>
        <div className='flex flex-row items-center space-x-4'>
          <span className='font-semibold text-sm'>&#169; Defichain</span>
          <FooterInternalLink text='Privacy Policy' pathname='/privacy-policy' testId='Footer.Privacy' tiny />
        </div>
      </Container>
    </footer>
  )
}

function FooterSectionSitemap (): JSX.Element {
  return (
    <FooterSection heading='Defichain'>
      <FooterInternalLink text='Foundation' pathname='/foundation' testId='FooterSectionSitemap.Foundation' />
      <FooterInternalLink text='$DFI' pathname='/dfi' testId='FooterSectionSitemap.DFI' />
      <FooterInternalLink text='Dex' pathname='/dex' testId='FooterSectionSitemap.DEX' />
      <FooterInternalLink text='Developers' pathname='/developers' testId='FooterSectionSitemap.Developers' />
      <FooterInternalLink text='Ecosystem' pathname='/ecosystem' testId='FooterSectionSitemap.Ecosystem' />
      <FooterInternalLink text='Downloads' pathname='/downloads' testId='FooterSectionSitemap.Downloads' />
      <FooterInternalLink text='Media' pathname='/media' testId='FooterSectionSitemap.Media' />
      <FooterInternalLink text='Learn' pathname='/learn' testId='FooterSectionSitemap.Learn' />
      <FooterInternalLink text='Developers' pathname='/security' testId='FooterSectionSitemap.Security' />
      <FooterInternalLink text='Ecosystem' pathname='/bug-bounty' testId='FooterSectionSitemap.BugBounty' />
      <FooterInternalLink text='Downloads' pathname='/white-paper' testId='FooterSectionSitemap.WhitePaper' />
    </FooterSection>
  )
}

function FooterSectionSocial (): JSX.Element {
  return (
    <FooterSection heading='Social'>
      <FooterExternalLink text='Twitter' url='https://twitter.com/defichain' testId='FooterExternalLink.Twitter' />
      <FooterExternalLink text='Youtube' url='https://www.youtube.com/DeFiChain' testId='FooterExternalLink.Youtube' />
      <FooterExternalLink text='Reddit' url='https://www.reddit.com/r/defiblockchain/' testId='FooterExternalLink.Reddit' />
      <FooterExternalLink text='Linkedin' url='https://www.linkedin.com/company/defichain' testId='FooterExternalLink.Linkedin' />
      <FooterExternalLink text='Facebook' url='https://www.facebook.com/defichain.official' testId='FooterExternalLink.Facebook' />
      <FooterExternalLink text='Discord' url='https://discord.com/invite/py55egyaGy' testId='FooterExternalLink.Discord' />
      <FooterExternalLink text='WeChat' url='/' testId='FooterExternalLink.WeChat' />
      <FooterExternalLink text='Github' url='https://github.com/DeFiCh/ain' testId='FooterExternalLink.Github' />
      <FooterExternalLink text='Merch(US)' url='https://defichain.myspreadshop.com/' testId='FooterExternalLink.MerchUS' />
      <FooterExternalLink text='Merch(UK)' url='https://defichain.myspreadshop.co.uk/' testId='FooterExternalLink.MerchUK' />
      <FooterExternalLink text='Telegram(EN)' url='https://t.me/defiblockchain' testId='FooterExternalLink.TelegramEN' />
      <FooterExternalLink text='Telegram(DE)' url='https://t.me/defiblockchain_DE' testId='FooterExternalLink.TelegramDE' />
      <FooterExternalLink text='Telegram(IT)' url='https://t.me/defiblockchain_IT' testId='FooterExternalLink.TelegramIT' />
      <FooterExternalLink text='Telegram(ES)' url='https://t.me/defiblockchain_ES' testId='FooterExternalLink.TelegramES' />
      <FooterExternalLink text='Telegram(FR)' url='https://t.me/defiblockchain_FR' testId='FooterExternalLink.TelegramFR' />
      <FooterExternalLink text='Telegram(ZH)' url='https://t.me/defiblockchain_ZH' testId='FooterExternalLink.TelegramZH' />
    </FooterSection>
  )
}

function FooterSection ({ heading, children }: PropsWithChildren<{heading: string}>): JSX.Element {
  return (
    <section>
      <h3 className='text-2xl font-medium mb-6'>{heading}</h3>
      <div className='flex flex-wrap'>
        {children}
      </div>
    </section>
  )
}

function FooterExternalLink (props: { text: string, url: string, testId: string }): JSX.Element {
  return (
    <div className='space-x-2 py-2 w-1/2'>
      <div className='text-lg text-gray-500 hover:text-primary-500 cursor-pointer'>
        <a href={props.url} target='_blank' rel='noreferrer' data-testid={props.testId}>
          {props.text}
        </a>
      </div>
    </div>
  )
}

function FooterInternalLink (props: { text: string, pathname: string, testId: string, tiny?: boolean }): JSX.Element {
  return (
    <div className='space-x-2 py-2 w-1/2'>
      <div className={classNames('text-gray-500 hover:text-primary-500 cursor-pointer', { 'text-sm': props.tiny }, { 'text-lg': props.tiny === undefined })}>
        <Link href={{ pathname: props.pathname }}>
          <a data-testid={props.testId}>{props.text}</a>
        </Link>
      </div>
    </div>
  )
}
