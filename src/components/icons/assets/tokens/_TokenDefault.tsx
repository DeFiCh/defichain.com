import { SVGProps } from 'react'

export function _TokenDefault (symbol: string): (props: SVGProps<SVGSVGElement>) => JSX.Element {
  // TODO (@joeldavidw): Need to properly determine whether a token is LPS or DAT.

  const symbolParts = symbol.split('-')

  function TokenDefaultSymbol (props: SVGProps<SVGSVGElement>): JSX.Element {
    return (
      <svg width='1em' height='1em' viewBox='0 0 32 32' {...props}>
        <path
          fill='#000000'
          d='M16 0C7.163 0 0 7.163 0 16s7.163 16 16 16c8.838 0 16-7.163 16-16S24.838 0 16 0z'
        />
        <text
          className='pointer-events-none'
          dominantBaseline='central'
          fill='white'
          fontSize={symbolParts[0].length < 5 ? '11' : '9.5'}
          fontWeight='700'
          fontFamily='"IBM Plex Sans Condensed", sans-serif'
          textAnchor='middle'
          x='50%'
          y='50%'
        >
          {symbolParts[0]}
        </text>
      </svg>
    )
  }

  function PoolPairTokenSymbol (props: SVGProps<SVGSVGElement>): JSX.Element {
    return (
      <svg width='1em' height='1em' viewBox='0 0 32 32' {...props}>
        <path
          fill='#000000'
          d='M16 0C7.163 0 0 7.163 0 16s7.163 16 16 16c8.838 0 16-7.163 16-16S24.838 0 16 0z'
        />
        <text
          className='pointer-events-none'
          fill='white'
          fontSize='9'
          fontWeight='700'
          fontFamily='"IBM Plex Sans Condensed", sans-serif'
          y='50%'
        >
          <tspan x='50%' y={symbolParts[0].length <= symbolParts[1].length ? '48%' : ''} textAnchor='middle'>
            {symbolParts[0]}
          </tspan>
          <tspan x='50%' dy='9' textAnchor='middle'>
            {symbolParts[1]}
          </tspan>
        </text>
      </svg>
    )
  }

  if (symbolParts.length === 2) {
    return PoolPairTokenSymbol
  }

  return TokenDefaultSymbol
}
