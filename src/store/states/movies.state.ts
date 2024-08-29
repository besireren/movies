import { IMoviesState } from "../../interfaces/movies.interfaces";
export const moviesState: IMoviesState = {
  movies: {
    data: [],
    page: 1,
    type: "",
    s: "",
    y: "",
    response: "false",
    totalResults: 0,
    loading: true,
    error: null,
  },
  selectedLoading: false,
  selectedMovie: {
    Title: "",
    Year: "",
    Error: "",
    Rated: "",
    Released: "",
    Runtime: "",
    Genre: "",
    Director: "",
    Writer: "",
    Actors: "",
    Plot: "",
    Language: "",
    Country: "",
    Awards: "",
    Poster: "",
    Ratings: [],
    Metascore: "",
    imdbRating: "",
    imdbVotes: "",
    imdbID: "",
    Type: "",
    totalSeasons: "",
    Response: "",
  },
};
