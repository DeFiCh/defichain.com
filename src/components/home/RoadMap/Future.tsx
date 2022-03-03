import { RoadmapCard, TimeLineContainer } from '@components/home/RoadMap/RoadmapSection'
import Ach from '../../../../public/assets/img/home/timeline/future/ach.png'
import Decentralized from '../../../../public/assets/img/home/timeline/future/decentralized.png'
import Derivatives from '../../../../public/assets/img/home/timeline/future/derivatives.png'
import Options from '../../../../public/assets/img/home/timeline/future/options.png'
import P2P from '../../../../public/assets/img/home/timeline/future/p2p.png'
import CrossBorder from '../../../../public/assets/img/home/timeline/future/x-border-txns.png'
import XfiTxns from '../../../../public/assets/img/home/timeline/future/xfi-txns.png'
import SecondaryMartket from '../../../../public/assets/img/home/timeline/future/secondary-market.png'

export function TimeLineFuture (): JSX.Element {
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
