import { ExternalLink } from '@components/commons/link/ExternalLink'
import { BiLinkExternal } from 'react-icons/bi'

/**
 * Container implementation that is part of the design language.
 */

interface BountyI {
  'name': string
  'payout': number
  'txid': string
}

interface HunterI {
  'name': string
  'github': string
  'bounties': BountyI[]
}

export function Hunter (props: { index: number, hunter: HunterI }): JSX.Element {
  return (
    <div className='flex flex-wrap bg-gray-50 rounded-lg px-8 py-6'>
      <div className='w-1/6 font-medium'>{props.index + 1}</div>
      <div className='w-2/6 flex flex-wrap items-start'>
        <div className='w-full'>
          <h3 className='inline text-xl font-medium'>{props.hunter.name}</h3><br />
          <ExternalLink url={`https://github.com/${props.hunter.github}`}>
            {props.hunter.github}
          </ExternalLink>
        </div>
      </div>
      <div className='w-3/6 flex flex-wrap -my-1 justify-end'>
        {props.hunter.bounties.map(bounty => {
          return (
            <div className='w-full flex text-base py-1.5 border-b' key={bounty.name}>
              <div className='w-2/3'>{bounty.name}</div>
              <div className='w-1/3 flex justify-end'>
                <div className='flex items-center'>
                  {bounty.payout} DFI
                  <ExternalLink url={`https://defiscan.live/transactions/${bounty.txid}`}>
                    <BiLinkExternal size={20} className='ml-2 text-primary-500 cursor-pointer' />
                  </ExternalLink>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
