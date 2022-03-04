import { PropsWithChildren } from 'react'

export function FeatureCard (props: PropsWithChildren<{ title: string, desc: string, testid: string}>): JSX.Element {
  return (
    <div className='md:w-1/2 lg:w-1/3 flex flex-wrap p-6 lg:p-10 text-gray-900' data-testid={props.testid}>
      <div className='w-full'>
        {props.children}
      </div>
      <div className='w-full text-xl lg:text-2xl font-medium mt-1.5 mb-4' data-testid='title'>{props.title}</div>
      <div className='w-full text-lg min-h-full' data-testid='desc'>{props.desc}</div>
    </div>
  )
}
