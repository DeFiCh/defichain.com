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
      <Container className='h-full mt-36 mb-16 min-h-[560px] lg:min-h-[800px]'>
        <div className='mx-auto w-full md:w-1/2'>
          <h1 className='text-4xl text-center lg:text-5xl text-gray-900 w-full mb-6 font-semibold' data-testid='Header.title'>
            Native Decentralized Finance for Bitcoin
          </h1>
          <div className='h-full flex flex-wrap items-center'>
            <div className='mt-10 flex flex-wrap'>
              <div className='w-full text-2xl text-gray-900 text-center' data-testid='Header.desc.main'>A blockchain dedicated to fast, intelligent and transparent decentralized financial services, accessible by everyone.
              </div>
              <br />
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}
