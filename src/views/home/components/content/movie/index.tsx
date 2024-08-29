import './style.scss';
import { IMovieListItem } from '../../../../../interfaces/movies.interfaces';
import { useNavigate } from "react-router-dom";
const Moive= ({ item }: { item: IMovieListItem}) => {
  const navigate = useNavigate();
  const handleNav = () => {
    navigate(`/detail/${item.imdbID}`);
  }
  return (
    <div className='movie-wrapper'>
      <img src={item.Poster} alt="" />
      <div className='movie-datas'>
        <p className='movie-title'>{item.Title}</p>
        <div className='movie-col'>
          <div>
            <p className='movie-d'>Type:</p>
            <p className='movie-d'>Year:</p>
            <p className='movie-d'>Imdb ID:</p>
          </div>
          <div>
            <p className='movie-data capitalize'>{item.Type}</p>
            <p className='movie-data'>{item.Year}</p>
            <p className='movie-data'>{item.imdbID}</p>
          </div>
        </div>
      </div>
      <div className='movie-details-area'>
        <button  className='movie-details btn' onClick={handleNav}>Details</button>
      </div>
    </div>
  );
}
export default Moive