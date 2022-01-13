
import { createSlice, Draft, PayloadAction } from '@reduxjs/toolkit'
import { PropsWithChildren, useEffect } from 'react'
import { useDispatch } from 'react-redux'

interface PriceData {
  currency: string
  token: string
  aggregated: {
    amount: string
    weightage: number
    oracles: {
      active: number
      total: number
    }
  }
}

const initialState: PriceData = {
  currency: 'USD',
  token: 'DFI',
  aggregated: {
    amount: '0',
    weightage: 0,
    oracles: {
      active: 0,
      total: 0
    }
  }
}

export const price = createSlice({
  name: 'price',
  initialState,
  reducers: {
    update: (state: Draft<PriceData>, action: PayloadAction<any>) => {
      state.token = action.payload.token
      state.currency = action.payload.currency
      state.aggregated.oracles = action.payload.aggregated.oracles
      state.aggregated.amount = action.payload.aggregated.amount
      state.aggregated.weightage = action.payload.aggregated.weightage
      state.aggregated.oracles.total = action.payload.aggregated.oracles.total
      state.aggregated.oracles.total = action.payload.aggregated.oracles.total
    }
  }
})

export function PriceProvider (props: PropsWithChildren<{}>): JSX.Element {
  const dispatch = useDispatch()
  useEffect(() => {
    function getPrice (): void {
      void fetch('https://ocean.defichain.com/v0.18/mainnet/prices/DFI-USD')
        .then(async res => await res.json())
        .then(data => {
          dispatch(price.actions.update(data.data.price))
        })
    }
    getPrice()
  }, [])

  return <>{props.children}</>
}
