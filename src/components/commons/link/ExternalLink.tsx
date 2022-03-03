import { PropsWithChildren } from 'react'
import classNames from 'classnames'

export function ExternalLink (props: PropsWithChildren<{ url: string, testId?: string, className?: string, text?: string }>): JSX.Element {
  return (
    <a
      href={props.url} className={classNames('text-primary-500 hover:text-primary-200', props.className)}
      target='_blank' rel='noreferrer' data-testid={props.testId}
    >
      {props.text ?? props.children}
    </a>
  )
}
