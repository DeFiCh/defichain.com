import { Container } from '@components/commons/Container'
import NextImage from 'next/image'
import Nodes from '../../../public/assets/svg/hero/nodes-map.svg'

export function DistributionSection (): JSX.Element {
  return (
    <section className='py-20'>
      <Container>
        <div className='flex flex-col space-y-12'>
          <h1 className='text-3xl md:text-5xl font-semibold'>Decentralized and distributed</h1>
          <div className='text-lg md:text-2xl font-light  w-full md:w-1/2'>DeFiChain nodes are distributed globally across datacenters in the US, Canada, Europe, India, Singapore and Australia.</div>
        </div>
        <div className='w-full mt-24'>
          <NextImage src={Nodes} />
        </div>
      </Container>
    </section>
  )
}
