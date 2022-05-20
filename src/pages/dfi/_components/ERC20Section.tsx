import { ExternalLink } from '@components/commons/link/ExternalLink'
import { Container } from '@components/commons/Container'
import { Trans, useTranslation } from 'next-i18next'
import { Section } from '@components/commons/Section'
import React from 'react'
import { Button } from '@components/commons/Buttons'

export function ERC20Section (): JSX.Element {
  const { t } = useTranslation(['page-dfi'])

  return (
    <Container>
      <Section title={t('ERC20Section.title')} testId='ERC20Section'>
        <div className='flex flex-col w-full md:w-1/3 lg:w-1/2 mb-16'>
          <div className='text-xl' data-testid='ERC20Section.Desc'>
            <Trans
              t={t}
              i18nKey='ERC20Section.desc'
              components={[
                <ExternalLink key='0' className='text-primary-500' url='https://blog.defichain.com/defichains-first-move-to-become-an-interoperable-defi-powerhouse' />
              ]}
            />
          </div>
          <div className='mt-10'>
            <ExternalLink url='https://etherscan.io/token/0x8Fc8f8269ebca376D046Ce292dC7eaC40c8D358A'>
              <a className='contents'>
                <Button text={t('ERC20Section.button')} />
              </a>
            </ExternalLink>
          </div>
          <span className='italic mt-2'>{t('ERC20Section.address')}</span>
        </div>
      </Section>
    </Container>
  )
}
