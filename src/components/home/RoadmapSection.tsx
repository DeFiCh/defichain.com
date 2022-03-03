import { PropsWithChildren } from 'react'
import NextImage from 'next/image'
import Slider from 'react-slick'
import { ExternalLink } from '@components/commons/link/ExternalLink'
import { NextArrow, PrevArrow } from '@components/home/CardSection'
import { Container } from '@components/commons/Container'

// images import
import ConceptImage from '../../../public/assets/img/home/timeline/2019/concept.jpg'
import WhitePaper from '../../../public/assets/img/home/timeline/2019/white-paper.png'
import AmkHardFork from '../../../public/assets/img/home/timeline/2020/amk-hardfork.png'
import BayFrontHardFork from '../../../public/assets/img/home/timeline/2020/bayfront-hardfork.png'
import Bittrex from '../../../public/assets/img/home/timeline/2020/bittrex.png'
import Bittrue from '../../../public/assets/img/home/timeline/2020/bittrue.png'
import DfiLaunch from '../../../public/assets/img/home/timeline/2020/blockchain-launch.png'
import SiteRedo from '../../../public/assets/img/home/timeline/2020/dechain-site-redesign.png'
import DefiApp from '../../../public/assets/img/home/timeline/2020/defi-app.png'
// import Dex from '../../../public/assets/img/home/timeline/2020/dex.png'
import CoinGecko from '../../../public/assets/img/home/timeline/2020/dfi-coingecko.png'
import CoinMarketCap from '../../../public/assets/img/home/timeline/2020/dfi-coinmarketcap.png'
import Hotbit from '../../../public/assets/img/home/timeline/2020/dfi-hotbit.png'
import Indoex from '../../../public/assets/img/home/timeline/2020/dfi-indoex.png'
import Latoken from '../../../public/assets/img/home/timeline/2020/dfi-latoken.png'
import Dfips from '../../../public/assets/img/home/timeline/2020/dfips-approved.png'
import LiqPool from '../../../public/assets/img/home/timeline/2020/liquidity-pool.png'
// import Tokenization from '../../../public/assets/img/home/timeline/2020/tokenization.png'
import CoinPaparika from '../../../public/assets/img/home/timeline/2020/dfi-coinpaprika.png'
import Ach from '../../../public/assets/img/home/timeline/future/ach.png'
import Decentralized from '../../../public/assets/img/home/timeline/future/decentralized.png'
import Derivatives from '../../../public/assets/img/home/timeline/future/derivatives.png'
import Options from '../../../public/assets/img/home/timeline/future/options.png'
import P2P from '../../../public/assets/img/home/timeline/future/p2p.png'
import CrossBorder from '../../../public/assets/img/home/timeline/future/x-border-txns.png'
import XfiTxns from '../../../public/assets/img/home/timeline/future/xfi-txns.png'
import SecondaryMartket from '../../../public/assets/img/home/timeline/future/secondary-market.png'

export function RoadmapSection (): JSX.Element {
  return (
    <section className='bg-gray-50 py-20'>
      <Container>
        <TimeLine2021 />
        <TimeLineFuture />
        <TimeLine2020 />
        <TimeLine2019 />
      </Container>
    </section>
  )
}

export function TimeLineContainer (props: PropsWithChildren<{testid: string, timeline: string, achieved?: boolean}>): JSX.Element {
  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    lazyload: 'ondemand',
    responsive: [
      {
        breakpoint: 1180,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          arrow: false,
          prevArrow: <PrevArrow />,
          nextArrow: <NextArrow />
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrow: false,
          prevArrow: <PrevArrow />,
          nextArrow: <NextArrow />
        }
      },
      {
        breakpoint: 600,
        settings: {
          className: 'center',
          slidesToShow: 1,
          slidesToScroll: 1,
          arrow: false,
          swipeToSlide: true,
          dots: true

        }
      }
    ]
  }
  return (
    <div data-testid={props.testid} className='py-28'>
      <div className='my-12'>
        <span className='mr-4 font-medium text-xl'>{props.timeline}</span>
        {props.achieved !== undefined && <span>Achieved</span>}
      </div>
      <Slider {...settings}>
        {props.children}
      </Slider>
    </div>
  )
}

export function RoadmapCard (props: PropsWithChildren<{image: StaticImageData, month: string, testId: string}>): JSX.Element {
  return (
    <div className='w-[320px] shadow-sm' data-testid={props.testId}>
      <div className='bg-white p-4 space-y-4 flex flex-col min-h-[160px]'>
        <h1 className='font-medium text-xl'>{props.month}</h1>
        <div className='flex-1'>
          {props.children}
        </div>
      </div>
      <div className='w-full overflow-hidden'>
        <NextImage className='h-full' src={props.image} alt='DeFiChain roadmap' title='DeFiChain roadmap' />
      </div>
    </div>
  )
}

function TimeLine2021 (): JSX.Element {
  return (
    <TimeLineContainer testid='RoadmapSection.2021' timeline='2021' achieved />
  )
}

function TimeLineFuture (): JSX.Element {
  return (
    <TimeLineContainer testid='RoadmapSection.Future' timeline='Within the next 3, 5 and 10 years'>
      <RoadmapCard
        image={Decentralized}
        testId='RoadmapSection.Future.Decentralized'
        month='3 Years'
      >
        <div>
          Decentralized leveraged trading (10x or 50x of collateral)
        </div>
      </RoadmapCard>
      <RoadmapCard
        image={Options}
        testId='RoadmapSection.Future.Options'
        month='3 Years'
      >
        <div>
          Decentralized options
        </div>
      </RoadmapCard>
      <RoadmapCard
        image={SecondaryMartket}
        testId='RoadmapSection.Future.SecondaryMartket'
        month='3 Years'
      >
        <div>
          Secondary market
        </div>
      </RoadmapCard>
      <RoadmapCard
        image={Derivatives}
        testId='RoadmapSection.Future.Derivatives'
        month='3 Years'
      >
        <div>
          Financial derivatives implementation as native onchain transactions.
        </div>
      </RoadmapCard>
      <RoadmapCard
        image={P2P}
        testId='RoadmapSection.Future.P2P'
        month='3 Years'
      >
        <div>
          The de-facto blockchain for peer-to-peer financial transactions
        </div>
      </RoadmapCard>
      <RoadmapCard
        image={Ach}
        testId='RoadmapSection.Future.ACH'
        month='5 Years'
      >
        <div>
          On-chain Automated clearing house (ACH) and Real-time gross settlement (RTGS).
        </div>
      </RoadmapCard>
      <RoadmapCard
        image={XfiTxns}
        testId='RoadmapSection.Future.XfiTxns'
        month='5 Years'
      >
        <div>
          The de-facto blockchain for transactions across financial institutions.
        </div>
      </RoadmapCard>
      <RoadmapCard
        image={CrossBorder}
        testId='RoadmapSection.Future.CrossBorder'
        month='5 Years'
      >
        <div>
          The de-facto blockchain for transactions between countries and sovereign states.
        </div>
      </RoadmapCard>
    </TimeLineContainer>
  )
}

function TimeLine2020 (): JSX.Element {
  return (
    <TimeLineContainer achieved testid='RoadmapSection.2020' timeline='2020'>
      <RoadmapCard
        image={DfiLaunch}
        testId='RoadmapSection.2020.May.Launch'
        month='May'
      >
        <ExternalLink
          className='text-primary-500'
          text='DefiChain launch and DFI airdrops.'
          url='https://github.com/defich/ain'
        />
      </RoadmapCard>
      <RoadmapCard
        image={Latoken}
        testId='RoadmapSection.2020.Jun.Latoken'
        month='Jun'
      >
        <ExternalLink
          className='text-primary-500'
          text='$DFI coin started trading on LATOKEN.'
          url='https://latoken.com/exchange/DFI_USDT'
        />
      </RoadmapCard>
      <RoadmapCard
        image={CoinPaparika}
        testId='RoadmapSection.2020.Jun.CoinPaparika'
        month='Jun'
      >
        <ExternalLink
          className='text-primary-500'
          text='$DFI is listed on CoinPaparika'
          url='https://coinpaprika.com/coin/dfi-defi-chain/'
        />
      </RoadmapCard>
      <RoadmapCard
        image={CoinGecko}
        testId='RoadmapSection.2020.Jul.CoinGecko'
        month='Jul'
      >
        <ExternalLink
          className='text-primary-500'
          text='CoinGeck list $DFI'
          url='https://www.coingecko.com/en/coins/defichain'
        />
      </RoadmapCard>
      <RoadmapCard
        image={Indoex}
        testId='RoadmapSection.2020.Jul.Indoex'
        month='Jul'
      >
        <ExternalLink
          className='text-primary-500'
          text='Indoex list $DFI'
          url='https://international.indoex.io/trade/DFI_USDT'
        />
      </RoadmapCard>
      <RoadmapCard
        image={DefiApp}
        testId='RoadmapSection.2020.Jul.DefiApp'
        month='Jul'
      >
        <ExternalLink
          className='text-primary-500'
          text='DefiChain Desktop app (GUI) launch'
          url='https://github.com/DeFiCh/app'
        />
      </RoadmapCard>
      <RoadmapCard
        image={Hotbit}
        testId='RoadmapSection.2020.Aug.Hotbit'
        month='Aug'
      >
        <ExternalLink
          className='text-primary-500'
          text='$DFI officially listed on HotBit'
          url='https://www.hotbit.io/exchange?symbol=DFI_USDT'
        />
      </RoadmapCard>
      <RoadmapCard
        image={SiteRedo}
        testId='RoadmapSection.2020.Aug.SiteRedo'
        month='Aug'
      >
        <div>
          DeFiChain brand refresh
        </div>
      </RoadmapCard>
      <RoadmapCard
        image={CoinMarketCap}
        testId='RoadmapSection.2020.Aug.CoinMarketCap'
        month='Aug'
      >
        <ExternalLink
          className='text-primary-500'
          text='DeFiChain listed on CoinMarketCap'
          url='https://coinmarketcap.com/currencies/defichain/markets/'
        />
      </RoadmapCard>
      <RoadmapCard
        image={Dfips}
        testId='RoadmapSection.2020.Sep.Dfips'
        month='Sep'
      >
        <ExternalLink
          className='text-primary-500'
          text='DFIP 1 & 2 approved by the DeFiChain community'
          url='https://defiblockchain.medium.com/dfip-1-2-voting-results-29bfc8c7a608'
        />
      </RoadmapCard>
      <RoadmapCard
        image={Bittrue}
        testId='RoadmapSection.2020.Oct.Bittrex'
        month='Oct'
      >
        <ExternalLink
          className='text-primary-500'
          text='DeFiChain listed on Bittrue'
          url='https://www.bitrue.com/trade/dfi_btc'
        />
      </RoadmapCard>
      <RoadmapCard
        image={AmkHardFork}
        testId='RoadmapSection.2020.Oct.AmkHardFork'
        month='Oct'
      >
        <ExternalLink
          className='text-primary-500'
          text='Ang Mo kio hardfork with assets tokenization support '
          url='https://defiblockchain.medium.com/defichain-hardfork-successful-everything-you-need-to-know-5aa4ea92438b'
        />
      </RoadmapCard>
      <RoadmapCard
        image={Bittrex}
        testId='RoadmapSection.2020.Oct.Bittrex'
        month='Oct'
      >
        <ExternalLink
          className='text-primary-500'
          text='DeFiChain listed on Bittrex'
          url='https://www.bitrue.com/trade/dfi_btc'
        />
      </RoadmapCard>
      <RoadmapCard
        image={BayFrontHardFork}
        testId='RoadmapSection.2020.Nov.BayFrontHardFork'
        month='Nov'
      >
        <ExternalLink
          className='text-primary-500'
          text='Bayfront hardfork with liquidity pool support '
          url='https://www.reddit.com/r/defiblockchain/comments/jem20f/defichain_version_130_for_bayfront_with_liquidity/'
        />
      </RoadmapCard>
      <RoadmapCard
        image={LiqPool}
        testId='RoadmapSection.2020.Dec.LiqPool'
        month='Dec'
      >
        <ExternalLink
          className='text-primary-500'
          text='Swap, liquidity pool and yield farming'
          url='https://www.youtube.com/watch?v=0uBwWK85BLU'
        />
      </RoadmapCard>
    </TimeLineContainer>
  )
}

function TimeLine2019 (): JSX.Element {
  return (
    <TimeLineContainer achieved testid='RoadmapSection.2019' timeline='2019'>
      <RoadmapCard
        image={ConceptImage}
        testId='RoadmapSection.2019.Sep.Concept'
        month='Sep'
      >
        <ExternalLink
          className='text-primary-500'
          text='Conceptualization of DeFiChain.'
          url='https://cryptopotato.com/defichain-the-story-from-the-co-founders'
        />
      </RoadmapCard>
      <RoadmapCard
        image={WhitePaper}
        testId='RoadmapSection.2019.Oct.WhitePaper'
        month='Oct'
      >
        <ExternalLink
          text='DeFiChain White paper released.'
          url='https://cryptopotato.com/defichain-the-story-from-the-co-founders'
        />
      </RoadmapCard>
    </TimeLineContainer>
  )
}
