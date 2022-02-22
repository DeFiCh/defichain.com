import { Header } from '@components/commons/Header'
import { Container } from '@components/commons/Container'
import { DownloadCard } from './_components/DownloadCard'
import { BsFillTerminalFill } from 'react-icons/bs'
import { ExternalLink } from 'components/commons/link/ExternalLink'
import { SSRConfig } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { PlaystoreDownload } from '@components/commons/link/PlaystoreDownload'
import { AppStoreDownload } from '@components/commons/link/AppStoreDownload'

export default function DownloadsPage (): JSX.Element {
  return (
    <>
      <Header title='Downloads'>
        <div className='mt-10 flex flex-wrap'>
          <div className='w-full text-2xl text-gray-900' data-testid='Header.desc.main'>
            Download applications for mobile, Mac, Windows and Linux.
          </div>
        </div>
      </Header>
      <Container>
        <div className='flex w-full my-16 '>
          <h1 className='text-2xl lg:text-3xl font-medium w-full text-center md:text-left' data-testid='DownloadsPage.Heading'>
            Choose your own wallet.
          </h1>
        </div>
        <div className='flex flex-row flex-wrap pb-10'>
          <DownloadCard
            title='DeFiChain wallet mobile app'
            desc='Lightweight, instant access to Decentralized Finance for Bitcoin, at your fingertips.'
            imageSrc='/assets/img/downloads/dfi.png'
            testid='DownloadsPage.Dfi'
          >
            <div className='flex items-center'>
              <AppStoreDownload url='https://apps.apple.com/us/app/defichain-wallet/id1572472820' />
              <PlaystoreDownload
                url='https://play.google.com/store/apps/details?id=com.defichain.app'
                className='ml-5'
              />
            </div>
          </DownloadCard>
          <DownloadCard
            title='DeFi Wallet desktop app'
            desc='Transact, liquidity mine, swap and more with the full-featured and fully-decentralized wallet app. Full node included.'
            imageSrc='/assets/img/downloads/dfiwallet.png'
            testid='DownloadsPage.DesktopWallet'
          >
            <div className='flex flex-wrap items-center space-x-4 text-lg font-medium'>
              <ExternalLink
                title='Mac'
                url='https://github.com/DeFiCh/app/releases/download/v2.9.1/DeFi-Wallet-2.9.1.dmg'
                className='text-primary-500 hover:text-gray-200-pl-4'
              />
              <ExternalLink
                title='Windows'
                url='https://github.com/DeFiCh/app/releases/download/v2.9.1/DeFi-Wallet-2.9.1.AppImage'
                className='text-primary-500 hover:text-gray-200'
              />
              <ExternalLink
                title='Linux (App Image)'
                url='https://github.com/DeFiCh/app/releases/download/v2.9.1/DeFi-Wallet-Setup-2.9.1.exe'
                className='text-primary-500 hover:text-gray-200'
              />
            </div>
          </DownloadCard>
          <DownloadCard
            title='DFX wallet mobile app'
            desc='Store, receive and send DeFiChain tokens with utmost simplicity and security uncomplicated from your mobile.'
            imageSrc='/assets/img/downloads/dfxpng.png'
            testid='DownloadsPage.Dfx'
          >
            <div className='flex items-center'>
              <AppStoreDownload url='https://apps.apple.com/app/id1582633093' />
              <PlaystoreDownload url='https://play.google.com/store/apps/details?id=com.defichain.app.dfx' className='ml-5' />
            </div>
          </DownloadCard>
          <DownloadCard
            title='saiive.live desktop wallet'
            desc='A non-custodial light wallet for DeFiChain from and for the community.'
            imageSrc='/assets/img/downloads/saiive.png'
            testid='DownloadsPage.SaiiveDesktop'
          >
            <div className='flex items-center space-x-4 text-lg font-medium'>
              <ExternalLink
                title='Mac'
                url='https://apps.apple.com/at/app/saiive-live-defi-wallet/id1588945201?l=en'
                className='text-primary-500 hover:text-gray-200-pl-4'
              />
              <ExternalLink
                title='Windows'
                url='https://github.com/saiive/saiive.live/releases'
                className='text-primary-500 hover:text-gray-200'
              />
              <ExternalLink
                title='Linux'
                url='https://github.com/saiive/saiive.live/releases'
                className='text-primary-500 hover:text-gray-200'
              />
            </div>
          </DownloadCard>
          <DownloadCard
            title='saiive.live mobile wallet'
            desc='A non-custodial light wallet for DeFiChain from and for the community.'
            imageSrc='/assets/img/downloads/saiive.png'
            testid='DownloadsPage.SaiiveMobile'
          >
            <div className='flex items-center'>
              <AppStoreDownload
                url='https://apps.apple.com/app/saiive-live-defi-wallet/id1588945201'
              />
              <PlaystoreDownload
                url='https://play.google.com/store/apps/details?id=at.saiive.live'
                className='ml-5'
              />
            </div>
          </DownloadCard>
          <DownloadCard
            title='DeFi wallet for Raspberry Pi'
            desc='A version of the desktop wallet for Raspberry Pi 4B 4GB with official Raspberry Pi OS (32-Bit).'
            imageSrc='/assets/img/downloads/dfinode.png'
            testid='DownloadsPage.DfiNode'
          >
            <div className='flex items-center text-lg font-medium'>
              <ExternalLink
                title='Github'
                url='https://github.com/Martin8617/Defi-Wallet-for-Raspberry-Pi'
                className='text-primary-500 hover:text-gray-200'
              />
            </div>
          </DownloadCard>
          <DownloadCard
            title='CLI'
            desc='Transact and interact with DeFiChain through a command line interface. Full node included.'
            imageSrc={<BsFillTerminalFill fontSize={50} className='fill-primary-500' />}
            testid='DownloadsPage.Cli'
          >
            <div className='flex items-center space-x-2 text-lg font-medium'>
              <ExternalLink
                title='Mac'
                url='https://github.com/DeFiCh/ain/releases/download/v2.6.1/defichain-2.6.1-x86_64-apple-darwin11.tar.gz'
                className='text-primary-500 hover:text-gray-200-pl-2'
              />
              <ExternalLink
                title='Windows'
                url='https://github.com/DeFiCh/ain/releases/download/v2.6.1/defichain-2.6.1-x86_64-w64-mingw32.zip'
                className='text-primary-500 hover:text-gray-200'
              />
              <ExternalLink
                title='Linux'
                url='https://github.com/DeFiCh/ain/releases/download/v2.6.1/defichain-2.6.1-x86_64-pc-linux-gnu.tar.gz'
                className='text-primary-500 hover:text-gray-200'
              />
            </div>
          </DownloadCard>
        </div>
      </Container>
    </>
  )
}

export async function getStaticProps ({ locale }): Promise<{ props: SSRConfig }> {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'layout']))
    }
  }
}
