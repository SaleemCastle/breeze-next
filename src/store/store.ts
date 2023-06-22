import { Action, ThunkAction, configureStore } from '@reduxjs/toolkit'
import patientsReducer from './reducers/patients/patientSlice'
import { createWrapper } from 'next-redux-wrapper'

const createStore = () => configureStore({
  reducer: {
    patients: patientsReducer
  },
  devTools: true,
})

export type AppStore = ReturnType<typeof createStore>
export type AppState = ReturnType<AppStore["getState"]>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action
>

export const wrapper = createWrapper<AppStore>(createStore)