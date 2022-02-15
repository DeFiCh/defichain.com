import { Container } from '@components/commons/Container'
import classNames from 'classnames'

export function CardSection (): JSX.Element {
  return (
    <section className='-mt-56'>
      <Container>
        <div className='flex item-center'>
          <Card title='Latest feature' subtitle='Decentralized Assets' desc='Access decentralized assets with collateral in your vault.' testId='CardSection.LatestFeature' url='/' buttonText='Learn more' />
          <Card title='featured download' subtitle='DefiChain Wallet' desc='Access decentralized assets with collateral in your vault.' testId='CardSection.Downloads' url='/' buttonText='Go to downloads' />
          <Card title='how-to guide' subtitle='Buy $DFI' desc='Learn about and acquire the $DFI coin from various crypto exchanges.' testId='CardSection.HowTo' url='/' buttonText='Learn more' fill />
        </div>
      </Container>
    </section>
  )
}

interface Cardprops {
  title: string
  desc: string
  fill?: boolean
  url: string
  subtitle: string
  testId: string
  buttonText: string
}

function Card (props: Cardprops): JSX.Element {
  return (
    <div className='min-h-[320px] w-[318px] shadow p-4 flex flex-col mx-10 bg-white border-2 border-white' data-testid={props.testId}>
      <div>
        <div className='uppercase text-sm text-gray-400'>{props.title}</div>
        <div className='text-2xl font-medium'>{props.subtitle}</div>
      </div>
      <div className='mt-10'>
        {props.desc}
      </div>
      <a className={classNames('inline-flex shadow rounded justify-center mt-auto max-w-fit py-3 px-5 rounded', props.fill !== undefined ? 'text-primary-500 border-2 border-primary-500' : 'bg-primary-500 text-white')} href={props.url}>{props.buttonText}</a>
    </div>
  )
}
