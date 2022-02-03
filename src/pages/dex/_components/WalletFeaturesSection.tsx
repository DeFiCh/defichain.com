import { useTranslation } from 'next-i18next'
import { Wallet } from '@components/icons/assets/wallet-features/Wallet'
import { PropsWithChildren } from 'react'
import { Restore } from '@components/icons/assets/wallet-features/Restore'
import { Dex } from '@components/icons/assets/wallet-features/Dex'
import { Mine } from '@components/icons/assets/wallet-features/Mine'
import { Explore } from '@components/icons/assets/wallet-features/Explore'
import { Tokens } from '@components/icons/assets/wallet-features/Tokens'
import { Console } from '@components/icons/assets/wallet-features/Console'
import { Network } from '@components/icons/assets/wallet-features/Network'
import { Staking } from '@components/icons/assets/wallet-features/Staking'

export function WalletFeaturesSection (): JSX.Element {
  const { t } = useTranslation('dex')

  return (
    <div className='my-16'>
      <div className='flex justify-between mb-10'>
        <div className='text-gray-900 font-medium text-2xl'>
          {t('WalletFeaturesSection.title')}
        </div>
      </div>
      <div className='w-full flex flex-wrap'>
        <div className='w-full flex flex-wrap -m-5 lg:-m-10'>
          <WalletFeature
            title={t('WalletFeaturesSection.HDWallet.title')}
            desc={t('WalletFeaturesSection.HDWallet.desc')}
          >
            <Wallet fontSize={48} className='fill-primary-500' />
          </WalletFeature>
          <WalletFeature
            title={t('WalletFeaturesSection.BackupAndRestore.title')}
            desc={t('WalletFeaturesSection.BackupAndRestore.desc')}
          >
            <Restore fontSize={50} className='fill-primary-500' />
          </WalletFeature>
          <WalletFeature
            title={t('WalletFeaturesSection.DecentralizedExchange.title')}
            desc={t('WalletFeaturesSection.DecentralizedExchange.desc')}
          >
            <Dex fontSize={50} className='fill-primary-500' />
          </WalletFeature>

          <WalletFeature
            title={t('WalletFeaturesSection.LiquidityMining.title')}
            desc={t('WalletFeaturesSection.LiquidityMining.desc')}
          >
            <Mine fontSize={50} className='fill-primary-500' />
          </WalletFeature>
          <WalletFeature
            title={t('WalletFeaturesSection.TokensSupport.title')}
            desc={t('WalletFeaturesSection.TokensSupport.desc')}
          >
            <Tokens fontSize={50} className='fill-primary-500' />
          </WalletFeature>
          <WalletFeature
            title={t('WalletFeaturesSection.MiniExplorer.title')}
            desc={t('WalletFeaturesSection.MiniExplorer.desc')}
          >
            <Explore fontSize={50} className='fill-primary-500' />
          </WalletFeature>

          <WalletFeature
            title={t('WalletFeaturesSection.Masternodes.title')}
            desc={t('WalletFeaturesSection.Masternodes.desc')}
          >
            <Staking fontSize={50} className='fill-primary-500' />
          </WalletFeature>
          <WalletFeature
            title={t('WalletFeaturesSection.Console.title')}
            desc={t('WalletFeaturesSection.Console.desc')}
          >
            <Console fontSize={50} className='fill-primary-500' />
          </WalletFeature>
          <WalletFeature
            title={t('WalletFeaturesSection.NetworkSelection.title')}
            desc={t('WalletFeaturesSection.NetworkSelection.desc')}
          >
            <Network fontSize={50} className='fill-primary-500' />
          </WalletFeature>
        </div>
      </div>
    </div>
  )
}

function WalletFeature (props: PropsWithChildren<{ title: string, desc: string }>): JSX.Element {
  return (
    <div className='md:w-1/2 lg:w-1/3 flex flex-wrap p-6 lg:p-10 text-gray-900'>
      <div className='w-full'>
        {props.children}
      </div>
      <div className='w-full text-2xl lg:text-2xl font-medium mt-1.5 mb-4'>{props.title}</div>
      <div className='w-full text-lg min-h-full'>{props.desc}</div>
    </div>
  )
}
