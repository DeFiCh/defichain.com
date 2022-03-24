import classNames from 'classnames'
import { Container } from '@components/commons/Container'
import { Trans, useTranslation } from 'next-i18next'
import { Section } from '@components/commons/Section'
import { ExternalLink } from '@components/commons/link/ExternalLink'
import React from 'react'

export function DistributionSection (): JSX.Element {
  const { t } = useTranslation(['page-dfi'])

  return (
    <Container>
      <Section title={t('DistributionSection.title')} testId='DistributionSection'>
        <div className='text-xl' data-testid='DistributionSection.Text'>
          {t('DistributionSection.desc')}
        </div>
        <div className='mx-auto w-full lg:w-3/5 space-y-16 mt-14' data-testid='DistributionSection.Chart'>
          <ChartSupply
            labelA={t('DistributionSection.chart.InitialSupply')}
            labelB={t('DistributionSection.chart.ToMasternodes')}
          />
          <div>
            <Trans
              t={t}
              i18nKey='DistributionSection.chart.desc'
              components={[
                <ExternalLink key='0' className='text-primary-500' url='https://defiscan.live/transactions/c519fa1af8185186528dbfd5003e2ee110eae2f847b8d6143af220de6c837478' />,
                <ExternalLink key='1' className='text-primary-500' url='https://github.com/DeFiCh/dfips/issues/17' />
              ]}
            />
          </div>
          <ChartDistribution
            labelA={t('DistributionSection.chart.Airdropped')}
            labelB={t('DistributionSection.chart.Burned')}
            labelC={t('DistributionSection.chart.Destroyed')}
            fill
          />
        </div>
      </Section>
    </Container>
  )
}

function ChartSupply (props: { fill?: boolean, labelA: string, labelB: string }): JSX.Element {
  return (
    <>
      <div className='w-full h-2 relative'>
        <div className='w-full h-8 relative text-gray-500 text-xl'>
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
        <div
          className='w-[49%] h-full absolute left-0 flex items-center justify-center rounded-tl rounded-bl bg-primary-500 text-white'
        >
          {props.labelA}
        </div>
        <div
          className={classNames('w-[51%] h-full left-[49%] absolute flex justify-center items-center rounded-bl rounded-br ', props.fill !== undefined ? 'bg-primary-500 text-white' : 'bg-gray-200 text-black ')}
        >
          {props.labelB}
        </div>
      </div>
    </>
  )
}

function ChartDistribution (props: { fill?: boolean, labelA: string, labelB: string, labelC: string }): JSX.Element {
  return (
    <>
      <div className='w-full relative'>
        <div className='w-full h-2 relative text-gray-500 text-xl'>
          <div className='w-[26%] left-0 absolute flex justify-center items-center'>
            <span className='inline-block px-2 bg-white relative z-[1000]'>26%</span>
            <span className='block h-[1px] w-[calc(100%_-_2px)] bg-gray-500 absolute top-[12px] left-[1px]' />
            <span className='block w-[1px] h-[16px] bg-gray-500 absolute top-[4px] left-0' />
            <span className='block w-[1px] h-[16px] bg-gray-500 absolute top-[4px] right-0' />
          </div>
          <div className='w-[27%] left-[26%] absolute flex justify-center items-center'>
            <span className='inline-block px-2 bg-white relative z-[1000]'>27%</span>
            <span className='block h-[1px] w-[calc(100%_-_2px)] bg-gray-500 absolute top-[12px] left-[1px]' />
            <span className='block w-[1px] h-[16px] bg-gray-500 absolute top-[4px] left-0' />
            <span className='block w-[1px] h-[16px] bg-gray-500 absolute top-[4px] right-0' />
          </div>
          <div className='w-[47%] left-[53%] absolute flex justify-center items-center'>
            <span className='inline-block px-2 bg-white relative z-[1000]'>47%</span>
            <span className='block h-[1px] w-[calc(100%_-_2px)] bg-gray-500 absolute top-[12px] left-[1px]' />
            <span className='block w-[1px] h-[16px] bg-gray-500 absolute top-[4px] left-0' />
            <span className='block w-[1px] h-[16px] bg-gray-500 absolute top-[4px] right-0' />
          </div>
        </div>
      </div>
      <div className={classNames('w-full h-[69px] relative', { 'divide-x': props.fill })}>
        <div
          className='w-[26%] h-full absolute left-0 flex items-center justify-center rounded-tl rounded-bl bg-primary-500 text-white'
        >
          {props.labelA}
        </div>
        <div
          className={classNames('w-[27%] h-full left-[26%] absolute flex justify-center items-center rounded-bl rounded-br ', props.fill !== undefined ? 'bg-primary-500 text-white' : 'bg-gray-200 text-black ')}
        >
          {props.labelB}
        </div>
        <div
          className={classNames('w-[47%] h-full left-[53%] absolute flex justify-center items-center rounded-bl rounded-br ', props.fill !== undefined ? 'bg-primary-500 text-white' : 'bg-gray-200 text-black ')}
        >
          {props.labelC}
        </div>
      </div>
    </>
  )
}
