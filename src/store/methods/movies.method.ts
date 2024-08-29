
import { createAsyncThunk } from "@reduxjs/toolkit";
import { movieDetailService, moviesService } from "../../services/movies.services";
import { IData } from "../../interfaces/movies.interfaces";

export const getMoviesData = createAsyncThunk(
  "movies/data",
  async (data: IData) => {
    try {
      const response = await moviesService(data);
      return {response, data};
    } catch (error: any) {
      console.log(error)
    }
  }
);

export const getMovieByIDData = createAsyncThunk(
  "movies/byID",
  async (data: string) => {
    try {
      const response = await movieDetailService(data);
      return response;
    } catch (error: any) {
      console.log(error)
    }
  }
);

