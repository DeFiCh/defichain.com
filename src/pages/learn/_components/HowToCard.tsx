import { PropsWithChildren } from 'react'
import Link from 'next/link'
import { Button } from '@components/commons/Buttons'

export function HowToCard (props: PropsWithChildren<{ title: string, desc: string, slug: string }>): JSX.Element {
  return (
    <div className='p-1.5 w-full lg:w-1/2 flex flex-col' data-testid='HowToCard'>
      <div className='rounded bg-gray-50 p-10 flex flex-col flex-1'>
        <h1 className='text-xl font-semibold' data-testid='HowToCard.Title'>{props.title}</h1>
        <div className='text-lg flex-1 mt-4' data-testid='HowToCard.Desc'>{props.desc}</div>
        <div className='mt-8'>
          <Link href={{ pathname: `/learn/${props.slug}` }} passHref>
            <a className='contents'>
              <Button text='Read' />
            </a>
          </Link>
        </div>
      </div>
    </div>
  )
}
