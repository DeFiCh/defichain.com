import { Header } from '@components/commons/Header'
import { Container } from '@components/commons/Container'
import { DownloadCard } from './_components/DownloadCard'
import NextImage from 'next/image'
import { BsFillTerminalFill } from 'react-icons/bs'
import { ExternalLink } from 'components/commons/link/ExternalLink'
import { SSRConfig } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

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
          <h1 className='text-2xl lg:text-3xl font-medium w-full text-center md:text-left' data-testid='DownloadsPage.Heading'>Choose your own wallet. Get the CLI.</h1>
        </div>
        <div className='flex flex-row flex-wrap  pb-10'>
          <DownloadCard testid='DownloadsPage.Dfi'>
            <div className='w-full'>
              <NextImage src='/assets/img/downloads/dfi.png' width='64px' height='64px' />
            </div>
            <div className='flex flex-col space-y-4'>
              <h1 className='text-2xl font-semibold'>DeFiChain wallet mobile app</h1>
              <h3 className='text-lg'>Lightweight, instant access to Decentralized Finance for Bitcoin, at your fingertips.</h3>
            </div>
            <div className='flex items-center'>
              <ExternalLink url='https://apps.apple.com/us/app/defichain-wallet/id1572472820'>
                <NextImage src='/assets/svg/downloads/app_store.svg' className='p-0 m-0' width='150px' height='48px' />
              </ExternalLink>
              <ExternalLink url='https://play.google.com/store/apps/details?id=com.defichain.app' className='ml-5'>
                <NextImage src='/assets/svg/downloads/play_store.svg' className='p-0 m-0' width='169px' height='48px' />
              </ExternalLink>
            </div>
          </DownloadCard>
          <DownloadCard testid='DownloadsPage.DesktopWallet'>
            <div className='w-full'>
              <NextImage src='/assets/img/downloads/dfiwallet.png' width='64px' height='64px' />
            </div>
            <div className='flex flex-col space-y-4'>
              <h1 className='text-2xl font-semibold'>DeFi Wallet desktop app</h1>
              <h3 className='text-lg'>Transact, liquidity mine, swap and more with the full-featured and fully-decentralized wallet app. Full node included.</h3>
            </div>
            <div className='flex items-center space-x-4 text-lg font-medium'>
              <ExternalLink url='https://github.com/DeFiCh/app/releases/download/v2.9.1/DeFi-Wallet-2.9.1.dmg' className='text-primary-500 hover:text-gray-200 -pl-4'>Mac</ExternalLink>
              <ExternalLink url='https://github.com/DeFiCh/app/releases/download/v2.9.1/DeFi-Wallet-Setup-2.9.1.exe' className='text-primary-500 hover:text-gray-200 '>Windows</ExternalLink>
              <ExternalLink url='https://github.com/DeFiCh/app/releases/download/v2.9.1/DeFi-Wallet-2.9.1.AppImage' className='text-primary-500 hover:text-gray-200 '>Linux (App Image)</ExternalLink>
            </div>
          </DownloadCard>
          <DownloadCard testid='DownloadsPage.Dfx'>
            <div className='w-full'>
              <NextImage src='/assets/img/downloads/dfxpng.png' width='64px' height='64px' />
            </div>
            <div className='flex flex-col space-y-4'>
              <h1 className='text-2xl font-semibold'>DFX wallet mobile app</h1>
              <h3 className='text-lg'>Store, receive and send DeFiChain tokens with utmost simplicity and security uncomplicated from your mobile.</h3>
            </div>
            <div className='flex items-center'>
              <ExternalLink url='https://apps.apple.com/app/id1582633093'>
                <NextImage src='/assets/svg/downloads/app_store.svg' className='p-0 m-0' width='150px' height='48px' />
              </ExternalLink>
              <ExternalLink url='https://play.google.com/store/apps/details?id=com.defichain.app.dfx' className='ml-5'>
                <NextImage src='/assets/svg/downloads/play_store.svg' className='p-0 m-0' width='169px' height='48px' />
              </ExternalLink>
            </div>
          </DownloadCard>
          <DownloadCard testid='DownloadsPage.SaiiveDesktop'>
            <div className='w-full'>
              <NextImage src='/assets/img/downloads/saiive.png' width='64px' height='64px' />
            </div>
            <div className='flex flex-col space-y-4'>
              <h1 className='text-2xl font-semibold'>saiive.live desktop wallet</h1>
              <h3 className='text-lg'>A non-custodial light wallet for DeFiChain from and for the community.</h3>
            </div>
            <div className='flex items-center space-x-4 text-lg font-medium'>
              <ExternalLink url='https://apps.apple.com/at/app/saiive-live-defi-wallet/id1588945201?l=en' className='text-primary-500 hover:text-gray-200 -pl-4'>Mac</ExternalLink>
              <ExternalLink url='https://github.com/saiive/saiive.live/releases' className='text-primary-500 hover:text-gray-200 '>Windows</ExternalLink>
              <ExternalLink url='Transact and interact with DeFiChain through a command line interface. Full node included.' className='text-primary-500 hover:text-gray-200 '>Linux</ExternalLink>
            </div>
          </DownloadCard>
          <DownloadCard testid='DownloadsPage.SaiiveMobile'>
            <div className='w-full'>
              <NextImage src='/assets/img/downloads/saiive.png' width='64px' height='64px' />
            </div>
            <div className='flex flex-col space-y-4'>
              <h1 className='text-2xl font-semibold'>saiive.live mobile wallet</h1>
              <h3 className='text-lg'>A non-custodial light wallet for DeFiChain from and for the community.</h3>
            </div>
            <div className='flex items-center'>
              <ExternalLink url='https://apps.apple.com/app/saiive-live-defi-wallet/id1588945201'>
                <NextImage src='/assets/svg/downloads/app_store.svg' className='p-0 m-0' width='150px' height='48px' />
              </ExternalLink>
              <ExternalLink url='https://play.google.com/store/apps/details?id=at.saiive.live' className='ml-5'>
                <NextImage src='/assets/svg/downloads/play_store.svg' className='p-0 m-0' width='169px' height='48px' />
              </ExternalLink>
            </div>
          </DownloadCard>
          <DownloadCard testid='DownloadsPage.DfiNode'>
            <div className='w-full'>
              <NextImage src='/assets/img/downloads/dfinode.png' width='64px' height='64px' />
            </div>
            <div className='flex flex-col space-y-4'>
              <h1 className='text-2xl font-semibold'>DeFi wallet for Raspberry Pi</h1>
              <h3 className='text-lg'>A version of the desktop wallet for Raspberry Pi 4B 4GB with official Raspberry Pi OS (32-Bit).</h3>
            </div>
            <div className='flex items-center text-lg font-medium'>
              <ExternalLink url='https://github.com/Martin8617/Defi-Wallet-for-Raspberry-Pi' className='text-primary-500 hover:text-gray-200 '>Github</ExternalLink>
            </div>
          </DownloadCard>
          <DownloadCard testid='DownloadsPage.Cli'>
            <div className='w-full'>
              <BsFillTerminalFill fontSize={50} className='fill-primary-500' />
            </div>
            <div className='flex flex-col space-y-4'>
              <h1 className='text-2xl font-semibold'>CLI</h1>
              <h3 className='text-lg'>Transact and interact with DeFiChain through a command line interface. Full node included.</h3>
            </div>
            <div className='flex items-center space-x-2 text-lg font-medium'>
              <ExternalLink url='https://github.com/DeFiCh/ain/releases/download/v2.6.1/defichain-2.6.1-x86_64-apple-darwin11.tar.gz' className='text-primary-500 hover:text-gray-200 -pl-2'>Mac</ExternalLink>
              <ExternalLink url='https://github.com/DeFiCh/ain/releases/download/v2.6.1/defichain-2.6.1-x86_64-w64-mingw32.zip' className='text-primary-500 hover:text-gray-200 '>Windows</ExternalLink>
              <ExternalLink url='https://github.com/DeFiCh/ain/releases/download/v2.6.1/defichain-2.6.1-x86_64-pc-linux-gnu.tar.gz' className='text-primary-500 hover:text-gray-200 '>Linux</ExternalLink>
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
