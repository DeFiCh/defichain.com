import { PropsWithChildren } from 'react'
import Link from 'next/link'

export function HowToCard (props: PropsWithChildren<{ title: string, desc: string, slug: string }>): JSX.Element {
  return (
    <div className='p-1.5 w-full lg:w-1/2 flex flex-col' data-testid='HowToCard'>
      <div className='rounded bg-gray-50 p-10 flex flex-col flex-1'>
        <h1 className='text-xl font-semibold' data-testid='HowToCard.Title'>{props.title}</h1>
        <div className='flex-1 mt-4' data-testid='HowToCard.Desc'>{props.desc}</div>
        <Link href={{ pathname: `/learn/${props.slug}` }} passHref>
          <div
            className='mt-10 py-2 px-4 bg-primary-500 hover:bg-primary-600 text-gray-100 font-medium rounded w-min cursor-pointer'
            data-testid='HowToCard.Button'
          >
            Read
          </div>
        </Link>
      </div>
    </div>
  )
}
