import { PropsWithChildren } from 'react'
import NextImage from 'next/image'

export function DownloadCard (props: PropsWithChildren<{ testid: string, title: string, desc: string, imageSrc: string | JSX.Element }>): JSX.Element {
  return (
    <div className='p-1.5 w-full lg:w-1/2'>
      <div
        className='rounded bg-gray-50 py-10 px-16 space-y-10'
        data-testid={props.testid}
      >
        {(typeof props.imageSrc === 'string')
          ? (<div className='w-full'><NextImage src={props.imageSrc} width='64px' height='64px' /></div>)
          : props.imageSrc}
        <div className='flex flex-col space-y-4'>
          <h1 className='text-2xl font-semibold'>{props.title}</h1>
          <div className='text-lg'>{props.desc}</div>
        </div>
        {props.children}
      </div>
    </div>
  )
}
