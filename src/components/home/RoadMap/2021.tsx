import { ExternalLink } from '@components/commons/link/ExternalLink'
import { RoadmapCard, TimeLineContainer } from '@components/home/RoadMap/RoadmapSection'
import Link from 'next/link'

import AtomicSwap from '../../../../public/assets/img/home/timeline/2021/atomic-swap.png'
import BtcLtc from '../../../../public/assets/img/home/timeline/2021/bch-ltc-pairs.png'
import BitcoinAnchor from '../../../../public/assets/img/home/timeline/2021/bitcoin-anchoring.png'
import Carbon from '../../../../public/assets/img/home/timeline/2021/Carbon-neutral.png'
import Dakota from '../../../../public/assets/img/home/timeline/2021/dakota-upgrade.png'
import DeFiScan from '../../../../public/assets/img/home/timeline/2021/DeFi-Scan.png'
import DfcFoundation from '../../../../public/assets/img/home/timeline/2021/DFC-Foundation.png'
import DfiPs2021 from '../../../../public/assets/img/home/timeline/2021/dfips3456.png'
import DogePair from '../../../../public/assets/img/home/timeline/2021/doge-pair.png'
import Eunos from '../../../../public/assets/img/home/timeline/2021/Eunos-Upgrade.png'
import FortCanning from '../../../../public/assets/img/home/timeline/2021/Fort-Canning-Update-blank.png'
import JsLib from '../../../../public/assets/img/home/timeline/2021/js-library.png'
import Kucoin from '../../../../public/assets/img/home/timeline/2021/kucoin.png'
import LmBonus from '../../../../public/assets/img/home/timeline/2021/lm-bonus.png'
import MasternodeCol from '../../../../public/assets/img/home/timeline/2021/lower-masternode-collateral.png'
import Messari from '../../../../public/assets/img/home/timeline/2021/messari.png'
import MobileApp from '../../../../public/assets/img/home/timeline/2021/mobile-app.png'
import PinkPaper from '../../../../public/assets/img/home/timeline/2021/pink-paper.png'
import Transak from '../../../../public/assets/img/home/timeline/2021/Tranak_April.jpeg'
import Transparency from '../../../../public/assets/img/home/timeline/2021/transparency-report.png'

export function TimeLine2021 (): JSX.Element {
  return (
    <TimeLineContainer testid='RoadmapSection.2021' timeline='2021' label='Achieved'>
      <RoadmapCard
        image={DfiPs2021}
        testId='RoadmapSection.2021.Jan.Dfips'
        month='Jan'
      >
        <ExternalLink
          className='text-primary-500'
          text='DFIP 3, 4, 5 and 6 are approved by the community.'
          url='https://defiblockchain.medium.com/voting-results-defichain-improvement-community-proposals-45f5e81436b1'
        />
      </RoadmapCard>
      <RoadmapCard
        image={Transparency}
        testId='RoadmapSection.2021.Jan.Transparency'
        month='Jan'
      >
        <ExternalLink
          className='text-primary-500'
          text='Q4 2020 transparency report released.'
          url='https://blog.defichain.com/defichain-transparency-report-q4-2020/'
        />
      </RoadmapCard>
      <RoadmapCard
        image={Messari}
        testId='RoadmapSection.2021.Jan.Messari'
        month='Jan'
      >
        <ExternalLink
          className='text-primary-500'
          text='DeFiChain listed on Messari'
          url='https://messari.io/asset/defichain'
        />
      </RoadmapCard>
      <RoadmapCard
        image={Kucoin}
        testId='RoadmapSection.2021.Jan'
        month='Jan'
      >
        <ExternalLink
          className='text-primary-500'
          text='DeFiChain listed on Kucoin'
          url='https://www.kucoin.com/news/en-defichain-gets-listed-on-kucoin?utm_source=DFI'
        />
      </RoadmapCard>
      <RoadmapCard
        image={LmBonus}
        testId='RoadmapSection.2021.Jan.LmBonus'
        month='Jan'
      >
        <ExternalLink
          className='text-primary-500'
          text='DFIP 3 (liquidity mining bonus rewards extended) in Clarke Quay hard fork'
          url='https://blog.defichain.com/voting-results-defichain-improvement-community-proposals/'
        />
      </RoadmapCard>
      <RoadmapCard
        image={BtcLtc}
        testId='RoadmapSection.2021.Jan.LtcDfi'
        month='Jan'
      >
        <ExternalLink
          className='text-primary-500'
          text='LTC-DFI pool pair added to dex'
          url='https://blog.defichain.com/litecoin-liquidity-mining-on-defichain/'
        />
      </RoadmapCard>
      <RoadmapCard
        image={DogePair}
        testId='RoadmapSection.2021.Jan.DogePair'
        month='Jan'
      >
        <ExternalLink
          className='text-primary-500'
          text='DOGE-DFI pool pair added to DEX'
          url='https://blog.defichain.com/doge-420-liquidity-mining/'
        />
      </RoadmapCard>
      <RoadmapCard
        image={Dakota}
        testId='RoadmapSection.2021.Feb.Dakota'
        month='Feb'
      >
        <ExternalLink
          className='text-primary-500'
          text='Further decentralization via Dakato upgrade'
          url='https://blog.defichain.com/dakota-upgrade/'
        />
      </RoadmapCard>
      <RoadmapCard
        image={MasternodeCol}
        testId='RoadmapSection.2021.Feb.Masternode'
        month='Feb'
      >
        <ExternalLink
          className='text-primary-500'
          text='Collateral required to start a masternode lowered to 20k DFI'
          url='https://blog.defichain.com/dakota-upgrade/'
        />
      </RoadmapCard>
      <RoadmapCard
        image={BtcLtc}
        testId='RoadmapSection.2021.Jan.BchDfi'
        month='Jan'
      >
        <ExternalLink
          className='text-primary-500'
          text='BCH-DFI pool pair added to dex'
          url='https://blog.defichain.com/new-liquidity-mining-pool-pair-bitcoin-cash-dfi/'
        />
      </RoadmapCard>
      <RoadmapCard
        image={BitcoinAnchor}
        testId='RoadmapSection.2021.Mar.BitcoinAnchor'
        month='Mar'
      >
        <ExternalLink
          className='text-primary-500'
          text='Bitcoin anchoring implemented.'
          url='https://blog.defichain.com/100-grand-in-less-than-100-seconds/'
        />
      </RoadmapCard>
      <RoadmapCard
        image={Transak}
        testId='RoadmapSection.2021.Apr.Transak'
        month='Apr'
      >
        <div>DeFiChain listed on Transak</div>
      </RoadmapCard>
      <RoadmapCard
        image={PinkPaper}
        testId='RoadmapSection.2021.Apr.PinkPaper'
        month='Apr'
      >
        <ExternalLink
          className='text-primary-500'
          text='Pink Paper on stocks trading'
          url='https://github.com/defich/pinkpaper/'
        />
      </RoadmapCard>
      <RoadmapCard
        image={Eunos}
        testId='RoadmapSection.2021.May.Eunos'
        month='May'
      >
        <div>Introduced Atomic Swap via Eunos upgrade.</div>
      </RoadmapCard>
      <RoadmapCard
        image={JsLib}
        testId='RoadmapSection.2021.June.JsLib'
        month='June'
      >
        <ExternalLink
          className='text-primary-500'
          text='Release of open-source DeFiChain JS library.'
          url='https://github.com/defich/jellyfish/'
        />
      </RoadmapCard>
      <RoadmapCard
        image={AtomicSwap}
        testId='RoadmapSection.2021.June.AtomicSwap'
        month='June'
      >
        <ExternalLink
          className='text-primary-500'
          text='Decentralized cross-chain asset bridge via atomic swap.'
          url='https://github.com/DeFiCh/ain/wiki/Interchain-Exchange-Tutorial/'
        />
      </RoadmapCard>
      <RoadmapCard
        image={DfcFoundation}
        testId='RoadmapSection.2021.June.DfcFoundation'
        month='June'
      >
        <ExternalLink
          className='text-primary-500'
          text='Struck off the DeFiChain foundation'
          url='https://blog.defichain.com/we-struck-off-the-foundation-long-live-the-decentralization/'
        />
      </RoadmapCard>
      <RoadmapCard
        image={MobileApp}
        testId='RoadmapSection.2021.Aug.MobileApp'
        month='Aug'
      >
        <Link href={{ pathname: '/downloads' }} passHref>
          <a className=' cursor-pointer text-primary-500'>
            Release the DeFiChain Light wallet for mobile app on IOS and Android.
          </a>
        </Link>
      </RoadmapCard>
      <RoadmapCard
        image={DeFiScan}
        testId='RoadmapSection.2021.Sep.DeFiScan'
        month='Sep'
      >
        <ExternalLink
          className='text-primary-500'
          text='Release of DeFi Scan, the block explorer from DeFiChain.'
          url='https://defiscan.live'
        />
      </RoadmapCard>
      <RoadmapCard
        image={Carbon}
        testId='RoadmapSection.2021.Oct.Carbon'
        month='Oct'
      >
        <div>100% carbon neutral blockchain</div>
      </RoadmapCard>
      <RoadmapCard
        image={FortCanning}
        testId='RoadmapSection.2021.Nov.FortCanning'
        month='Nov'
      >
        <div>Decentralized Assets and Liquidity mining with dTokens via Fort Canning upgrade.</div>
      </RoadmapCard>
    </TimeLineContainer>
  )
}
