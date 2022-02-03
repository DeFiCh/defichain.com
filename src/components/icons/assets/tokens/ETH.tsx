import { SVGProps } from 'react'

export function ETH (props: SVGProps<SVGSVGElement>): JSX.Element {
  return (
    <svg width='1em' height='1em' viewBox='0 0 32 32' {...props}>
      <g fill='none'>
        <circle cx='16' cy='16' fill='#627eea' r='16' />
        <g fill='#fff'>
          <path d='M16.498 4v8.87l7.497 3.35z' fillOpacity='.602' />
          <path d='M16.498 4L9 16.22l7.498-3.35z' />
          <path d='M16.498 21.968v6.027L24 17.616z' fillOpacity='.602' />
          <path d='M16.498 27.995v-6.028L9 17.616z' />
          <path d='M16.498 20.573l7.497-4.353-7.497-3.348z' fillOpacity='.2' />
          <path d='M9 16.22l7.498 4.353v-7.701z' fillOpacity='.602' />
        </g>
      </g>
    </svg>
  )
}
