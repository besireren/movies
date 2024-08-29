
export interface IMovieDetail {
  Title: string;
  Year: string;
  Error: string;
  Rated: string;
  Released: string;
  Runtime: string;
  Genre: string;
  Director: string;
  Writer: string;
  Actors: string;
  Plot: string;
  Language: string;
  Country: string;
  Awards: string;
  Poster: string;
  Ratings: any[];
  Metascore:string;
  imdbRating: string;
  imdbVotes: string;
  imdbID: string;
  Type:string;
  totalSeasons: string;
  Response: string;
}

export interface IMoviesState {
  movies: {
    data: [];
    response: string;
    page: number;
    type: string;
    s: string;
    y: number | string;
    totalResults: number;
    loading: boolean;
    error: any;
  };
  selectedLoading: boolean;
  selectedMovie: IMovieDetail;
}
export interface IData {
  s: string;
  page: number;
  y: number | string;
  type: string;
}
export interface IMovieListItem {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
}
