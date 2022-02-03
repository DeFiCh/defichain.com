import { BTC } from './BTC'
import { BCH } from './BCH'
import { LTC } from './LTC'
import { DFI } from './DFI'
import { DUSD } from './DUSD'
import { SVGProps } from 'react'
import { USDT } from '@components/icons/assets/tokens/USDT'
import { USDC } from '@components/icons/assets/tokens/USDC'
import { ETH } from '@components/icons/assets/tokens/ETH'
import { DOGE } from '@components/icons/assets/tokens/DOGE'
import { _TokenDefault } from './_TokenDefault'

const mapping: Record<string, (props: SVGProps<SVGSVGElement>) => JSX.Element> = {
  DFI: DFI,
  BTC: BTC,
  BCH: BCH,
  LTC: LTC,
  USDT: USDT,
  USDC: USDC,
  ETH: ETH,
  DOGE: DOGE,
  dDUSD: DUSD,
  DUSD: DUSD
}

// TODO(@defich): move assets into it's own repo where anyone can create pull request into.
//  Following a vector specification guideline, this allows anyone to create PR into that repo.

/**
 * @param {string} symbol of the asset icon
 * @return {(props: SVGProps<SVGSVGElement>) => JSX.Element}
 */
export function getAssetIcon (symbol: string): (props: SVGProps<SVGSVGElement>) => JSX.Element {
  const Icon = mapping[`${symbol}`]
  if (Icon === undefined) {
    return _TokenDefault(symbol)
  }
  return Icon
}
