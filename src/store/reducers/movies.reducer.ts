import { ActionReducerMapBuilder } from "@reduxjs/toolkit";
import { IMoviesState } from "../../interfaces/movies.interfaces";
import { getMovieByIDData, getMoviesData } from "../methods/movies.method";

const movieReducer = (builder: ActionReducerMapBuilder<IMoviesState>) => {
  return builder
    .addCase(getMoviesData.pending, (state, action) => {
      state.movies.loading = true;
    })
    .addCase(getMoviesData.fulfilled, (state, action) => {
      state.movies.loading = false;
      state.movies.page = action.payload ? action.payload.data.page : 1;
      state.movies.s = action.payload ? action.payload.data.s : "";
      state.movies.type = action.payload ? action.payload.data.type : "";
      state.movies.y = action.payload ? action.payload.data.y : "";
      state.movies.response = action.payload?.response.Response;
      if (action.payload?.response.Response === "True") {
        state.movies.data = action.payload.response.Search;
        state.movies.totalResults = +action.payload.response.totalResults;
      } else {
        state.movies.error = action.payload?.response.Error;
      }
    })
    .addCase(getMoviesData.rejected, (state, action) => {
      state.movies.loading = false;
      state.movies.error = action.payload;
    });
};
const getMovieByIDDataReducer = (
  builder: ActionReducerMapBuilder<IMoviesState>
) => {
  return builder
    .addCase(getMovieByIDData.pending, (state, action) => {
      state.selectedLoading = true;
    })
    .addCase(getMovieByIDData.fulfilled, (state, action) => {
      state.selectedLoading = false;
      state.selectedMovie = action.payload ? action.payload : null;
    })
    .addCase(getMovieByIDData.rejected, (state, action) => {
      state.movies.loading = false;
      state.movies.error = action.payload;
    });
};

const caseReducers = (builder: ActionReducerMapBuilder<IMoviesState>) => {
  builder = movieReducer(builder);
  builder = getMovieByIDDataReducer(builder);

  return builder;
};

export default caseReducers;
