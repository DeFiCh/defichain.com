import { PropsWithChildren } from 'react'
import { ExternalLink } from '@components/commons/link/ExternalLink'
import NextLink from 'next/link'
import { Button } from '@components/commons/Buttons'

export function ResourceCard (props: PropsWithChildren<{ external?: boolean, text: string, buttonText: string, url: string, testid: string }>): JSX.Element {
  return (
    <div className='p-1.5 w-full lg:w-1/2'>
      <div
        className='rounded bg-gray-50 py-10 px-16'
        data-testid={props.testid}
      >
        <div className='w-full'>
          {props.children}
        </div>

        <div className='text-lg mt-4'>{props.text}</div>

        <div className='mt-10'>
          {(() => {
            if (props.external !== undefined) {
              return (
                <ExternalLink url={props.url}>
                  <Button text={props.buttonText} />
                </ExternalLink>
              )
            }

            return (
              <NextLink href={props.url}>
                <Button text={props.buttonText} />
              </NextLink>
            )
          })()}
        </div>
      </div>
    </div>
  )
}
