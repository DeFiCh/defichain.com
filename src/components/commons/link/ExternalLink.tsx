import { PropsWithChildren } from 'react'

export function ExternalLink (props: PropsWithChildren<{ url: string, testId?: string, className?: string, text?: string}>): JSX.Element {
  return (
    <a href={props.url} className={props.className} target='_blank' rel='noreferrer' data-testid={props.testId}>
      {props.text ?? props.children}
    </a>
  )
}
