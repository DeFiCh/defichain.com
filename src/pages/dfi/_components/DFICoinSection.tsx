import { ExternalLink } from '@components/commons/link/ExternalLink'
import { Container } from '@components/commons/Container'
import { useTranslation } from 'next-i18next'
import { DFICoin } from './DFICoin'
import { Section } from '@components/commons/Section'

export function DFICoinSection (): JSX.Element {
  const { t } = useTranslation(['page-dfi'])

  return (
    <Container>
      <Section title={t('DFICoinSection.title')} testId='DFICoinSection'>
        <div className='flex flex-col w-full lg:w-3/5'>
          <div className='text-lg md:text-xl' data-testid='DfiPage.Section.Text'>
            {t('DFICoinSection.desc')} <ExternalLink url='https://defiscan.live'>DeFi Scan</ExternalLink>
            {t('Punctuation.fullStop', { ns: 'common' })}
          </div>
          <div className='italic mt-10' data-testid='DfiPage.Section.Note'>
            {t('DFICoinSection.disclaimer')}
          </div>
        </div>
        <div className='w-full lg:w-2/5'>
          <DFICoin className='text-primary-500' />
        </div>
      </Section>
    </Container>
  )
}
