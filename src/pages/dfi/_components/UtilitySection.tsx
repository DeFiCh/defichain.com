import { Container } from '@components/commons/Container'
import { FaGlobe, FaPercentage } from 'react-icons/fa'
import { RiAuctionFill, RiExchangeDollarLine } from 'react-icons/ri'
import { BsPieChartFill, BsVinylFill } from 'react-icons/bs'
import { FeatureCard } from '@components/commons/FeatureCard'

export function UtilitySection (): JSX.Element {
  return (
    <section className='bg-gray-50 py-20'>
      <Container>
        <h1 className='font-medium text-3xl' data-testid='UtilitySection.Heading'>$DFI coin utility</h1>
        <div className='flex flex-wrap'>
          <FeatureCard
            title='Fees'
            desc='Pay for transactions, smart contracts and other DeFi activities.'
            testid='UtilitySection.Fees'
          >
            <FaPercentage className='fill-primary-500' fontSize={50} />
          </FeatureCard>
          <FeatureCard
            title='Loan collaterals'
            desc='Lend or borrow using crypto assets as collateral.'
            testid='UtilitySection.Collateral'
          >
            <RiExchangeDollarLine className='fill-primary-500' fontSize={50} />
          </FeatureCard>
          <FeatureCard
            title='Staking nodes'
            desc='Fund a new staking node for just 20,000 DFI.'
            testid='UtilitySection.Nodes'
          >
            <FaGlobe className='fill-primary-500' fontSize={50} />
          </FeatureCard>
          <FeatureCard
            title='DeFi Custom Token'
            desc='Create a non-refundable personalised DCT (DeFi Custom Token).'
            testid='UtilitySection.Token'
          >
            <BsVinylFill className='fill-primary-500' fontSize={50} />
          </FeatureCard>
          <FeatureCard
            title='Budget proposal'
            desc='Submit a community budget proposal for 500 DFI (non-refundable).'
            testid='UtilitySection.Proposal'
          >
            <RiAuctionFill className='fill-primary-500' fontSize={50} />
          </FeatureCard>
          <FeatureCard title='Liquidity pools' desc='Provide liquidity for the decentralized exchange between crypto assets.' testid='UtilitySection.Pools'>
            <BsPieChartFill className='fill-primary-500' fontSize={50} />
          </FeatureCard>
        </div>
      </Container>
    </section>
  )
}
