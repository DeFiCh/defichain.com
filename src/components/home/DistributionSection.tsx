import { Container } from '@components/commons/Container'
import NextImage from 'next/image'
import Link from 'next/link'

import Nodes from '../../../public/assets/svg/hero/nodes-map.svg'
import Bitcoin from '../../../public/assets/svg/hero/builtonbitcoin.svg'

export function DistributionSection (): JSX.Element {
  return (
    <section className='py-10' data-testid='DistributionSection'>
      <Container>
        <div className='flex flex-wrap md:flex-nowrap space-y-6 md:space-y-0 md:space-x-28 py-20'>
          <div className='flex flex-col space-y-4 md:space-y-8 items-start ' data-testid='DistributionSection.BuiltOnBitcoin'>
            <h1 className='text-2xl md:text-3xl font-semibold' data-testid='title'>Built-on-bitcoin</h1>
            <div className='text-xl md:text-3xl font-light' data-testid='desc'>
              DeFiChain marries the best of Proof-of-Stake, with the security and immutability of Bitcoin.
            </div>
            <Link href={{ pathname: '/white-paper' }} passHref>
              <a className='text-white rounded py-2 px-3 cursor-pointer bg-primary-500'>
                Learn more
              </a>
            </Link>
          </div>
          <div className='w-full' data-testid='image'>
            <NextImage src={Bitcoin} />
          </div>
        </div>
        <div className='pt-10' data-testid='DistributionSection.Nodes'>
          <div className='flex flex-col space-y-12'>
            <h1 className='text-2xl md:text-3xl font-semibold' data-testid='Nodes.Title'>Decentralized and distributed</h1>
            <div className='text-lg w-full md:w-1/2' data-testid='Nodes.Desc'>DeFiChain nodes are distributed globally across datacenters in the US, Canada, Europe, India, Singapore and Australia.</div>
          </div>
          <div className='w-full mt-24' data-testid='Nodes.Image'>
            <NextImage src={Nodes} />
          </div>
        </div>
      </Container>
    </section>
  )
}
