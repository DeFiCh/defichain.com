import { Container } from '@components/commons/Container'

export function HomePageHeader (): JSX.Element {
  return (
    <div
      className='flex flex-col items-center pb-24'
      style={{
        backgroundImage: 'url(\'/assets/svg/hero/fortcanning.svg\')',
        backgroundSize: 'cover',
        backgroundPosition: 'right center'
      }}
    >
      <Container className='flex w-full min-h-[35rem] lg:min-h-[45rem] items-center justify-center'>
        <div className='w-full md:w-1/2 -mt-48'>
          <h1 className='w-full text-3xl lg:text-5xl text-center mb-6 font-semibold' data-testid='Header.title'>
            Native Decentralized Finance for Bitcoin
          </h1>
          <div className='flex flex-wrap items-center'>
            <div className='mt-10 flex flex-wrap'>
              <div className='w-full text-lg text-center' data-testid='Header.desc.main'>A blockchain dedicated to fast, intelligent and transparent decentralized financial services, accessible by everyone.
              </div>
              <br />
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}
