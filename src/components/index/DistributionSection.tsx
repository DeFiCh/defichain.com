import { Container } from '@components/commons/Container'
import NextImage from 'next/image'

import Nodes from '../../../public/assets/svg/hero/nodes-map.svg'
import { useTranslation } from 'next-i18next'

export function DistributionSection (): JSX.Element {
  const { t } = useTranslation('page-index')

  return (
    <section className='py-10 mb-10' data-testid='DistributionSection'>
      <Container>
        <div className='pt-10' data-testid='DistributionSection.Nodes'>
          <div className='flex flex-col space-y-12'>
            <h2
              className='text-2xl md:text-3xl font-semibold'
              data-testid='Nodes.Title'
            >{t('DistributionSection.title')}
            </h2>
            <div className='text-lg w-full md:w-1/2' data-testid='Nodes.Desc'>
              {t('DistributionSection.desc')}
            </div>
          </div>
          <div className='w-4/5 mt-16 mx-auto' data-testid='Nodes.Image'>
            <NextImage src={Nodes} />
          </div>
        </div>
      </Container>
    </section>
  )
}
