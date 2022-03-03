import { PropsWithChildren } from 'react'
import Link from 'next/link'

export function HowToCard (props: PropsWithChildren<{ title: string, desc: string, slug: string }>): JSX.Element {
  return (
    <div className='p-1.5 w-full lg:w-1/2 flex flex-col'>
      <div className='rounded bg-gray-50 py-10 px-16 space-y-10 flex flex-col flex-1'>
        <h1 className='text-xl font-semibold'>{props.title}</h1>
        <div className='flex-1'>{props.desc}</div>
        <Link href={{ pathname: `/learn/${props.slug}` }} passHref>
          <div className='py-2 px-4 bg-primary-500 hover:bg-primary-600 text-gray-100 font-medium rounded w-min cursor-pointer'>
            Read
          </div>
        </Link>
      </div>
    </div>
  )
}
