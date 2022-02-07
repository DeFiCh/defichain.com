import { PropsWithChildren } from 'react'
import classNames from 'classnames'

/**
 * Container implementation that is part of the design language.
 */
export function Container (props: PropsWithChildren<{ className?: string, bgClassName?: string }>): JSX.Element {
  return (
    <div className={
      classNames('w-full', props.bgClassName)
    }
    >
      <div className={
        classNames('container mx-auto px-4 sm:px-6 lg:px-10', props.className)
      }
      >
        {props.children}
      </div>
    </div>
  )
}
