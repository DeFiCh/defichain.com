import { PropsWithChildren } from 'react'
import { ExternalLink } from '@components/commons/link/ExternalLink'
import NextLink from 'next/link'

export function ResourceCard (props: PropsWithChildren<{ external?: boolean, text: string, buttonText: string, url: string, testid: string }>): JSX.Element {
  return (
    <div className='p-1.5 w-full lg:w-1/2'>
      <div
        className='rounded bg-gray-50 py-10 px-16 space-y-10'
        data-testid={props.testid}
      >
        <div className='w-full'>
          {props.children}
        </div>

        <div className='flex flex-col space-y-2'>
          <span className='text-lg md:text-xl'>{props.text}</span>
        </div>

        <div>
          {(() => {
            if (props.external !== undefined) {
              return (
                <ExternalLink url={props.url}>
                  <button
                    className='button rounded py-2 px-6 font-medium text-white bg-primary-500 hover:bg-primary-900'
                  >
                    {props.buttonText}
                  </button>
                </ExternalLink>
              )
            }

            return (
              <NextLink href={props.url}>
                <button className='button rounded py-2 px-6 font-medium text-white bg-primary-500 hover:bg-primary-900'>
                  {props.buttonText}
                </button>
              </NextLink>
            )
          })()}
        </div>
      </div>
    </div>
  )
}
