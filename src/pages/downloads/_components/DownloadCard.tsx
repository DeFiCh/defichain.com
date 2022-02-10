import { PropsWithChildren } from 'react'

export function DownloadCard (props: PropsWithChildren<{testid: string}>): JSX.Element {
  return (
    <div className='p-1.5 w-full lg:w-1/2'>
      <div
        className='rounded bg-gray-50 py-10 px-16 space-y-10'
        data-testid={props.testid}
      >
        {props.children}
      </div>
    </div>
  )
}
