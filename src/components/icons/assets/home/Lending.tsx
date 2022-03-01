import { SVGProps } from 'react'

export function Lending (props: SVGProps<SVGSVGElement>): JSX.Element {
  return (
    <svg width='1em' height='1em' viewBox='0 0 32 32' {...props}>
      <path d='M16 0l.25.004a8 8 0 0 1 7.746 7.747L24 8l-.004.25A8 8 0 1 1 16 0zm0 2a6 6 0 1 0 5.996 6.225L22 8a6 6 0 0 0-5.775-5.996L16 2zm0 1l.217.005A5 5 0 0 1 21 8l-.005.217A5 5 0 1 1 16 3zM1 14.75a1 1 0 0 0-1 1V23a1 1 0 1 0 2 0v-7.25a1 1 0 0 0-1-1zm14.5 4.75H6.375a.625.625 0 1 1 0-1.25H8.9a1 1 0 0 0 .92-1.393A2.234 2.234 0 0 0 7.764 15.5H3.5a.5.5 0 0 0-.5.5v6.5a.5.5 0 0 0 .5.5h10.764a2.238 2.238 0 0 0 2.236-2.236V20.5a1 1 0 0 0-1-1z' />
    </svg>
  )
}
