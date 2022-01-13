import { initializeStore, RootState, RootStore } from '@store/index'
import { PropsWithChildren } from 'react'
import { Provider } from 'react-redux'

let store: RootStore | undefined

interface StoreProviderProps {
  state: RootState
}

/**
 * StoreProvider prevent Store from reloading by hydrating
 */
export function StoreProvider (props: PropsWithChildren<StoreProviderProps>): JSX.Element {
  store = store ?? initializeStore(props.state)

  return (
    <Provider store={store}>
      {props.children}
    </Provider>
  )
}
