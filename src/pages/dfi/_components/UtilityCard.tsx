import { PropsWithChildren } from 'react'
import classNames from 'classnames'
import { ExternalLink } from '@components/commons/link/ExternalLink'
import Image from 'next/image'
export function UtilityCard (props: PropsWithChildren<{testId: string, title: string, desc: string, classname?: string}>): JSX.Element {
  return (
    <div className={classNames('w-full md:w-1/2 lg:w-1/3 p-12 space-y-4', props.classname)} data-testid={props.testId}>
      <div className='w-full'>
        {props.children}
      </div>
      <div className='flex flex-col space-y-6'>
        <h1 className='text-2xl font-semibold'>{props.title}</h1>
        <p className='text-xl'>{props.desc}</p>
      </div>
    </div>
  )
}

export function ExchangeCard (props: {imageSrc: string, url: string, name: string, testid: string}): JSX.Element {
  return (
    <ExternalLink url={props.url} testId={props.testid} classname='m-5 w-1/2 md:w-1/3 lg:w-1/5'>
      <div className='flex justify-center p-5 bg-gray-50 rounder-sm'>
        <Image alt={props.name} src={props.imageSrc} width='134px' height='28px' title={props.name} />
      </div>
    </ExternalLink>

  )
}
