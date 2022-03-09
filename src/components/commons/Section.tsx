import { PropsWithChildren } from 'react'

export function Section (props: PropsWithChildren<{ title: string, testId: string }>): JSX.Element {
  return (
    <section className='my-16'>
      <h1 className='text-2xl lg:text-3xl font-semibold' data-testid={props.testId}>{props.title}</h1>
      <div className='flex flex-wrap my-10 pb-10 text-lg'>
        {props.children}
      </div>
    </section>
  )
}
