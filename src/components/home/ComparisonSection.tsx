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
    <div className='flex text-gray-500 items-baseline w-full'>
      <div className='w-1/3'>
        <h1 className='text-lg font-medium text-black text-center  mb-5'>Traditional finance</h1>
        <div className='flex flex-col h-[192px] divide-x'>
          <div className='bg-gray-100 h-[75%] flex flex-col justify-center items-center'>Bureaucracy </div>
          <div className='text-white bg-primary-500 h-[25%] flex flex-col justify-center items-center'>Trust-based software </div>
        </div>
      </div>
      <div className='w-1/3'>
        <h1 className='text-lg font-medium text-black text-center  mb-5'>FinTech</h1>
        <div className='flex flex-col h-[192px] divide-x'>
          <div className='bg-gray-100 h-[50%] flex flex-col justify-center items-center'>Bureaucracy </div>
          <div className='text-white bg-primary-500 h-[50%] flex flex-col justify-center items-center'>Trust-based software </div>
        </div>
      </div>
      <div className='w-1/3'>
        <h1 className='text-lg font-medium text-primary-500 text-center  mb-5'>Defi</h1>
        <div className='flex flex-col h-[192px] divide-x'>
          <div className='bg-gray-100 h-[25%] flex flex-col justify-center items-center'>Bureaucracy </div>
          <div className='text-white bg-primary-500 h-[75%] flex flex-col justify-center items-center'>Trust-minimized software </div>
        </div>
      </div>
    </div>
  )
}
