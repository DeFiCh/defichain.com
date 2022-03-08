import { BsFillTerminalFill, BsGithub, BsReddit, BsSticky } from 'react-icons/bs'
import { DeFiChainLogoNoText } from '@components/icons/DeFiChainLogoNoText'
import { useTranslation } from 'next-i18next'
import { ResourceCard } from '@components/commons/ResourceCard'

export function DeveloperResourceSection (): JSX.Element {
  const { t } = useTranslation('page-developers')

  return (
    <section className='flex flex-wrap -m-3 pb-10'>
      <ResourceCard
        text={t('DeveloperResourcesSection.GitHub.title')}
        buttonText={t('DeveloperResourcesSection.GitHub.button')}
        url='https://github.com/defich/ain'
        testid='ResourceSection.Github'
        external
      >
        <BsGithub fontSize={50} className='fill-primary-500' />
      </ResourceCard>
      <ResourceCard
        text={t('DeveloperResourcesSection.Cli.title')}
        buttonText={t('DeveloperResourcesSection.Cli.button')}
        url='/downloads'
        testid='ResourceSection.Cli'
      >
        <BsFillTerminalFill fontSize={50} className='fill-primary-500' />
      </ResourceCard>
      <ResourceCard
        text={t('DeveloperResourcesSection.Scan.title')}
        buttonText={t('DeveloperResourcesSection.Scan.button')}
        url='https://defiscan.live'
        testid='ResourceSection.Explore'
        external
      >
        <DeFiChainLogoNoText fontSize={50} className='fill-primary-500' />
      </ResourceCard>
      <ResourceCard
        text={t('DeveloperResourcesSection.WhitePaper.title')}
        buttonText={t('DeveloperResourcesSection.WhitePaper.button')}
        testid='ResourceSection.Whitepaper'
        url='/white-paper'
      >
        <BsSticky fontSize={50} className='fill-primary-500' />
      </ResourceCard>
      <ResourceCard
        text={t('DeveloperResourcesSection.Reddit.title')}
        buttonText={t('DeveloperResourcesSection.Reddit.button')}
        testid='ResourceSection.Reddit'
        url='https://www.reddit.com/r/defiblockchain/'
        external
      >
        <BsReddit fontSize={50} className='fill-primary-500' />
      </ResourceCard>
    </section>
  )
}
