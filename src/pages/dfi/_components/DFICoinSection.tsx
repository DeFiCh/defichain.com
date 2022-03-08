import { ExternalLink } from '@components/commons/link/ExternalLink'
import { Container } from '@components/commons/Container'
import { useTranslation } from 'next-i18next'
import { DFICoin } from './DFICoin'

export function DFICoinSection (): JSX.Element {
  const { t } = useTranslation(['page-dfi'])

  return (
    <Container>
      <section
        className='flex flex-col lg:flex-row space-y-20 md:space-y-0 md:space-x-32 w-full py-20 lg:py-32 items-center'
      >
        <div className='flex flex-col space-y-10 w-full lg:w-3/5'>
          <h1
            className='text-2xl lg:text-3xl font-medium'
            data-testid='DfiPage.Section.Heading'
          >{t('DFICoinSection.title')}
          </h1>
          <div className='text-lg md:text-xl' data-testid='DfiPage.Section.Text'>
            {t('DFICoinSection.desc')} <ExternalLink url='https://defiscan.live'>DeFi Scan</ExternalLink>
            {t('Punctuation.fullStop', { ns: 'common' })}
          </div>
          <div className='italic' data-testid='DfiPage.Section.Note'>
            {t('DFICoinSection.disclaimer')}
          </div>
        </div>
        <div className='text-primary-500'>
          <DFICoin />
        </div>
      </section>
    </Container>
  )
}
