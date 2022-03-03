import { Container } from '@components/commons/Container'
import { FeatureCard } from '@components/commons/FeatureCard'
import { RiExchangeFundsFill, RiStackLine } from 'react-icons/ri'
import { FaShapes, FaScroll } from 'react-icons/fa'
import { MdOutlineDoNotDisturbOn } from 'react-icons/md'
import { IoMdConstruct } from 'react-icons/io'

import { Oracles } from '@components/icons/assets/home/Oracles'
import { Lending } from '@components/icons/assets/home/Lending'
import { WrappedToken } from '@components/icons/assets/home/WrappedTokens'
import { Transfer } from '@components/icons/assets/home/Transfer'
import { Tokens } from '@components/icons/assets/wallet-features/Tokens'
import { Dex } from '@components/icons/assets/wallet-features/Dex'

export function BenefitSection (): JSX.Element {
  return (
    <>
      <section className='py-20'>
        <Container>
          <div className='flex flex-wrap -mx-6 lg:-mx-10'>
            <FeatureCard
              title='Variety'
              desc='Wide range of crypto-economic financial operations.'
            >
              <FaShapes className='fill-primary-500' fontSize={50} />
            </FeatureCard>
            <FeatureCard
              title='Throughput'
              desc='Unparalleled high transaction throughput for all transactions'
            >
              <RiExchangeFundsFill className='fill-primary-500' fontSize={50} />
            </FeatureCard>
            <FeatureCard
              title='Security'
              desc='Turing-incomplete for reduced attack vectors.'
            >
              <MdOutlineDoNotDisturbOn className='fill-primary-500' fontSize={50} />
            </FeatureCard>
            <FeatureCard
              title='Development'
              desc='Rapidly create a variety of DeFi apps on one chain.'
            >
              <IoMdConstruct className='fill-primary-500' fontSize={50} />
            </FeatureCard>
            <FeatureCard
              title='Governance'
              desc='Reliable decentralized governance, on and off-chain.'
            >
              <FaScroll className='fill-primary-500' fontSize={50} />
            </FeatureCard>
            <FeatureCard
              title='Immutability'
              desc='Immutable by anchoring to the Bitcoin blockchain'
            >
              <FaScroll className='fill-primary-500' fontSize={50} />
            </FeatureCard>
          </div>
        </Container>
      </section>
      <section className='bg-gray-50 py-20'>
        <Container>
          <div className='flex flex-wrap -mx-6 lg:-mx-10'>
            <FeatureCard
              title='Lending'
              desc='Borrow and lend through collateralized systems.'
            >
              <Lending className='fill-primary-500' fontSize={50} />
            </FeatureCard>
            <FeatureCard
              title='Wrapping of tokens'
              desc='Work with a variety of cryptoassets, directly, on-chain.'
            >
              <WrappedToken className='fill-primary-500' fontSize={50} />
            </FeatureCard>

            <FeatureCard
              title='Pricing Oracles'
              desc='Collect data from other chains and non-crypto markets'
            >
              <Oracles className='fill-primary-500' fontSize={50} />
            </FeatureCard>
            <FeatureCard
              title='Exchanges'
              desc='Direct peer-to-peer trading between cryptocurrencies.'
            >
              <Dex className='fill-primary-500' fontSize={50} />
            </FeatureCard>
            <FeatureCard
              title='Transferable debts and receivables'
              desc='Work with transparency not possible with institutions.'
            >
              <Transfer className='fill-primary-500' fontSize={50} />
            </FeatureCard>
            <FeatureCard
              title='Non-collateralized debt'
              desc='Loans based on reputation and verifiable credentials.'
            >
              <RiStackLine className='fill-primary-500' fontSize={50} />
            </FeatureCard>
            <FeatureCard
              title='Asset tokenization'
              desc='Tokenize equity, real estate, and other holdings'
            >
              <Tokens className='fill-primary-500' fontSize={50} />
            </FeatureCard>
            <FeatureCard
              title='Distribution of dividends'
              desc='Automatic investment payouts with smart contracts.'
            >
              <Dex className='fill-primary-500' fontSize={50} />
            </FeatureCard>
          </div>
        </Container>
      </section>
    </>
  )
}
