import { Head } from '@components/commons/Head'
import { Container } from '@components/commons/Container'
import { BiErrorCircle } from 'react-icons/bi'
import Link from 'next/link'

export function PageError (props: {title: string, errorDesc: string, text: string}): JSX.Element {
  return (
    <>
      <Head>
        <title>
          {props.title}
        </title>
      </Head>

      <Container className='py-10'>
        <h1 className='h-80 flex flex-col text-center items-center justify-center'>
          <div className='text-gray-500'><BiErrorCircle size={140} /></div>
          <div className='text-3xl font-semibold text-gray-500 mt-3'>{props.errorDesc}</div>
          <div className='flex w-full justify-center mt-8'>
            <Link href={{ pathname: '/' }} passHref>
              <button
                type='button'
                className='w-48 py-2.5 text-primary-300 hover:text-primary-500 border border-primary-200 hover:border-primary-500 rounded'
              >
                {props.text}
              </button>
            </Link>
          </div>
        </h1>
      </Container>
    </>
  )
}
