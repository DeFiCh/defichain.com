import { useTranslation } from 'next-i18next'
import { Wallet } from '@components/icons/assets/wallet-features/Wallet'
import { Restore } from '@components/icons/assets/wallet-features/Restore'
import { Dex } from '@components/icons/assets/wallet-features/Dex'
import { Mine } from '@components/icons/assets/wallet-features/Mine'
import { Explore } from '@components/icons/assets/wallet-features/Explore'
import { Tokens } from '@components/icons/assets/wallet-features/Tokens'
import { Console } from '@components/icons/assets/wallet-features/Console'
import { Network } from '@components/icons/assets/wallet-features/Network'
import { Staking } from '@components/icons/assets/wallet-features/Staking'
import { FeatureCard } from '@components/commons/FeatureCard'

export function WalletFeaturesSection (): JSX.Element {
  const { t } = useTranslation('dex')

  return (
    <div className='my-16'>
      <div className='flex justify-between mb-10'>
        <div className='text-gray-900 font-medium text-2xl lg:text-3xl' data-testid='WalletFeaturesSection.title'>
          {t('WalletFeaturesSection.title')}
        </div>
      </div>
      <div className='w-full flex flex-wrap'>
        <div className='w-full flex flex-wrap -m-5 lg:-m-10'>
          <FeatureCard
            title={t('WalletFeaturesSection.HDWallet.title')}
            desc={t('WalletFeaturesSection.HDWallet.desc')}
            testid='WalletFeaturesSection.HDWallet'
          >
            <Wallet fontSize={48} className='fill-primary-500' />
          </FeatureCard>
          <FeatureCard
            title={t('WalletFeaturesSection.BackupAndRestore.title')}
            desc={t('WalletFeaturesSection.BackupAndRestore.desc')}
            testid='WalletFeaturesSection.BackupAndRestore'
          >
            <Restore fontSize={50} className='fill-primary-500' />
          </FeatureCard>
          <FeatureCard
            title={t('WalletFeaturesSection.DecentralizedExchange.title')}
            desc={t('WalletFeaturesSection.DecentralizedExchange.desc')}
            testid='WalletFeaturesSection.DecentralizedExchange'
          >
            <Dex fontSize={50} className='fill-primary-500' />
          </FeatureCard>

          <FeatureCard
            title={t('WalletFeaturesSection.LiquidityMining.title')}
            desc={t('WalletFeaturesSection.LiquidityMining.desc')}
            testid='WalletFeaturesSection.LiquidityMining'
          >
            <Mine fontSize={50} className='fill-primary-500' />
          </FeatureCard>
          <FeatureCard
            title={t('WalletFeaturesSection.TokensSupport.title')}
            desc={t('WalletFeaturesSection.TokensSupport.desc')}
            testid='WalletFeaturesSection.TokensSupport'
          >
            <Tokens fontSize={50} className='fill-primary-500' />
          </FeatureCard>
          <FeatureCard
            title={t('WalletFeaturesSection.MiniExplorer.title')}
            desc={t('WalletFeaturesSection.MiniExplorer.desc')}
            testid='WalletFeaturesSection.MiniExplorer'
          >
            <Explore fontSize={50} className='fill-primary-500' />
          </FeatureCard>

          <FeatureCard
            title={t('WalletFeaturesSection.Masternodes.title')}
            desc={t('WalletFeaturesSection.Masternodes.desc')}
            testid='WalletFeaturesSection.Masternodes'
          >
            <Staking fontSize={50} className='fill-primary-500' />
          </FeatureCard>
          <FeatureCard
            title={t('WalletFeaturesSection.Console.title')}
            desc={t('WalletFeaturesSection.Console.desc')}
            testid='WalletFeaturesSection.Console'
          >
            <Console fontSize={50} className='fill-primary-500' />
          </FeatureCard>
          <FeatureCard
            title={t('WalletFeaturesSection.NetworkSelection.title')}
            desc={t('WalletFeaturesSection.NetworkSelection.desc')}
            testid='WalletFeaturesSection.NetworkSelection'
          >
            <Network fontSize={50} className='fill-primary-500' />
          </FeatureCard>
        </div>
      </div>
    </div>
  )
}
