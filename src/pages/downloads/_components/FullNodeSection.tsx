import { DownloadCard } from './DownloadCard'
import { useTranslation } from 'next-i18next'
import { ExternalLink } from '@components/commons/link/ExternalLink'
import { BsFillTerminalFill } from 'react-icons/bs'

export function FullNodeSection (): JSX.Element {
  const { t } = useTranslation(['page-downloads'])

  return (
    <>
      <h2 className='text-xl lg:text-2xl font-medium mb-3'>{t('FullNodeWallets.title')}</h2>
      <div className='flex flex-wrap pb-10 -m-1'>
        <DownloadCard
          title={t('FullNodeWallets.entries.DFC.title')}
          desc={t('FullNodeWallets.entries.DFC.desc')}
          imageSrc='/assets/img/downloads/dfiwallet.png'
          testid='FullNodeWallets.Dfc'
        >
          <div className='flex flex-wrap items-center space-x-4 text-lg font-medium'>
            <ExternalLink
              text='Mac'
              url='https://github.com/DeFiCh/app/releases/download/v2.9.1/DeFi-Wallet-2.9.1.dmg'
            />
            <ExternalLink
              text='Windows'
              url='https://github.com/DeFiCh/app/releases/download/v2.9.1/DeFi-Wallet-Setup-2.9.1.exe'
            />
            <ExternalLink
              text='Linux (App Image)'
              url='https://github.com/DeFiCh/app/releases/download/v2.9.1/DeFi-Wallet-2.9.1.AppImage'
            />
          </div>
        </DownloadCard>

        <DownloadCard
          title={t('FullNodeWallets.entries.RPI.title')}
          desc={t('FullNodeWallets.entries.RPI.desc')}
          imageSrc='/assets/img/downloads/dfinode.png'
          testid='FullNodeWallets.Rpi'
        >
          <div className='flex items-center text-lg font-medium'>
            <ExternalLink
              text='Github'
              url='https://github.com/Martin8617/Defi-Wallet-for-Raspberry-Pi'
            />
          </div>
        </DownloadCard>

        <DownloadCard
          title={t('FullNodeWallets.entries.CLI.title')}
          desc={t('FullNodeWallets.entries.CLI.desc')}
          imageSrc={<BsFillTerminalFill fontSize={50} className='fill-primary-500' />}
          testid='FullNodeWallets.Cli'
        >
          <div className='flex items-center space-x-2 text-lg font-medium'>
            <ExternalLink
              text='Mac'
              url='https://github.com/DeFiCh/ain/releases/download/v2.6.2/defichain-2.6.2-x86_64-apple-darwin18.tar.gz'
            />
            <ExternalLink
              text='Windows'
              url='https://github.com/DeFiCh/ain/releases/download/v2.6.2/defichain-2.6.2-x86_64-w64-mingw32.zip'
            />
            <ExternalLink
              text='Linux'
              url='https://github.com/DeFiCh/ain/releases/download/v2.6.2/defichain-2.6.2-x86_64-pc-linux-gnu.tar.gz'
            />
          </div>
        </DownloadCard>
      </div>
    </>
  )
}
