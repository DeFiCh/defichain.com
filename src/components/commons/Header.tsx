import { PropsWithChildren } from 'react'
import { Container } from '@components/commons/Container'

/**
 * Container implementation that is part of the design language.
 */
export function Header (props: PropsWithChildren<{ className?: string, title: string }>): JSX.Element {
  return (
    <div
      className='flex flex-col items-center pb-24'
      style={{
        backgroundImage: 'url(\'/assets/svg/hero/fortcanning.svg\')',
        backgroundSize: 'cover',
        backgroundPosition: 'right center'
      }}
    >
      <Container className='h-full mt-40 mb-16 h-48'>
        <h1 className='text-4xl lg:text-5xl text-gray-900 w-full mb-6 font-medium' data-testid='Header.title'>
          {props.title}
        </h1>
        <div className='h-full flex flex-wrap items-center'>
          {props.children}
        </div>
      </Container>
    </div>
  )
}
