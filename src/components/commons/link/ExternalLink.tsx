import { PropsWithChildren } from 'react'

export function ExternalLink (props: PropsWithChildren<{ url: string, testId?: string, className?: string }>): JSX.Element {
  return (
    <a href={props.url} target='_blank' rel='noreferrer' className={props.className ?? ''} data-testid={props.testId}>
      {props.children}
    </a>
  )
}
