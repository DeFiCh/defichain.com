import { SVGProps } from 'react'

export function Cli (props: SVGProps<SVGSVGElement>): JSX.Element {
  return (
    <svg width='1em' height='1em' viewBox='0 0 52 52' {...props}>
      <path d='M40 4a8 8 0 0 1 8 8v24a8 8 0 0 1-8 8H8a8 8 0 0 1-8-8V12a8 8 0 0 1 8-8h32zM11.4 22L10 23.4l4.6 4.6-4.6 4.6 1.4 1.4 6-6-6-6zM40 8H8a4 4 0 0 0-3.995 3.8L4 12v4h40v-4a4 4 0 0 0-3.8-3.995L40 8z' />
    </svg>
  )
}
