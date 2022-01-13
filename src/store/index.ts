/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { configureStore } from '@reduxjs/toolkit'
import { price } from '@store/price'

export function initializeStore (preloadedState?: any) {
  return configureStore({
    reducer: {
      price: price.reducer
    },
    preloadedState: preloadedState
  })
}

export type RootStore = ReturnType<typeof initializeStore>
export type RootState = ReturnType<RootStore['getState']>
