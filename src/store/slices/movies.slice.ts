import { createSlice } from '@reduxjs/toolkit'
import caseReducers from '../reducers/movies.reducer'
import { moviesState } from '../states/movies.state'

const MoviesSlice = createSlice({
  name: 'movies',
  initialState: moviesState,
  reducers: {},
  extraReducers: builder => caseReducers(builder)
})

export default MoviesSlice
