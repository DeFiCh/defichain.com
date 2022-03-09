import { Container } from '@components/commons/Container'
import NextImage from 'next/image'
import Link from 'next/link'
import Bitcoin from '../../../public/assets/svg/hero/builtonbitcoin.svg'
import { useTranslation } from 'next-i18next'
import { Button } from '@components/commons/Buttons'

export function BuiltOnBitcoinSection (): JSX.Element {
  const { t } = useTranslation('page-index')

  return (
    <section className='py-10 lg:py-16' data-testid='BuiltOnBitcoinSection'>
      <Container>
        <div className='flex flex-wrap md:flex-nowrap space-y-6 md:space-y-0 md:space-x-28'>
          <div
            className='w-full lg:w-2/3 flex flex-col space-y-4 md:space-y-8 items-start '
            data-testid='BuiltOnBitcoinSection.BuiltOnBitcoin'
          >
            <h2
              className='text-2xl md:text-3xl font-medium'
              data-testid='title'
            >{t('BuiltOnBitcoinSection.title')}
            </h2>
            <div className='text-lg md:text-xl' data-testid='desc'>
              {t('BuiltOnBitcoinSection.desc')}
            </div>
            <div data-testid='button'>
              <Link href={{ pathname: '/white-paper' }} passHref>
                <a className='contents'>
                  <Button text={t('BuiltOnBitcoinSection.button')} />
                </a>
              </Link>
            </div>
          </div>
          <div className='w-1/2 lg:w-1/4 mx-auto' data-testid='image'>
            <NextImage src={Bitcoin} />
          </div>
        </div>
      </Container>
    </section>
  )
}
