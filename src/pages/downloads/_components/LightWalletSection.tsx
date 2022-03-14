import { DownloadCard } from './DownloadCard'
import { AppStoreDownload } from './AppStoreDownload'
import { PlaystoreDownload } from './PlaystoreDownload'
import { useTranslation } from 'next-i18next'
import { ExternalLink } from '@components/commons/link/ExternalLink'

export function LightWalletSection (): JSX.Element {
  const { t } = useTranslation(['page-downloads'])

  return (
    <>
      <h2 className='text-xl lg:text-2xl font-medium mb-3 mt-10'>{t('LightWallets.title')}</h2>
      <p className='text-lg lg:text-xl mb-4'>{t('LightWallets.subtitle')}</p>
      <div className='flex flex-wrap pb-10 -m-1'>
        <DownloadCard
          title={t('LightWallets.entries.DFC.title')}
          desc={t('LightWallets.entries.DFC.desc')}
          imageSrc='/assets/img/downloads/dfi.png'
          testid='LightWallets.Dfc'
        >
          <div className='flex items-center space-x-4'>
            <AppStoreDownload url='https://apps.apple.com/us/app/defichain-wallet/id1572472820' />
            <PlaystoreDownload url='https://play.google.com/store/apps/details?id=com.defichain.app' />
          </div>
        </DownloadCard>

        <DownloadCard
          title={t('LightWallets.entries.DFX.title')}
          desc={t('LightWallets.entries.DFX.desc')}
          imageSrc='/assets/img/downloads/dfxpng.png'
          testid='LightWallets.Dfx'
        >
          <div className='flex items-center space-x-4'>
            <AppStoreDownload url='https://apps.apple.com/app/id1582633093' />
            <PlaystoreDownload url='https://play.google.com/store/apps/details?id=com.defichain.app.dfx' />
          </div>
        </DownloadCard>

        <DownloadCard
          title={t('LightWallets.entries.saiive.title')}
          desc={t('LightWallets.entries.saiive.desc')}
          imageSrc='/assets/img/downloads/saiive.png'
          testid='LightWallets.Saiive'
          imgClassName='rounded-xl'
        >
          <div className='flex items-center space-x-4'>
            <AppStoreDownload url='https://apps.apple.com/app/saiive-live-defi-wallet/id1588945201' />
            <PlaystoreDownload url='https://play.google.com/store/apps/details?id=at.saiive.live' />
          </div>
        </DownloadCard>

        <DownloadCard
          title={t('LightWallets.entries.saiiveDesktop.title')}
          desc={t('LightWallets.entries.saiiveDesktop.desc')}
          imageSrc='/assets/img/downloads/saiive.png'
          testid='FullNodeWallets.Saiive'
          imgClassName='rounded-xl'
        >
          <div className='flex items-center space-x-4 text-lg font-medium'>
            <ExternalLink
              text='Mac'
              url='https://apps.apple.com/at/app/saiive-live-defi-wallet/id1588945201?l=en'
            />
            <ExternalLink
              text='Windows'
              url='https://github.com/saiive/saiive.live/releases'
            />
            <ExternalLink
              text='Linux'
              url='https://github.com/saiive/saiive.live/releases'
            />
          </div>
        </DownloadCard>
      </div>
    </>
  )
}
