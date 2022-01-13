import classNames from 'classnames'

export function ExternalLink (props: { text: string, url: string, className: string, testId?: string }): JSX.Element {
  return (
    <div className={classNames('text-lg hover:text-primary-500 cursor-pointer', props.className)}>
      <a href={props.url} target='_blank' rel='noreferrer' data-testid={props.testId}>
        {props.text}
      </a>
    </div>
  )
}
