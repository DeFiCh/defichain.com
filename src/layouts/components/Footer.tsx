import { Container } from '@components/commons/Container'
import { DeFiChainLogo } from '@components/icons/DeFiChainLogo'
import Link from 'next/link'
import { PropsWithChildren } from 'react'
import classNames from 'classnames'
import { useTranslation } from 'next-i18next'

export function Footer (): JSX.Element {
  const { t } = useTranslation('footer')

  return (
    <footer className='py-12'>
      <Container>
        <div className='flex flex-col'>
          <Link href={{ pathname: '/' }} passHref>
            <a className='flex items-center cursor-pointer hover:text-primary-500' data-testid='Footer.Logo'>
              <DeFiChainLogo className='w-12 lg:w-28 mb-2' />
            </a>
          </Link>
          <h3 className='text-2xl lg:text-3xl font-semibold' data-testid='Footer.Heading'>{t('title')}
          </h3>
        </div>
        <div className='mt-10 flex flex-wrap lg:flex-nowrap lg:space-x-6'>
          <div className='flex-grow max-w-sm'>
            <FooterSectionSitemap />
          </div>
          <div className='flex-grow max-w-sm'>
            <FooterSectionSocial />
          </div>
        </div>
        <div className='flex flex-row items-center space-x-4'>
          <span className='font-semibold text-sm'>&#169; DeFiChain</span>
          <FooterInternalLink text='Privacy Policy' pathname='/privacy-policy' testId='Footer.Privacy' tiny />
        </div>
      </Container>
    </footer>
  )
}

function FooterSectionSitemap (): JSX.Element {
  const { t } = useTranslation('footer')

  return (
    <FooterSection heading='DeFiChain'>
      <FooterInternalLink
        text={t('sitemap.foundation')} pathname='/foundation'
        testId='FooterSectionSitemap.Foundation'
      />
      <FooterInternalLink text={t('sitemap.dfi')} pathname='/dfi' testId='FooterSectionSitemap.DFI' />
      <FooterInternalLink text={t('sitemap.dex')} pathname='/dex' testId='FooterSectionSitemap.DEX' />
      <FooterInternalLink
        text={t('sitemap.developers')} pathname='/developers'
        testId='FooterSectionSitemap.Developers'
      />
      <FooterInternalLink text={t('sitemap.ecosystem')} pathname='/ecosystem' testId='FooterSectionSitemap.Ecosystem' />
      <FooterInternalLink text={t('sitemap.downloads')} pathname='/downloads' testId='FooterSectionSitemap.Downloads' />
      <FooterInternalLink text={t('sitemap.media')} pathname='/media' testId='FooterSectionSitemap.Media' />
      <FooterInternalLink text={t('sitemap.learn')} pathname='/learn' testId='FooterSectionSitemap.Learn' />
      <FooterInternalLink text={t('sitemap.developers')} pathname='/security' testId='FooterSectionSitemap.Security' />
      <FooterInternalLink text={t('sitemap.ecosystem')} pathname='/bug-bounty' testId='FooterSectionSitemap.BugBounty' />
      <FooterInternalLink text={t('sitemap.security')} pathname='/security' testId='FooterSectionSitemap.Security' />
      <FooterInternalLink text={t('sitemap.bugbounty')} pathname='/bug-bounty' testId='FooterSectionSitemap.BugBounty' />
      <FooterInternalLink
        text={t('sitemap.whitepaper')} pathname='/white-paper'
        testId='FooterSectionSitemap.WhitePaper'
      />
    </FooterSection>
  )
}

function FooterSectionSocial (): JSX.Element {
  const { t } = useTranslation('footer')

  return (
    <FooterSection heading={t('social.title')}>
      <FooterExternalLink
        text={t('social.twitter')} url='https://twitter.com/defichain'
        testId='FooterExternalLink.Twitter'
      />
      <FooterExternalLink
        text={t('social.youtube')} url='https://www.youtube.com/DeFiChain'
        testId='FooterExternalLink.Youtube'
      />
      <FooterExternalLink
        text={t('social.reddit')} url='https://www.reddit.com/r/defiblockchain/'
        testId='FooterExternalLink.Reddit'
      />
      <FooterExternalLink
        text={t('social.linkedin')} url='https://www.linkedin.com/company/defichain'
        testId='FooterExternalLink.Linkedin'
      />
      <FooterExternalLink
        text={t('social.facebook')} url='https://www.facebook.com/defichain.official'
        testId='FooterExternalLink.Facebook'
      />
      <FooterExternalLink
        text={t('social.discord')} url='https://discord.com/invite/py55egyaGy'
        testId='FooterExternalLink.Discord'
      />
      <FooterExternalLink
        text={t('social.github')} url='https://github.com/DeFiCh/ain'
        testId='FooterExternalLink.Github'
      />
      <FooterExternalLink
        text={`${t('social.merch')} (US)`} url='https://defichain.myspreadshop.com/'
        testId='FooterExternalLink.MerchUS'
      />
      <FooterExternalLink
        text={`${t('social.merch')} (UK)`} url='https://defichain.myspreadshop.co.uk/'
        testId='FooterExternalLink.MerchUK'
      />
      <FooterExternalLink
        text={`${t('social.telegram')} (EN)`} url='https://t.me/defiblockchain'
        testId='FooterExternalLink.TelegramEN'
      />
      <FooterExternalLink
        text={`${t('social.telegram')} (DE)`} url='https://t.me/defiblockchain_DE'
        testId='FooterExternalLink.TelegramDE'
      />
      <FooterExternalLink
        text={`${t('social.telegram')} (IT)`} url='https://t.me/defiblockchain_IT'
        testId='FooterExternalLink.TelegramIT'
      />
      <FooterExternalLink
        text={`${t('social.telegram')} (ES)`} url='https://t.me/defiblockchain_ES'
        testId='FooterExternalLink.TelegramES'
      />
      <FooterExternalLink
        text={`${t('social.telegram')} (FR)`} url='https://t.me/defiblockchain_FR'
        testId='FooterExternalLink.TelegramFR'
      />
      <FooterExternalLink
        text={`${t('social.telegram')} (ZH)`} url='https://t.me/defiblockchain_ZH'
        testId='FooterExternalLink.TelegramZH'
      />
    </FooterSection>
  )
}

function FooterSection ({ heading, children }: PropsWithChildren<{ heading: string }>): JSX.Element {
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
      <div
        className={classNames('text-gray-500 hover:text-primary-500 cursor-pointer', { 'text-sm': props.tiny }, { 'text-lg': props.tiny === undefined })}
      >
        <Link href={{ pathname: props.pathname }}>
          <a data-testid={props.testId}>{props.text}</a>
        </Link>
      </div>
    </div>
  )
}
