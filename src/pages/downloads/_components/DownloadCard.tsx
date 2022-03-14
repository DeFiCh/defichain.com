import { PropsWithChildren } from 'react'
import NextImage from 'next/image'
import classNames from 'classnames'

export function DownloadCard (props: PropsWithChildren<{ testid: string, title: string, desc: string, imageSrc: string | JSX.Element, imgClassName?: string }>): JSX.Element {
  return (
    <div className='p-1.5 w-full lg:w-1/2 flex flex-col' data-testid={props.testid}>
      <div
        className='rounded bg-gray-50 py-10 px-16 space-y-10 flex flex-col flex-1'
      >
        {(typeof props.imageSrc === 'string')
          ? (
            <div className='w-full overflow-hidden'>
              <NextImage src={props.imageSrc} width='64px' height='64px' className={classNames(props.imgClassName)} />
            </div>
            )
          : props.imageSrc}
        <h3 className='text-2xl font-medium'>{props.title}</h3>
        <div className='text-lg flex-1'>{props.desc}</div>
        <div className='grow flex items-center'>
          {props.children}
        </div>
      </div>
    </div>
  )
}
