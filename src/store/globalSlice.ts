import { createSlice } from '@reduxjs/toolkit'

type State = {
  value: number
}

const initialState: State = {
  value: 0
} 

export const globalSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: state => {
      state.value += 1
    },
    decrement: state => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    }
  }
})

export const { increment, decrement, incrementByAmount } = globalSlice.actions

export default globalSlice;
