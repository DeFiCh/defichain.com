import { PropsWithChildren } from 'react'

export function Section (props: PropsWithChildren<{ title: string, testId: string }>): JSX.Element {
  return (
    <section className='py-10 lg:py-16 min-h-[320px] flex items-center'>
      <div>
        <h2 className='text-2xl lg:text-3xl font-medium mb-8' data-testid={props.testId}>{props.title}</h2>
        <div className='flex flex-wrap text-lg items-center'>
          {props.children}
        </div>
      </div>
    </section>
  )
}
