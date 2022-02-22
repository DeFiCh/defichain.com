import { PropsWithChildren } from 'react'

export function ExternalLink (props: PropsWithChildren<{ url: string, testId?: string, classname?: string }>): JSX.Element {
  return (
    <a href={props.url} className={props.classname} target='_blank' rel='noreferrer' data-testid={props.testId}>
      {props.children}
    </a>
  )
}
