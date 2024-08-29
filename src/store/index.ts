import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import movies from './slices/movies.slice'
import { TypedUseSelectorHook, useSelector } from 'react-redux';

export const store = configureStore({
  reducer: {
    movies: movies.reducer
  }
})
export type RootState = ReturnType<typeof store.getState>
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;