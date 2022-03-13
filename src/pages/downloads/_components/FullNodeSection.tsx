import {DownloadCard} from './DownloadCard'
import {SSRConfig, useTranslation} from 'next-i18next'
import {ExternalLink} from '@components/commons/link/ExternalLink'
import {BsFillTerminalFill} from 'react-icons/bs'
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import {DynamicDownloadCard} from "./DynamicDownloadCard";

export function FullNodeSection(): JSX.Element {
  const {t} = useTranslation(['page-downloads'])

  return (
    <>
      <h2 className='text-xl lg:text-2xl font-medium mb-3'>{t('FullNodeWallets.title')}</h2>
      <div className='flex flex-wrap pb-10 -m-1'>
        <DynamicDownloadCard
          title={t('FullNodeWallets.entries.DFC.title')}
          desc={t('FullNodeWallets.entries.DFC.desc')}
          imageSrc='/assets/img/downloads/dfiwallet.png'
          testid='FullNodeWallets.Dfc'
          repoName='defiCh/app'
          keywords={
            {
              mac: '.dmg',
              win: '.exe',
              linux: '.appimage'
            }
          }
        />

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

        <DynamicDownloadCard
          title={t('FullNodeWallets.entries.CLI.title')}
          desc={t('FullNodeWallets.entries.CLI.desc')}
          imageSrc={<BsFillTerminalFill fontSize={50} className='fill-primary-500'/>}
          testid='FullNodeWallets.Cli'
          repoName='defiCh/ain'
          keywords={
            {
              mac: 'apple',
              win: 'w64',
              linux: 'linux'
            }
          }
        />
      </div>
    </>
  )
}
