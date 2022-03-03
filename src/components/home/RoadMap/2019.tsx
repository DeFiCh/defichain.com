import { ExternalLink } from '@components/commons/link/ExternalLink'
import { RoadmapCard, TimeLineContainer } from '@components/home/RoadMap/RoadmapSection'
import ConceptImage from '../../../../public/assets/img/home/timeline/2019/concept.jpg'
import WhitePaper from '../../../../public/assets/img/home/timeline/2019/white-paper.png'

export function TimeLine2019 (): JSX.Element {
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
