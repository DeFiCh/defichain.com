import { RoadmapCard, TimeLineContainer } from '@components/home/RoadMap/RoadmapSection'

import OnChain from '../../../../public/assets/img/home/timeline/2022/On-Chain-governance.png'
import Nft from '../../../../public/assets/img/home/timeline/2022/NFTs.png'
import Evm from '../../../../public/assets/img/home/timeline/2022/EVM.png'
import LightWallet from '../../../../public/assets/img/home/timeline/2022/Desktop-Light-Wallet.png'
import BrowserExtension from '../../../../public/assets/img/home/timeline/2022/Browser-Extension-Wallet.png'
import Ledger from '../../../../public/assets/img/home/timeline/2022/ledger.png'
import Derivatives from '../../../../public/assets/img/home/timeline/2022/futures-trading.png'
import { ExternalLink } from '@components/commons/link/ExternalLink'

export function TimeLine2022 (): JSX.Element {
  return (
    <TimeLineContainer testid='RoadmapSection.2022' timeline='2022' label='On Track'>
      <RoadmapCard
        image={OnChain}
        testId='RoadmapSection.2022.Onchain'
        month='Q1'
      >
        <div>On-chain Governance</div>
      </RoadmapCard>
      <RoadmapCard
        image={LightWallet}
        testId='RoadmapSection.2022.LightWallet'
        month='Q2'
      >
        <div>Desktop Light Wallet</div>
      </RoadmapCard>
      <RoadmapCard
        image={BrowserExtension}
        testId='RoadmapSection.2022.BrowserExtension'
        month='Q2'
      >
        <div>Browser Extension Wallet</div>
      </RoadmapCard>
      <RoadmapCard
        image={Derivatives}
        testId='RoadmapSection.2022.Derivatives'
        month='Q2'
      >
        <div>Derivatives (Futures And Options)</div>
      </RoadmapCard>
      <RoadmapCard
        image={Evm}
        testId='RoadmapSection.2022.Evm'
        month='Q3-4'
      >
        <ExternalLink
          className='text-primary-500'
          text='Ethereum Virtual Machine Support On DeFiChain'
          url='https://github.com/DeFiCh/dfips/issues/96'
        />
      </RoadmapCard>
      <RoadmapCard
        image={Nft}
        testId='RoadmapSection.2022.Nft'
        month='Q3-4'
      >
        <div>Non-fungible Token (NFT) Support</div>
      </RoadmapCard>
      <RoadmapCard
        image={Ledger}
        testId='RoadmapSection.2022.Ledger'
        month='Q3-4'
      >
        <div>Ledger Support For Light Wallet</div>
      </RoadmapCard>

    </TimeLineContainer>
  )
}
