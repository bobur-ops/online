import { Reducer, configureStore } from '@reduxjs/toolkit'
import globalSlice from './globalSlice'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import authSlice from './authSlice'

const store = configureStore({
  reducer: {
    global: globalSlice.reducer,
    auth: authSlice.reducer
  }
})

export type AppState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector

export default store;
