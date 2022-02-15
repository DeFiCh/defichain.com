import classNames from 'classnames'

export function SupplyChart (props: {fill?: boolean, labelA: string, labelB: string}): JSX.Element {
  return (
    <div>
      <div className='w-full h-[32px] relative'>
        <div className='w-full h-8 relative text-gray-500 text-2xl leading-[2.4rem]'>
          <div className='w-[49%] left-0 absolute flex justify-center items-center'>
            <span className='inline-block px-2 bg-white relative z-[1000]'>49%</span>
            <span className='block h-[1px] w-[calc(100%_-_2px)] bg-gray-500 absolute top-[12px] left-[1px]' />
            <span className='block w-[1px] h-[16px] bg-gray-500 absolute top-[4px] left-0' />
            <span className='block w-[1px] h-[16px] bg-gray-500 absolute top-[4px] right-0' />
          </div>
          <div className='w-[51%] left-[49%] absolute flex justify-center items-center'>
            <span className='inline-block px-2 bg-white relative z-[1000]'>51%</span>
            <span className='block h-[1px] w-[calc(100%_-_2px)] bg-gray-500 absolute top-[12px] left-[1px]' />
            <span className='block w-[1px] h-[16px] bg-gray-500 absolute top-[4px] left-0' />
            <span className='block w-[1px] h-[16px] bg-gray-500 absolute top-[4px] right-0' />
          </div>
        </div>
      </div>
      <div className={classNames('w-full h-[69px] relative leading-[2.4rem]', { 'divide-x': props.fill })}>
        <div className='w-[49%] h-full absolute left-0 flex items-center justify-center rounded-tl rounded-bl bg-primary-500 text-white'>
          {props.labelA}
        </div>
        <div className={classNames('w-[51%] h-full left-[49%] absolute flex justify-center items-center rounded-bl rounded-br ', props.fill !== undefined ? 'bg-primary-500 text-white' : 'bg-gray-200 text-black ')}>
          {props.labelB}
        </div>
      </div>
    </div>
  )
}
