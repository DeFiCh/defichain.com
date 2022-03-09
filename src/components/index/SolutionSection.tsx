import { Container } from '@components/commons/Container'
import { useTranslation } from 'next-i18next'

export function SolutionSection (): JSX.Element {
  const { t } = useTranslation('page-index')

  return (
    <section className='lg:-mt-32 bg-gray-50 py-20'>
      <Container>
        <div
          className='flex flex-col lg:flex-row items-center mt-48 space-y-20 lg:space-y-0 lg:space-x-32'
          data-testid='ComparisonSection'
        >
          <div className='w-full lg:w-1/2 space-y-3'>
            <h1 className='font-medium text-2xl md:text-3xl' data-testid='title'>{t('SolutionSection.title')}</h1>
            <div className='text-xl leading-loose font-light' data-testid='desc'>
              {t('SolutionSection.desc')}
            </div>
          </div>
          <ComparisonGraph />
        </div>
      </Container>
    </section>
  )
}

function ComparisonGraph (): JSX.Element {
  const { t } = useTranslation('page-index')

  return (
    <div className='w-full' data-testid='ComparisonGraph'>
      <div className='flex flex-row mb-5'>
        <h1
          className='w-1/2 text-sm md:text-lg font-medium text-black text-center'
        >{t('SolutionSection.graph.TraditionalFinance')}
        </h1>
        <h1
          className='w-1/2 text-sm md:text-lg font-medium text-black text-center'
        >{t('SolutionSection.graph.Fintech')}
        </h1>
        <h1 className='w-1/2 text-sm md:text-lg font-medium text-primary-500 text-center'>DeFi</h1>
      </div>
      <div className='flex text-gray-500 items-start w-full'>
        <div className='flex flex-col h-[192px] divide-x w-1/3'>
          <div
            className='text-sm md:text-base bg-gray-100 h-[75%] flex flex-col justify-center text-center font-light'
          >{t('SolutionSection.graph.Bureaucracy')}
          </div>
          <div
            className='text-sm md:text-base text-white bg-primary-500 h-[25%] flex flex-col justify-center text-center'
          >{t('SolutionSection.graph.TrustSoftware')}
          </div>
        </div>
        <div className='flex flex-col h-[192px] divide-x w-1/3'>
          <div
            className='text-sm md:text-base bg-gray-100 h-[50%] flex flex-col justify-center text-center font-light'
          >{t('SolutionSection.graph.Bureaucracy')}
          </div>
          <div
            className='text-sm md:text-base text-white bg-primary-500 h-[50%] flex flex-col justify-center text-center'
          >{t('SolutionSection.graph.TrustSoftware')}
          </div>
        </div>
        <div className='flex flex-col h-[192px] divide-x w-1/3'>
          <div
            className='text-sm md:text-base bg-gray-100 h-[25%] flex flex-col justify-center font-light text-center'
          >{t('SolutionSection.graph.Bureaucracy')}
          </div>
          <div
            className='text-sm md:text-base text-white bg-primary-500 h-[75%] flex flex-col text-center justify-center'
          >{t('SolutionSection.graph.MinimizedSoftware')}
          </div>
        </div>
      </div>
    </div>
  )
}
