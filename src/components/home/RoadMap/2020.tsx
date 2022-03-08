import { ExternalLink } from '@components/commons/link/ExternalLink'
import { RoadmapCard, TimeLineContainer } from '@components/home/RoadMap/RoadmapSection'

import AmkHardFork from '../../../../public/assets/img/home/timeline/2020/amk-hardfork.png'
import BayFrontHardFork from '../../../../public/assets/img/home/timeline/2020/bayfront-hardfork.png'
import Bittrex from '../../../../public/assets/img/home/timeline/2020/bittrex.png'
import Bittrue from '../../../../public/assets/img/home/timeline/2020/bittrue.png'
import DfiLaunch from '../../../../public/assets/img/home/timeline/2020/blockchain-launch.png'
import SiteRedo from '../../../../public/assets/img/home/timeline/2020/dechain-site-redesign.png'
import DefiApp from '../../../../public/assets/img/home/timeline/2020/defi-app.png'
import CoinGecko from '../../../../public/assets/img/home/timeline/2020/dfi-coingecko.png'
import CoinMarketCap from '../../../../public/assets/img/home/timeline/2020/dfi-coinmarketcap.png'
import Hotbit from '../../../../public/assets/img/home/timeline/2020/dfi-hotbit.png'
import Indoex from '../../../../public/assets/img/home/timeline/2020/dfi-indoex.png'
import Latoken from '../../../../public/assets/img/home/timeline/2020/dfi-latoken.png'
import Dfips from '../../../../public/assets/img/home/timeline/2020/dfips-approved.png'
import LiqPool from '../../../../public/assets/img/home/timeline/2020/liquidity-pool.png'
import CoinPaparika from '../../../../public/assets/img/home/timeline/2020/dfi-coinpaprika.png'
import { NextArrow, PrevArrow } from '@components/home/CardSection'
import Slider from 'react-slick'

export function TimeLine2020 (): JSX.Element {
  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    initialSlide: 14,
    centerMode: true,
    centerPadding: '0px',
    lazyload: 'progressive',
    dots: true,
    variableWidth: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 640,
        settings: {
          arrows: false,
          swipeToSlide: true,
          dots: false
        }
      }
    ]
  }

  return (
    <TimeLineContainer label='Achieved' testid='RoadmapSection.2020' timeline='2020'>
      <Slider {...settings}>
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
      </Slider>
    </TimeLineContainer>
  )
}
