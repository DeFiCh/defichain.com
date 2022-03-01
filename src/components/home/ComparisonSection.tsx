import { Container } from '@components/commons/Container'

export function ComparisonSection (): JSX.Element {
  return (
    <section className='lg:-mt-32 bg-gray-50 py-20'>
      <Container>
        <div className='flex flex-col lg:flex-row items-center  mt-48 space-y-20 lg:space-y-0 lg:space-x-32'>
          <div className='w-full lg:w-1/2 space-y-3'>
            <h1 className='font-medium text-2xl md:text-3xl'>The Post-Fintech Revolution</h1>
            <div className='text-xl leading-loose font-light'>
              From trust-based to trust-less, decentralized finance overcomes what Fintech could not solve in traditional finance.
            </div>
          </div>
          <ComparisionTable />
        </div>
      </Container>
    </section>
  )
}

function ComparisionTable (): JSX.Element {
  return (
    <div className='w-full'>
      <div className='flex flex-row mb-5'>
        <h1 className='w-1/2 text-sm md:text-lg font-medium text-black text-center'>Traditional finance</h1>
        <h1 className='w-1/2 text-sm md:text-lg font-medium text-black text-center'>FinTech</h1>
        <h1 className='w-1/2 text-sm md:text-lg font-medium text-primary-500 text-center'>Defi</h1>
      </div>
      <div className='flex text-gray-500 items-start w-full'>
        <div className='flex flex-col h-[192px] divide-x w-1/3'>
          <div className='text-sm md:text-base bg-gray-100 h-[75%] flex flex-col justify-center items-center'>Bureaucracy </div>
          <div className='text-sm md:text-base text-white bg-primary-500 h-[25%] flex flex-col justify-center text-center'>Trust-based software </div>
        </div>
        <div className='flex flex-col h-[192px] divide-x w-1/3'>
          <div className='text-sm md:text-base bg-gray-100 h-[50%] flex flex-col justify-center items-center'>Bureaucracy </div>
          <div className='text-sm md:text-base text-white bg-primary-500 h-[50%] flex flex-col justify-center text-center'>Trust-based software </div>
        </div>
        <div className='flex flex-col h-[192px] divide-x w-1/3'>
          <div className='text-sm md:text-base bg-gray-100 h-[25%] flex flex-col justify-center items-center'>Bureaucracy </div>
          <div className='text-sm md:text-base text-white bg-primary-500 h-[75%] flex flex-col text-center justify-center'>Trust-minimized software </div>
        </div>
      </div>
    </div>
  )
}
