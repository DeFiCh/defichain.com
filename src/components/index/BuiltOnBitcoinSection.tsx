import { Container } from '@components/commons/Container'
import NextImage from 'next/image'
import Link from 'next/link'
import Bitcoin from '../../../public/assets/svg/hero/builtonbitcoin.svg'
import { useTranslation } from 'next-i18next'

export function BuiltOnBitcoinSection (): JSX.Element {
  const { t } = useTranslation('page-index')

  return (
    <section className='py-10' data-testid='BuiltOnBitcoinSection'>
      <Container>
        <div className='flex flex-wrap md:flex-nowrap space-y-6 md:space-y-0 md:space-x-28 py-20'>
          <div
            className='flex flex-col space-y-4 md:space-y-8 items-start '
            data-testid='BuiltOnBitcoinSection.BuiltOnBitcoin'
          >
            <h1
              className='text-2xl md:text-3xl font-semibold'
              data-testid='title'
            >{t('BuiltOnBitcoinSection.title')}
            </h1>
            <div className='text-xl md:text-3xl font-light' data-testid='desc'>
              {t('BuiltOnBitcoinSection.desc')}
            </div>
            <Link href={{ pathname: '/white-paper' }} passHref>
              <a className='text-white rounded py-2 px-3 cursor-pointer bg-primary-500'>
                {t('BuiltOnBitcoinSection.button')}
              </a>
            </Link>
          </div>
          <div className='w-full' data-testid='image'>
            <NextImage src={Bitcoin} />
          </div>
        </div>
      </Container>
    </section>
  )
}
