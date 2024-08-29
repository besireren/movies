import { ThunkDispatch } from '@reduxjs/toolkit';
import { useEffect } from 'react';
import './style.scss';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getMovieByIDData } from '../../store/methods/movies.method';
import { useAppSelector } from '../../store';
const Detail = () => {
  const { id } = useParams();
  const selectedMovie = useAppSelector(state => state.movies.selectedMovie)
  const selectedLoading = useAppSelector(state => state.movies.selectedLoading)
  const dispatch = useDispatch<ThunkDispatch<any, any, any>>()
  useEffect(() => {
    if (id) {
      dispatch(getMovieByIDData(id))
    }
  },[id])
  return (
    <div className='detail-wrapper'>
      {!selectedLoading && selectedMovie.Response === 'True' &&
        <>
          <div className='img-wrapper'>
            <img src={selectedMovie.Poster} alt="" />
          </div>
          <div className='data-wrapper'>
            <div><p>Title:</p><p>{selectedMovie.Title}</p></div>
            <div><p>Type:</p><p>{selectedMovie.Type}</p></div>
            <div><p>Year:</p><p>{selectedMovie.Year}</p></div>
            <div><p>Plot:</p><p>{selectedMovie.Plot}</p></div>
            <div><p>Duration:</p><p>{selectedMovie.Runtime}</p></div>
            <div><p>Genre:</p><p>{selectedMovie.Genre}</p></div>
            <div><p>Writer:</p><p>{selectedMovie.Writer}</p></div>
            <div><p>Director:</p><p>{selectedMovie.Director}</p></div>

            <div><p>Cast:</p><p>{selectedMovie.Actors}</p></div>
            <div><p>Language:</p><p>{selectedMovie.Language}</p></div>
            <div><p>Rating:</p><p>{selectedMovie.imdbRating}</p></div>
          </div>
        </>
      }
      {!selectedLoading && selectedMovie.Response !== 'True' &&
        <h3>
          {selectedMovie.Error}
        </h3>
      }
      
      {selectedLoading &&
        <h3>Loading!</h3>
      }
    </div>
  );
}
export default Detail